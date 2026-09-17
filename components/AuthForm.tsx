"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, PartyPopper, User } from "lucide-react";
import { signIn, signUp, type AuthState } from "@/app/auth/actions";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

type Mode = "signin" | "signup";

const initialState: AuthState = {};

export function AuthForm({ mode }: { mode: Mode }) {
  const action = mode === "signup" ? signUp : signIn;
  const [state, formAction, isPending] = useActionState(action, initialState);
  const [showPassword, setShowPassword] = useState(false);
  // Controlados para que no se borren si el envío falla (p. ej. contraseña
  // incorrecta): nadie quiere volver a escribir su correo por un typo.
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const isSignup = mode === "signup";

  if (state.success) {
    return (
      <div className="animate-pop rounded-[2rem] border-4 border-mint-200 bg-mint-50 p-8 text-center shadow-soft">
        <PartyPopper className="mx-auto mb-3 h-14 w-14 text-mint-500" strokeWidth={2.2} />
        <h2 className="font-display text-2xl font-semibold text-cocoa-800">
          ¡Listo! Revisa tu correo 💌
        </h2>
        <p className="mt-2 text-cocoa-600">
          Te enviamos un enlace para confirmar tu cuenta y empezar a jugar y aprender.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-soft border-4 border-cream-300">
      <div className="mb-6 flex justify-center">
        <Logo className="h-16 w-auto" showWordmark={false} />
      </div>

      <h1 className="text-center font-display text-3xl font-semibold text-cocoa-800">
        {isSignup ? "¡Crea tu cuenta!" : "¡Hola de nuevo!"}
      </h1>
      <p className="mt-2 text-center text-cocoa-500">
        {isSignup
          ? "Regístrate para que tu peque empiece la aventura de aprender jugando."
          : "Inicia sesión y sigue la aventura donde la dejaste."}
      </p>

      <form action={formAction} className="mt-8 space-y-4">
        {isSignup && (
          <Field
            icon={<User className="h-5 w-5" />}
            id="nombre"
            name="nombre"
            type="text"
            label="Tu nombre"
            placeholder="Ej: María"
            autoComplete="name"
            value={nombre}
            onChange={setNombre}
          />
        )}

        <Field
          icon={<Mail className="h-5 w-5" />}
          id="email"
          name="email"
          type="email"
          label="Correo electrónico"
          placeholder="tucorreo@ejemplo.com"
          autoComplete="email"
          value={email}
          onChange={setEmail}
        />

        <div>
          <label htmlFor="password" className="mb-1 block font-display text-sm font-semibold text-cocoa-700">
            Contraseña
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cocoa-400">
              <Lock className="h-5 w-5" />
            </span>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={6}
              placeholder="Mínimo 6 caracteres"
              autoComplete={isSignup ? "new-password" : "current-password"}
              className="w-full rounded-2xl border-2 border-cream-300 bg-cream-100 py-3 pl-12 pr-12 text-cocoa-800 outline-none transition focus:border-mint-400 focus:bg-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-cocoa-400 hover:text-cocoa-600"
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {state.error && (
          <p className="rounded-xl bg-coral-50 px-4 py-3 text-sm font-medium text-coral-700">
            {state.error}
          </p>
        )}

        <Button
          type="submit"
          variant={isSignup ? "mint" : "coral"}
          size="lg"
          className="w-full"
          disabled={isPending}
        >
          {isPending ? "Un momento..." : isSignup ? "Crear mi cuenta" : "Iniciar sesión"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-cocoa-500">
        {isSignup ? (
          <>
            ¿Ya tienes cuenta?{" "}
            <Link href="/iniciar-sesion" className="font-semibold text-lavender-500 hover:underline">
              Inicia sesión
            </Link>
          </>
        ) : (
          <>
            ¿Aún no tienes cuenta?{" "}
            <Link href="/registro" className="font-semibold text-lavender-500 hover:underline">
              Regístrate gratis
            </Link>
          </>
        )}
      </p>
    </div>
  );
}

function Field({
  icon,
  id,
  name,
  type,
  label,
  placeholder,
  autoComplete,
  value,
  onChange,
}: {
  icon: React.ReactNode;
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  autoComplete: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block font-display text-sm font-semibold text-cocoa-700">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cocoa-400">
          {icon}
        </span>
        <input
          id={id}
          name={name}
          type={type}
          required
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border-2 border-cream-300 bg-cream-100 py-3 pl-12 pr-4 text-cocoa-800 outline-none transition focus:border-mint-400 focus:bg-white"
        />
      </div>
    </div>
  );
}
