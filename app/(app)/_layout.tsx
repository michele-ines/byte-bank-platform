import { Drawer } from "expo-router/drawer";
import { Platform } from "react-native";

export default function AppLayout() {
  return (
    <Drawer
      screenOptions={{
          headerShown: true,
          drawerType: Platform.OS === "web" ? "front" : "slide", 
        }}>
      <Drawer.Screen 
        name="dashboard" 
        options={{ title: "Início" }} 
      />
      <Drawer.Screen 
        name="meus-cartoes" 
        options={{ title: "Meus Cartões" }} 
      />
      <Drawer.Screen 
        name="investments" 
        options={{ title: "Investimentos" }} 
      />
      <Drawer.Screen 
        name="outros-servicos" 
        options={{ title: "Outros Serviços" }} 
      />
    </Drawer>
  );
}
