import { View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
const TopComponent = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 20,
          marginRight: 10,
        }}
      >
        <View style={{ right: -20, marginRight: 30 }}>
          <Ionicons name="location" size={35} color={"white"}></Ionicons>
        </View>

        <View style={{ marginLeft: 20 }}>
          <Ionicons name="calendar" size={35} color={"white"}></Ionicons>
        </View>
      </View>

      <View>
      <Text style={styles.location}>VUỜN SÂM NGỌC LINH</Text>
      <Text style={styles.date}>T.5, 19 Tháng 12 09:14</Text>

      </View>
      
      <View style={styles.temperature}>
        <Image
          style={styles.image}
          source={{
            url: "https://user-images.githubusercontent.com/43158356/169251320-9b55dc3d-6fdf-47fa-938b-0e13662ca0b1.png",
          }}
        ></Image>
        <Text style={styles.temperature_description}>24°</Text>
        <Text style={styles.unit}>C</Text>
      </View>

      <View>
      <Text style={styles.note}>Có mây, nắng nhẹ</Text>
      <Text style={styles.note_ps}>(1200m so với mực nước biển)</Text>

      </View>




    </View>
  );
};

export default TopComponent;

