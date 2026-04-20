const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="container grid gap-10 py-16 md:grid-cols-4">
        <div>
          <h3 className="font-serif text-xl text-primary">MAISON</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Премиальная французская косметика с заботой о вашей коже.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-wider-2 text-foreground">Магазин</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Сыворотки</li>
            <li>Кремы</li>
            <li>Тоники</li>
            <li>Очищение</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-wider-2 text-foreground">Помощь</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Доставка</li>
            <li>Возврат</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-wider-2 text-foreground">Рассылка</h4>
          <p className="mt-4 text-sm text-muted-foreground">Получайте новости и приватные предложения.</p>
          <form className="mt-4 flex border-b border-border">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="text-[11px] uppercase tracking-wider-2 text-primary">→</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Maison Cosmétique. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
