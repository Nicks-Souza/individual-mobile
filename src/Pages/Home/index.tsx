import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CardFlatlist } from '../../Components/CardFlatlist';
import { TextInputComponent } from '../../Components/TextInput';
import { styles } from './style';

type PropsApi = {
  id: string;
  name: string;
  images: string[];
  level: string;
};

export function Home() {
  const [dataApi, setDataApi] = useState<PropsApi[]>([]);
  const [filterName, setFilterName] = useState<string>('');

  const loadApi = async () => {
    const url = 'https://digimon-api.vercel.app/api/digimon';
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      const apiFormatted: PropsApi[] = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        images: [item.img],
        level: item.level, 
      }));
      setDataApi(apiFormatted);
    } 
    catch(error) {
      console.log('Erro ao buscar a api', error);
    }
  };

  const handleSearch = (name: string) => {
    setFilterName(name);
  };

  const resulFilters = dataApi.filter(name => {
    const inputName = filterName.toLocaleLowerCase();
    const nameApi = name.name.toLowerCase();
    return nameApi.includes(inputName);
  });

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <View style={styles.container}>
      <TextInputComponent 
        placeholder='Buscar...'
        onChangeValue={handleSearch}
      />

      <FlatList
        data={resulFilters}
        renderItem={({ item }) =>
          <CardFlatlist recebe={item}/>
        }
        keyExtractor={item => item.id}
      />
      
      {dataApi.length <= 0 && (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
