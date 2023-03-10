import {StyleSheet, Dimensions} from "react-native";


export default StyleSheet.create({

  container: {backgroundColor:'white', margin:10, borderRadius:5},
  image: {height: Dimensions.get("window").height / 4, borderTopLeftRadius:5, borderTopRightRadius:5},
  title: {fontWeight:'bold', fontSize:18},
  description: {marginTop:3},
  author: {textAlign:'right', margin:5, fontStyle:'italic'},
  inner_Container: {padding:10},





});

