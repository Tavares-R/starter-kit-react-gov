// src/components/Table.tsx
import type { ReactNode } from 'react';

// Define como cada coluna deve se comportar
export interface TableColumn {
  key: string; // O identificador do dado (ex: 'nup')
  label: string; // O título que aparece no cabeçalho (ex: 'NUP do Processo')
  align?: 'left' | 'center' | 'right'; // Alinhamento opcional
  // Esta função opcional permite desenhar botões ou tags customizadas dentro da célula!
  render?: (valor: any, linhaCompleta: any) => ReactNode;
}

interface TableProps {
  columns: TableColumn[]; // A configuração das colunas
  data: any[]; // Os dados que virão do Python
}

export function Table({ columns, data }: TableProps) {
  return (
    <div className="br-table">
      <table>
        {/* CABEÇALHO DINÂMICO */}
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={`text-${col.align || 'left'}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* CORPO DA TABELA DINÂMICO */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  data-th={col.label}
                  className={`text-${col.align || 'left'}`}
                >
                  {/* Se a coluna tiver um visual customizado (como a Tag), usa o render. 
                      Se não tiver, apenas imprime o texto puro. */}
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
