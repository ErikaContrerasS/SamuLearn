"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type AuthState = {
  error?: string;
  success?: boolean;
};

function friendlyError(message: string): string {
  const map: Record<string, string> = {
    "Invalid login credentials": "El correo o la contraseña no son correctos. ¡Inténtalo de nuevo!",
    "User already registered": "Ya existe una cuenta con ese correo. Prueba iniciar sesión.",
    "Password should be at least 6 characters": "La contraseña debe tener al menos 6 caracteres.",
    "Email not confirmed": "Falta confirmar el correo. Revisa tu bandeja de entrada.",
  };
  return map[message] ?? "Algo no salió bien. ¿Probamos otra vez?";
}

export async function signUp(_prevState: AuthState, formData: FormData): Promise<AuthState> {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!nombre || !email || !password) {
    return { error: "Completa tu nombre, correo y contraseña para continuar." };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { nombre },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/callback`,
    },
  });

  if (error) {
    return { error: friendlyError(error.message) };
  }

  return { success: true };
}

export async function signIn(_prevState: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Escribe tu correo y tu contraseña para entrar." };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: friendlyError(error.message) };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
