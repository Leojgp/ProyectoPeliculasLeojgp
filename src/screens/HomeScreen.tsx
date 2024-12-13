import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';
import { useTheme } from '../context/ThemeContext';

export default function HomeScreen() {
    const { nowPlaying, loading, setPage } = useMovies();
    const { backgroundColor, setBackgroundColor } = useTheme(); 

    useEffect(() => {
        console.log("Cambiando el fondo a negro...");
        setBackgroundColor('black'); 
    }, [setBackgroundColor]);

    console.log("Fondo actual:", backgroundColor); 

    const loadMoreMovies = () => {
        if (nowPlaying && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.header}>Cartelera de Películas</Text>
            <Slider
                movies={nowPlaying?.movies}
                height={300}
                backgroundColor="red"
                onEndReached={loadMoreMovies}
            />
            {loading && <Text style={styles.loading}>Cargando más películas...</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'red', 
        textAlign: 'center',
        marginBottom: 16,
        textShadowColor: 'rgba(0, 0, 0, 0.75)', 
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    loading: {
        marginTop: 16,
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
        fontStyle: 'italic',
    },
});
