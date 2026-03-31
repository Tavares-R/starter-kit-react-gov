import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  titulo?: string;
  usuario?: string;
}

export function Layout({
  children,
  titulo = 'Sistema ContÁgil',
  usuario = '...',
}: LayoutProps) {
  return (
    <div
      className="template-base"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Garante que a tela ocupe pelo menos 100% da altura
      }}
    >
      <Header
        titulo={titulo}
        subtitulo="Receita Federal do Brasil"
        usuario={usuario}
      />

      <main
        id="main"
        style={{
          flex: '1 0 auto',
          paddingBottom: '3rem',
        }}
      >
        <div className="container-lg pt-4 w-100">{children}</div>
      </main>

      <div style={{ flexShrink: 0, marginTop: 'auto' }}>
        <Footer />
      </div>
    </div>
  );
}
