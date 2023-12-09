import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList, 
    TouchableOpacity ,
    ActivityIndicator
  } from 'react-native';
import Post from '../components/Post';
import { useState, useEffect } from 'react';


export default function HomeScreen ({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchNews = () => {
    const getNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=935e38d3c77a4cc4963639e61b2f1379");
        const data = await response.json();
        const filteredArticles = data.articles.filter(article => article.status !== "removed");

        setItems(filteredArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    };
      getNews();
  }

  useEffect(fetchNews, [])

  if(isLoading){
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    )
  }

  if (!items || items.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No news articles found.</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList 
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', { title: item.title, image: item.urlToImage, content: item.content, url: item.url})}>
            <Post 
              title={item.title}
              imageUrl={item.urlToImage}
              createdAt={item.publishedAt.substring(0,10)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    marginTop: 15
  }
});
