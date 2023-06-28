import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  LayoutAnimation,
  ActivityIndicator
} from "react-native";
import React, { useState,useEffect } from "react";
// import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Cars = ({ navigation, route,  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
 

  const toggleList = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  const handleCheckboxToggle = (item) => {
    const isChecked = checkedItems.includes(item);

    if (isChecked) {
      setCheckedItems(
        checkedItems.filter((checkedItem) => checkedItem !== item)
      );
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };
  const { pickupValue, startdate,responseData } = route.params;
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
          <Text style={styles.hometext}>Cars</Text>
        </View>
        <View style={styles.right}>
          <AntDesign name="sharealt" size={24} color="black" />
          <Feather name="search" size={24} color="black" />
        </View>
      </View>
      <View style={styles.pickupcontainer}>
        <View style={styles.pickuplocation}>
          <Text> {pickupValue}</Text>
          <Text> {startdate}</Text>
        </View>
        <View style={styles.filter}>
          <TouchableOpacity  onPress={() => {
            console.log(responseData.data[0].data[0].images.front)
          }}>
            <Image source={require("../assets/Filter.png")} />
          </TouchableOpacity>
          {/* {isOpen && (
            <View style={styles.listContainer}>
              
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => handleCheckboxToggle("Item 1")}
              >
                <Text style={styles.checkboxLabel}>Item 1</Text>
                <View style={styles.checkbox}>
                  {checkedItems.includes("Item 1") && (
                    <View style={styles.checkboxChecked} />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => handleCheckboxToggle("Item 2")}
              >
                <Text style={styles.checkboxLabel}>Item 2</Text>
                <View style={styles.checkbox}>
                  {checkedItems.includes("Item 2") && (
                    <View style={styles.checkboxChecked} />
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => handleCheckboxToggle("Item 3")}
              >
                <Text style={styles.checkboxLabel}>Item 3</Text>
                <View style={styles.checkbox}>
                  {checkedItems.includes("Item 3") && (
                    <View style={styles.checkboxChecked} />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          )} */}
        </View>
      </View>
      <View style={styles.cartemplate}>
        <View style={styles.top}>
          <Image
            source={{uri: responseData.data[0].data[0].images.front}}
            
          />
          <View style={styles.carinfocontainer}>
            <View style={styles.carinfo}>
              <View style={styles.sixseaters}>
                <Image
                  source={require("../assets/users-xl.png")}
                  resizeMode="center"
                  style={styles.imagex}
                />
                <Text>6 seater</Text>
              </View>
              <View style={styles.ac}>
                <Image
                  source={require("../assets/ac-xl.png")}
                  resizeMode="center"
                  style={styles.imagex}
                />
                <Text>ac</Text>
              </View>
              <View style={styles.spedometer}>
                <Image
                  source={require("../assets/spedometer-xl.png")}
                  resizeMode="center"
                  style={styles.imagex}
                />
                <Text>12km/hr</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottom}>
          <View style={styles.left2}>
            <Text style={styles.marutisuzukitext}>MARUTI SUZUKI ERTIGA</Text>
            <Text>Book now at just</Text>
            <Text style={styles.twoninenineseven}>₹2997</Text>
            <Text>Pay the rest later </Text>
          </View>
          <View style={styles.right2}>
            <Text style={styles.eightsixtwozero}>₹8260</Text>
            <TouchableOpacity style={styles.rentnowbtn} onPress={() => navigation.navigate('CarDetails')}>
              <Text style={styles.rentnowbtntext}>Rent Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <View style={styles.carlist}>
        <View style={styles.cartemplate}>
          <View style={styles.top}>
            <View style={styles.carimage}>
              <Image
                source={require("../assets/swift.png")}
                style={styles.mainimage}
              />
            </View>
            <View style={styles.carinfocontainer}>
              <View style={styles.carinfo}>
                <View style={styles.sixseaters}>
                  <Image
                    source={require("../assets/users-xl.png")}
                    resizeMode="center"
                    style={styles.imagex}
                  />
                  <Text>6 seater</Text>
                </View>
                <View style={styles.ac}>
                  <Image
                    source={require("../assets/ac-xl.png")}
                    resizeMode="center"
                    style={styles.imagex}
                  />
                  <Text>ac</Text>
                </View>
                <View style={styles.spedometer}>
                  <Image
                    source={require("../assets/spedometer-xl.png")}
                    resizeMode="center"
                    style={styles.imagex}
                  />
                  <Text>12km/hr</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.left2}>
              <Text style={styles.marutisuzukitext}>MARUTI SUZUKI ERTIGA</Text>
              <Text>Book now at just</Text>
              <Text style={styles.twoninenineseven}>₹2997</Text>
              <Text>Pay the rest later </Text>
            </View>
            <View style={styles.right2}>
              <Text style={styles.eightsixtwozero}>₹8260</Text>
              <TouchableOpacity style={styles.rentnowbtn}>
                <Text style={styles.rentnowbtntext}>Rent Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View> */}
      
    </ScrollView>
  );
};

export default Cars;

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
  pickuplocation: {
    height: 55,
    backgroundColor: "white",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightblue",
    width: 330,
  },

  // carlist: {
  //   marginTop: 10,
  //   width: "100%",
  //   // backgroundColor: "pink",
  //   height: 430,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   padding: 10,
  // },
  // cartemplate: {
  //   width: 380,
  //   height: "95%",
  //   backgroundColor: "lightgrey",
  //   borderRadius: 10,

  //   borderRadius: 8,
  //   shadowColor: "black",
  //   shadowOpacity: 0.2,
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 4,
  //   elevation: 4,
  // },
  // top: {
  //   width: "100%",
  //   height: "65%",
  //   backgroundColor: "lightgrey",
  // },
  // carimage: {
  //   width: "100%",
  //   height: "58%",
  //   // backgroundColor: "yellow",
  //   alignItems: "center",
  //   paddingTop: 50,
  // },
  carinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
    // backgroundColor:'green',
    marginTop: 18,
  },
  // carinfocontainer: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "white",
  //   height: "43%",
  //   width: "100%",
  //   zIndex:0,
  //   marginBottom:2
  // },
  sixseaters: {
    width: 60,
    height: 60,
    // backgroundColor:'indigo',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  ac: {
    width: 50,
    height: 50,
    // backgroundColor:'indigo',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  spedometer: {
    width: 60,
    height: 60,
    // backgroundColor:'indigo',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  imagex: {
    width: 40,
    height: 40,
  },
  // mainimage: {

  // },
  // bottom: {
  //   flexDirection: "row",
  //   backgroundColor: "white",
  //   paddingHorizontal: 25,
  //   marginTop: 5,
  //   height: 128,
  // },
  left2: {
    width: "50%",
    height: 150,
    // backgroundColor:'pink',
    // justifyContent:'center'
    marginTop: 10,
    paddingHorizontal:10
  },
  right2: {
    width: "50%",
    alignItems: "flex-end",
    height: 150,
    // justifyContent: "center",

    // backgroundColor: "red",
    marginTop: 10,
    paddingHorizontal:10
  },
  eightsixtwozero: {
    fontSize: 25,
    color: "#0056FB",
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
  marutisuzukitext: {
    fontFamily: "oswald",
    fontSize: 18,
  },
  twoninenineseven: {
    color: "#0056FB",
  },
  pickupcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    width: 12,
    height: 12,
    backgroundColor: "lightblue",
  },
  listContainer: {
    width: 100,
    height: 200,
    backgroundColor: "red",
  },
  cartemplate: {
    width: "100%",
    height: 350,
    backgroundColor: "lightgrey",
    marginTop: 20,
    // borderWidth: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  top: {
    height: "60.5%",
    // backgroundColor:'pink',
    position: "relative",
    justifyContent: "flex-end",
  },
  mainimage: {
    position: "absolute",
    top: 50,
    right: 100,
    zIndex:1,
    width:'100%',
    
  },
  carinfocontainer: {
    height: "40%",
    backgroundColor: "white",
    alignItems: "center",
  },
  bottom: {
    height: "39.4%",
    backgroundColor: "white",
    width:'100%',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    
    paddingTop:40,
    marginTop:2

  },
});
