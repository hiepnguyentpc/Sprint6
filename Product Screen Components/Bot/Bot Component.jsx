import styles from "./styles";
import { View, Text } from "react-native";
import InfoColumn from "../../Info Columns/Info Columns 1/InfoColumns";

const BotComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <InfoColumn time={"3:00"}/>
        <InfoColumn time={"6:00"}/>
        <InfoColumn time={"9:00"}/>
        <InfoColumn time={"12:00"}/>
        <InfoColumn time={"15:00"}/>
      </View>
    </View>
  );
};
export default BotComponent;
