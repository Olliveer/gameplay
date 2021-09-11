import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Alert, Image, Text, View } from 'react-native';
import IlustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/useAuth';
import { style } from './styles';

export function SignIn() {
  const { signIn, loading, user } = useAuth();
  const navigation = useNavigation();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <Background>
      <View style={style.containter}>
        <Image
          source={IlustrationImg}
          style={style.image}
          resizeMode="stretch"
        />

        <View style={style.content}>
          <Text style={style.title}>
            Conecte-se
            {'\n'}e organize suas
            {'\n'}
            jogatinas
          </Text>

          <Text style={style.subTitle}>
            Crie grupos para jogar seus games
            {'\n'}
            favoritos com seus amigos
          </Text>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon onPress={handleSignIn} title="Entrar com o Discord" />
          )}
        </View>
      </View>
    </Background>
  );
}
