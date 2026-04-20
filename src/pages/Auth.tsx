import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { toast } from "sonner";

type Mode = "signin" | "signup";

const Auth = () => {
  const [mode, setMode] = useState<Mode>("signin");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      mode === "signin" ? "Вход выполнен (демо)" : "Аккаунт создан (демо)",
    );
    setTimeout(() => navigate("/"), 600);
  };

  return (
    <Layout>
      <section className="container flex justify-center py-20">
        <div className="w-full max-w-md">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-wider-2 text-muted-foreground">
              {mode === "signin" ? "Личный кабинет" : "Новый аккаунт"}
            </p>
            <h1 className="mt-2 font-serif text-4xl text-foreground">
              {mode === "signin" ? "Добро пожаловать" : "Создать аккаунт"}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              {mode === "signin"
                ? "Войдите, чтобы получить доступ к заказам и избранному."
                : "Присоединяйтесь к Maison и откройте мир парижской косметики."}
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-10 grid grid-cols-2 border border-border">
            {(["signin", "signup"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`py-3 text-[11px] uppercase tracking-wider-2 transition-colors ${
                  mode === m
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-primary"
                }`}
              >
                {m === "signin" ? "Войти" : "Регистрация"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {mode === "signup" && (
              <div>
                <label className="text-[10px] uppercase tracking-wider-2 text-muted-foreground">
                  Имя
                </label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Анна"
                />
              </div>
            )}
            <div>
              <label className="text-[10px] uppercase tracking-wider-2 text-muted-foreground">
                Email
              </label>
              <input
                required
                type="email"
                className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
                placeholder="vous@maison.com"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-wider-2 text-muted-foreground">
                Пароль
              </label>
              <input
                required
                type="password"
                minLength={6}
                className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
                placeholder="••••••••"
              />
            </div>

            {mode === "signin" && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-[11px] uppercase tracking-wider-2 text-muted-foreground hover:text-primary"
                >
                  Забыли пароль?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary py-4 text-[11px] uppercase tracking-wider-2 text-primary-foreground transition-opacity hover:opacity-90"
            >
              {mode === "signin" ? "Войти" : "Создать аккаунт"}
            </button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[10px] uppercase tracking-wider-2 text-muted-foreground">или</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            className="w-full border border-border bg-card py-3 text-[11px] uppercase tracking-wider-2 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Продолжить с Google
          </button>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            {mode === "signin" ? "Ещё нет аккаунта? " : "Уже есть аккаунт? "}
            <button
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="text-primary underline-offset-4 hover:underline"
            >
              {mode === "signin" ? "Создать" : "Войти"}
            </button>
          </p>

          <p className="mt-10 text-center">
            <Link
              to="/"
              className="text-[11px] uppercase tracking-wider-2 text-muted-foreground hover:text-primary"
            >
              ← Вернуться в магазин
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
