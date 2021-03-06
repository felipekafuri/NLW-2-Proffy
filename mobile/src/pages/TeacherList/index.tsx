import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import { Feather } from '@expo/vector-icons'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

const TeacherList: React.FC = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);

  const [favorites, setFavorites] = useState<number[]>([])

  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');


  async function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => { return teacher.id })

        setFavorites(favoritedTeachersId)
      }
    })
  }


  async function handleFiltersSubmit() {
    loadFavorites()
    const response = await api.get('/classes', {
      params: {
        subject, week_day, time,
      },
    });

    setFiltersVisible(false)
    setTeachers(response.data);
  }


  return (
    <View style={styles.container}>
      <PageHeader title='Proffys disponíveis' headerRight={(
        <BorderlessButton onPress={() => setFiltersVisible(!filtersVisible)}>
          <Feather name="filter" color="#ffff" size={25} />
        </BorderlessButton>
      )}>
        {filtersVisible &&
          (<View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Qual a matéria"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o dia"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual horário"
                />
              </View>
            </View>
            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
          )
        }

      </PageHeader>


      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)} />
        ))}
      </ScrollView>
    </View>
  );
}

export default TeacherList;