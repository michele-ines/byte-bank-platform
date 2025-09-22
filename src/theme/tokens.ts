import { DimensionValue } from "react-native";

export const tokens = {
  // 🎨 Cores Base
  byteBgDefault: "#ffffff",
  byteBgDashboard: "#e4ede3",
  byteTextMediumGray: "#767676",
  byteColorBlack: "#000000",
  byteColorOverlay: "rgba(0,0,0,0.5)",
  byteColorDash: "#004d61",
  byteColorDash2: "#0a4956",
  byteColorNeutral600: "#8b8b8b",
  byteColorGreen50: "rgba(71, 161, 56, 0.5)",

  // 🚨 Cores Utilitárias
  byteColorError: "#bf1313",
  byteColorRed500: "#bd3737",
  byteColorOrange500: "#ff5031",
  byteColorOrange300: "#f1823d",
  byteColorGreen500: "#47a138",
  byteColorGreen100: "#f8f8f8",
  byteColorBlue100: "#b6dde5",
  byteColorBlue500: "#2567f9",
  byteColorPurple500: "#8f3cff",
  byteColorMagenta500: "#ff3c82",
  byteColorWhite: "#ffffff",
  colorTransparent: "transparent" as const, // 👈 novo

  // ⚪ Escala de Cinza
  byteGray50: "#f9fafb",

  byteGray100: "#f3f4f6",
  byteGray200: "#e5e7eb",
  
  byteGray300: "#d1d5db",
  byteGray350: "#aaa",
  byteGray400: "#9ca3af",
  byteGray450: "#777",
  byteGray500: "#6b7280",

  byteGray600: "#4b5563",
  byteGray700: "#374151",
  byteGray800: "#1f2937",
  byteGray900: "#111827",
  byteGray: "#CBCBCB",

  // 🌈 Gradientes
  gradientGreen: ["#1ec88d", "#58fcb4"],
  gradientTealFrom: "#004d61",
  gradientTealTo: "#ffffff",

  // 🖋️ Tipografia
  fontInter: "Inter, System",
  textXs: 12,
  textSm: 14,
  textBase: 16,
  textMd: 18,
  textLg: 20,
  textXl: 24,
  fontNormal: "400" as const,
  fontMedium: "500" as const,
  fontSemibold: "600" as const,
  fontBold: "700" as const,
  fontExtraBold: "800" as const,
  lineHeightTight: 16,
  lineHeightNormal: 20,
  lineHeightRelaxed: 24,

  // 📐 Radius
  radiusMini: 2,
  radiusSm: 8,
  radiusMd: 12,
  radiusLg: 16,
  radiusX: 70,
  radiusXl: 999,

  // 👤 Avatar
  avatarSm: 40,
  avatarMd: 60,
  avatarLg: 80,

  // 📏 Spacing
  spacing2Xs: 4,
  spacingXs: 8,
  spacing2Sm: 10,
  spacingSm: 12,
  spacingMd: 16,
  spacingMl: 20,
  spacingLg: 24,
  spacingXl: 32,
  spacingXxl: 40,

  // 🔑 Extras
  illustrationSignupHeight: 150,
  logoWidth: 100,
  logoHeight: 28,

  // 📐 Border
  borderLeft0: 0,
  borderWidthThin: 1,
  borderWidthThick: 1.5,

  // 📐 Height
  height80: 80,
  height50: 50,
  height2: 2,
  height12: 12,
  minHeight: 220,
  heightModalMax: "85%" as DimensionValue,
  height50Percent: "50%" as DimensionValue,

  // 📐 Modal
  modalTopPosition: "30%" as DimensionValue,
  width45Percent: "45%" as DimensionValue,

  // 📐 Width
  width220: 220,
  width150: 150,
  width0: 0,
  width12: 12,
  width20: 20,

  // 📐 Layout & Dimensões
  flex1: 1,
  flexRow: "row" as const,
  flexColumn: "column" as const,

  positionAbsolute: "absolute" as const,
  positionRelative: "relative" as const,

  alignCenter: "center" as const,
  alignFlexStart: "flex-start" as const,
  alignFlexEnd: "flex-end" as const,

  justifyCenter: "center" as const,
  justifyBetween: "space-between" as const,
  justifyEnd: "flex-end" as const,
  justifyStart: "flex-start" as const, // 👈 novo

  widthFull: "100%" as DimensionValue,
  width90Percent: "90%" as DimensionValue,

  // 📄 Textos
  textAlignCenter: "center" as const,
  textAlignLeft: "left" as const,
  textAlignRight: "right" as const, // 👈 opcional
  textDecorationUnderline: "underline" as const,

  // 🌑 Overlay
  byteOverlay: "rgba(0,0,0,0.5)",

  // 🎯 Ícones
  iconXs: 12,
  iconSm: 16,
  iconMd: 20,
  iconLg: 24,

  // 📱 Breakpoints
  breakpointLg: 1024,

  // 🖼️ Imagens de cartão
  cardImageWidth: 327,
  cardImageHeight: 164,
  cardImageSmallWidth: 280,
  cardImageSmallHeight: 148,

  // 🔘 Botões
  buttonHeight: 48,
  buttonMaxWidth: 320,
  buttonMinWidth: 140,

  // 🌑 Sombra (painéis)
  shadowColor: "#000000",
  shadowOpacity: 0.06,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowElevation: 2,

  // 📐 Content
  contentPaddingBottom: 24,

  // 🎯 Badge
  badgeActiveBg: "#E7F6EE",
  badgeActiveBorder: "#A5D6BD",
  badgeActiveText: "#256B45",
  badgeBlockedBg: "#FDEAEA",

  // 📐 Sombra / Indicator
  heightIndicator: 20,
  shadowOffsetWidth: 0,
  shadowOffsetHeight: 2,

  // 📝 Textos do WidgetSettingsModal & PreferencesButton
  textPersonalizarWidgets: "Personalizar Widgets",
  textEscolhaWidgets: "Escolha quais widgets deseja exibir no painel",
  textAlertaGastos: "Alerta de gastos",
  textMetaEconomia: "Meta de economia",
  textDescricaoGastos:
    "Monitore seus gastos mensais e receba alertas quando se aproximar do limite definido.",
  textDescricaoEconomia: "Defina metas de economia e acompanhe seu progresso.",
  textPreviewWidget: "Prévia do widget",
  textPreviewGastos:
    "Visualize seus gastos em tempo real e receba alertas quando atingir 80% do limite.",
  textPreviewEconomia:
    "Acompanhe o progresso com barra de progresso e celebre conquistas.",
  textLimiteAtual: "Limite atual",
  textGasto: "Gasto",
  textMetaAtual: "Meta atual",
  textEconomizado: "Economizado",
  textCancelar: "Cancelar",
  textConfirmar: "Confirmar",

  // 🎯 Valores de preview
  valorLimiteAtual: "R$ 2.000",
  valorGasto: "R$ 0",
  valorMetaAtual: "R$ 3.000",
  valorEconomizado: "R$ 0",

  // ♿ Labels de acessibilidade
  a11ySpendingAlert: "Ativar ou desativar alerta de gastos",
  a11yToggleSpendingAlert: "Alternar alerta de gastos",
  a11ySavingsGoal: "Ativar ou desativar meta de economia",
  a11yToggleSavingsGoal: "Alternar meta de economia",
  a11yCancelar: "Cancelar personalização",
  a11yConfirmar: "Confirmar personalização",
  a11yAbrirWidgetPrefs: "Abrir personalização de widgets",
  a11yMeusCartoes: "Meus cartões",
  a11yConfigurar: "Configurar cartão",

  // 📝 Textos do SavingsGoalWidget
  textProgresso: "Progresso:",
  textParabens: "🎉 Parabéns! Você atingiu sua meta!",

  // 📝 Textos do SpendingAlertWidget
  textLimiteMensal: "Limite mensal",
  textTotalGasto: "Total gasto",
  textUltrapassouLimite: "⚠ Você ultrapassou o limite!",
  textDentroLimite: "Gastos dentro do limite",

  // 📊 Dados do FinancialChart
  financialChartData: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [{ data: [1200, 2100, 800, 1600, 900, 1700] }],
  },

  // 📊 Configurações do gráfico
  chartHeight: 220,
  currencyPrefix: "R$ ",
  textFinancialChart: "Gráfico Financeiro",

  // ♿ Acessibilidade do gráfico
  a11yFinancialChart: "Gráfico financeiro de janeiro a junho",

  // 📝 Textos dos Cartões (PersonalCards)
  textMeusCartoes: "Meus cartões",
  textCartaoFisico: "Cartão físico",
  textCartaoDigital: "Cartão digital",
  textFuncaoFisico: "Função: Débito/Crédito",
  textFuncaoDigital: "Função: Débito",
  textConfigurar: "Configurar",
  textBloquear: "Bloquear",
  textDesbloquear: "Desbloquear",
  textAtivo: "Ativo",
  textBloqueado: "Bloqueado",
  textBloquearCartao: "Bloquear cartão",
  textDesbloquearCartao: "Desbloquear cartão",
  textMsgBloqueio:
    "Você confirma o bloqueio imediato deste cartão? Compras serão recusadas até o desbloqueio.",
  textMsgDesbloqueio:
    "Deseja desbloquear este cartão e voltar a usá-lo normalmente?",

  // 📝 Textos extras para CardsScreen
  textConfigCardsSubtitle: "Configure e bloqueie seus cartões por aqui.",

  // opacity
  opacity0: 0,
  opacitySm: 0.2,
  opacityMd: 0.6,
  opacityImage: 0.8,
  opacityLg: 0.9,
  opacityPressed: 0.9, // 👈 alias útil p/ pressed

  // zIndex
  zIndex1: 1,
  zIndex2: 2,

  // alignItens
  stretch: "stretch" as const,

  // position
  absolute: "absolute" as const,

  // elevation
  elevation0: 0,
  elevation1: 1,
  elevation: 3,

  // bar style
  barStyle: "dark-content" as const,

  // maxLenght (mantido como no original)
  maxLenght: 15,

  // 📝 Textos do NewTransactionForm
  newTransactionForm: {
    title: "Nova transação",
    labels: { transactionType: "Tipo de transação", amount: "Valor" },
    placeholders: {
      transactionType: "Selecione o tipo de transação",
      amount: "R$ 0,00",
    },
    buttons: { submit: "CONCLUIR TRANSAÇÃO" },
    accessibility: {
      form: "Formulário de nova transação",
      cardTopIllustration: "Ilustração decorativa superior com pixels",
      transactionTypeInput: "Seletor de tipo de transação",
      amountInput: "Campo de entrada de valor da transação",
      amountHint: "Digite o valor numérico da transação",
      submitButton: "Concluir e salvar nova transação",
      submitButtonLoading: "Salvando transação, por favor aguarde.",
      mainIllustration: "Ilustração de uma pessoa com um cartão de crédito",
      cardBottomIllustration: "Ilustração decorativa inferior com pixels",
      transactionTypeHint: "Toque para abrir a lista de tipos de transação",
      loading: "Carregando transação",
    },
    toasts: {
      emptyFields: {
        title: "Atenção",
        message: "Selecione o tipo e informe o valor.",
      },
      success: {
        title: "Sucesso!",
        message: "Transação adicionada com sucesso.",
      },
      error: {
        title: "Erro",
        message: "Não foi possível adicionar a transação.",
      },
    },
  },

  // 🆕 Textos utilitários de saldo
  hiddenBalanceMask: "••••••",
  loadingText: "Carregando...",
};
