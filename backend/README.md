# 2ML Admin API

A FastAPI backend for the 2ML Consulting website. It provides admin login and CRUD endpoints for team members and insights, backed by PostgreSQL.

## Quick start

1. **Create and activate a virtual environment** (from the `backend` folder):

   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```

2. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

3. **Set environment variables**:

   Copy `.env.example` to `.env` and fill in your PostgreSQL connection string, admin credentials, and a secret key.

4. **Run the server**:

   ```bash
   uvicorn main:app --reload
   ```

   The API will be available at `http://localhost:8000`. Interactive docs are at `http://localhost:8000/docs`.

## Environment variables

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string, e.g. `postgresql://user:pass@host:port/dbname` |
| `SECRET_KEY` | Random string used to sign JWT tokens |
| `ADMIN_USERNAME` | Initial admin username |
| `ADMIN_PASSWORD` | Initial admin password |
| `CORS_ORIGINS` | Comma-separated allowed frontend origins |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | JWT token lifetime (default: 1440) |

## Notes

- Tables are created automatically on startup.
- The admin user is created automatically on startup if `ADMIN_USERNAME` and `ADMIN_PASSWORD` are provided and the user does not already exist.
- Public endpoints (`GET /team`, `GET /insights`, etc.) do not require authentication.
- Write endpoints (`POST`, `PUT`, `DELETE`) require a valid JWT token in the `Authorization: Bearer <token>` header.
