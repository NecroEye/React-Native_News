import React from "react";
import { View, SafeAreaView, FlatList, Alert, StyleSheet, Dimensions } from "react-native";
import news_data from "./news_data.json";
import NewsCard from "./components/NewsCard";
import BannerCard from "./components/BannnerCard/BannerCard";


function App() {

  const renderNews = (data: any) => <NewsCard news={data.item} />;


  return (

    <SafeAreaView style={style.outer_container}>

      <View>

        <FlatList
          ListHeaderComponent={() => <BannerCard/> }
          keyExtractor={(item, index) => item.u_id.toString()}
          data={news_data}
          renderItem={renderNews} />

      </View>
    </SafeAreaView>


  );

}

const style = StyleSheet.create({

  outer_container: {
    backgroundColor: "silver",
    flex: 1
  },


});

export default App;
