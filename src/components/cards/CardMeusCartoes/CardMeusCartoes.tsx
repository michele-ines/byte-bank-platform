import CardPixel3 from "@/assets/images/dash-card-my-account/card-pixels-3.svg";
import CardPixel4 from "@/assets/images/dash-card-my-account/card-pixels-4.svg";
import CartaoDigitalIllustration from "@/assets/images/dash-card-my-cards/cartao-digital.svg";
import CartaoFisicoIllustration from "@/assets/images/dash-card-my-cards/cartao-fisico.svg";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./CardMeusCartoes.styles";

export default function CardMeusCartoes() {
  return (
    <View
      style={styles.container}
      accessible
      accessibilityLabel="Seção Meus Cartões"
      accessibilityHint="Mostra os cartões disponíveis e permite configurar ou bloquear"
    >
      <CardPixel3 style={styles.pixelTop} />

      <Text
        style={styles.title}
        accessibilityRole="header"
        accessibilityLabel="Meus cartões"
        allowFontScaling
      >
        Meus cartões
      </Text>

      {/* ---------- Cartão físico ---------- */}
      <View
        style={styles.cardGroup}
        accessible
        accessibilityLabel="Cartão físico"
        accessibilityHint="Cartão bancário físico, função débito e crédito"
      >
        <Text
          style={styles.subtitle}
          accessibilityRole="header"
          allowFontScaling
        >
          Cartão físico
        </Text>

        <CartaoFisicoIllustration
          accessibilityRole="image"
          accessibilityLabel="Ilustração de um cartão azul físico, frente com nome do banco e titular"
        />

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOrange]}
            accessibilityRole="button"
            accessibilityLabel="Configurar cartão físico"
            accessibilityHint="Abre as opções de configuração do cartão físico"
          >
            <Text style={styles.buttonText} allowFontScaling>
              Configurar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonBlock]}
            accessibilityRole="button"
            accessibilityLabel="Bloquear cartão físico"
            accessibilityHint="Bloqueia o cartão físico para uso"
            accessibilityState={{ disabled: false }}
          >
            <Text style={styles.buttonText} allowFontScaling>
              Bloquear
            </Text>
          </TouchableOpacity>

          <Text
            style={styles.functionText}
            accessibilityLabel="Função atual do cartão: Débito e Crédito"
            allowFontScaling
          >
            Função: Débito/Crédito
          </Text>
        </View>
      </View>

      {/* ---------- Cartão digital ---------- */}
      <View
        style={styles.cardGroup}
        accessible
        accessibilityLabel="Cartão digital"
        accessibilityHint="Cartão bancário digital, função débito"
      >
        <Text
          style={styles.subtitle}
          accessibilityRole="header"
          allowFontScaling
        >
          Cartão digital
        </Text>

        <CartaoDigitalIllustration
          accessibilityRole="image"
          accessibilityLabel="Ilustração de um cartão cinza digital, frente com nome do banco e titular"
        />

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOrange]}
            accessibilityRole="button"
            accessibilityLabel="Configurar cartão digital"
            accessibilityHint="Abre as opções de configuração do cartão digital"
          >
            <Text style={styles.buttonText} allowFontScaling>
              Configurar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonBlock]}
            accessibilityRole="button"
            accessibilityLabel="Bloquear cartão digital"
            accessibilityHint="Bloqueia o cartão digital para uso"
            accessibilityState={{ disabled: false }}
          >
            <Text style={styles.buttonText} allowFontScaling>
              Bloquear
            </Text>
          </TouchableOpacity>

          <Text
            style={styles.functionText}
            accessibilityLabel="Função atual do cartão: Débito"
            allowFontScaling
          >
            Função: Débito
          </Text>
        </View>
      </View>

      <CardPixel4 style={styles.pixelBottom} />
    </View>
  );
}
