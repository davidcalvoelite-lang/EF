# EF Platform

Monorepo full-stack con arquitectura de microservicios, bases de datos híbridas y despliegue en AWS.

## Estructura del Proyecto

```
EF/
├── apps/
│   ├── mobile/                 # React Native + Ignite + Tamagui
│   │   └── app/
│   │       └── components/
│   │           └── ui/         # Componentes reutilizables (Button, Card, Logo, Navbar, Toggle)
│   └── backend/                # NestJS Microservicios
│       ├── apps/
│       │   ├── api-gateway/    # Punto de entrada HTTP (REST)
│       │   ├── auth-service/   # Autenticación (PostgreSQL)
│       │   └── users-service/  # Usuarios (PostgreSQL + MongoDB)
│       └── libs/
│           ├── common/         # Pipes, filtros, interceptores, constantes
│           ├── contracts/      # DTOs e interfaces compartidas
│           └── database/       # Módulos PostgreSQL y MongoDB
├── infrastructure/
│   ├── docker/                 # Docker Compose + Dockerfiles
│   ├── kubernetes/             # Manifiestos K8s
│   └── aws/                    # Terraform + scripts de despliegue
└── .github/workflows/          # CI/CD con GitHub Actions
```

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | React Native, Ignite CLI, Tamagui |
| Backend | Node.js, NestJS (Microservicios) |
| Base de Datos | PostgreSQL (relacional) + MongoDB (documentos) |
| Contenedores | Docker, Kubernetes |
| Cloud | AWS (ECR, EKS, RDS, DocumentDB) |
| CI/CD | GitHub Actions |

## Requisitos Previos

- Node.js >= 20
- Docker y Docker Compose
- Para mobile: Android Studio / Xcode (según plataforma)
- Para AWS: AWS CLI, kubectl, Terraform (opcional)

## Inicio Rápido

### 1. Clonar e instalar

```bash
git clone <tu-repositorio-github>
cd EF
cp .env.example .env

# Instalar dependencias del monorepo
npm install

# Instalar dependencias del backend
cd apps/backend && npm install && cd ../..
```

### 2. Levantar infraestructura local (Docker)

```bash
npm run docker:up
```

Esto inicia PostgreSQL, MongoDB y los tres microservicios.

### 3. Backend (desarrollo local sin Docker)

```bash
# Terminal 1 — Auth Service
npm run backend:auth

# Terminal 2 — Users Service
npm run backend:users

# Terminal 3 — API Gateway
npm run backend:gateway
```

API disponible en: `http://localhost:3000/api`

### 4. Mobile

```bash
npm run mobile          # Expo dev server
npm run mobile:android  # Android
npm run mobile:ios      # iOS (macOS)
```

## Componentes UI Reutilizables

Los componentes Tamagui viven en `apps/mobile/app/components/ui/`:

```tsx
import { Button, Card, Logo, Navbar, Toggle } from "@/components/ui"
```

| Componente | Descripción |
|-----------|-------------|
| `Button` | Botón con variantes: primary, secondary, outline, ghost |
| `Card` | Tarjeta con título y subtítulo opcionales |
| `Logo` | Logo de la app con texto opcional |
| `Navbar` | Barra de navegación superior reutilizable |
| `Toggle` | Switch con etiqueta y descripción |

## Arquitectura Backend (SOLID)

- **S**ingle Responsibility: cada microservicio tiene una responsabilidad única
- **O**pen/Closed: libs extensibles sin modificar servicios existentes
- **L**iskov Substitution: interfaces de repositorio intercambiables
- **I**nterface Segregation: DTOs específicos en `@ef/contracts`
- **D**ependency Inversion: servicios dependen de abstracciones (repositorios)

### Endpoints API Gateway

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/auth/login` | Iniciar sesión |
| POST | `/api/auth/register` | Registro |
| POST | `/api/auth/validate` | Validar token JWT |
| GET | `/api/users/:id` | Obtener perfil |
| PATCH | `/api/users/:id/profile` | Actualizar perfil |
| GET | `/api/users/:id/preferences` | Obtener preferencias (MongoDB) |
| PATCH | `/api/users/:id/preferences` | Actualizar preferencias |

## Kubernetes

```bash
kubectl apply -f infrastructure/kubernetes/namespace.yaml
kubectl apply -f infrastructure/kubernetes/configmap.yaml
kubectl apply -f infrastructure/kubernetes/secrets.example.yaml  # renombrar y configurar
kubectl apply -f infrastructure/kubernetes/postgres/
kubectl apply -f infrastructure/kubernetes/mongodb/
kubectl apply -f infrastructure/kubernetes/services/
```

## Despliegue AWS

1. Configurar credenciales AWS
2. Aplicar Terraform: `cd infrastructure/aws/terraform && terraform init && terraform apply`
3. Desplegar con GitHub Actions (workflow `Deploy AWS`) o script:

```bash
export AWS_ACCOUNT_ID=123456789012
bash infrastructure/aws/scripts/deploy.sh
```

### Secrets de GitHub requeridos

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_ACCOUNT_ID`

## GitHub

```bash
git init
git add .
git commit -m "feat: initial monorepo setup"
git remote add origin https://github.com/TU_USUARIO/EF.git
git push -u origin main
```

## Licencia

Privado — Todos los derechos reservados.
