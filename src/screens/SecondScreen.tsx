import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Slider from '../components/Slider';
import { useMovies } from '../hooks/useMovies';
import { useTheme } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { nowPlaying, loading, setPage } = useMovies();

  const { backgroundColor, setBackgroundColor } = useTheme();

  useEffect(() => {
    // Cambio el fondo a azul oscuro
    setBackgroundColor('darkblue');
  }, [setBackgroundColor]);

  const loadMoreMovies = () => {
    if (nowPlaying && !loading) {
      // Incremento la página en 1
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.header}>Configuraciones</Text>
      <Slider
        movies={nowPlaying?.movies}
        height={400}
        backgroundColor="lightblue"
        // Paso la función para cargar más películas que he definido arriba
        onEndReached={loadMoreMovies}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#ffdd57',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
});
