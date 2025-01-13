# Login Application

Este é um projeto de aplicação de login desenvolvido com React Native. Ele permite que os usuários se registrem, façam login e acessem sua conta. O objetivo é garantir uma interface amigável e segura para autenticação de usuários.

## Funcionalidades

- Cadastro de usuário com validações de email e senha.
- Login com autenticação segura.
- Recuperação de senha (Esqueceu sua senha?).

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu sistema:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Expo CLI](https://expo.dev/) (se aplicável)
- Um gerenciador de pacotes, como `npm` ou `yarn`
- [Git](https://git-scm.com/)

## Como rodar a aplicação

Siga as etapas abaixo para configurar e rodar a aplicação:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Carlosfne/login.git
   cd login
   ```

2. **Instale as dependências:**

   Usando `npm`:

   ```bash
   npm install
   ```

   Ou usando `yarn`:

   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**

   Usando `npm`:

   ```bash
   npm start
   ```

   Ou usando `yarn`:

   ```bash
   yarn start
   ```

4. **Execute a aplicação em um dispositivo ou emulador:**

   - Para dispositivos físicos: Use o aplicativo [Expo Go](https://expo.dev/client) para escanear o QR Code exibido no terminal ou navegador.
   - Para emuladores: Certifique-se de ter um emulador Android ou iOS configurado e rodando.

## Como cadastrar um usuário

1. Ao iniciar a aplicação, você será redirecionado para a tela de login.
2. Clique na opção **"Não tem uma conta? Cadastre-se"** para acessar a tela de cadastro.
3. Preencha os campos de email e senha:
   - A senha deve ter no mínimo 6 caracteres, incluindo:
     - Uma letra maiúscula
     - Uma letra minúscula
     - Um caractere especial (por exemplo: `@`, `#`, `$`, etc.)
4. Confirme sua senha.
5. Pressione o botão **"Registrar"** para finalizar o cadastro.

Se o registro for bem-sucedido, uma mensagem de sucesso será exibida e você será redirecionado para a tela inicial.

## Estrutura do Projeto

```plaintext
/src
  /components       # Componentes reutilizáveis, como Input e Button
  /context          # Contextos para gerenciamento de estado global, como AuthContext
  /screens          # Telas principais da aplicação (Login, Register)
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

Se você tiver dúvidas ou problemas ao executar o projeto, entre em contato pelo email ou abra um issue no repositório.
