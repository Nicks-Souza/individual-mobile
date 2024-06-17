import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './style'

type PropsApi = {
  id: string;
  name: string;
  images: string[];
}

interface PropsComponent {
  recebe: PropsApi;
}

export function CardFlatlist({recebe}: PropsComponent){
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  }

  return (
    <View style={styles.containerInfo}>
      <View>
        <Image style={styles.imagemBeast} source={{ uri: recebe.images[0] }} alt="Foto Digimon" />
        <Text style={styles.name}>{recebe.name}</Text>
        <TouchableOpacity style={styles.buttonLike} onPress={handleLike}>
          <Text style={styles.textButton}>{liked ? 'Descurtir' : 'Curtir'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

