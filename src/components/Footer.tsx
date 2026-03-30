export function Footer() {
  return (
    <footer
      className="br-footer"
      id="footer"
      style={{
        backgroundColor: 'var(--blue-warm-vivid-90, #071d41)',
        color: '#ffffff',
        marginTop: 'auto',
      }}
    >
      <div className="container-lg pt-4 pb-3">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="d-flex align-items-center">
              <img
                src="https://barra.sistema.gov.br/v1/assets/govbr.webp"
                alt="Logo Gov.br"
                style={{
                  height: '40px',
                  filter: 'brightness(0) invert(1)',
                }}
              />

              <div
                className="ml-3 border-left pl-3"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <div className="text-bold text-white">ContÁgil</div>
                <div className="text-small text-white opacity-75">
                  Projeto react + e-navegador
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="row justify-content-md-end">
              <div className="col-auto mr-5">
                <div
                  className="text-uppercase text-bold text-white mb-2"
                  style={{ fontSize: '0.8rem' }}
                >
                  Ajuda
                </div>
                <a
                  href="#"
                  className="text-white"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <i
                    className="fas fa-book-open mr-2"
                    style={{ fontSize: '0.8rem' }}
                  ></i>
                  Manual do Sistema
                </a>
              </div>

              <div className="col-auto">
                <div
                  className="text-uppercase text-bold text-white mb-2"
                  style={{ fontSize: '0.8rem' }}
                >
                  Sobre
                </div>
                <div className="d-flex flex-column align-items-end">
                  <span
                    className="text-white mb-1"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Versão 1.0.2
                  </span>

                  <span
                    className="d-inline-block text-center rounded px-2"
                    style={{
                      backgroundColor: 'white',
                      color: '#071d41',
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      padding: '2px 0',
                    }}
                  >
                    PRODUÇÃO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr
          className="my-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
        />

        <div className="text-center">
          <div className="text-small text-white opacity-75">
            <strong>Receita Federal do Brasil</strong>.
          </div>
        </div>
      </div>
    </footer>
  );
}
