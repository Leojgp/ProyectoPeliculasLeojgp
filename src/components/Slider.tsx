import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Movie } from '../config/entities/Movie'

interface Movies  {
  movies: Movie[] | undefined;
  height: number;
  backgroundColor: string;
}

export default function Slider({ movies, height, backgroundColor }: Movies) {
  return (
    <View style={[{ backgroundColor: backgroundColor, height: height }]}>
      <ScrollView style = {styles.contenedor} horizontal={true}>
        {movies?.map((item) => (
          <Image style = {styles.imagen} key = {item.id}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster}`,
            }}
          />
        ))}

      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  contenedor: {
    height: 300,
  }, 
  imagen: {
    width: 200,
    margin: 1
  }
})