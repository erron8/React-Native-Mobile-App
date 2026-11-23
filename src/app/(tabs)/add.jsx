import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DMSans_700Bold } from '@expo-google-fonts/dm-sans/700Bold';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display/400Regular';
import { useFonts } from 'expo-font';

const Add = () => {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_700Bold,
  });

  const boldFont = fontsLoaded && styles.boldFont;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.form}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Container */}
        <Text style={[styles.title, fontsLoaded && styles.titleFont]}>
          New post
        </Text>
        {/* End Title Container */}

        {/* Photo Container */}
        <View style={styles.photoPanel}>
          <Text style={[styles.photoTitle, boldFont]}>Add a photo</Text>

          <Pressable
            disabled
            accessibilityRole="button"
            style={styles.chooseButton}
          >
            <Text style={[styles.chooseButtonText, boldFont]}>Choose photo</Text>
          </Pressable>
        </View>
        {/* End Photo Container */}

        {/* Post Name Container */}
        <View style={styles.field}>
          <Text style={[styles.label, boldFont]}>Post name</Text>
          <TextInput
            accessibilityLabel="Post name"
            placeholder="Post name.."
            placeholderTextColor="#686365"
            underlineColorAndroid="transparent"
            style={[styles.input, boldFont]}
          />
        </View>
        {/* End Post Name Container */}

        {/* Description Container */}
        <View style={styles.field}>
          <Text style={[styles.label, boldFont]}>Description</Text>
          <TextInput
            accessibilityLabel="Description"
            placeholder="Post description.."
            placeholderTextColor="#686365"
            underlineColorAndroid="transparent"
            style={[styles.input, styles.descriptionInput, boldFont]}
            multiline
          />
        </View>
        {/* End Description Container */}

        {/* Publish Container */}
        <Pressable
          disabled
          accessibilityRole="button"
          style={styles.publishButton}
        >
          <Text style={[styles.publishButtonText, boldFont]}>Publish post</Text>
        </Pressable>
        {/* End Publish Container */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  form: {
    padding: 20,
    gap: 20,
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
  photoPanel: {
  minHeight: 150,
  padding: 15,
  gap: 15,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 15,
  backgroundColor: '#FAF6F2',
},
  photoTitle: {
    fontSize: 20,
    color: '#241F20',
  },
  chooseButton: {
    minHeight: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#251F20',
  },
  chooseButtonText: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  field: {
    gap: 5,
  },
  label: {
    fontSize: 15,
    color: '#241F20',
  },
  input: {
    minHeight: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#DAD5D2',
    borderRadius: 10,
    fontSize: 15,
    color: '#241F20',
  },
  descriptionInput: {
    minHeight: 70,
    textAlignVertical: 'top',
  },
  publishButton: {
    minHeight: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAE7E4',
  },
  publishButtonText: {
    fontSize: 15,
    color: '#756F70',
  },
});

export default Add;