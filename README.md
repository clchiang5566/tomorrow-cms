# tomorrow-cms

Strapi v5 CMS for Tomorrow website.

## Local development

1. Install dependencies

```bash
npm install
```

2. Create env file

```bash
cp .env.example .env
```

3. Start dev server

```bash
npm run develop
```

- Admin panel: `http://localhost:1337/admin`
- API base: `http://localhost:1337/api`

## Deploy-ready checklist

- [ ] All required content types/components are saved in Content-Type Builder
- [ ] Content in Content Manager is **Published** (not Draft)
- [ ] Production database is configured (recommended: Postgres)
- [ ] All env vars are set on hosting platform
- [ ] API permissions are configured for frontend usage
- [ ] `npm run build` succeeds
- [ ] `npm run start` runs with production env

## Required environment variables

Minimum required:

- `HOST`
- `PORT`
- `APP_KEYS`
- `API_TOKEN_SALT`
- `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`
- `JWT_SECRET`
- `ENCRYPTION_KEY`
- `DATABASE_CLIENT`

Recommended for production:

- `PUBLIC_URL` (example: `https://cms.yourdomain.com`)
- `IS_PROXIED=true` (for reverse proxy / platform ingress)
- `DATABASE_URL` (when using Postgres)
- `DATABASE_SSL` and `DATABASE_SSL_REJECT_UNAUTHORIZED` (platform dependent)

## Production commands

```bash
npm run build
npm run start
```

## API permission setup (for frontend)

1. Go to `Settings -> Users & Permissions Plugin -> Roles -> Public`
2. Enable only required `find` / `findOne` permissions per content type
3. Save and test endpoint from frontend

## If Content Manager shows `Policy Failed`

Most common cause is missing admin role permissions.

1. Go to `Settings -> Administration Panel -> Roles`
2. Open your role (Editor/Author/Custom role)
3. Enable needed Content Manager permissions (`Read`, `Create`, `Update`, `Delete`, `Publish` as needed)
4. Save and sign out/in again

If issue remains, clear admin build cache and rebuild:

```bash
rm -rf .strapi dist
npm run develop
```

## Notes

- This project can run with SQLite for local development.
- Use Postgres in production for stability and backup strategy.
