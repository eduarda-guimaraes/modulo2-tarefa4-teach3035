import '../styles/Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
    </footer>
  );
}