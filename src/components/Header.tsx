interface HeaderProps {
  titulo: string;
  subtitulo: string;
  usuario: string;
}

export function Header({ titulo, subtitulo, usuario }: HeaderProps) {
  return (
    <header className="br-header mb-4" id="header" data-sticky="true">
      <div className="container-lg">
        {/* PARTE SUPERIOR: Logo e Usuário */}
        <div className="header-top">
          <div className="header-logo">
            <img
              src="https://barra.sistema.gov.br/v1/assets/govbr.webp"
              alt="Logo da Receita Federal"
            />
            <span className="br-divider vertical"></span>
            <div className="header-sign">CONTÁGIL</div>
          </div>

          <div className="header-actions">
            <div className="header-login">
              <div className="header-sign-in">
                <button
                  className="br-sign-in small"
                  type="button"
                  data-trigger="login"
                  style={{ color: 'var(--color-primary-pastel-01)' }}
                >
                  <i className="fas fa-user-circle mr-2" aria-hidden="true"></i>
                  <span className="d-sm-inline text-bold">{usuario}</span>
                </button>
              </div>
              <div className="header-avatar"></div>
            </div>
          </div>
        </div>

        {/* PARTE INFERIOR: Título do Sistema */}
        <div className="header-bottom">
          <div className="header-menu">
            <div className="header-info">
              <div className="header-title">{titulo}</div>
              <div className="header-subtitle">{subtitulo}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
