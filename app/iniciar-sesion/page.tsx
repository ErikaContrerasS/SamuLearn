import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";
import { AuthLayout } from "@/components/AuthLayout";

export const metadata: Metadata = {
  title: "Iniciar sesión — Andawanda",
};

export default function IniciarSesionPage() {
  return (
    <AuthLayout>
      <AuthForm mode="signin" />
    </AuthLayout>
  );
}
