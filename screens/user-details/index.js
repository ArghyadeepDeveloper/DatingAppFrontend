import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import personImage from "../../assets/images/person-image-one.jpeg";
import { brownishPink, deepMauve, mildPink } from "../../constants/colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import ZodiacSign from "../../components/ZodiacSign";
import Chip from "../../components/Chip";
import InfoTab from "./InfoSpan";

const UserDetailsScreen = () => {
  const [userinfo] = useState({
    name: "Daisy Campbell",
    image: personImage,
    age: 25,
    interests: ["Books", "Movies", "Chess", "Outing", "Foods", "Cooking"],
    zodiacSign: "capricorn",
    distance: 50,
    city: "Kolkata",
    about: "I am very curious to know new people.",
    lookingFor: ["Dating", "Friendship", "Relationship"],
    profession: "Game Developer",
    religion: "christianity",
    smokingHabit: "none",
    drinkingHabit: "seldom",
  });

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        <Image source={userinfo.image} style={styles.personImage} />
        <TouchableOpacity style={styles.startIcon}>
          <AntDesign name="star" size={30} color={deepMauve} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.topInfo}>
          <Text style={styles.nameText}>
            {userinfo.name}, {userinfo.age}
          </Text>
          <ZodiacSign sign={userinfo.zodiacSign} />
        </View>

        <Text style={styles.professionText}>{userinfo.profession}</Text>
        <Text style={styles.locationText}>
          📍 {userinfo.city} · {userinfo.distance} km away
        </Text>

        <InfoTab
          icon={<FontAwesome5 name="pray" size={18} color="black" />}
          data={userinfo.religion}
        />

        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.aboutText}>{userinfo.about}</Text>

        <Text style={styles.sectionTitle}>Interests</Text>
        <View style={styles.chipContainer}>
          {userinfo.interests.map((interest, index) => (
            <Chip key={index} label={interest} />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Looking For</Text>
        <View style={styles.chipContainer}>
          {userinfo.lookingFor.map((item, index) => (
            <Chip key={index} label={item} />
          ))}
        </View>

        <View style={styles.additionalInfo}>
          <InfoTab
            icon={
              <MaterialCommunityIcons name="cigar" size={20} color="black" />
            }
            data={userinfo.smokingHabit}
          />
          <InfoTab
            icon={<Entypo name="drink" size={20} color="black" />}
            data={userinfo.drinkingHabit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    backgroundColor: mildPink,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  imageContainer: {
    height: 320,
    width: "100%",
    borderRadius: 30,
    borderColor: brownishPink,
    borderWidth: 0.5,
    position: "relative",
  },
  personImage: {
    height: "100%",
    width: "100%",
    borderRadius: 30,
  },
  infoContainer: {
    marginTop: 10,
  },
  startIcon: {
    position: "absolute",
    right: 30,
    bottom: 24,
    color: brownishPink,
    padding: 12,
    backgroundColor: "pink",
    borderRadius: "50%",
  },
  nameText: {
    fontSize: 24,
    color: "#333",
    fontFamily: "Nunito-Bold",
    marginRight: 5,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  locationText: {
    marginTop: 6,
    color: "#777",
    fontSize: 14,
    fontFamily: "Nunito-Regular",
  },
  sectionTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Nunito-Bold",
    color: "#444",
  },
  aboutText: {
    fontSize: 15,
    marginTop: 6,
    color: "#555",
    fontFamily: "Nunito-Regular",
    lineHeight: 20,
  },
  topInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  professionText: {
    fontSize: 18,
    color: "black",
    fontFamily: "Nunito-Medium",
    marginBottom: 10,
  },
  additionalInfo: {
    marginTop: 10,
  },
  additionalInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    marginTop: 8,
  },
});

export default UserDetailsScreen;
