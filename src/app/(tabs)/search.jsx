import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lucide } from '@react-native-vector-icons/lucide';

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});

export default Search;