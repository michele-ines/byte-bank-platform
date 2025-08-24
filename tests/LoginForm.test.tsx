import { LoginForm } from '@/src/features/auth/LoginForm';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import React from 'react';
import { Alert } from 'react-native';

jest.mock('expo-router', () => ({
  router: {
    replace: jest.fn(),
    push: jest.fn(),
  },
  Link: 'Link',
}));

jest.spyOn(Alert, 'alert');

jest.mock('../assets/images/login/ilustracao-login.svg', () => 'LoginIllustration');

describe('<LoginForm />', () => {
  beforeEach(() => {
    (router.replace as jest.Mock).mockClear();
    (router.push as jest.Mock).mockClear();
    (Alert.alert as jest.Mock).mockClear();
  });

  it('renderiza todos os elementos do formulário corretamente', () => {
    render(<LoginForm />);

    expect(screen.getByText('Login')).toBeTruthy();
    expect(screen.getByText('Email')).toBeTruthy();
    expect(screen.getByPlaceholderText('Digite seu email')).toBeTruthy();
    expect(screen.getByText('Senha')).toBeTruthy();
    expect(screen.getByPlaceholderText('Digite sua senha')).toBeTruthy();
    expect(screen.getByText('Esqueci a senha!')).toBeTruthy();
    expect(screen.getByText('Acessar')).toBeTruthy();
    expect(screen.getByText('Criar conta')).toBeTruthy();
  });

  it('atualiza os campos de email e senha quando o utilizador digita', () => {
    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');

    fireEvent.changeText(emailInput, 'teste@email.com');
    fireEvent.changeText(passwordInput, 'senha123');

    expect(emailInput.props.value).toBe('teste@email.com');
    expect(passwordInput.props.value).toBe('senha123');
  });

  it('chama router.replace com "/dashboard" ao submeter com dados válidos', () => {
    render(<LoginForm />);

    fireEvent.changeText(screen.getByPlaceholderText('Digite seu email'), 'teste@email.com');
    fireEvent.changeText(screen.getByPlaceholderText('Digite sua senha'), 'senha123');
    fireEvent.press(screen.getByText('Acessar'));

    expect(router.replace).toHaveBeenCalledWith('/dashboard');
    expect(Alert.alert).not.toHaveBeenCalled();
  });

  it('mostra um alerta se o login for tentado com campos vazios', () => {
    render(<LoginForm />);

    fireEvent.press(screen.getByText('Acessar'));

    expect(Alert.alert).toHaveBeenCalledWith("Atenção", "Informe e-mail e senha.");
    expect(router.replace).not.toHaveBeenCalled();
  });

  it('chama router.push com "/cadastro" quando o botão "Criar conta" é pressionado', () => {
    render(<LoginForm />);

    fireEvent.press(screen.getByText('Criar conta'));

    expect(router.push).toHaveBeenCalledWith('/cadastro');
  });
});
