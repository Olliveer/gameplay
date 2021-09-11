<h1 align="center">
  <img alt="GamePlay" height="80" title="Plant Manager" src=".github/logo.png" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033">
</p>

![cover](.github/cover.png?style=flat)

## :hammer_and_wrench: Features

- [x] Autenticação Social OAuth2 com servidor do Discord.
- [x] Obtém perfil do usuário cadastro no Discord (username e avatar);
- [x] Lista os servidores do Discord que o usuário faz parte;
- [x] Permite realizar o agendamento de partidas;
- [x] Permite filtrar as partidas por categoria;
- [x] Exibe se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
- [x] Compartilha o convite para ingressar no servidor do usuário;
- [x] Permite redirecionar o usuário para o seu próprio servidor;
- [x] Disponibiliza a função de Logout.

## ✨ Tecnologias

- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)
- Context API
- [Async Storage](https://docs.expo.dev/versions/v41.0.0/sdk/async-storage/)
- Vector Icons
- React Native Svg e Svg Transform
- [Axios](https://www.npmjs.com/package/axios)
- Gradient colors
- [OAuth2 Discord](https://discord.com/developers/docs/topics/oauth2)
- [Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font)
- React Navigation Stack
- React Native Gesture Handler
- [Expo AuthSession](https://docs.expo.dev/versions/latest/sdk/auth-session/)
- React Native Share
- Deep Link

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/991338130828322960). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```cl
expo start
```

Lembre-se de criar o seu App no servidor do Discord para obter as credencias de autenticação. Em seguida, defina no arquivo .env as configurações do seu App (remova o example do arquivo .env.example).

```cl
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<br />

[![image](https://img.shields.io/badge/😎%20José%20Oliveira,%202021-LinkedIn-E51C44?style=flat-square)](https://www.linkedin.com/in/joseooliveira/)
