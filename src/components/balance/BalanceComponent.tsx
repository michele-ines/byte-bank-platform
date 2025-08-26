import PixelImage from '@/assets/images/dash-card-saldo/card-pixels-1.svg';
import PixelImage2 from '@/assets/images/dash-card-saldo/card-pixels-2.svg';
import { Entypo } from "@expo/vector-icons";
import { UserInfo } from "firebase/auth";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { tokens } from '@/src/theme/tokens';
import { formatBRL } from "../../utils/currency-formatte";
import { styles } from "./BalanceComponent.styles";

type BalanceComponentProps = {
    balance: { account: string; value: number | null };
    user: UserInfo
}

export default function Balance({ balance, user }: BalanceComponentProps) {
    const [showBalance, setShowBalance] = useState<boolean>(true);
    const handleToggleBalance = () => setShowBalance((prev) => !prev);

    const getCurrentDate = (): string => {
        const options: Intl.DateTimeFormatOptions = { weekday: "long" };
        const today = new Date();
        const weekday = today
            .toLocaleDateString("pt-BR", options)
            .replace(/^\w/, (c) => c.toUpperCase());
        const formattedDate = today.toLocaleDateString("pt-BR");
        return `${weekday}, ${formattedDate}`;
    };

    const getFirstName = (fullName: string): string => {
        return fullName?.split(" ")[0] || "";
    };

    const balanceValue = showBalance 
        ? (typeof balance.value === "number" 
            ? formatBRL(balance.value) 
            : "Carregando...")
        : "Saldo oculto";


    return (
        <View 
            style={styles.container} 
            accessible={true}
            accessibilityLabel={`Cartão de saldo de ${getFirstName(user?.displayName || "usuário")}`}
        >
            <PixelImage style={styles.pixelsImage1}/>
            <PixelImage2 style={styles.pixelsImage2}/>
            <View 
                style={styles.greetingSection}
                accessible={true}
            >
                <Text 
                    style={styles.nameTitle}
                    accessible={true}
                    accessibilityRole="header"
                >
                    Olá, {getFirstName(user?.displayName || "")}! :)
                </Text>
                <Text 
                    style={styles.dateText}
                    accessible={true}
                    accessibilityLabel={`Data de hoje: ${getCurrentDate()}`}
                >
                    {getCurrentDate()}
                </Text>
            </View>

            {/* Seção de saldo - posicionada à direita */}
            <View 
                style={styles.balanceSection}
                accessible={true}
                accessibilityLabel="Informações de saldo da conta"
            >
                <View style={styles.saldoHeader}>
                    <View style={styles.saldoTitleContainer}>
                        <Text 
                            style={styles.saldoTitle}
                            accessible={true}
                            accessibilityRole="header"
                        >
                            Saldo
                        </Text>
                        <Pressable 
                            accessibilityRole="button" 
                            accessibilityLabel={showBalance ? "Ocultar saldo da conta" : "Mostrar saldo da conta"}
                            accessibilityHint={showBalance ? "Toque para ocultar o valor do saldo" : "Toque para mostrar o valor do saldo"}
                            accessibilityState={{ selected: !showBalance }}
                            onPress={handleToggleBalance}
                            style={styles.eyeIconContainer}
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        >
                            <Entypo 
                                name={showBalance ? "eye" : "eye-with-line"} 
                                size={tokens.textSm} 
                                color={tokens.byteColorWhite}
                                accessible={false}
                            />
                        </Pressable>
                    </View>
                    <View 
                        style={styles.whiteLine} 
                        accessible={false}
                        importantForAccessibility="no"
                    />
                </View>

                <Text 
                    style={styles.contaCorrenteTitle}
                    accessible={true}
                    accessibilityLabel={`Tipo de conta: ${balance.account}`}
                >
                   Conta {balance.account}
                </Text>
                <Text 
                    style={styles.valorSaldoText}
                    accessible={true}
                    accessibilityLabel={showBalance 
                        ? `Saldo atual: ${balanceValue}` 
                        : "Saldo oculto. Toque no ícone do olho para mostrar"
                    }
                    accessibilityLiveRegion="polite"
                >
                    {showBalance 
                        ? (typeof balance.value === "number" 
                            ? formatBRL(balance.value) 
                            : "Carregando...")
                        : "••••••"
                    }
                </Text>
            </View>
        </View>
    );
}
