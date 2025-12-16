import { TaskList } from "../components/TaskList";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="app-shell">
      <Header />

      <main className="app-main">
        <section id="welcome">
          <h1>Bem-vinda(o) ao seu espaço de produtividade!</h1>
          <p>
            Aqui você transforma ideias em ações, acompanha seu progresso e mantém sua rotina organizada com praticidade.
          </p>
        </section>

        <TaskList />
      </main>

      <Footer />
    </div>
  );
}
