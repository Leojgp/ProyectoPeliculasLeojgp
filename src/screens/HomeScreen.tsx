import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/useMovies'
import Slider from '../components/Slider';

export default function HomeScreen() {
    const { nowPlaying, loading, setNowPlaying} = useMovies();
    return (
        <View>
            <Text>HomeScreen</Text>
            <Slider movies={nowPlaying?.movies} height={100} />
            <Button
            title='Siguiente'
            onPress={()=>{
                if (nowPlaying) {
                    // Crear un nuevo objeto sin mutar el original
                    const newNowPlaying = {
                        ...nowPlaying,
                        page: nowPlaying.page + 1,
                    };
                    setNowPlaying(newNowPlaying); // Actualizar el estado con el nuevo objeto
                }
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})