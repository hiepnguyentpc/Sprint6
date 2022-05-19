import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  childContainer: {
    height: 90,
    width: "50%",
    backgroundColor: "rgba(255,255,255,0.2)",
    flexDirection: "column",
    justifyContent:"center"
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "white",
  },
  humidity: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
  midText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 4,
  },
  tempMargin:{
      fontSize: 16,
      fontWeight:"bold",
      color:"white",
      marginTop:2,
  },
  mid2:{
      marginTop:10,
      alignItems:"center",
  },
  time:{
      fontSize:14,
      fontWeight:"bold",
      color:"white", marginTop:8,
  },
  numbers:{
    fontSize:24,
    fontWeight:"bold",
    color:"white"

  }
});

export default styles;
