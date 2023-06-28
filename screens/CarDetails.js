import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { useFonts } from "expo-font";

const CarDetails = () => {
  const [fontsLoaded] = useFonts({
    oswald: require("../assets/fonts/Oswald-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.hometext}>Cars Detail</Text>
        </View>
        <View style={styles.right}>
          <AntDesign name="sharealt" size={24} color="black" />
          <Feather name="search" size={24} color="black" />
        </View>
      </View>
      <View style={styles.imageswipers}>
        <Swiper style={styles.swiperconatiner}>
          <Image
            source={require("../assets/swift.png")}
            style={styles.carimage}
          />
          <Image source={require("../assets/swift.png")} />
          <Image source={require("../assets/swift.png")} />
          <Image source={require("../assets/swift.png")} />
        </Swiper>
      </View>
      <View style={styles.carinteriorcontainer}>
        <Image
          source={require("../assets/car1.jpg")}
          style={styles.carinterior}
        />
        <Image
          source={require("../assets/car2.jpg")}
          style={styles.carinterior}
        />
        <Image
          source={require("../assets/car3.jpg")}
          style={styles.carinterior}
        />
      </View>
      <View style={styles.cardetailcontianer}>
        <Text style={{ fontFamily: "oswald", fontSize: 25 }}>
          Maruti Swift Dezire
        </Text>
        <View style={styles.discription}>
          <View style={styles.typecontainer}>
            <Text style={{ fontSize: 20 }}>Type:</Text>
            <Text style={{ fontSize: 20 }}> Sedan</Text>
          </View>
          <View style={styles.capacitycontainer}>
            <Text style={{ fontSize: 20 }}>Capacity: </Text>
            <Text style={{ fontSize: 20 }}>4 Passengers</Text>
          </View>
        </View>
        <View style={styles.bluetickcont}>
          <Image source={require("../assets/blue-tick.png")} />
          <Text style={{ fontSize: 20 }}>
            Music System is present in the vehical
          </Text>
        </View>
        <View style={styles.bluetickcont}>
          <Image source={require("../assets/blue-tick.png")} />
          <Text style={{ fontSize: 20 }}>Travelling with a Pet</Text>
        </View>
        <Text>
          Driver''s details will be shared after cpmpletion of booking
        </Text>
        <View style={styles.pricerentnowcontainer}>
          <Text style={{ fontSize: 25, color: "#0056FB", fontWeight: 700 }}>
            ₹ 8620
          </Text>
          <TouchableOpacity style={styles.rentnowbtn}>
            <Text style={styles.rentnowbtntext}>Rent Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.exclusioncontainer}>
        <Text style={{ fontSize: 25, fontWeight: 600 }}>Exclusion</Text>
        <View style={styles.exclusion}>
          <View style={styles.exclusion1}>
            <Image source={require("../assets/i-sign.png")} />
            <Text style={{ fontSize: 18 }}>Interstate text not included</Text>
          </View>
          <View style={styles.exclusion1}>
            <Image source={require("../assets/i-sign.png")} />
            <Text style={{ fontSize: 18 }}>Toll charges not included</Text>
          </View>
        </View>
      </View>
      <View style={styles.safetycontainer}>
        <View style={styles.safetylogocontainer}>
          <Image source={require("../assets/plus-sign.png")} />
          <Text style={{ fontSize: 25, fontWeight: 600 }}>Safety</Text>
        </View>
        <Text style={{ fontSize: 18 }}>Your safety is our top priority</Text>
        <View style={styles.safety}>
          <View style={styles.safety1}>
            <Image source={require("../assets/mask.png")} />
            <Text style={{ fontSize: 18 }}>Driver with Mask</Text>
          </View>
          <View style={styles.safety1}>
            <Image source={require("../assets/arogyasetu.png")} />
            <Text style={{ fontSize: 18 }}>Drivers with Arogya Setu App </Text>
          </View>
          <View style={styles.safety1}>
            <Image source={require("../assets/handsanitizer.png")} />
            <Text style={{ fontSize: 18 }}>Hand Sanitizers </Text>
          </View>
          <View style={styles.safety1}>
            <Image source={require("../assets/sanitizedvehical.png")} />
            <Text style={{ fontSize: 18 }}>Sanitized Vehicles</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height:'100%',
    // backgroundColor: "red",
    padding: 8,
    gap: 10,
    backgroundColor: "#F7F2F1",
  },
  left: {
    flexDirection: "row",
    gap: 20,
    width: 120,
    // backgroundColor:'red',
    justifyContent: "space-between",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    gap: 20,
    width: 80,
    // backgroundColor:'red',
    justifyContent: "space-between",
  },
  hometext: {
    fontSize: 22,
    fontFamily: "roboto",
    color: "#7F7F73",
  },
  navbar: {
    width: "100%",
    // backgroundColor: "aqua",
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  imageswipers: {
    width: "100%",
    height: 200,
    // backgroundColor:'pink'
    // justifyContent:'center',
    // alignItems:'center'
    flex: 1,
  },
  swiperconatiner: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'red',
    paddingHorizontal: "25%",
    paddingVertical: "35%",

    // flex:1
  },

  carinterior: {
    width: 100,
    height: 80,
    borderRadius: 10,
  },
  carinteriorcontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cardetailcontianer: {
    width: "100%",
    height: 280,
    backgroundColor: "#E0F2F3",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  discription: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  typecontainer: {
    flexDirection: "row",
  },
  capacitycontainer: {
    flexDirection: "row",
  },
  bluetickcont: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
  },
  pricerentnowcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  rentnowbtn: {
    backgroundColor: "#0056FB",
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 10,
  },
  rentnowbtntext: {
    color: "white",
    fontSize: 16,
  },
  exclusioncontainer: {
    width: "100%",
    height: 100,
    // backgroundColor: "yellow",
    marginTop: 15,
  },
  exclusion1: {
    flexDirection: "row",
    gap: 10,
  },
  exclusion: {
    width: "100%",
    // backgroundColor: "red",
    marginTop: 20,
  },

  safetycontainer: {
    width:'100%',
    height:200,
    // backgroundColor:'pink',
    marginTop:25
  },
  safetylogocontainer: {
    flexDirection:'row',
    alignItems:'center',
    gap: 10,
    // backgroundColor:'red',
    marginBottom:5
  },
  safety: {
    // backgroundColor:'violet',
    height:100,
    width:'100%',
    marginTop:10


  },
  safety1: {
    flexDirection:'row',
    gap: 10,
    alignItems:'center'
  }
})
