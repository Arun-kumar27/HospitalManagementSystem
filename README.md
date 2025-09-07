Hospital Management System (HMS)
Robust, modular Hospital Management System built with Spring Boot REST API on the backend and React on the frontend. It covers core hospital workflows such as patient registration, appointments, admissions, billing, pharmacy, labs, inventory, users/roles, and reporting — with security, validation, and audit trails.

✨ Key Features

Patient Management: registration, demographics, medical history, insurance, documents.

Appointments & Scheduling: doctor calendar, slot management, reschedule/cancel, reminders.

OPD/IPD: outpatient visits, admissions, transfers, discharge summaries.

Clinical: vitals, diagnosis (ICD-10 support), prescriptions, progress notes, orders.

Pharmacy: formulary, stock, dispensing, return, controlled substances log.

Laboratory: test catalog, orders, sample tracking, results with ranges.

Billing: invoices, payments, refunds, insurance claims, price lists, taxation.

Inventory: items, vendors, GRN, stock levels, expiries, purchase orders.

Admin & Security: users, roles (RBAC), permissions, audit logs, activity trails.

Reports & Dashboards: occupancy, revenue, turnaround time, doctor productivity.

Internationalization & Accessibility: i18n-ready UI, WCAG-friendly components.

🧱 Architecture Overview

The system follows a clean separation of concerns:

Frontend: React (Vite/CRA), React Router, Axios, React Query, form libraries (React Hook Form + Zod/Yup), component lib (MUI/Chakra/Tailwind), charting (Recharts).

Backend: Spring Boot, Spring Web, Spring Data JPA (Hibernate), Spring Security + JWT, Validation, Lombok, MapStruct, Flyway/Liquibase.

Database: PostgreSQL (recommended) / MySQL.

Infra: Docker & Docker Compose for dev; CI/CD via GitHub Actions.

Observability: Spring Boot Actuator, centralized logs.
