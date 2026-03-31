/// <reference types="vite/client" />

export {};

declare global {
  // 1. Definição das funções injetadas pelo Python no objeto Window
  interface Window {
    fechar_sistema: () => Promise<any>;
    obter_usuario_sistema: () => Promise<any>;
  }

  // 2. Definição das tags customizadas do DSGov (Web Components) para o React
  namespace JSX {
    interface IntrinsicElements {
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
      'br-checkbox': any;
      'br-radio': any;
      'br-switch': any;
      'br-loading': any;
      'br-magic-button': any;
      [elemName: string]: any; // Permite qualquer tag que comece com br-
    }
  }
}
