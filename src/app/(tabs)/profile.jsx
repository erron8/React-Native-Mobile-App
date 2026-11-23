import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Lucide } from '@react-native-vector-icons/lucide';
import { DMSans_500Medium } from '@expo-google-fonts/dm-sans/500Medium';
import { DMSans_700Bold } from '@expo-google-fonts/dm-sans/700Bold';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display/400Regular';
import { useFonts } from 'expo-font';

const coverImage = require('../../../assets/profile/lebron.jpg');

const boards = [
  {
    title: 'Board 1',
    pinCount: 10,
    leftImage: require('../../../assets/profile/board1a.jpg'),
    rightImage: require('../../../assets/profile/board1b.jpg'),
  },
  {
    title: 'Board 2',
    pinCount: 15,
    leftImage: require('../../../assets/profile/board2a.jpg'),
    rightImage: require('../../../assets/profile/board2b.jpg'),
  },
  {
    title: 'Board 3',
    pinCount: 20,
    leftImage: require('../../../assets/profile/board3a.jpg'),
    rightImage: require('../../../assets/profile/board3b.jpg'),
  },
  {
    title: 'Board 4',
    pinCount: 25,
    leftImage: require('../../../assets/profile/board4a.jpg'),
    rightImage: require('../../../assets/profile/board4b.jpg'),
  },
];

const boardRows = [boards.slice(0, 2), boards.slice(2, 4)];

const BoardCard = ({ board, boldFont, mediumFont }) => {
  return (
    <View style={styles.boardCard}>
      {/* Board Cover Container */}
      <View style={styles.boardCover}>
        <Image
          source={board.leftImage}
          style={styles.boardImage}
          resizeMode="cover"
          resizeMethod="resize"
        />
        <Image
          source={board.rightImage}
          style={styles.boardImage}
          resizeMode="cover"
          resizeMethod="resize"
        />
      </View>
      {/* End Board Cover Container */}

      {/* Board Info Container */}
      <Text style={[styles.boardTitle, boldFont]}>{board.title}</Text>
      <Text style={[styles.secondaryText, mediumFont]}>
        {board.pinCount} pins
      </Text>
      {/* End Board Info Container */}
    </View>
  );
};

const Profile = () => {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_700Bold,
    DMSans_500Medium,
  });

  const boldFont = fontsLoaded && styles.boldFont;
  const mediumFont = fontsLoaded && styles.mediumFont;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* Cover Container */}
      <View>
        <Image
          source={coverImage}
          style={styles.cover}
          resizeMode="cover"
          resizeMethod="resize"
        />

        {/* Avatar Container */}
        <View style={styles.avatar}>
          <Lucide name="user-round" size={30} color="#241F20" />
        </View>
        {/* End Avatar Container */}
      </View>
      {/* End Cover Container */}

      {/* Profile Info Container */}
      <View style={styles.profileInfo}>
        <Text style={[styles.name, fontsLoaded && styles.titleFont]}>
          Lebron James
        </Text>
        <Text style={[styles.secondaryText, mediumFont]}>@kingjames</Text>
        <Text style={[styles.bio, mediumFont]}>Basketball Player</Text>
        <Text style={[styles.secondaryText, mediumFont]}>
          100 followers · 100 following
        </Text>
      </View>
      {/* End Profile Info Container */}

      {/* Saved Boards Container */}
      <View style={styles.boardsSection}>
        <View style={styles.boardsHeader}>
          <Text style={[styles.sectionTitle, boldFont]}>Saved boards</Text>
          <Text style={[styles.secondaryText, mediumFont]}>
            {boards.length} boards
          </Text>
        </View>

        {boardRows.map((row, index) => (
          <View key={index} style={styles.boardRow}>
            {row.map((board) => (
              <BoardCard
                key={board.title}
                board={board}
                boldFont={boldFont}
                mediumFont={mediumFont}
              />
            ))}
          </View>
        ))}
      </View>
      {/* End Saved Boards Container */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    gap: 15,
    backgroundColor: '#FFFFFF',
  },
  cover: {
    width: '100%',
    height: 125,
    backgroundColor: '#F4F2F0',
  },
  avatar: {
    width: 80,
    height: 80,
    marginTop: -40,
    marginLeft: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F2F0',
  },
  profileInfo: {
    marginHorizontal: 20,
    gap: 5,
  },
  name: {
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
  secondaryText: {
    fontSize: 15,
    color: '#696466',
  },
  bio: {
    fontSize: 15,
    color: '#241F20',
  },
  boardsSection: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 15,
    gap: 15,
    borderTopWidth: 1,
    borderTopColor: '#E8E4E1',
  },
  boardsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 20,
    color: '#241F20',
  },
  boardRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 15,
  },
  boardCard: {
    flex: 1,
    gap: 5,
  },
  boardCover: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  boardImage: {
    flex: 1,
    width: 0,
    height: '100%',
    backgroundColor: '#F4F2F0',
  },
  boardTitle: {
    fontSize: 15,
    color: '#241F20',
  },
});

export default Profile;