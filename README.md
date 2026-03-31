# 🏛️ Starter Kit: Boilerplate de Arquitetura Desacoplada

Desenvolvido pelo **LABIT 07**
![Status](https://img.shields.io/badge/Ambiente-Cont%C3%81gil-blue)
![Tecnologia](https://img.shields.io/badge/React-19-61dafb)
![Design](https://img.shields.io/badge/Padr%C3%A3o-DSGov-green)

O desenvolvimento tradicional de interfaces diretamente via scripts Jython possui um legado de robustez e estabilidade incomparáveis na instituição. No entanto, com a adoção do **Padrão Digital de Governo (DSGov)** e a necessidade de interfaces cada vez mais dinâmicas, fez-se necessário o uso de ferramentas nativas de web design.

Este Starter Kit propõe uma **Arquitetura Desacoplada (Client-Server)**, operando da seguinte forma:

- **Backend (Jython/ContÁgil):** Focado exclusivamente na regra de negócio, segurança, processamento em lote e acesso a dados.
- **Frontend (React/Vite):** Focado exclusivamente na renderização da interface, fluidez de navegação e aplicação dos Web Components do DSGov.

---

## 🚀 1. Configurando o Ambiente de Desenvolvimento

Para iniciar um novo projeto utilizando esta arquitetura, você precisará configurar os dois "lados" da aplicação.

### 1.1. O Servidor (Backend Python)

1. Abra o sistema **ContÁgil**.
2. Baixe o script base `starter_kit_react.py` disponibilizado pela equipe do LABIT 07 (ou crie um novo script colando o código base).
3. Execute o script. Ele atuará como o seu servidor local e garantirá que as dependências do sistema (como o plugin e-Navegador) estejam ativas.

### 1.2. A Interface (Frontend React)

É necessário ter o [Node.js](https://nodejs.org/) instalado em sua estação de trabalho.

1. Clone este repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
   ```
2. Acesse a pasta do projeto e instale as dependências:
   ```bash
   cd SEU_REPOSITORIO
   npm install
   ```
3. Inicie o servidor de desenvolvimento local:
   ```bash
   npm run dev
   ```
   > **Nota:** Com o script Python rodando no ContÁgil e o `npm run dev` rodando no seu terminal, a aba do e-Navegador se conectará automaticamente à sua interface em tempo real.

---

## 🌉 2. O Guia Definitivo: Comunicação Python ↔ React

Na arquitetura desacoplada, o React (JavaScript) e o ContÁgil (Python/Java) operam em motores diferentes. Para que eles se comuniquem, utilizamos **Injeção de Dependência** através do objeto global `window` e trafegamos os dados utilizando o formato universal **JSON**.

Abaixo está o ciclo de vida completo para criar uma nova funcionalidade (ex: Buscar dados de um Processo).

### Passo A: Criando a regra de negócio no Python (`starter_kit.py`)

No seu script rodando no ContÁgil, crie a função que fará o serviço.

- **Regra de Ouro:** O Python sempre deve retornar uma `String` no formato JSON. Variáveis originárias do Java devem ser convertidas usando `str()` antes da serialização.

```python
import json

def buscar_dados_processo(numero_nup):
    try:
        # 1. Simulação de busca no sistema interno
        # processo = contagil.buscarProcesso(numero_nup)

        # 2. Montagem do dicionário de resposta
        dados = {
            "nup": str(numero_nup),
            "status": "Em Análise",
            "contribuinte": "Empresa Fictícia LTDA"
        }

        # 3. Serialização: Transforma o dicionário em um texto JSON universal
        return json.dumps({"sucesso": True, "dados": dados})

    except Exception as e:
        # Tratamento de erro padronizado
        return json.dumps({"sucesso": False, "erro": str(e)})
```

### Passo B: Expondo a função para o Frontend

Ainda no Python, você deve registrar essa nova função no "cardápio" de rotas públicas (`api_publica`). Apenas as funções declaradas aqui poderão ser acessadas pela interface.

```python
api_publica = {
    "obter_usuario_sistema": obter_usuario_sistema,
    "fechar_sistema": fechar_sistema,
    "buscar_dados_processo_python": buscar_dados_processo # <-- Sua nova função
}

# Injeta a API no motor do navegador
navegadores.adicionarFuncoes(api_publica)
```

### Passo C: Tipando a função no React (`src/vite-env.d.ts`)

No projeto React, precisamos avisar ao compilador TypeScript que essa nova função foi injetada pelo Python. Isso evita erros de compilação e habilita o autocompletar na sua IDE.

```typescript
declare global {
  interface Window {
    obter_usuario_sistema: () => Promise<any>;
    fechar_sistema: () => Promise<any>;
    // Declare a nova função e os parâmetros que ela exige:
    buscar_dados_processo_python: (nup: string) => Promise<any>;
  }
}
```

### Passo D: Consumindo os dados na Tela (`src/App.tsx`)

Agora, basta chamar a função a partir de um clique de botão ou carregamento de tela. O React fará a chamada assíncrona (`await`) e converterá o texto JSON de volta para um objeto JavaScript manipulável.

```javascript
const lidarComBusca = async (nupDigitado) => {
  try {
    // 1. Chama a função injetada pelo Python
    const respostaTexto = await window.buscar_dados_processo_python(
      nupDigitado
    );

    // 2. Converte o JSON em Objeto JS
    const resposta =
      typeof respostaTexto === 'string'
        ? JSON.parse(respostaTexto)
        : respostaTexto;

    // 3. Aplica a lógica de interface
    if (resposta.sucesso) {
      console.log('Status do Processo:', resposta.dados.status);
      // setDadosTabela(resposta.dados) -> Atualiza o state do React
    } else {
      alert('Erro na busca: ' + resposta.erro);
    }
  } catch (erro) {
    console.error('Falha de comunicação com o backend', erro);
  }
};
```

---

## 🎨 3. Padrão Digital de Governo (DSGov) e o Catálogo

Para garantir a uniformidade visual dos sistemas federais, este boilerplate já vem configurado com as fontes (Rawline), ícones (FontAwesome) e estilos do **DSGov**.

Para facilitar o desenvolvimento, nós incluímos um **Catálogo de Componentes (Showcase)** interativo.

1. Inicie a aplicação no modo de desenvolvimento.
2. Clique no botão superior direito **"Ver Exemplos (Catálogo)"**.
3. Você terá acesso imediato a exemplos prontos, funcionais e com o código-fonte correto para:
   - Entradas de texto e máscaras (`<br-input>`).
   - Banners de Feedback (`<br-message>`).
   - Spinners de carregamento (`<br-loading>`).
   - Botões de ação e Checkboxes governamentais.

Sempre que precisar criar uma nova tela, copie os componentes do Showcase para o seu `App.tsx`.

---

## 📚 Documentação Oficial Técnica (Serpro)

Embora o nosso **Showcase** cubra os casos de uso mais comuns, você pode consultar a biblioteca completa de Web Components diretamente no portal de engenharia do Serpro:

👉 [**Portal de Web Components - DSGov (Estaleiro Serpro)**](https://next-webcomponent-ds.estaleiro.serpro.gov.br/docs/components/avatar/)

### O que você encontrará lá:

- **API Reference:** Lista de todos os atributos (Props) que cada tag aceita.
- **Slots:** Como injetar conteúdo em partes específicas dos componentes (ex: `slot="header"`).
- **Events:** Como capturar interações específicas (ex: `brDidSelect`).
- **Playground:** Um ambiente para testar o comportamento dos componentes em tempo real.

---

## 📦 4. Deploy e Produção (Integração Final)

Após a conclusão do desenvolvimento visual e das integrações de dados, é necessário empacotar o React e anexá-lo ao script do ContÁgil para distribuição oficial.

1. **Geração da Build:** No terminal do seu editor (VSCode), interrompa o servidor local e execute o comando de compilação:
   ```bash
   npm run build
   ```
2. **Compactação:** O Vite criará uma pasta chamada `dist`. Acesse esta pasta, selecione todo o seu conteúdo (os arquivos, não a pasta em si) e compacte-os em um arquivo `.zip` (ex: `interface.zip`).
3. **Anexando ao ContÁgil:** Abra o seu script `.py` no sistema ContÁgil e navegue até a aba lateral **"Anexos"**.
4. **Variável Global:** Inclua o seu arquivo `.zip` e nomeie a variável do anexo **OBRIGATORIAMENTE** como `FRONTEND` (tudo em maiúsculo).
5. **Chave de Produção:** No seu código Python, altere a flag de ambiente para sinalizar ao servidor que ele não deve mais procurar o modo desenvolvedor:
   ```python
   EM_PRODUCAO = True
   ```

Salve seu script no ContÁgil. A partir deste momento, ao executar o sistema, o Jython automaticamente extrairá o `.zip` injetado na memória, levantará o servidor web interno e renderizará sua aplicação de forma completamente autônoma e autossuficiente.

## 📂 Estrutura de Diretórios Recomendada

- `src/assets/` - Imagens estáticas e logos.
- `src/components/` - Pedaços visuais isolados (Botões, Modais, Tabelas).
- `src/hooks/` - Lógicas reutilizáveis do React.
- `src/services/` - Arquivos de comunicação com o Python/APIs.
- `src/App.tsx` - O orquestrador central das telas.
