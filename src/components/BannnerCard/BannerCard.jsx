import React from 'react';
import {View, ScrollView, Image, Dimensions, StyleSheet} from "react-native";
import newsBanner from "../../news_banner_data.json";
import styles from './Banner.style';


function BannerCard(){


  return(

    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      {

        newsBanner.map(banners => (
          <Image style={styles.scroll_Image} source={{uri: banners.imageUrl}}/>
        ))

      }
    </ScrollView>

  );



}


export default BannerCard;

