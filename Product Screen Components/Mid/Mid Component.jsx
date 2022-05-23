import { View, Text } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from "react";

const MidComponent = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const weather_api_key = "f100dceaffb1eb25f4e83484d09d05d2";
  const latitude = "35";
  const longitude = "139";
  const weather_api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}&units=metric`;

  const getWeatherData = async () => {
    try {
      const response = await fetch(weather_api_url);
      const json = await response.json();
      setData(json.main);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);
  return (
    <View>
      <View style={styles.rowContainer}>
        <View style={styles.childContainer}>
          <Text style={styles.humidity}>Độ ẩm</Text>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Ionicons name="water" size={30} color={"white"}></Ionicons>
            <Text style={styles.midText}>{data.humidity}%</Text>
          </View>
        </View>
        <View style={styles.verticleLine}></View>

        <View style={styles.childContainer}>
          <Text style={styles.humidity}>Độ che phủ rừng</Text>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Ionicons name="leaf" size={30} color={"white"}></Ionicons>
            <Text style={styles.midText}>{Math.floor(data.grnd_level/10)}%</Text>
          </View>
        </View>
      </View>

      <View style={styles.mid2}>
        <Text style={styles.tempMargin}>Biên độ nhiệt trong ngày</Text>

        <View style={{ flexDirection: "row", marginTop: 2 }}>
          <Text style={styles.time}>(01:00) </Text>
          <Text style={styles.numbers}>
            {Math.floor(data.temp_min)}°C - {Math.ceil(data.temp_max)}°C{" "}
          </Text>
          <Text style={styles.time}>(03:00) </Text>
        </View>
      </View>
    </View>
  );
};

export default MidComponent;
