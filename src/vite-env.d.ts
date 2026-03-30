// src/vite-env.d.ts
/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    // Web Components Nativos do DSGov
    'br-header': any;
    'br-footer': any;
    'br-card': any;
    'br-card-header': any;
    'br-card-content': any;
    'br-input': any;
    'br-button': any;
    'br-list': any;
    'br-item': any;
    'br-divider': any;
    'br-tag': any;
    'br-message': any;
    [elemName: string]: any; // Libera qualquer outra tag br- que o governo inventar
  }
}

// Funções globais que o Python vai injetar no navegador
declare global {
  interface Window {
    // O novato vai adicionar as funções específicas do sistema dele aqui depois
    fechar_sistema: () => Promise<any>;
    obter_usuario_sistema: () => Promise<any>;
  }
}
