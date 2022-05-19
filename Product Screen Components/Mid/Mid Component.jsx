import { View, Text } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const MidComponent = () => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <View style={styles.childContainer}>
          <Text style={styles.humidity}>Độ ẩm</Text>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Ionicons name="water" size={30} color={"white"}></Ionicons>
            <Text style={styles.midText}>75%</Text>
          </View>
        </View>
        <View style={styles.verticleLine}></View>

        <View style={styles.childContainer}>
          <Text style={styles.humidity}>Độ che phủ rừng</Text>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Ionicons name="leaf" size={30} color={"white"}></Ionicons>
            <Text style={styles.midText}>75%</Text>
          </View>
        </View>
      </View>

      <View style={styles.mid2}>
        <Text style={styles.tempMargin}>Biên độ nhiệt trong ngày</Text>

        <View style={{ flexDirection: "row", marginTop:2 }}>
          <Text style={styles.time}>(01:00) </Text>
          <Text style={styles.numbers}>15°C - 28°C </Text>
          <Text style={styles.time}>(01:00) </Text>
        </View>
      </View>
    </View>
  );
};

export default MidComponent;
