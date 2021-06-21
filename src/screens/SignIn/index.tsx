import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import { style } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import IlustrationImg from '../../assets/illustration.png';

export function SignIn() {
  return (
    <View style={style.containter}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IlustrationImg}
        style={style.image}
        resizeMode="stretch"
      />

      <View style={style.content}>
        <Text style={style.title}>
          Conecte-se
          {'\n'}
          e organize suas
          {'\n'}
          jogatinas
        </Text>

        <Text style={style.subTitle}>
          Crie grupos para jogar seus games
          {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com o Discord"
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
}