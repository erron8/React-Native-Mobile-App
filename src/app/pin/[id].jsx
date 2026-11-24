import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams } from 'expo-router';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display/400Regular';
import { DMSans_700Bold } from '@expo-google-fonts/dm-sans/700Bold';
import { DMSans_500Medium } from '@expo-google-fonts/dm-sans/500Medium';
import { useFonts } from 'expo-font';

import pins from '../../data/homePins';

const PinDetail = () => {
  const { id } = useLocalSearchParams();
  const [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_700Bold,
    DMSans_500Medium,
  });

  const pin = pins.find((item) => item.id === id);
  const boldFont = fontsLoaded && styles.boldFont;
  const mediumFont = fontsLoaded && styles.mediumFont;

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      {/* Stack Header */}
      <Stack.Screen
        options={{
          title: pin?.title ?? 'Pin Detail',
          headerTitleStyle: {
            color: '#241F20',
            fontSize: 25,
            fontFamily: fontsLoaded ? 'DMSerifDisplay_400Regular' : undefined,
          },
        }}
      />
      {/* End Stack Header */}

      {/* Pin Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {pin ? (
          <>
            {/* Photo Container */}
            <View style={styles.photoContainer}>
              <Image
                source={pin.image}
                style={styles.photo}
                resizeMode="cover"
                resizeMethod="resize"
              />
            </View>
            {/* End Photo Container */}

            {/* Pin Info Container */}
            <View style={styles.pinInfo}>
              <Text style={[styles.category, boldFont]}>{pin.category}</Text>
              <Text style={[styles.description, mediumFont]}>
                {pin.description}
              </Text>
            </View>
            {/* End Pin Info Container */}
          </>
        ) : (
          <Text style={[styles.description, mediumFont]}>Pin not found.</Text>
        )}
      </ScrollView>
      {/* End Pin Content */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 20,
    gap: 15,
  },
  photoContainer: {
    width: '100%',
    aspectRatio: 5 / 8,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#F4F2F0',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  pinInfo: {
    gap: 5,
  },
  category: {
    fontSize: 15,
    color: '#241F20',
  },
  description: {
    fontSize: 15,
    lineHeight: 20,
    color: '#696466',
  },
  boldFont: {
    fontFamily: 'DMSans_700Bold',
  },
  mediumFont: {
    fontFamily: 'DMSans_500Medium',
  },
});

export default PinDetail;