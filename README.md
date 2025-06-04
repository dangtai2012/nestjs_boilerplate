# NestJS Boilerplate Project

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Description

A NestJS boilerplate with best practices for authentication, user management, TypeORM database integration, configuration, logging, caching, and more.

## Project Setup

1. **Clone the repository:**
   ```bash
   git clone <this_project_link>
   cd nestjs_boilerplate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your configuration.

## Database Migrations and Seeding

Uses TypeORM for database interactions.

- **Generate migration:**
  ```bash
  npm run migration:generate --name=<YourMigrationName>
  ```

- **Run migrations:**
  ```bash
  npm run migration:run
  ```

- **Revert migration:**
  ```bash
  npm run migration:revert
  ```

- **Run seeders:**
  ```bash
  npm run seed
  ```

## Compile and Run

```bash
# Development
npm run start:dev

# Build
npm run build

# Production
npm run start:prod
```

Access at `http://<APP_HOST>:<APP_PORT>`.

## API Documentation

Swagger UI is available at:
`http://<APP_HOST>:<APP_PORT>/<API_PREFIX>/<API_VERSION>/<APP_SWAGGER_PATH>`

Example: `http://localhost:3000/api/v1/docs` (if `APP_SWAGGER_ENABLE=true`).

## Key Technologies

- **Framework & Language:** NestJS, TypeScript
- **Database & ORM:** TypeORM, PostgreSQL
- **Authentication:** Passport.js (JWT, local), bcrypt
- **Configuration:** @nestjs/config, Joi, dotenv
- **Validation:** class-validator, class-transformer
- **API Docs:** @nestjs/swagger
- **Logging:** Winston, winston-daily-rotate-file
- **Caching:** Redis
- **Emailing:** Nodemailer, EJS
- **Testing:** Jest, Supertest, @nestjs/testing, @faker-js/faker

## Project Structure

```
.
├── ormconfig/                      # TypeORM configs
│   ├── migrations/                 # Database migrations
│   ├── seeds/                      # Seeders and factories
│   ├── migration.ts                # TypeORM CLI migration
│   ├── seeding.ts                  # Seeder script
│   └── typeorm.data_source.ts      # TypeORM DataSource
├── src/                            # Source code
│   ├── app.module.ts               # Root module
│   ├── main.ts                     # App entry point
│   ├── common/                     # Shared elements
│   │   ├── constants/              # Enums
│   │   ├── decorators/             # Custom decorators
│   │   ├── dtos/                   # DTOs
│   │   ├── exceptions/             # Custom exceptions
│   │   ├── filters/                # Exception filters
│   │   ├── guards/                 # Guards
│   │   ├── interceptors/           # Interceptors
│   │   ├── interfaces/             # Interfaces
│   │   ├── middlewares/            # Middlewares
│   │   └── repositories/           # Base repositories
│   ├── config/                     # Configurations
│   ├── database/                   # Database setup
│   ├── helpers/                    # Utilities
│   ├── modules/                    # Feature modules
│   │   ├── auth/                   # Authentication
│   │   ├── user/                   # User management
│   │   └── index.ts                # Module exports
│   ├── shared/                     # Shared utilities
│   │   ├── cache/                  # Caching (Redis)
│   │   ├── logger/                 # Logging (Winston)
│   │   ├── mail/                   # Emailing (Nodemailer)
│   │   └── index.ts                # Shared exports
│   └── swagger.ts                  # Swagger setup
├── test/                           # Tests
├── .env.example                    # Env example
├── .gitignore                      # Git ignore
├── eslint.config.mjs               # ESLint config
├── nest-cli.json                   # Nest CLI config
├── package.json                    # Dependencies & scripts
├── .prettierrc                     # Prettier config
├── README.md                       # Project docs
├── tsconfig.build.json             # TypeScript build config
└── tsconfig.json                   # TypeScript config
```

Suitable for beginners and startups. For advanced flexibility, consider Clean, Hexagonal, or Onion Architecture.