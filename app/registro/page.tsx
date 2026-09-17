import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";
import { AuthLayout } from "@/components/AuthLayout";

export const metadata: Metadata = {
  title: "Crear cuenta — Andawanda",
};

export default function RegistroPage() {
  return (
    <AuthLayout>
      <AuthForm mode="signup" />
    </AuthLayout>
  );
}
