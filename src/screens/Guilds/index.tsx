/* eslint-disable no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { GuildProps } from '../../components/Appointment';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './style';

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '2',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '3',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '4',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '5',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '6',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '7',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
