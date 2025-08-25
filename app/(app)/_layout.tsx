import { Redirect } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { ActivityIndicator, View } from 'react-native';
import 'react-native-gesture-handler';
import { useAuth } from '../../src/contexts/AuthContext';
import { CustomDrawerContent } from '../../src/features/layout/CustomDrawerContent';
import { Header } from '../../src/features/layout/Header'; // Importe o Header
import { tokens } from '../../src/theme/tokens';

export default function AppLayout() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }

  // Se estiver autenticado, mostra o Drawer
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true, // 1. Ativamos o header
        header: () => <Header />, // 2. Dizemos ao Drawer para usar o nosso componente Header
        drawerStyle: {
          backgroundColor: tokens.byteColorDash,
        },
        drawerLabelStyle: {
          color: '#FFF',
        },
        drawerActiveTintColor: tokens.byteColorGreen500,
        drawerInactiveTintColor: tokens.byteGray100,
      }}
    >
      <Drawer.Screen name="dashboard" options={{ drawerLabel: 'Início' }} />
      <Drawer.Screen name="meus-cartoes" options={{ drawerLabel: 'Meus Cartões' }} />
      <Drawer.Screen name="investments" options={{ drawerLabel: 'Investimentos' }} />
      <Drawer.Screen name="outros-servicos" options={{ drawerLabel: 'Outros Serviços' }} />
    </Drawer>
  );
}