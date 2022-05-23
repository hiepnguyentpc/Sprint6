import { View, Text, Image } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from "react";


//const weather_api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}&exclude=minutely&units=metric`;

const InfoColumn2 = (props) => {
  const time = props.time;

  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const weather_api_key = "f100dceaffb1eb25f4e83484d09d05d2";
  const latitude = "35";
  const longitude = "139";
  const weather_api_url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=f100dceaffb1eb25f4e83484d09d05d2&units=metric`;

  const getWeatherData = async () => {
    try {
      setLoading(true)
      const response = await fetch(weather_api_url);
      const json = await response.json();
      setData(json.hourly);
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
          url: "https://user-images.githubusercontent.com/43158356/169729780-a1a5d565-4ea3-45a8-b4f4-2580455f42de.png",
        }}
      />
      <View style={{ flexDirection: "row", marginTop: 16 }}>
        <Ionicons name="water-outline" color={"white"} size={20} />
        <Text style={styles.percentage}>{data[1]?.humidity}%</Text>
      </View>

      <Text style={styles.temp}>{Math.ceil(data[1]?.temp)}°C</Text>
      <View style={styles.tempColumn}></View>
    </View>
  );
};
export default InfoColumn2;
