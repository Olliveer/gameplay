import React, { useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Appointment } from '../../components/Appointment/index';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader/index';
import { Profile } from '../../components/Profile';
import { styles } from './styles';
import { ListDivider } from '../../components/ListDivider/index';
import { Background } from '../../components/Background';

export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 ás 22:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10 ',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 ás 22:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10 ',
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 ás 22:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10 ',
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 ás 22:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10 ',
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 ás 22:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10 ',
    },
  ];

  function handleCategorySelect(categoryId: string) {
    // eslint-disable-next-line no-unused-expressions
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetail');
  }

  function handleAppoitmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppoitmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <ListHeader title="Partidas agendadas" subtitle="Total 6" />

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Appointment data={item} onPress={handleAppointmentDetails} />
        )}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
      />
    </Background>
  );
}
