from typing import Optional, List
from pydantic import BaseModel, ConfigDict


class AdminBase(BaseModel):
    username: str


class AdminCreate(BaseModel):
    username: str
    email: str
    password: str


class AdminLogin(BaseModel):
    email: str
    password: str


class AdminOut(AdminBase):
    id: int
    email: str
    is_active: bool
    model_config = ConfigDict(from_attributes=True)


class Token(BaseModel):
    access_token: str
    token_type: str


class PasswordChange(BaseModel):
    current_password: str
    new_password: str


class TeamMemberBase(BaseModel):
    name: str
    role: str
    image: Optional[str] = None
    bio: str
    expertise: List[str]
    education: Optional[str] = None
    start_year: int
    experience_field: str
    is_active: bool = True
    display_order: int = 0


class TeamMemberCreate(TeamMemberBase):
    pass


class TeamMemberUpdate(BaseModel):
    name: Optional[str] = None
    role: Optional[str] = None
    image: Optional[str] = None
    bio: Optional[str] = None
    expertise: Optional[List[str]] = None
    education: Optional[str] = None
    start_year: Optional[int] = None
    experience_field: Optional[str] = None
    is_active: Optional[bool] = None
    display_order: Optional[int] = None
    model_config = ConfigDict(from_attributes=True)


class TeamMemberOut(TeamMemberBase):
    id: int
    model_config = ConfigDict(from_attributes=True)


class InsightBase(BaseModel):
    title: str
    description: str
    image: Optional[str] = None
    category: str
    date: str
    location: str
    is_active: bool = True


class InsightCreate(InsightBase):
    pass


class InsightUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    category: Optional[str] = None
    date: Optional[str] = None
    location: Optional[str] = None
    is_active: Optional[bool] = None
    model_config = ConfigDict(from_attributes=True)


class InsightOut(InsightBase):
    id: int
    model_config = ConfigDict(from_attributes=True)
