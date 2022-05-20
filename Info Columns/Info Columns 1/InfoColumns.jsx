import { View, Text, Image } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState,useEffect } from "react";
const InfoColumn = (props) => {
  const time = props.time;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const weather_api_key = "f100dceaffb1eb25f4e83484d09d05d2";
  const latitude = "35";
  const longitude = "139";
  const weather_api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}&exclude=minutely,%20daily&units=metric`;

  const getWeatherData = async () => {
    try {
      const response = await fetch(weather_api_url);
      const json = await response.json();
      setData(json);
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
    <View style={styles.columnContainer}>
      <Text style={styles.time}>{time}</Text>
      <Image
        style={styles.image}
        source={{
          url: "https://user-images.githubusercontent.com/43158356/169419005-84b1d696-f4e5-4efb-8266-b7baf43c5974.png",
        }}
      />
      <View style={{ flexDirection: "row", marginTop: 16 }}>
        <Ionicons name="water-outline" color={"white"} size={20} />
        <Text style={styles.percentage}>30%</Text>
      </View>

      <Text style={styles.temp}>18°C</Text>
      <View style={styles.tempColumn}></View>
    </View>
  );
};
export default InfoColumn;
