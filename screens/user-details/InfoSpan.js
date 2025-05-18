import { View, Text, StyleSheet } from "react-native";
import { capitalizeFirstLetter } from "../../lib/text";

const InfoTab = ({ icon, data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>{icon}</View>
      <Text style={styles.text}>{capitalizeFirstLetter(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffc0cb",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginVertical: 6,
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Nunito-Medium",
    flexShrink: 1,
  },
});

export default InfoTab;
