import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const Post = ({title, imageUrl, createdAt}) => {
  return (
    <View style={styles.postView}>
        <Image 
          source={{uri: imageUrl}}
          style={styles.postImage}
        />
        <View style={styles.postDetails}>
          <Text style={styles.postTitle}>{title}</Text>
          <Text style={styles.postData}>{createdAt}</Text>
        </View>
        
      </View>
  )
}

const styles = StyleSheet.create({
  postView: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  postImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12
  },
  postTitle: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  postDetails: {
    justifyContent: 'center',
    flex: 1
  },
  postData: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.4)'
  }
});


export default Post;