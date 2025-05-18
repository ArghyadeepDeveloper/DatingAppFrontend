import { View, StyleSheet, Text } from "react-native";
import { brownishPink } from "../constants/colors";

const Chip = ({ label }) => (
  <View style={styles.chip}>
    <Text style={styles.chipText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  chip: {
    backgroundColor: brownishPink,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    color: "white",
    fontSize: 13,
    fontFamily: "Nunito-Regular",
  },
});

export default Chip;
