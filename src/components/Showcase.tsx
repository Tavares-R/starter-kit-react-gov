// src/components/Showcase.tsx
import { useState } from 'react';

export function Showcase() {
  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState('');

  const simularBusca = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="mb-5">
        <h3 className="text-bold text-primary-default mb-2">
          <i className="fas fa-toolbox mr-2"></i>
          Catálogo de Componentes (DSGov)
        </h3>
        <p className="text-muted">
          Exemplos prontos e validados dos componentes oficiais do Governo
          Federal para você copiar e usar no seu sistema.
        </p>
      </div>

      <div className="row">
        {/* BLOCO 1: INPUTS E BUSCA */}
        <div className="col-md-6 mb-4">
          <br-card hover>
            <br-card-header>
              <div className="text-weight-semi-bold text-up-01">
                1. Entrada de Dados (Input)
              </div>
            </br-card-header>
            <br-card-content>
              <p className="text-small mb-4">
                Inputs nativos com estado e ícones.
              </p>

              <div className="mb-3">
                <br-input
                  label="CPF do Contribuinte"
                  placeholder="Digite apenas números"
                  density="medium"
                  value={cpf}
                  onInput={(e: any) => setCpf(e.target.value)}
                  icon-sign="user"
                ></br-input>
              </div>

              <div className="mb-3">
                <br-input
                  label="NUP Inválido (Exemplo de Erro)"
                  placeholder="00000.000000/0000-00"
                  state="danger"
                  value="12345.abc"
                ></br-input>
              </div>
            </br-card-content>
          </br-card>
        </div>

        {/* BLOCO 2: MENSAGENS E FEEDBACK */}
        <div className="col-md-6 mb-4">
          <br-card hover>
            <br-card-header>
              <div className="text-weight-semi-bold text-up-01">
                2. Mensagens (Message & Loading)
              </div>
            </br-card-header>
            <br-card-content>
              <p className="text-small mb-4">
                Feedbacks visuais para as ações do usuário.
              </p>

              <div className="mb-4">
                <br-message
                  state="success"
                  message-title="Sucesso!"
                  message="Processo localizado na base de dados."
                  show-icon
                  is-inline
                ></br-message>
              </div>

              <div className="mb-4">
                <br-message
                  state="warning"
                  message-title="Atenção!"
                  message="Este contribuinte possui pendências."
                  show-icon
                  is-inline
                ></br-message>
              </div>

              <div className="d-flex align-items-center bg-light p-3 rounded border">
                <br-button
                  primary
                  onClick={simularBusca}
                  disabled={loading}
                  class="mr-4"
                >
                  <i className="fas fa-search mr-2"></i> Buscar Dados
                </br-button>

                {loading && (
                  <br-loading
                    is-medium
                    label="Consultando base..."
                  ></br-loading>
                )}
              </div>
            </br-card-content>
          </br-card>
        </div>

        {/* BLOCO 3: CHECKBOX E BOTÕES CIRCULARES */}
        <div className="col-md-6 mb-4">
          <br-card hover>
            <br-card-header>
              <div className="text-weight-semi-bold text-up-01">
                3. Múltipla Escolha e Ações
              </div>
            </br-card-header>
            <br-card-content>
              <p className="text-small mb-4">
                Checkboxes para opções múltiplas e botões de ícone.
              </p>

              <div className="mb-4 p-3 border rounded">
                <div className="text-bold mb-2">Selecione as certidões:</div>
                <br-checkbox
                  name="cert1"
                  label="Certidão Negativa de Débitos (CND)"
                ></br-checkbox>
                <br-checkbox
                  name="cert2"
                  label="Situação Fiscal (Positiva)"
                  checked
                ></br-checkbox>
                <br-checkbox
                  name="cert3"
                  label="Imposto de Renda (Bloqueado)"
                  disabled
                ></br-checkbox>
              </div>

              <div className="d-flex justify-content-around bg-light p-3 rounded border">
                <br-button primary circle density="large" title="Imprimir">
                  <i className="fas fa-print"></i>
                </br-button>
                <br-button primary circle density="large" title="Baixar">
                  <i className="fas fa-download"></i>
                </br-button>
                <br-button primary circle density="large" title="Compartilhar">
                  <i className="fas fa-share-nodes"></i>
                </br-button>
              </div>
            </br-card-content>
          </br-card>
        </div>

        {/* BLOCO 4: RADIO E SWITCH (Novo) */}
        <div className="col-md-6 mb-4">
          <br-card hover>
            <br-card-header>
              <div className="text-weight-semi-bold text-up-01">
                4. Única Escolha e Alternância
              </div>
            </br-card-header>
            <br-card-content>
              <p className="text-small mb-4">
                Opções excludentes (Radio) e interruptores (Switch).
              </p>

              <div className="mb-4 p-3 border rounded">
                <div className="text-bold mb-2">Perfil de Acesso:</div>
                {/* O atributo 'name' igual agrupa os radios para que apenas um seja selecionado */}
                <br-radio
                  name="perfil"
                  label="Auditor Fiscal"
                  checked
                ></br-radio>
                <br-radio name="perfil" label="Analista Tributário"></br-radio>
                <br-radio
                  name="perfil"
                  label="Acesso Restrito"
                  disabled
                ></br-radio>
              </div>

              <div className="p-3 border rounded bg-light">
                <div className="text-bold mb-2">Configurações Rápidas:</div>
                <br-switch
                  label="Receber notificações por e-mail"
                  checked
                ></br-switch>
                <br-switch label="Ativar modo de edição avançado"></br-switch>
              </div>
            </br-card-content>
          </br-card>
        </div>
      </div>
    </div>
  );
}
