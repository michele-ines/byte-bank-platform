# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

# byte-bank-platform (Expo)

Estrutura **Feature-first** com Expo Router.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

## Features / Páginas

- Home (com Login) `/`
- Dashboard `/dashboard`
- Meus cartões `/meus-cartoes`
- Investimentos `/investments`
- Outros serviços `/outros-servicos`
- Minha conta `/minha-conta`
- Cadastro `/cadastro`
- Esqueci a senha `/esqueci-senha`

### Scripts

```bash
npm run web       # iniciar no browser
npm run android   # abrir no emulador Android
npm run ios       # abrir no simulador iOS
npm test          # testes com Jest
npm run lint      # lint
```

Mantém o mesmo package e scripts do projeto original.

## Arquitetura

### Stack

- **Expo** + **Expo Router** (web/ios/android)
- **React Native** com **TypeScript**
- **StyleSheet** + **tokens de design** em `src/theme/tokens.ts`
- **ESLint** + **Jest** (mantidos do projeto original)

### Princípios

- **Feature-first**: cada área do produto vive em `src/features/<feature>` e expõe **telas** (screens) e componentes da própria feature.
- **Roteamento por arquivo** (Expo Router): cada arquivo/pasta dentro de `app/` vira uma rota.
- **Layout compartilhado**: `app/_layout.tsx` embrulha as telas com `Header` (variante por rota) e `Footer`.

### Estrutura de pastas (resumo)

```
app/                         # Rotas
  _layout.tsx                # Header + Slot + Footer
  index.tsx                  # Home (Login incluso)
  dashboard/index.tsx
  meus-cartoes/index.tsx
  investments/index.tsx
  minha-conta/index.tsx
  outros-servicos/index.tsx
  cadastro/index.tsx
  esqueci-senha/index.tsx

src/
  theme/
    tokens.ts                # Design tokens globais
  features/
    layout/
      Header.tsx
      Footer.tsx
    home/
      HomeScreen.tsx
    dashboard/
      DashboardScreen.tsx
    cards/
      CardsScreen.tsx
    investments/
      InvestmentsScreen.tsx
    services/
      ServicesScreen.tsx
    auth/
      LoginForm.tsx
      SignupForm.tsx
      ForgotPasswordForm.tsx

assets/                      # fontes, imagens (herdadas)
```

### Header com variantes

- **Home/Auth**: `background: #000000`, `color: #47a138`, menus: `Dashboard`, `Serviços`.
- **Dashboard e internas**: `background: #004d61`, `color: #47a138`, menus: `Início`, `Meus cartões`, `Investimentos`, `Outros serviços`, `Minha conta`.
- A variante é resolvida por `usePathname()` no `Header`.

### Design Tokens

Arquivo: `src/theme/tokens.ts` – espelha as variáveis fornecidas (cores base, utilitárias, tipografia, gradientes).  
Use import direto:

```ts
import { tokens } from "@/src/theme/tokens";
const styles = StyleSheet.create({
  title: { color: tokens.byteColorDash, fontSize: tokens.textLg },
});
```

### Padrões de código

- **Componentes**: `PascalCase` (ex.: `LoginForm`), **arquivos de tela** terminam com `Screen.tsx`.
- **Semântica**: features isolam regras e UI do domínio; evite componentes “globais” até que haja repetição real.
- **Estilo**: `StyleSheet` local ao componente. Se um estilo for usado por muitas telas, promova para `src/theme` ou para uma pasta `ui/` da feature.

### Como criar uma nova feature

1. Crie `src/features/<minha-feature>`.
2. Adicione `MinhaFeatureScreen.tsx` (ou mais arquivos / hooks / serviços).
3. Crie a rota em `app/<minha-rota>/index.tsx` exportando o screen.
4. Se precisar entrar no header, adicione o link em `src/features/layout/Header.tsx`.

### Estado, dados e serviços (futuro)

O exemplo atual usa estado local. Se precisar de estado global/HTTP:

- Context em `src/core/state` ou `src/core/services` (a criar).
- Camadas por feature: `src/features/<feature>/services`, `hooks`, `types`.

### Testes

- Jest está configurado do template original. Recomendado criar testes por feature em `src/features/<feature>/__tests__`.

## Por que existem `app/` e `src/`?

- **`app/`** é a pasta **especial do Expo Router**. O roteador lê o que está aqui para montar as rotas; arquivos e pastas viram URLs. Mantemos essa pasta **fina**, com `_layout.tsx` e arquivos que apenas **apontam** para as telas reais.
- **`src/`** guarda o **código da aplicação** (features, telas, componentes, hooks, serviços e tema). Assim aplicamos **Feature-first** sem misturar regra de negócio com o roteamento.

Benefícios: separação de responsabilidades, escalabilidade, organização clara por domínio e reuso das mesmas telas em diferentes rotas.

### Como criar uma página nova

1. Crie a tela em `src/features/<minha-feature>/MinhaTelaScreen.tsx`.
2. Crie a rota em `app/<minha-rota>/index.tsx` exportando o screen:

```ts
// app/minha-rota/index.tsx
import MinhaTela from "../../src/features/minha-feature/MinhaTelaScreen";
export default MinhaTela;
```

3. (Opcional) adicione o link no `src/features/layout/Header.tsx` caso a página deva aparecer no menu.

## Boas práticas para React Native + Expo (Feature-first com `app/` + `src/`)

- **Separação de responsabilidades**: `app/` cuida do **roteamento** (Expo Router) e `src/` concentra **domínio/feature** (telas, componentes, hooks, serviços, tema).
- **Files finos em `app/`**: cada rota exporta uma tela real de `src/features/...`. Facilita refatoração e reuso de telas.
- **Feature-first**: tudo que pertence à mesma área do produto vive junto (`src/features/<feature>`).
- **Testes por feature**: mantenha os testes ao lado da feature (`__tests__`), facilita manutenção.
- **Design tokens centralizados**: estilos/cores/tipografia em `src/theme/tokens.ts`.
- **Evolução de estado**: comece com estado local; quando crescer, crie camadas por feature (`services`, `hooks`, `types`).

## Aliases de import (opcional)

> Mantivemos o _package_ original. Se quiser habilitar **imports curtos**, siga estes passos **opcionais**:

1. Instale o plugin:

```bash
npm i -D babel-plugin-module-resolver
```

2. Ajuste o **`tsconfig.json`** (adição de `baseUrl` e `paths`):

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["*"],
      "@/src/*": ["src/*"]
    }
  }
}
```

3. Ajuste o **`babel.config.js`** adicionando o plugin:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": ".",
            "@/src": "./src",
          },
        },
      ],
    ],
  };
};
```

4. Reinicie o Metro bundler.

**Uso**:

```ts
import { tokens } from "@/src/theme/tokens";
import DashboardScreen from "@/src/features/dashboard/DashboardScreen";
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
