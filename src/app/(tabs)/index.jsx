import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DMSans_500Medium } from '@expo-google-fonts/dm-sans/500Medium';
import { DMSans_700Bold } from '@expo-google-fonts/dm-sans/700Bold';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display/400Regular';
import { Lucide } from '@react-native-vector-icons/lucide';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

import pins from '../../data/homePins';

const categories = ['For you', 'Art & form', 'Photography'];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('For you');
  const [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  const visiblePins =
    selectedCategory === 'For you'
      ? pins
      : pins.filter((pin) => pin.category === selectedCategory);

  const rows = [visiblePins.slice(0, 2), visiblePins.slice(2, 4)];

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* User Container */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Lucide name="user-round" size={25} color="#241F20" />
        </View>

        <View style={styles.profileText}>
          <Text
            accessibilityRole="header"
            style={[styles.title, fontsLoaded && styles.titleFont]}
          >
            Lebron James
          </Text>
          <Text style={[styles.subtitle, fontsLoaded && styles.mediumFont]}>
            Goat
          </Text>
        </View>
      </View>
      {/* End User Container */}

      {/* Category Container */}
      <View style={styles.categoryRow}>
        {categories.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <Pressable
              key={category}
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected }}
              style={[styles.chip, isSelected && styles.selectedChip]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.chipLabel,
                  fontsLoaded && styles.mediumFont,
                  isSelected && styles.selectedChipLabel,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {/* End Category Container */}

      {/* Feed Container */}
      <View style={styles.feed}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.feedRow}>
            {row.map((pin) => (
  <Pressable
    key={pin.id}
    style={styles.pinCard}
    accessibilityRole="button"
    accessibilityLabel={pin.title}
    onPress={() =>
      router.push({
        pathname: '/pin/[id]',
        params: { id: pin.id },
      })
    }
  >
    {/* Photo Container */}
    <View style={styles.photoContainer}>
      <Image
        source={pin.image}
        style={styles.photo}
        resizeMode="cover"
      />
    </View>
    {/* End Photo Container */}

    {/* Title Container */}
    <Text style={[styles.pinTitle, fontsLoaded && styles.boldFont]}>
      {pin.title}
    </Text>
    {/* End Title Container */}
  </Pressable>
))}
          </View>
        ))}
      </View>
      {/* End Feed Container */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 20,
    gap: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F4F2F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    flexShrink: 1,
  },
  title: {
    color: '#241F20',
    fontSize: 35,
    lineHeight: 40,
    letterSpacing: -1,
    includeFontPadding: false,
  },
  titleFont: {
    fontFamily: 'DMSerifDisplay_400Regular',
  },
  subtitle: {
    color: '#696466',
    fontSize: 15,
    lineHeight: 20,
    includeFontPadding: false,
  },
  mediumFont: {
    fontFamily: 'DMSans_500Medium',
  },
  boldFont: {
    fontFamily: 'DMSans_700Bold',
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 5,
  },
  chip: {
    minHeight: 35,
    minWidth: 60,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#F4F2F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedChip: {
    backgroundColor: '#241F20',
  },
  chipLabel: {
    color: '#241F20',
    fontSize: 15,
    lineHeight: 20,
    includeFontPadding: false,
  },
  selectedChipLabel: {
    color: '#FFFFFF',
  },
  feed: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 15,
    marginTop: 15,
    gap: 15,
  },
  feedRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 15,
  },
  pinCard: {
    flex: 1,
    gap: 5,
  },
  photoContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#F4F2F0',
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  pinTitle: {
    color: '#241F20',
    fontSize: 15,
    lineHeight: 20,
  },
});

export default Home;