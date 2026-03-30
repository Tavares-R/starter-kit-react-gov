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
          flex: '1 0 auto', // Cresce para preencher o vazio, mas não encolhe esmagando o conteúdo
          paddingBottom: '3rem', // Dá um respiro extra para o footer não encostar nos cards
        }}
      >
        <div className="container-lg pt-4 w-100">{children}</div>
      </main>

      {/* Este div encapsula o Footer e impede que o navegador o esmague */}
      <div style={{ flexShrink: 0, marginTop: 'auto' }}>
        <Footer />
      </div>
    </div>
  );
}
