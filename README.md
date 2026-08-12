# Northstar Digital Platform

Phase 1 foundation for an early-stage software consulting company: a responsive public website and a Spring Boot API that validates and stores contact inquiries. `Northstar Digital` is a working brand placeholder and can be changed centrally as the company identity is finalized.

## Repository structure

```text
frontend/   Next.js, TypeScript, Tailwind CSS, reusable sections, API client
backend/    Java 17, Spring Boot 3, REST API, JPA, validation, Flyway
docs/       Architecture decisions and future module boundaries
```

## Prerequisites

- Node.js 20+ and npm
- Java 17+
- Maven 3.9+ (or an IDE with Maven support)
- PostgreSQL 14+ (PostgreSQL 16 is provided in the optional Docker Compose file)

## Start PostgreSQL

With Docker installed:

```bash
docker compose up -d postgres
```

Without Docker, create a database named `northstar`, then set these environment variables before starting the backend:

```text
DB_URL=jdbc:postgresql://localhost:5432/northstar
DB_USERNAME=postgres
DB_PASSWORD=your-password
FRONTEND_ORIGIN=http://localhost:3000
```

Defaults support the included local Docker configuration. Do not use the default password in a deployed environment. Flyway applies the `contact_requests` migration automatically.

## Run the backend

```bash
cd backend
mvn spring-boot:run
```

The API runs at `http://localhost:8080`. Submit a contact inquiry with `POST /api/contact`; the JSON body accepts `name`, `email`, `company`, `phone`, `projectType`, and `message`.

Run backend checks:

```bash
cd backend
mvn test
mvn package
```

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

The website runs at `http://localhost:3000`. Copy `.env.example` to `.env.local` only when the API is hosted somewhere other than `http://localhost:8080`.

Run frontend checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Production notes

- Set real database credentials and the deployed frontend origin in backend environment variables.
- Set `NEXT_PUBLIC_API_BASE_URL` to the public backend URL at frontend build time.
- Terminate TLS at the hosting platform or reverse proxy.
- Add rate limiting and bot protection to the public contact endpoint before a broad launch.
- Replace the working company name, metadata, legal links, and social placeholders before publishing.

## Future roadmap

Phase 2 can add a secured client portal, project and milestone tracking, proposals, employee assignments and timesheets, role-based authentication, billing integrations, AI-assisted workflows, and an admin dashboard. These are documented as module boundaries in [docs/architecture.md](docs/architecture.md), but intentionally are not implemented yet.
