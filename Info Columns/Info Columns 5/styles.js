import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    columnContainer: {
        backgroundColor:  "rgba(255,255,255,0.2)",
        width: "20%",
        height: 242,
        flexDirection:"column",
        alignItems:"center"
      },
      image:{
          marginTop: 21,
          width:30,
          height:30,
      },
      time:{
          fontSize: 18,
          fontWeight:"bold",
          color:"white",
          marginTop: 16,
      },
      percentage:{
        fontSize: 18,
        fontWeight:"bold",
        color:"white",
        bottom: -2
      },
      temp:{
        fontSize: 18,
        fontWeight:"bold",
        color:"white",
        marginTop:86,
        bottom: 29,
      },
      tempColumn:{
          width:6,
          height:32,
          backgroundColor:"white",
          borderRadius:3,
          bottom: 26,
      }
  
});

export default styles;
