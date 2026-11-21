import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lucide } from '@react-native-vector-icons/lucide';

import pins from '../../data/pins';

const topicImage = { uri: 'https://placehold.co/600x400.png?text=+' };
const previewPins = pins.slice(0, 2);

const TopicCard = ({ title }) => {
  return (
    <View style={styles.topicCard}>
      {/* Topic Image */}
      <Image source={topicImage} style={styles.image} resizeMode="cover" />
      {/* End Topic Image */}

      {/* Topic Title */}
      <Text style={styles.topicTitle}>{title}</Text>
      {/* End Topic Title */}
    </View>
  );
};

const Search = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* Title Container */}
      <Text style={styles.title}>Search</Text>
      {/* End Title Container */}

      {/* Search Container */}
      <View style={styles.searchField}>
        <Lucide name="search" size={20} color="#696466" />
        <TextInput
          accessibilityLabel="Search"
          placeholder="Search..."
          placeholderTextColor="#696466"
          style={styles.searchInput}
          underlineColorAndroid="transparent"
        />
      </View>
      {/* End Search Container */}

      {/* Browse Topics Container */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Browse topics</Text>

        <View style={styles.wideTopic}>
          <TopicCard title="Photography" />
        </View>

        <View style={styles.smallTopics}>
          <TopicCard title="Objects" />
          <TopicCard title="Style" />
        </View>
      </View>
      {/* End Browse Topics Container */}

      {/* Pins to Explore Container */}
      <View style={styles.pinsSection}>
        <Text style={styles.sectionTitle}>Pins to explore</Text>

        <View style={styles.pinRow}>
          {previewPins.map((pin) => (
            <View key={pin.id} style={styles.pinCard}>
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
              <Text style={styles.pinTitle}>{pin.title}</Text>
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
    fontWeight: 'bold',
    color: '#241F20',
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
    fontWeight: 'bold',
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
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#EEEEEE',
  },
  topicTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#241F20',
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
    fontWeight: 'bold',
    color: '#241F20',
  },
});

export default Search;