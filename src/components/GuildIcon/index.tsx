import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg';

type Props = {
  guildId?: string;
  iconId?: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = 'https://img.icons8.com/color/452/discord-logo.png';
  return (
    <View style={styles.container}>
      {uri ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
}
