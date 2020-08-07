import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import { useFocusEffect } from '@react-navigation/native'

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

const Favorites: React.FC = () => {
  const [favoriteTeachers, setFavoriteTeachers] = useState([])


  async function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        setFavoriteTeachers(favoritedTeachers)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })


  return (
    <View style={styles.container}>
      <PageHeader title='Meus proffys favoritos' />


      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {
          favoriteTeachers.map((teacher: Teacher) => (
            <TeacherItem key={teacher.id} teacher={teacher} favorited />

          ))
        }
      </ScrollView>
    </View>
  );
}

export default Favorites;