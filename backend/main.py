import os
import shutil
from datetime import datetime, timedelta
from fastapi import FastAPI, Depends, File, HTTPException, UploadFile, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session

from database import engine, Base, SessionLocal, get_db
from models import Admin, TeamMember, Insight
from schemas import (
    AdminCreate,
    AdminLogin,
    AdminOut,
    PasswordChange,
    Token,
    TeamMemberCreate,
    TeamMemberUpdate,
    TeamMemberOut,
    InsightCreate,
    InsightUpdate,
    InsightOut,
)
from auth import (
    create_access_token,
    get_password_hash,
    verify_password,
    get_current_admin,
    ACCESS_TOKEN_EXPIRE_MINUTES,
)
from PIL import Image


UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

app = FastAPI(title="2ML Admin API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/uploads", StaticFiles(directory=UPLOAD_DIR), name="uploads")


@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/auth/login", response_model=Token)
def login(credentials: AdminLogin):
    with SessionLocal() as db:
        admin = db.query(Admin).filter(Admin.email == credentials.email).first()
        if not admin or not verify_password(credentials.password, admin.hashed_password) or not admin.is_active:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(data={"sub": admin.username}, expires_delta=access_token_expires)
        return {"access_token": access_token, "token_type": "bearer"}


@app.post("/auth/register", response_model=AdminOut, status_code=status.HTTP_201_CREATED)
def register(data: AdminCreate):
    with SessionLocal() as db:
        existing = db.query(Admin).filter(
            (Admin.username == data.username) | (Admin.email == data.email)
        ).first()
        if existing:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Username or email already registered",
            )
        admin = Admin(
            username=data.username,
            email=data.email,
            hashed_password=get_password_hash(data.password),
            is_active=True,
        )
        db.add(admin)
        db.commit()
        db.refresh(admin)
        return admin


@app.post("/auth/change-password", status_code=status.HTTP_200_OK)
def change_password(
    payload: PasswordChange,
    admin: Admin = Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    if not verify_password(payload.current_password, admin.hashed_password):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Current password is incorrect")
    admin.hashed_password = get_password_hash(payload.new_password)
    db.commit()
    return {"detail": "Password updated"}


# Team endpoints
@app.get("/team", response_model=list[TeamMemberOut])
def list_team():
    with SessionLocal() as db:
        return db.query(TeamMember).order_by(TeamMember.display_order).all()


@app.post("/team", response_model=TeamMemberOut, status_code=status.HTTP_201_CREATED)
def create_team(member: TeamMemberCreate, admin: Admin = Depends(get_current_admin)):
    with SessionLocal() as db:
        db_member = TeamMember(**member.model_dump())
        db.add(db_member)
        db.commit()
        db.refresh(db_member)
        return db_member


@app.get("/team/{member_id}", response_model=TeamMemberOut)
def get_team(member_id: int):
    with SessionLocal() as db:
        member = db.query(TeamMember).filter(TeamMember.id == member_id).first()
        if not member:
            raise HTTPException(status_code=404, detail="Team member not found")
        return member


@app.put("/team/{member_id}", response_model=TeamMemberOut)
def update_team(
    member_id: int,
    payload: TeamMemberUpdate,
    admin: Admin = Depends(get_current_admin),
):
    with SessionLocal() as db:
        member = db.query(TeamMember).filter(TeamMember.id == member_id).first()
        if not member:
            raise HTTPException(status_code=404, detail="Team member not found")
        for key, value in payload.model_dump(exclude_unset=True).items():
            setattr(member, key, value)
        db.commit()
        db.refresh(member)
        return member


@app.delete("/team/{member_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_team(member_id: int, admin: Admin = Depends(get_current_admin)):
    with SessionLocal() as db:
        member = db.query(TeamMember).filter(TeamMember.id == member_id).first()
        if not member:
            raise HTTPException(status_code=404, detail="Team member not found")
        db.delete(member)
        db.commit()
    return None


# Insight endpoints
@app.get("/insights", response_model=list[InsightOut])
def list_insights():
    with SessionLocal() as db:
        return db.query(Insight).order_by(Insight.created_at.desc()).all()


@app.post("/insights", response_model=InsightOut, status_code=status.HTTP_201_CREATED)
def create_insight(insight: InsightCreate, admin: Admin = Depends(get_current_admin)):
    with SessionLocal() as db:
        db_insight = Insight(**insight.model_dump())
        db.add(db_insight)
        db.commit()
        db.refresh(db_insight)
        return db_insight


@app.get("/insights/{insight_id}", response_model=InsightOut)
def get_insight(insight_id: int):
    with SessionLocal() as db:
        insight = db.query(Insight).filter(Insight.id == insight_id).first()
        if not insight:
            raise HTTPException(status_code=404, detail="Insight not found")
        return insight


@app.put("/insights/{insight_id}", response_model=InsightOut)
def update_insight(
    insight_id: int,
    payload: InsightUpdate,
    admin: Admin = Depends(get_current_admin),
):
    with SessionLocal() as db:
        insight = db.query(Insight).filter(Insight.id == insight_id).first()
        if not insight:
            raise HTTPException(status_code=404, detail="Insight not found")
        for key, value in payload.model_dump(exclude_unset=True).items():
            setattr(insight, key, value)
        db.commit()
        db.refresh(insight)
        return insight


@app.delete("/insights/{insight_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_insight(insight_id: int, admin: Admin = Depends(get_current_admin)):
    with SessionLocal() as db:
        insight = db.query(Insight).filter(Insight.id == insight_id).first()
        if not insight:
            raise HTTPException(status_code=404, detail="Insight not found")
        db.delete(insight)
        db.commit()
    return None


def _safe_upload_filename(filename: str | None) -> str:
    base, ext = os.path.splitext(filename or "")
    base = "".join(c if c.isalnum() or c in "._-" else "_" for c in base).lower()[:40]
    return f"{datetime.utcnow().strftime('%Y%m%d%H%M%S%f')}_{base or 'file'}{ext}"


MAX_IMAGE_SIZE = (1600, 1600)
WEBP_QUALITY = 85


@app.post("/upload")
def upload_file(
    file: UploadFile = File(...),
    admin: Admin = Depends(get_current_admin),
):
    if file.content_type and not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Only image files are allowed")
    try:
        file.file.seek(0)
        image = Image.open(file.file)
        if image.mode in ("RGBA", "LA", "P"):
            image = image.convert("RGBA")
        else:
            image = image.convert("RGB")
        image.thumbnail(MAX_IMAGE_SIZE, Image.LANCZOS)
        filename = _safe_upload_filename(file.filename).rsplit(".", 1)[0] + ".webp"
        dest = os.path.join(UPLOAD_DIR, filename)
        image.save(dest, "WEBP", quality=WEBP_QUALITY, method=6)
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f"Invalid image: {exc}") from exc
    return {"url": f"/uploads/{filename}"}
