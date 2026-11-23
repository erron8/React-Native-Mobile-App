import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lucide } from '@react-native-vector-icons/lucide';
import { DMSans_500Medium } from '@expo-google-fonts/dm-sans/500Medium';
import { DMSans_700Bold } from '@expo-google-fonts/dm-sans/700Bold';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display/400Regular';
import { useFonts } from 'expo-font';

const groups = [
  {
    title: 'Today',
    items: [
      {
        id: 'id1',
        title: 'Someone saved Grey Hour',
        detail: '2h ago',
        image: require('../../../assets/home/home-1.jpg'),
      },
      {
        id: 'id2',
        title: 'New comment on Elegant Vase',
        detail: 'Love the lighting.',
        image: require('../../../assets/home/home-3.jpg'),
      },
      {
        id: 'id3',
        title: 'You have a new follower',
        detail: '5h ago',
      },
    ],
  },
  {
    title: 'Yesterday',
    items: [
      {
        id: 'id4',
        title: 'Someone saved City From Above',
        detail: '6:30 PM',
        image: require('../../../assets/search/city-from-above.jpg'),
      },
      {
        id: 'id5',
        title: 'You have a new follower',
        detail: '4:15 PM',
      },
      {
        id: 'id6',
        title: 'Someone saved Midnight Drive',
        detail: '2:00 PM',
        image: require('../../../assets/search/midnight-drive.jpg'),
      },
      {
        id: 'id7',
        title: 'You have a new follower',
        detail: '10:30 AM',
      },
    ],
  },
];

const Notifications = () => {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_700Bold,
    DMSans_500Medium,
  });

  const boldFont = fontsLoaded && styles.boldFont;
  const mediumFont = fontsLoaded && styles.mediumFont;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Container */}
        <View style={styles.header}>
          <Text style={[styles.title, fontsLoaded && styles.titleFont]}>
            Notifications
          </Text>
          <Text style={[styles.detail, mediumFont]}>
            All notifications will show here.
          </Text>
        </View>
        {/* End Header Container */}

        {/* Notifications Container */}
        {groups.map((group) => (
          <View key={group.title} style={styles.group}>
            {/* Group Header */}
            <View style={styles.groupHeader}>
              <Text style={[styles.groupTitle, boldFont]}>{group.title}</Text>
              <View style={styles.divider} />
            </View>
            {/* End Group Header */}

            {/* Activity List */}
            {group.items.map((item) => (
              <View key={item.id} style={styles.row}>
                {/* Avatar Container */}
                <View style={styles.avatar}>
                  <Lucide name="user-round" size={20} color="#696466" />
                </View>
                {/* End Avatar Container */}

                {/* Activity Container */}
                <View style={styles.rowContent}>
                  <View style={styles.message}>
                    <Text style={[styles.messageTitle, boldFont]}>
                      {item.title}
                    </Text>
                    <Text style={[styles.detail, mediumFont]}>
                      {item.detail}
                    </Text>
                  </View>

                  {/* Thumbnail Container */}
                  {item.image && (
                    <Image
                      source={item.image}
                      style={styles.thumbnail}
                      resizeMode="cover"
                    />
                  )}
                  {/* End Thumbnail Container */}
                </View>
                {/* End Activity Container */}
              </View>
            ))}
            {/* End Activity List */}
          </View>
        ))}
        {/* End Notifications Container */}
      </ScrollView>
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
    gap: 20,
  },
  header: {
    gap: 5,
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
  mediumFont: {
    fontFamily: 'DMSans_500Medium',
  },
  detail: {
    fontSize: 15,
    lineHeight: 20,
    color: '#696466',
  },
  group: {
    gap: 5,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  groupTitle: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#696466',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E8E4E1',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F2F0',
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 80,
    paddingVertical: 10,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E4E1',
  },
  message: {
    flex: 1,
    gap: 5,
  },
  messageTitle: {
    fontSize: 15,
    lineHeight: 20,
    color: '#241F20',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F4F2F0',
  },
});

export default Notifications;