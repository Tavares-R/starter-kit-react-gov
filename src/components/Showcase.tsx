// src/components/Showcase.tsx
import { useState } from 'react';
import { Table, TableColumn } from './Table';

export function Showcase() {
  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState('');
  const [modalAberto, setModalAberto] = useState(false);
  const [textoPython, setTextoPython] = useState('');

  const simularBusca = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleEnviarPython = async () => {
    // Validação simples para não enviar vazio
    if (!textoPython) {
      alert('Digite algo antes de enviar!');
      return;
    }

    const pacoteParaPython = {
      texto_digitado: textoPython,
      nome_do_campo: 'Input de Teste via Botão',
    };

    try {
      if (window.espelhar_no_terminal) {
        const respostaString = await window.espelhar_no_terminal(
          JSON.stringify(pacoteParaPython)
        );
        if (respostaString) {
          console.log('Recibo do Python:', JSON.parse(respostaString));
          // Opcional: Limpar o campo após o envio
          setTextoPython('');
        }
      } else {
        console.warn('Aguardando conexão com o backend Python...');
      }
    } catch (err) {
      console.error('Falha na comunicação com o Jython:', err);
    }
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="mb-5">
        <div className="text-up-03 text-bold text-primary-default mb-2">
          <i className="fas fa-toolbox mr-2"></i>
          Catálogo de Componentes (DSGov)
        </div>
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
              <p className="text-small text-muted mb-3">
                Inputs nativos com validação de estado e ícones.
              </p>
              <br-divider class="mb-4"></br-divider>

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

              {/* === NOSSO NOVO CAMPO DE COMUNICAÇÃO COM BOTÃO === */}
              <div className="mb-3 p-3 border rounded bg-light">
                <div className="text-bold mb-2 text-primary-default">
                  <i className="fas fa-plug mr-2"></i>Teste de Integração Python
                </div>

                {/* d-flex coloca o input e o botão na mesma linha */}
                <div className="d-flex align-items-end">
                  <div className="flex-grow-1 mr-3">
                    <br-input
                      label="Digite algo para o Terminal"
                      placeholder="Ex: Teste LABIT..."
                      value={textoPython}
                      onInput={(e: any) => setTextoPython(e.target.value)}
                      icon-sign="terminal"
                    ></br-input>
                  </div>

                  {/* Botão que dispara a função */}
                  <br-button primary onClick={handleEnviarPython}>
                    Enviar <i className="fas fa-paper-plane ml-2"></i>
                  </br-button>
                </div>
              </div>
              {/* ==================================================== */}

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
              <p className="text-small text-muted mb-3">
                Feedbacks visuais para as ações do usuário.
              </p>
              <br-divider class="mb-4"></br-divider>

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
              <p className="text-small text-muted mb-3">
                Checkboxes para opções múltiplas e botões de ícone.
              </p>
              <br-divider class="mb-4"></br-divider>

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

        {/* BLOCO 4: RADIO E SWITCH */}
        <div className="col-md-6 mb-4">
          <br-card hover>
            <br-card-header>
              <div className="text-weight-semi-bold text-up-01">
                4. Única Escolha e Alternância
              </div>
            </br-card-header>
            <br-card-content>
              <p className="text-small text-muted mb-3">
                Opções excludentes (Radio) e interruptores (Switch).
              </p>
              <br-divider class="mb-4"></br-divider>

              <div className="mb-4 p-3 border rounded">
                <div className="text-bold mb-2">Perfil de Acesso:</div>
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

        {/* BLOCO 5: TAGS E STATUS (REFINADO) */}
        <div className="col-md-6 mb-4">
          <br-card hover>
            <br-card-header>
              <div className="text-weight-semi-bold text-up-01">
                5. Tags e Identificadores (Tags)
              </div>
            </br-card-header>
            <br-card-content>
              <p className="text-small text-muted mb-3">
                Rótulos visuais para classificar situações e status de
                processos.
              </p>
              <br-divider class="mb-4"></br-divider>

              <div className="d-flex flex-wrap mb-4">
                <div className="mr-3 mb-2">
                  <br-tag class="bg-success text-white">
                    <i className="fas fa-check-circle mr-2"></i>Deferido
                  </br-tag>
                </div>
                <div className="mr-3 mb-2">
                  <br-tag class="bg-danger text-white">
                    <i className="fas fa-times-circle mr-2"></i>Indeferido
                  </br-tag>
                </div>
                <div className="mr-3 mb-2">
                  <br-tag class="bg-warning text-black">
                    <i className="fas fa-exclamation-triangle mr-2"></i>Em
                    Exigência
                  </br-tag>
                </div>
                <div className="mr-3 mb-2">
                  <br-tag class="bg-info text-white">
                    <i className="fas fa-info-circle mr-2"></i>Em Análise
                  </br-tag>
                </div>
              </div>

              <div className="p-3 border rounded bg-light d-flex align-items-center justify-content-between">
                <span className="text-weight-semi-bold">Malha Fiscal 2026</span>
                <br-tag class="bg-danger text-white text-bold">CRÍTICO</br-tag>
              </div>
            </br-card-content>
          </br-card>
        </div>

        {/* BLOCO 6: TEXTAREA E LISTAS (NOVO) */}
        <div className="col-md-6 mb-4">
          <br-card hover>
            <br-card-header>
              <div className="text-weight-semi-bold text-up-01">
                6. Textos Longos e Listas
              </div>
            </br-card-header>
            <br-card-content>
              <p className="text-small text-muted mb-3">
                Campos para observações e estruturação de históricos.
              </p>
              <br-divider class="mb-4"></br-divider>

              <div className="mb-4">
                <br-textarea
                  label="Despacho Decisório"
                  placeholder="Descreva a fundamentação legal aqui..."
                  maxlength="500"
                ></br-textarea>
              </div>

              <div className="border rounded">
                <br-list header="Histórico Recente" title="Movimentações">
                  <br-item>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <span>
                        <i className="fas fa-file-alt mr-2 text-primary-default"></i>{' '}
                        Anexado Relatório
                      </span>
                      <span className="text-small text-muted">Hoje</span>
                    </div>
                  </br-item>
                  <br-divider></br-divider>
                  <br-item>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <span>
                        <i className="fas fa-envelope mr-2 text-warning"></i>{' '}
                        Contribuinte Notificado
                      </span>
                      <span className="text-small text-muted">Ontem</span>
                    </div>
                  </br-item>
                </br-list>
              </div>
            </br-card-content>
          </br-card>
        </div>

        {/* BLOCO 7: TABELAS DE DADOS (Componente Reutilizável) */}
        <div className="col-12 mb-4">
          <br-card hover>
            <br-card-header>
              <div className="text-weight-semi-bold text-up-01">
                7. Tabelas de Exibição de Dados (Componente Customizado)
              </div>
            </br-card-header>
            <br-card-content>
              <p className="text-small text-muted mb-4">
                Tabela dinâmica gerada através do nosso componente{' '}
                <code>&lt;Table /&gt;</code>. Basta passar as colunas e os
                dados, e ele renderiza o HTML do DSGov automaticamente.
              </p>
              <br-divider class="mb-4"></br-divider>
              <Table
                // Configuração das Colunas
                columns={[
                  { key: 'nup', label: 'NUP do Processo', align: 'left' },
                  { key: 'contribuinte', label: 'Contribuinte', align: 'left' },
                  {
                    key: 'status',
                    label: 'Situação Fiscal',
                    align: 'center',
                    render: (valor, linha) => (
                      <span
                        className={`br-tag ${linha.corBg} text-white text-small`}
                      >
                        {valor}
                      </span>
                    ),
                  },
                  {
                    key: 'valor',
                    label: 'Valor Autuado (R$)',
                    align: 'right',
                    render: (valor) => (
                      <span className="text-bold text-danger">{valor}</span>
                    ),
                  },
                ]}
                // Dados (Simulando o retorno do Python)
                data={[
                  {
                    nup: '12345.000001/2026-00',
                    contribuinte: 'Empresa Alpha LTDA',
                    status: 'Em Análise',
                    corBg: 'bg-info',
                    valor: '150.000,00',
                  },
                  {
                    nup: '12345.000002/2026-11',
                    contribuinte: 'Indústria Beta S/A',
                    status: 'Deferido',
                    corBg: 'bg-success',
                    valor: '0,00',
                  },
                  {
                    nup: '12345.000003/2026-22',
                    contribuinte: 'Comércio Gama EIRELI',
                    status: 'Em Exigência',
                    corBg: 'bg-warning text-black',
                    valor: '45.500,00',
                  },
                ]}
              />
            </br-card-content>
          </br-card>
        </div>

        {/* BLOCO 8: SELEÇÃO E MENUS (Select & Dropdown) */}
        <div className="col-12 mb-4">
          <br-card hover>
            <br-card-header>
              <div className="text-weight-semi-bold text-up-01">
                8. Caixas de Seleção e Menus (Select & Dropdown)
              </div>
            </br-card-header>
            <br-card-content>
              <p className="text-small text-muted mb-4">
                Componentes de múltipla escolha para formulários e menus de
                contexto para ações em processos.
              </p>
              <br-divider class="mb-4"></br-divider>
              <div className="row">
                {/* Exemplo 1: Select Simples (Ideal para Ano, Situação) */}
                <div className="col-md-4 mb-4">
                  <div className="text-bold mb-2">Seleção Única:</div>
                  <br-select
                    label="Ano-Calendário"
                    placeholder="Selecione o ano"
                    options='[
                      { "label": "2026", "value": "2026", "selected": true },
                      { "label": "2025", "value": "2025" },
                      { "label": "2024", "value": "2024" },
                      { "label": "2023", "value": "2023" }
                    ]'
                  ></br-select>
                </div>

                {/* Exemplo 2: Select Múltiplo com Busca (Ideal para Tributos) */}
                <div className="col-md-4 mb-4">
                  <div className="text-bold mb-2">
                    Seleção Múltipla (com Busca):
                  </div>
                  <br-select
                    label="Tipos de Tributo"
                    placeholder="Selecione os tributos"
                    is-multiple
                    show-search-icon
                    select-all-label="Marcar todos"
                    unselect-all-label="Desmarcar todos"
                    options='[
                      { "label": "IRPJ", "value": "irpj" },
                      { "label": "CSLL", "value": "csll" },
                      { "label": "PIS", "value": "pis" },
                      { "label": "COFINS", "value": "cofins" },
                      { "label": "IPI", "value": "ipi" }
                    ]'
                  ></br-select>
                </div>

                {/* Exemplo 3: Dropdown Menu (Ideal para Ações de Processo) */}
                <div className="col-md-4 mb-4 d-flex flex-column">
                  <div className="text-bold mb-2">
                    Menu de Ações (Dropdown):
                  </div>
                  {/* Dropdown alinhado para a esquerda para não vazar a tela */}
                  <div className="mt-2">
                    <br-dropdown placement="bottom-start">
                      <br-button slot="trigger" primary>
                        Ações do Processo
                        <i className="fas fa-caret-down ml-3" slot="icon"></i>
                      </br-button>

                      <br-list slot="target" list-title="Menu de Contexto">
                        <br-item is-interactive>
                          <i
                            className="fas fa-eye mr-2 text-primary-default"
                            slot="start"
                          ></i>
                          Visualizar Dossiê
                        </br-item>
                        <br-item is-interactive>
                          <i
                            className="fas fa-edit mr-2 text-warning"
                            slot="start"
                          ></i>
                          Editar Despacho
                        </br-item>
                        <br-divider></br-divider>
                        <br-item is-interactive>
                          <i
                            className="fas fa-trash mr-2 text-danger"
                            slot="start"
                          ></i>
                          Arquivar Processo
                        </br-item>
                      </br-list>
                    </br-dropdown>
                  </div>
                </div>
              </div>
            </br-card-content>
          </br-card>
        </div>

        {/* BLOCO 9: APENAS O CARD COM O BOTÃO GATILHO */}
        <div className="col-md-6 mb-4">
          <br-card hover>
            <br-card-header>
              <div className="text-weight-semi-bold text-up-01">
                9. Janelas Modais (Modal & Scrim)
              </div>
            </br-card-header>
            <br-card-content>
              <p className="text-small text-muted mb-4">
                Sobreposição de tela usada para confirmar ações irreversíveis ou
                críticas do sistema.
              </p>
              <br-divider class="mb-4"></br-divider>
              <br-button primary onClick={() => setModalAberto(true)}>
                <i className="fas fa-gavel mr-2"></i> Confirmar Autuação
              </br-button>
            </br-card-content>
          </br-card>
        </div>

        {/* BLOCO 10: ENVIO DE ARQUIVOS (UPLOAD)       */}
        <div className="col-md-6 mb-4">
          <br-card hover>
            <br-card-header>
              <div className="text-weight-semi-bold text-up-01">
                10. Envio de Arquivos (Upload)
              </div>
            </br-card-header>
            <br-card-content>
              <p className="text-small text-muted mb-4">
                Área de arrastar e soltar para anexação de provas documentais,
                relatórios e planilhas.
              </p>
              <br-divider class="mb-4"></br-divider>
              <div className="mb-4">
                <br-upload
                  label="Documentos Comprobatórios"
                  multiple
                  accept=".pdf, .xlsx, .csv, image/*"
                >
                  Anexar Arquivos do Processo
                </br-upload>
              </div>

              <div className="mt-4">
                <br-message
                  state="info"
                  show-icon
                  is-inline
                  message="Formatos aceitos: PDF, Excel, CSV e Imagens. Tamanho máximo por arquivo: 50MB."
                ></br-message>
              </div>
            </br-card-content>
          </br-card>
        </div>
      </div>{' '}
      {/* O CÓDIGO DO MODAL FICA AQUI NO FINAL (ROOT) */}
      <br-modal
        show={modalAberto}
        title-text="Confirmação de Ação Fiscal"
        size="medium"
      >
        <div className="p-3">
          <br-message
            state="warning"
            message-title="Atenção"
            message="Esta ação é irreversível e o processo será enviado para a fila de cobrança."
            show-icon
            is-inline
          ></br-message>
          <p className="mt-4 text-weight-medium">
            Tem certeza que deseja aplicar a autuação no valor de R$ 150.000,00
            para a Empresa Alpha LTDA?
          </p>
        </div>

        <div slot="footer" className="d-flex justify-content-end w-100">
          <br-button
            secondary
            class="mr-3"
            onClick={() => setModalAberto(false)}
          >
            Cancelar
          </br-button>
          <br-button
            danger
            onClick={() => {
              setModalAberto(false);
              alert('Autuação confirmada com sucesso!');
            }}
          >
            Sim, Autuar Contribuinte
          </br-button>
        </div>
      </br-modal>
    </div> /* <-- Fim da div animate__fadeIn */
  );
} // <-- Fim absoluto do arquivo
