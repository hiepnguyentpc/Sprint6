import styles from "./styles";
import { View, Text } from "react-native";
import InfoColumn1 from "../../Info Columns/Info Columns 1/InfoColumns";
import InfoColumn2 from "../../Info Columns/Info Columns 2/InfoColumns";
import InfoColumn3 from "../../Info Columns/Info Columns 3/InfoColumns";
import InfoColumn4 from "../../Info Columns/Info Columns 4/InfoColumns";
import InfoColumn5 from "../../Info Columns/Info Columns 5/InfoColumns";

const BotComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <InfoColumn1 time={"3:00"}/>
        <InfoColumn2 time={"6:00"}/>
        <InfoColumn3 time={"9:00"}/>
        <InfoColumn4 time={"12:00"}/>
        <InfoColumn5 time={"15:00"}/>

        

        
        
      </View>
    </View>
  );
};
export default BotComponent;
