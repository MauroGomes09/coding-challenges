# Coding Challenges
Solutions for algorithmic challenges from HackerRank and LeetCode

Repositório dedicado ao estudo de Algoritmos e Estrutura de Dados.
Aqui estão minhas soluções para desafios do **HackerRank** e **LeetCode**, implementadas em **JavaScript (Node.js)**.

## Estrutura do Projeto

Os desafios estão organizados por plataforma e categoria/dificuldade:

- **/hackerrank**: Organizado por tópicos (Algorithms, Data Structures, SQL).
- **/leetcode**: Organizado por dificuldade (Easy, Medium, Hard).

## Como Rodar Localmente

Para testar as soluções na sua máquina, siga os passos abaixo:

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.

### Executando um Desafio
Este projeto utiliza um arquivo `input.txt` na raiz para simular a entrada de dados (stdin).

1. Cole a entrada do desafio no arquivo `input.txt`.
2. Execute o comando no terminal (Exemplo para PowerShell):

```powershell
# O comando lê o input.txt e envia para o script via Pipe
Get-Content input.txt | node hackerrank/algorithms/nome-do-arquivo.js
```
Nota Técnica: Os scripts foram adaptados para rodar localmente. A função main() imprime o resultado diretamente no console (console.log) em vez de gravar em variáveis de ambiente (OUTPUT_PATH) como no ambiente original do HackerRank.

Mantido por Mauro Oliveira
