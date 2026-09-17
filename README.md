# 🦖 Andawanda

Plataforma web donde los niños aprenden jugando: juegos, cuentos y retos
pensados para pequeños exploradores.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** con la paleta de marca de Andawanda
- **Supabase** (Postgres + Auth) como backend

## Empezar en local

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Crea un proyecto en [Supabase](https://supabase.com) y copia la URL y la
   `anon key` (Project Settings → API).

3. Copia el archivo de variables de entorno y complétalo:

   ```bash
   cp .env.local.example .env.local
   ```

4. Corre el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000).

### Configurar Supabase Auth

En el dashboard de Supabase → **Authentication → URL Configuration**, agrega:

- Site URL: `http://localhost:3000` (y tu dominio en producción)
- Redirect URLs: `http://localhost:3000/auth/callback`

Con eso el registro por correo/contraseña y la confirmación de cuenta
funcionan directo con el flujo ya implementado en `app/auth/`.

## Estructura

```
app/
  page.tsx              → Landing page
  registro/             → Página de registro
  iniciar-sesion/        → Página de inicio de sesión
  dashboard/             → Zona privada (requiere sesión)
  auth/
    actions.ts           → Server Actions (signUp, signIn, signOut)
    callback/route.ts     → Confirmación de correo de Supabase
components/
  Logo.tsx               → Mascota + wordmark (SVG inline)
  Button.tsx             → Botón "chunky" reutilizable
  AuthForm.tsx            → Formulario compartido registro/login
  AuthLayout.tsx          → Layout decorativo de las páginas de auth
lib/supabase/
  client.ts              → Cliente Supabase para el navegador
  server.ts              → Cliente Supabase para Server Components/Actions
  middleware.ts          → Refresca sesión y protege /dashboard
middleware.ts            → Middleware raíz de Next.js
public/
  logo.svg               → Logo vectorial completo
  mascot-hero.png        → Ilustración de la mascota para el hero
```

## Paleta de marca

| Color               | Hex       | Uso                  |
| ------------------- | --------- | --------------------- |
| Coral (principal)   | `#FF6B6B` | `coral-500`            |
| Mostaza             | `#F4B942` | `mustard-400`          |
| Verde menta         | `#6FCF97` | `mint-500`             |
| Morado suave        | `#A78BFA` | `lavender-400`         |
| Crema (fondo)       | `#FFF7E9` | `cream-200`            |
| Café (texto)        | `#5B3E34` | `cocoa-600` / `cocoa-800` |

Tipografías: **Fredoka** (títulos, `font-display`) y **Baloo 2** (cuerpo,
`font-body`), ambas redondeadas y pensadas para lectura infantil.
