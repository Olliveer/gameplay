import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { GuildProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { Header } from '../../components/Header';
import { ModalView } from '../../components/ModalView';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { theme } from '../../global/styles/theme';
import { Guilds } from '../Guilds';

import { styles } from './styles';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuilds, setOpenGuilds] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuilds(true);
  }

  function handleCloseGuilds() {
    setOpenGuilds(false);
  }

  function handleGuildSelected(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuilds(false);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />

          <Text
            style={[
              styles.label,
              {
                marginLeft: 24,
                marginTop: 36,
                marginBottom: 18,
              },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            setCategory={setCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : `Selecione um servidor`}
                  </Text>
                </View>
                <Feather
                  name="chevron-right"
                  color={theme.colors.highlight}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/ </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View
              style={[
                styles.field,
                {
                  marginBottom: 12,
                },
              ]}
            >
              <Text style={styles.label}>Descrição</Text>

              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView visible={openGuilds} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelected={handleGuildSelected} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}