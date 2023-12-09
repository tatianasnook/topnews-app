
import React from 'react';
import { StyleSheet, Text, Image, ScrollView, Linking, TouchableOpacity, View } from 'react-native';


const FullPostScreen = ({ route }) => {
  
  const {title, image, content, url} = route.params;

  const handleLinkPress = () => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.postTitle}>{title}</Text>
      <Image style={styles.postImage} source={{uri: image}}/>
      <Text style={styles.postText} >{content}</Text>

      <View style={styles.fullArticleLinkContainer}>
        <TouchableOpacity onPress={handleLinkPress} style={styles.fullArticleLinkTouchable}>
          <Text style={styles.fullArticleLink}>Read full story</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  postTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  postImage: {
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20
  },
  postText: {
    fontSize: 18,
    lineHeight: 24
  },
  fullArticleLinkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  fullArticleLinkTouchable: {
    backgroundColor: '#0d6efd',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  fullArticleLink: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default FullPostScreen;