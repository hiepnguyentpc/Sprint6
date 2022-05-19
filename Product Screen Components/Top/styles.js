
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#018622",
      flexDirection: "column",
    },
    location: {
      justifyContent: "center",
      alignSelf: "center",
      color: "white",
      fontWeight: "bold",
      fontSize: 22,
      marginTop: 17.7,
    },
    date: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
      alignSelf: "center",
    },
    image: {
      height: 48,
      width: 48,
      alignSelf: "center",
      left: "50%"
    },
    temperature: {
      flexDirection: "row",
      justifyContent:"space-evenly",
      
    },
    temperature_description:{
        fontSize: 68,
        color: "white",
        fontWeight:"bold"
    },
    unit:{
      fontSize: 40,
      color: "white",
      fontWeight:"bold",
      marginTop: 25,
      right:"70%"
    },
    note:{
        fontSize: 18,
        fontWeight:"bold",
        color:"white",
        alignSelf:"center",
    },
    note_ps:{
        fontSize:16,
        fontWeight:"bold",
        color:"white",
        alignSelf:"center"
    }
  });

  export default styles
  