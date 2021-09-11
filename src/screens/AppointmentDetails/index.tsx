import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, Text, View } from 'react-native';
import { BorderlessButton, FlatList } from 'react-native-gesture-handler';
import Banner from '../../assets/banner.png';
import { AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Load } from '../../components/Load';
import { Member, MemberProps } from '../../components/Member';
import { theme } from '../../global/styles/theme';
import { api } from '../../services/api';
import { styles } from './styles';

type Params = {
  guildSelected: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export function AppointmentDetails() {
  const route = useRoute();
  const [loading, setLoading] = useState(true);
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);

  const { guildSelected } = route.params as Params;

  useEffect(() => {
    async function fetchGuildWidget() {
      try {
        const response = await api.get(
          `/guilds/${guildSelected.guild.id}/widget.json`
        );

        setWidget(response.data);
        setLoading(false);
      } catch (error) {
        Alert.alert('Habilite o widget do servidor 😐');
      } finally {
        setLoading(false);
      }
    }
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={Banner} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.sub}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />
          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.members}
          />
        </>
      )}

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
