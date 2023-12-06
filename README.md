# TimeVault

Este é um projeto que consiste em várias partes: web, server e mobile. Siga as instruções abaixo para configurar e executar cada uma das partes.

## Web

1. Clone o projeto:
    ```bash
    git clone https://github.com/ogustavohp/timevault.git
    ```

2. Navegue até o diretório web e instale as dependências:
    ```bash
    cd timevault/web
    npm install
    ```

3. Crie o arquivo .env.local no diretório web e adicione a variável NEXT_PUBLIC_GITHUB_CLIENT_ID com seu GitHub Client ID.

4. No arquivo `api.ts` em `timevault/web`, altere a baseURL para o IP da sua internet.

5. Execute a aplicação web:
    ```bash
    npm run dev
    ```

## Server

1. No diretório principal do projeto, instale as dependências do servidor:
    ```bash
    cd timevault/server
    npm install
    ```

2. Crie o arquivo .env no diretório server e adicione as seguintes variáveis:
    - DATABASE_URL
    - GITHUB_CLIENT_ID
    - GITHUB_CLIENT_SECRET

3. Execute o servidor:
    ```bash
    npm run dev
    ```

## Mobile

1. No diretório mobile, instale as dependências:
    ```bash
    cd timevault/mobile
    npm install
    ```

2. Crie o arquivo .env no diretório mobile e adicione a variável EXPO_PUBLIC_GITHUB_CLIENT_ID.

3. No arquivo `api.ts` em `timevault/mobile/src/lib`, altere a baseURL para o IP da sua internet.

4. Execute a aplicação mobile:
    ```bash
    npm run start
    ```

### Observações

- A Authorization callback URL do projeto web deve ser em /api/auth/callback.
- Para o projeto mobile, remova o código comentado nas linhas 44 a 48 do Authorization callback URL no GitHub e coloque o caminho que retorna.

