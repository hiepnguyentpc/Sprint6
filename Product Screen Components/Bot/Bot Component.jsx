import styles from "./styles";
import { View, Text } from "react-native";
import InfoColumn from "../../Info Columns/Info Columns 1/InfoColumns";

const BotComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <InfoColumn />
        <InfoColumn />
        <InfoColumn />
        <InfoColumn />
        <InfoColumn />
      </View>
    </View>
  );
};
export default BotComponent;
