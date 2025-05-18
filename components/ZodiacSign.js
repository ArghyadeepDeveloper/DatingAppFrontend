import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { deepMauve } from "../constants/colors";

const ZodiacSign = ({ sign }) => {
  return (
    <View style={styles.zodiacSign}>
      <MaterialCommunityIcons
        name={`zodiac-${sign}`}
        size={24}
        color={deepMauve}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  zodiacSign: {
    margin: 10,
    borderRadius: "50%",
    backgroundColor: "pink",
    padding: 4,
  },
});

export default ZodiacSign;
