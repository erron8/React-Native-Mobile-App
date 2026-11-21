import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Add = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.form}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Container */}
        <Text style={styles.title}>New post</Text>
        {/* End Title Container */}

        {/* Photo Container */}
        <View style={styles.photoPanel}>
          <Text style={styles.photoTitle}>Add a photo</Text>
        </View>
        {/* End Photo Container */}

        {/* Post Name Container */}
        <View style={styles.field}>
          <Text style={styles.label}>Post name</Text>
          <TextInput
            accessibilityLabel="Post name"
            placeholder="Give your post a name"
            placeholderTextColor="#686365"
            underlineColorAndroid="transparent"
            style={styles.input}
          />
        </View>
        {/* End Post Name Container */}

        {/* Description Container */}
        <View style={styles.field}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Description</Text>
          </View>

          <TextInput
            accessibilityLabel="Description"
            placeholder="Post description"
            placeholderTextColor="#686365"
            underlineColorAndroid="transparent"
            style={[styles.input, styles.descriptionInput]}
            multiline
          />
        </View>
        {/* End Description Container */}

        {/* Publish Container */}
        <View style={styles.field}>
          <Pressable disabled accessibilityRole="button" style={styles.publishButton}>
            <Text style={styles.publishButtonText}>Publish post</Text>
          </Pressable>
        </View>
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
    fontWeight: 'bold',
    color: '#241F20',
  },
  photoPanel: {
    minHeight: 210,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#D6CBC3',
    borderRadius: 15,
    backgroundColor: '#FAF6F2',
  },
  photoTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#241F20',
  },
  helperText: {
    fontSize: 15,
    color: '#686365',
    textAlign: 'center',
  },
  field: {
    gap: 5,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    color: '#756F70',
  },
});

export default Add;