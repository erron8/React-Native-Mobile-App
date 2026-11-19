import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DMSans_500Medium } from '@expo-google-fonts/dm-sans/500Medium';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display/400Regular';
import { Lucide } from '@react-native-vector-icons/lucide';
import { useFonts } from 'expo-font';

const Home = () => {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_500Medium,
  });

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Lucide name="user-round" size={25} color="#241F20" />
        </View>

        <View style={styles.profileText}>
          <Text
            accessibilityRole="header"
            style={[styles.title, fontsLoaded && styles.titleFont]}
          >
            User Name
          </Text>
          <Text style={[styles.subtitle, fontsLoaded && styles.subtitleFont]}>
            Proffesion
          </Text>
        </View>
      </View>
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
  subtitleFont: {
    fontFamily: 'DMSans_500Medium',
  },
});

export default Home;