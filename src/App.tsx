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
        <h2 className="text-bold m-0 text-primary-default">
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

          <button
            className="br-button danger small"
            type="button"
            onClick={handleSair}
          >
            <i className="fas fa-power-off mr-1"></i> Sair
          </button>
        </div>
      </div>

      <span className="br-divider my-4"></span>

      {/* RENDERIZAÇÃO CONDICIONAL */}
      {mostrarCatalogo ? (
        <Showcase />
      ) : (
        <div className="bg-white p-4 border rounded shadow-sm animate__animated animate__fadeIn">
          <p className="text-bold text-success mb-3">
            <i className="fas fa-check-circle mr-2"></i> Starter Kit pronto!
          </p>
          <p>
            Este é o seu ambiente base. Apague este bloco de código (no arquivo{' '}
            <code>App.tsx</code>) e comece a desenhar a interface do seu novo
            sistema utilizando o padrão visual do governo.
          </p>
          <p className="text-muted mt-4">
            <i className="fas fa-lightbulb text-warning mr-2"></i>
            Dica: Clique no botão "Ver Exemplos" acima para acessar códigos
            prontos de inputs, botões e mensagens do DSGov.
          </p>
        </div>
      )}
    </Layout>
  );
}

export default App;
