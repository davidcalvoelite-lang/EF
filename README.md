# Elite Forge

Monorepo técnico de **Elite Forge** — aplicación móvil de fútbol con perfil de jugador inteligente, red social deportiva, organización de partidos y reservas de canchas.

| Documento | Descripción |
|-----------|-------------|
| **[docs/ELITE_FORGE.md](./docs/ELITE_FORGE.md)** | Producto, lógica de negocio, logo, módulos funcionales |
| Este README | Stack técnico, inicio rápido, infraestructura y despliegue |

## Resumen del producto

- **Perfil inteligente** que evoluciona con partidos, votaciones y tests físicos.
- **Feed social** tipo red social en la pantalla principal.
- **Grupos** con líder, administradores y creación de partidos con cupos (8v8, 11v11, etc.).
- **Partidos** con historial, calendario futuro e invitaciones por notificación.
- **Amistades** con privacidad configurable y Tag ID de jugador.
- **Reservas de canchas** conectadas a un dashboard web en tiempo real para dueños.

## Estructura del Proyecto

```
EF/
├── docs/
│   └── ELITE_FORGE.md          # Producto, negocio, logo, módulos
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

## Sistema de Diseño — Paleta de Colores

La identidad visual de **Elite Forge** se basa en cuatro colores predefinidos y una distribución **bicolor simétrica**: el lado izquierdo de la interfaz usa **Verde Esmeralda** y el lado derecho usa **Naranja Oscuro**.

### Colores premeditados

| Color | Hex | Uso |
|-------|-----|-----|
| **Naranja Oscuro** | `#FF8C00` | Interfaz (lado derecho) |
| **Verde Esmeralda** | `#00CEC8` | Interfaz (lado izquierdo) |
| **Gris Carbón** | `#424242` | Background |
| **Blanco Puro** | `#FFFFFF` | Letras y texto principal |

### Lógica de distribución

La UI sigue un esquema de **split-color** (división izquierda / derecha):

- **Background general:** `#424242` (Gris Carbón).
- **Texto, etiquetas y encabezados:** `#FFFFFF` (Blanco Puro).
- **Lado izquierdo** → `#00CEC8` (Verde Esmeralda).
- **Lado derecho** → `#FF8C00` (Naranja Oscuro).

### Distribución por elemento

#### Verde Esmeralda `#00CEC8` — lado izquierdo

| Elemento | Aplicación |
|----------|------------|
| Logo | Marca **Elite Forge** (esquina superior izquierda) |
| Bordes | Mitad izquierda del marco hexagonal del avatar y mitad izquierda del borde del contenedor principal |
| Stats e iconos | Métricas del lado izquierdo: **TÉCNICO**, **PODER** |
| Gráfico radar | Mitad izquierda del spider / radar chart central |
| Botones | Fondo del botón **VIEW MATCHES** (texto en blanco) |

#### Naranja Oscuro `#FF8C00` — lado derecho

| Elemento | Aplicación |
|----------|------------|
| Bordes | Mitad derecha del marco hexagonal del avatar y mitad derecha del borde del contenedor principal |
| Stats e iconos | Métricas del lado derecho: **FÍSICO**, **MENTAL** |
| Gráfico radar | Mitad derecha del spider / radar chart central |
| Botones | Fondo del botón **COMMUNITY HUB** (texto en blanco) |

#### Gris Carbón `#424242` — fondos

- Pantallas principales en modo oscuro.
- Barras inferiores (ej. **RANKING GLOBAL: #342**).
- Contenedores secundarios y áreas de apoyo visual.

#### Blanco Puro `#FFFFFF` — tipografía

- Títulos de pantalla (ej. **LOG IN**).
- Nombres de usuario y etiquetas de nivel.
- Texto dentro de botones de acción sobre fondos de color.
- Iconografía y datos numéricos sobre fondos oscuros.

### Referencia visual

La pantalla de login / perfil de referencia aplica esta distribución en un layout centrado:

```
┌─────────────────────────────────────┐
│  Elite Forge (verde)     [status]   │
│           LOG IN 🔥                 │
│    ┌─────────────────────┐        │
│    │  avatar hexagonal   │        │
│    │ verde │ naranja     │        │
│    │   DAVID MARTÍNEZ    │        │
│    │   LEVEL 14          │        │
│    │  [radar bicolor]    │        │
│    │ TÉCNICO │ FÍSICO    │        │
│    │ PODER   │ MENTAL    │        │
│    └─────────────────────┘        │
│  [VIEW MATCHES] [COMMUNITY HUB]     │
│  verde          naranja             │
│  RANKING GLOBAL: #342               │
└─────────────────────────────────────┘
  fondo: #424242  ·  texto: #FFFFFF
```

> Guía de colores para UI en `apps/mobile/`. Identidad de marca y logo en [docs/ELITE_FORGE.md](./docs/ELITE_FORGE.md#logo-e-identidad-de-marca).

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
git remote add origin https://github.com/davidcalvoelite-lang/EF.git
git push -u origin main
```

## Licencia

Privado — Todos los derechos reservados.
