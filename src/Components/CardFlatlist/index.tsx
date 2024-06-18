import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from './style';

type PropsApi = {
  id: string;
  name: string;
  images: string[];
};

interface PropsComponent {
  recebe: PropsApi;
}

export function CardFlatlist({ recebe }: PropsComponent) {
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  const handleClick = (id: string) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const isClicked = favorites[recebe.id] || false;

  return (
    <View style={styles.containerInfo}>
      <TouchableWithoutFeedback onPress={() => handleClick(recebe.id)}>
        <View>
          <Image
            style={[styles.imagemBeast, isClicked && styles.imagemBeastSelected]}
            source={{ uri: recebe.images[0] }}
            alt="Foto Digimon"
          />
          <Text style={styles.name}>{recebe.name}</Text>
          <Image
            style={styles.imagem}
            source={require('../../Assets/digivice.png')}
          />
          <Image
            style={[styles.imagemButtonLiked, { opacity: isClicked ? 1 : 0 }]}
            source={isClicked ? require('../../Assets/marcada.png') : require('../../Assets/desmarcada.png')}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}