# Configuração do Husky em Repositório GitHub

Este projeto demonstra a configuração do Husky em um repositório GitHub para garantir a qualidade do código através de hooks de pré-commit e pré-push.

## Sobre o Projeto

O objetivo deste projeto é implementar hooks Git que automaticamente:
- Executem a compilação do código no pré-commit
- Executem todos os testes no pré-push
- Verifiquem boas práticas de codificação (linting)

Desta forma, garantimos que apenas código de qualidade seja integrado ao repositório central.

## Estrutura do Projeto

```
.
├── .husky/                # Diretório com os hooks do Git
│   ├── pre-commit         # Hook executado antes de cada commit
│   └── pre-push           # Hook executado antes de cada push
├── src/                   # Código-fonte da aplicação
│   └── calculator.js      # Implementação de uma calculadora simples
├── tests/                 # Testes automatizados
│   └── calculator.test.js # Testes para a calculadora
├── screenshots/           # Capturas de tela demonstrando os hooks
├── index.js               # Arquivo principal da aplicação
├── .eslintrc.json         # Configuração do ESLint
├── package.json           # Dependências e scripts do projeto
└── relatorio-husky.md     # Relatório detalhado da configuração
```

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **Husky**: Gerenciamento de hooks do Git
- **ESLint**: Verificação de padrões e boas práticas de código
- **Jest**: Framework de testes

## Configuração

Para configurar o projeto em seu ambiente local:

1. Clone o repositório:
   ```bash
   git clone https://github.com/MarceloAssis123/Ponderada-M10-S3-Husky.git
   cd Ponderada-M10-S3-Husky
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

Os hooks do Husky serão automaticamente configurados durante a instalação.

## Hooks Configurados

### Hook de Pré-commit

O hook de pré-commit executa:
1. Verificação de código com ESLint
2. Compilação do projeto

Se qualquer uma dessas etapas falhar, o commit será abortado.

### Hook de Pré-push

O hook de pré-push executa:
1. Todos os testes com Jest

Se os testes falharem, o push será abortado.

## Testando a Aplicação

Para testar manualmente a aplicação:

1. Execute os testes:
   ```bash
   npm test
   ```

2. Execute a verificação de código:
   ```bash
   npm run lint
   ```

3. Execute a compilação:
   ```bash
   npm run build
   ```

## Demonstração dos Hooks

Para ver os hooks em ação:

1. Faça uma alteração em qualquer arquivo
2. Tente fazer um commit:
   ```bash
   git add .
   git commit -m "teste: verificando hook de pré-commit"
   ```
   Observe que o hook de pré-commit será executado.

3. Tente fazer um push:
   ```bash
   git push
   ```
   Observe que o hook de pré-push será executado.

## Documentação Adicional

Para mais detalhes sobre a configuração e implementação, consulte o [relatório detalhado](relatorio-husky.md).

## Autor

Marcelo Assis

## Licença

Este projeto está licenciado sob a licença ISC. 