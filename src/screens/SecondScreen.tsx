import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '../components/Slider'
import { useMovies } from '../hooks/useMovies';

export default function SettingsScreen() {
  const { nowPlaying, loading, setPage } = useMovies();

  const loadMoreMovies = () => {
    if (nowPlaying && !loading) {
      // Incremento la página en 1
      setPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Slider
        movies={nowPlaying?.movies}
        height={600}
        backgroundColor="black"
        // Paso la función para cargar más películas que he definido arriba
        onEndReached={loadMoreMovies}
      />
    </View>
  )
}

const styles = StyleSheet.create({})