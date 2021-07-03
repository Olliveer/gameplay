import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { style } from './styles';

export function SignIn() {
  const navigation = useNavigation();
  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <View style={style.containter}>
      <Image source={IlustrationImg} style={style.image} resizeMode="stretch" />

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

        <ButtonIcon onPress={handleSignIn} title="Entrar com o Discord" />
      </View>
    </View>
  );
}
