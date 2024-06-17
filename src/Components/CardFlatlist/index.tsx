import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './style';

type PropsApi = {
  id: string;
  name: string;
  images: string[];
}

interface PropsComponent {
  recebe: PropsApi;
}

export function CardFlatlist({recebe}: PropsComponent){
  return (
    <View style={styles.containerInfo}>
      <View>
        <Image style={styles.imagemBeast} source={{ uri: recebe.images[0] }} alt="Foto Digimon" />
        <Text style={styles.name}>{recebe.name}</Text>
      </View>
    </View>
  )
}

