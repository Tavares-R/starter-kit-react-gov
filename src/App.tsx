// src/App.tsx
import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Showcase } from './components/Showcase';

function App() {
  const [usuarioNome, setUsuarioNome] = useState('Carregando...');
  const [mostrarCatalogo, setMostrarCatalogo] = useState(false);

  // Lógica para buscar o usuário no Python
  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        if (window.obter_usuario_sistema) {
          const respString = await window.obter_usuario_sistema();
          // Converte o JSON do Python de volta para objeto JavaScript
          const resp =
            typeof respString === 'string'
              ? JSON.parse(respString)
              : respString;
          if (resp && resp.usuario) {
            setUsuarioNome(resp.usuario);
          }
        } else {
          // Se estiver rodando fora do ContÁgil (npm run dev)
          setUsuarioNome('Servidor');
        }
      } catch (e) {
        setUsuarioNome('Usuário Padrão');
      }
    };
    buscarUsuario();
  }, []);

  // Lógica restaurada para fechar o sistema pelo Python
  const handleSair = async () => {
    if (window.fechar_sistema) {
      try {
        await window.fechar_sistema();
      } catch (e) {
        window.close();
      }
    } else {
      window.close();
    }
  };

  return (
    <Layout titulo="Starter Kit RFB" usuario={usuarioNome}>
      {/* CABEÇALHO DA TELA */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-bold m-0 text-primary-default text-up-02">
          <i className="fas fa-cube mr-2"></i>
          {mostrarCatalogo ? 'Catálogo DSGov' : 'Área de Trabalho'}
        </h2>

        <div>
          <br-button
            secondary
            small
            class="mr-3"
            onClick={() => setMostrarCatalogo(!mostrarCatalogo)}
          >
            <i
              className={`fas ${
                mostrarCatalogo ? 'fa-arrow-left' : 'fa-book'
              } mr-2`}
            ></i>
            {mostrarCatalogo ? 'Voltar ao Início' : 'Ver Exemplos (Catálogo)'}
          </br-button>

          <br-button danger small onClick={handleSair}>
            <i className="fas fa-power-off mr-1"></i> Sair
          </br-button>
        </div>
      </div>

      <br-divider className="my-4"></br-divider>

      {/* RENDERIZAÇÃO CONDICIONAL */}
      {mostrarCatalogo ? (
        <Showcase />
      ) : (
        <br-card class="animate__animated animate__fadeIn">
          <br-card-content>
            {/* 1. Trocamos o <p> de sucesso pelo componente oficial de feedback */}
            <div className="mb-4">
              <br-message
                state="success"
                message-title="Starter Kit pronto!"
                show-icon
                is-inline
              ></br-message>
            </div>

            <p>
              Este é o seu ambiente base. Apague este bloco de código (no
              arquivo <code>App.tsx</code>) e comece a desenhar a interface do
              seu novo sistema utilizando o padrão visual do governo.
            </p>

            <div className="mt-4">
              <br-message
                state="info"
                message-title="Dica:"
                message='Clique no botão "Ver Exemplos" acima para acessar o catálogo de inputs, botões e formulários do DSGov.'
                show-icon
                is-inline
              ></br-message>
            </div>
          </br-card-content>
        </br-card>
      )}
    </Layout>
  );
}

export default App;
