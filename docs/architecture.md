# Architecture and extension guide

## Phase 1 shape

The repository contains two independently deployable applications. The Next.js frontend owns presentation and calls the Spring Boot REST API through a small service layer. The backend is a modular monolith: one runtime and database, organized so each future business capability can become its own package before there is any reason to consider a separate service.

The contact flow is:

`ContactForm -> services/contactApi.ts -> POST /api/contact -> controller -> service -> repository -> PostgreSQL`

Flyway migrations are the source of truth for database schema changes. Hibernate validates the mappings at startup but does not create or alter production tables.

## Adding backend modules

As capabilities grow, prefer feature packages such as `client`, `project`, `proposal`, and `invoice`, each containing its API, application service, persistence, and domain types. The current layer-based contact package is intentionally small and easy to move into `com.northstardigital.app.contact` when a second module is introduced.

Planned modules and boundaries:

- `identity`: users, authentication, roles (`ADMIN`, `EMPLOYEE`, `CLIENT`), and authorization.
- `client`: client organizations, contacts, and portal-facing profiles.
- `project`: projects, milestones, tasks, assignments, status, and documents.
- `proposal`: estimates, proposals, line items, and acceptance workflow.
- `workforce`: employees, developer profiles, assignments, and timesheets.
- `billing`: invoices and adapters for future Stripe or QuickBooks integration.
- `automation`: AI-assisted requirement analysis, estimates, support, and document workflows.

Keep module communication through application-service interfaces or domain events. Add external integrations behind interfaces so providers can be replaced. For example, a future contact email listener can react after a contact transaction commits without changing the controller contract.

## Frontend growth

New route groups can be added under `frontend/app`, including `services/[slug]`, `projects/[slug]`, `products/[slug]`, `blog`, `careers`, and `portal`. Keep browser-to-API calls in `frontend/services`, shared payloads in `frontend/types`, editable page content in `frontend/data`, and reusable visual units in `frontend/components`.

Authentication is intentionally absent in Phase 1. When the portal is introduced, protect it as a separate route group, add Spring Security in the backend, and establish the session/token model before building portal screens.
