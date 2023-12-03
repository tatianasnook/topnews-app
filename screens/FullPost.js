
import React from 'react';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';


const FullPostScreen = ({ route }) => {
  
  const {title, image, content} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.postTitle}>{title}</Text>
      <Image style={styles.postImage} source={{uri: image}}/>
      <Text style={styles.postText} numberOfLines={null}>{content}</Text>
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
  }
});

export default FullPostScreen;