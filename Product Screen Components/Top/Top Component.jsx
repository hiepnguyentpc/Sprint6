import { min } from "moment-timezone";
import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const TopComponent = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "pm" : "am";

      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);

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
        <Text style={styles.date}>
          {date} {time}
        </Text>
      </View>

      <View style={styles.temperature}>
        <Image
          style={styles.image}
          source={{
            url: "https://user-images.githubusercontent.com/43158356/169251320-9b55dc3d-6fdf-47fa-938b-0e13662ca0b1.png",
          }}
        ></Image>
        <Text style={styles.temperature_description}>
          {Math.floor(data.temp)}°
        </Text>
        <Text style={styles.unit}>C</Text>
      </View>

      <View>
        <Text style={styles.note}>Có mây, nắng nhẹ</Text>
        <Text style={styles.note_ps}>
          ({data.sea_level}m so với mực nước biển)
        </Text>
      </View>
    </View>
  );
};

export default TopComponent;
