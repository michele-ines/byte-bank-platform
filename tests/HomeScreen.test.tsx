// tests/HomeScreen.test.tsx
import HomeScreen from "@/src/features/home/HomeScreen";
import { render } from "@testing-library/react-native";

describe("<HomeScreen />", () => {
  it("renderiza o herói e o formulário de login", () => {
    const { getByText, getByPlaceholderText, getByRole } = render(<HomeScreen />);

    // Hero / mensagens
    getByText(/experimente mais liberdade/i);
    getByText(/crie sua conta/i);

    // Form
    getByText(/^login$/i);
    getByText(/^e-mail$/i);
    getByPlaceholderText("Digite seu email cadastrado");
    getByText(/^senha$/i); // <-- ancorado para não pegar o link
    getByPlaceholderText("Digite sua senha");

    // Link "Esqueci a senha!"
    getByRole("link", { name: /^esqueci a senha!?$/i });

    // Botão
    getByText(/^acessar$/i);
  });
});
