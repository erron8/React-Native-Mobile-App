import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lucide } from '@react-native-vector-icons/lucide';
import { DMSans_700Bold } from '@expo-google-fonts/dm-sans/700Bold';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display/400Regular';
import { useFonts } from 'expo-font';

const previewPins = [
  {
    title: 'Midnight Drive',
    image: require('../../../assets/search/midnight-drive.jpg'),
  },
  {
    title: 'City From Above',
    image: require('../../../assets/search/city-from-above.jpg'),
  },
];

const TopicCard = ({ title, image, textStyle }) => {
  return (
    <View style={styles.topicCard}>
      {/* Topic Image */}
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={[styles.image, styles.topicShade]} />
      {/* End Topic Image */}

      {/* Topic Title */}
      <Text style={[styles.topicTitle, textStyle]}>{title}</Text>
      {/* End Topic Title */}
    </View>
  );
};

const Search = () => {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_700Bold,
  });

  const boldFont = fontsLoaded && styles.boldFont;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* Title Container */}
      <Text style={[styles.title, fontsLoaded && styles.titleFont]}>
        Search
      </Text>
      {/* End Title Container */}

      {/* Search Container */}
      <View style={styles.searchField}>
        <Lucide name="search" size={20} color="#696466" />
        <TextInput
          accessibilityLabel="Search"
          placeholder="Search..."
          placeholderTextColor="#696466"
          style={[styles.searchInput, boldFont]}
          underlineColorAndroid="transparent"
        />
      </View>
      {/* End Search Container */}

      {/* Browse Topics Container */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, boldFont]}>Browse topics</Text>

        <View style={styles.wideTopic}>
          <TopicCard
            title="Night Photography"
            image={require('../../../assets/search/night-photography.jpg')}
            textStyle={boldFont}
          />
        </View>

        <View style={styles.smallTopics}>
          <TopicCard
            title="Studio Objects"
            image={require('../../../assets/search/studio-objects.jpg')}
            textStyle={boldFont}
          />
          <TopicCard
            title="Everyday Style"
            image={require('../../../assets/search/everyday-style.jpg')}
            textStyle={boldFont}
          />
        </View>
      </View>
      {/* End Browse Topics Container */}

      {/* Pins to Explore Container */}
      <View style={styles.pinsSection}>
        <Text style={[styles.sectionTitle, boldFont]}>Pins to explore</Text>

        <View style={styles.pinRow}>
          {previewPins.map((pin) => (
            <View key={pin.title} style={styles.pinCard}>
              {/* Pin Image */}
              <View style={styles.pinPhoto}>
                <Image
                  source={pin.image}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              {/* End Pin Image */}

              {/* Pin Title */}
              <Text style={[styles.pinTitle, boldFont]}>{pin.title}</Text>
              {/* End Pin Title */}
            </View>
          ))}
        </View>
      </View>
      {/* End Pins to Explore Container */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 40,
    color: '#241F20',
  },
  titleFont: {
    fontFamily: 'DMSerifDisplay_400Regular',
  },
  boldFont: {
    fontFamily: 'DMSans_700Bold',
  },
  searchField: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 45,
    paddingHorizontal: 15,
    gap: 10,
    borderRadius: 25,
    backgroundColor: '#F4F2F0',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 15,
    color: '#241F20',
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#241F20',
  },
  wideTopic: {
    height: 140,
  },
  smallTopics: {
    height: 90,
    flexDirection: 'row',
    gap: 10,
  },
  topicCard: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#EEEEEE',
  },
  topicTitle: {
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 15,
    color: '#FFFFFF',
  },
  topicShade: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  pinsSection: {
    flex: 1,
    gap: 10,
  },
  pinRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  pinCard: {
    flex: 1,
    gap: 5,
  },
  pinPhoto: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#EEEEEE',
  },
  pinTitle: {
    fontSize: 15,
    color: '#241F20',
  },
});

export default Search;