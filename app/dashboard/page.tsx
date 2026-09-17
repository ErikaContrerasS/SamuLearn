import { redirect } from "next/navigation";
import { LogOut, Sparkles } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/auth/actions";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/iniciar-sesion");
  }

  const nombre = (user.user_metadata?.nombre as string | undefined) ?? "explorador";

  return (
    <main className="min-h-screen bg-cream-200">
      <header className="flex items-center justify-between px-6 py-4 sm:px-10">
        <Logo className="h-10 w-auto" showWordmark={false} />
        <form action={signOut}>
          <Button type="submit" variant="outline" size="md" icon={<LogOut className="h-4 w-4" />}>
            Salir
          </Button>
        </form>
      </header>

      <section className="mx-auto mt-10 max-w-2xl rounded-[2rem] border-4 border-mustard-200 bg-white p-10 text-center shadow-soft">
        <Sparkles className="mx-auto mb-4 h-14 w-14 text-mustard-400" />
        <h1 className="font-display text-3xl font-semibold text-cocoa-800">
          ¡Hola, {nombre}! 🎉
        </h1>
        <p className="mt-3 text-lg text-cocoa-500">
          Tu cuenta está lista. Aquí pronto verás tus juegos y actividades favoritas.
        </p>
      </section>
    </main>
  );
}
