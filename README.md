# TimeVault

This project consists of multiple components: web, server, and mobile. Follow the instructions below to set up and run each part.

## Web

1. Clone the project:
    ```bash
    git clone https://github.com/ogustavohp/timevault.git
    ```

2. Navigate to the web directory and install dependencies:
    ```bash
    cd timevault/web
    npm install
    ```

3. Create the .env.local file in the web directory and add the NEXT_PUBLIC_GITHUB_CLIENT_ID variable with your GitHub Client ID.

4. In the `api.ts` file in `timevault/web`, change the baseURL to your internet's IP.

5. Run the web application:
    ```bash
    npm run dev
    ```

## Server

1. In the project's root directory, install server dependencies:
    ```bash
    cd timevault/server
    npm install
    ```

2. Create the .env file in the server directory and add the following variables:
    - DATABASE_URL
    - GITHUB_CLIENT_ID
    - GITHUB_CLIENT_SECRET

3. Run the server:
    ```bash
    npm run dev
    ```

## Mobile

1. In the mobile directory, install dependencies:
    ```bash
    cd timevault/mobile
    npm install
    ```

2. Create the .env file in the mobile directory and add the EXPO_PUBLIC_GITHUB_CLIENT_ID variable.

3. In the `api.ts` file in `timevault/mobile/src/lib`, change the baseURL to your internet's IP.

4. Run the mobile application:
    ```bash
    npm run start
    ```

### Notes

- The Authorization callback URL for the web project should be /api/auth/callback.
- For the mobile project, remove the commented code from lines 44 to 48 in the GitHub Authorization callback URL and replace it with the returning path.

