import { View, Text, Image } from "react-native"
import styles from "./styles"
import Ionicons from "react-native-vector-icons/Ionicons"
const InfoColumn = () => {
    return (
        <View style={styles.columnContainer}>
            <Text style={styles.time}>03:00</Text>
            <Image
                style={styles.image}
                source={{url:"https://user-images.githubusercontent.com/43158356/169419005-84b1d696-f4e5-4efb-8266-b7baf43c5974.png"}}
            />
            <View style={{flexDirection:"row", marginTop: 16}}>
                <Ionicons name="water-outline" color={"white"} size={20}/>
                <Text style={styles.percentage}>30%</Text>
            </View>

            <Text style={styles.temp}>18°C</Text>
            <View style={styles.tempColumn}></View>
        </View>


    )
}
export default InfoColumn