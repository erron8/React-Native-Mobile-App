import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

import pins from '../../data/homePins';

const PinDetail = () => {
  const { id } = useLocalSearchParams();
  const pin = pins.find((item) => item.id === id);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      {/* Pin Content */}
      {pin ? (
        <>
          <Image
            source={pin.image}
            style={styles.image}
            resizeMode="cover"
            resizeMethod="resize"
          />
          <Text>{pin.title}</Text>
          <Text>{pin.category}</Text>
        </>
      ) : (
        <Text>Pin not found.</Text>
      )}
      {/* End Pin Content */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 500,
    borderRadius: 15,
    backgroundColor: '#F4F2F0',
  },
});

export default PinDetail;