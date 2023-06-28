import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Button,
    TextInput,
  } from "react-native";
  import React, { useState } from "react";
  import { EvilIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { Feather } from "@expo/vector-icons";
  import { useFonts } from "expo-font";
  import AutoComplete from "../AutoComplete";
  import DateTimePickerModal from "react-native-modal-datetime-picker";
  import Passengers from "../Passengers";
  import { MaterialIcons } from "@expo/vector-icons";
  import Swiper from "react-native-swiper";
  import Template1 from "../SwipersHomeStays/Template1";
  import Template2 from "../SwipersHomeStays/Template2";
  import Template3 from "../SwipersHomeStays/Template3";
  import moment from "moment";
  import AsyncStorage from '@react-native-async-storage/async-storage';
  // import { DatePickerModal } from 'expo-date-time-picker';
  
  const Home = ({ navigation,route }) => {
    
    
  const dropLocation = route.params?.dropLocation;
  const pickupLocation = route.params?.pickupLocation;
    const [buttonStates1, setButtonStates1] = useState([true, false, false]);
    const [buttonStates2, setButtonStates2] = useState([true, false, false]);
    // const [pickupValue, setPickupValue] = useState("");
    const [pickupSuggestions, setPickupSuggestons] = useState([]);
    const [dropSuggestions, setDropSuggestions] = useState([]);
    const [pickupDisplayList, setPickupDisplayList] = useState(false);
    const [dropDisplayList, setDropDisplayList] = useState(false);
    // const [dropValue, setDropValue] = useState("");
    const [pass, setPass] = useState(0);
    const [but5, setbut5] = useState("");
    const [but6, setbut6] = useState("");
    const [but7, setbut7] = useState("");
    const [but8, setbut8] = useState("");
    
  
    const [isStartDateTimePickerVisible, setStartDateTimePickerVisible] =
      useState(false);
    const [isEndDateTimePickerVisible, setEndDateTimePickerVisible] =
      useState(false);
    const [startdate, setStartdate] = useState(null);
    const [enddate, setEnddate] = useState(null);
    // const[dateTimePickerVisible, setDateTimePickerVisible] = useState(false)
  
    const showEndDateTimePicker = () => {
      setEndDateTimePickerVisible(true);
    };
    const showStartDateTimePicker = () => {
      setStartDateTimePickerVisible(true);
    };
  
    const hideStartDateTimePicker = () => {
      setDateTimePickerVisible(false);
    };
    const hideEndDateTimePicker = () => {
      setDateTimePickerVisible(false);
    };
  
    const handleStartConfirm = (date) => {
      setStartdate(date);
      hideStartDateTimePicker();
    };
    const handleEndConfirm = (date) => {
      setEnddate(date);
      hideEndDateTimePicker();
    };
  
    const formatDateTime = (datetime) => {
      return moment(datetime).format("MMMM Do YYYY, h:mm A");
    };
  
    const [fontsLoaded] = useFonts({
      mosereta: require("../assets/fonts/Montserrat-Bold.ttf"),
      roboto: require("../assets/fonts/Roboto-Regular.ttf"),
      post: require("../assets/fonts/postnobillscolombo-bold.ttf"),
      porter: require("../assets/fonts/porter-sans-inline-block.ttf"),
      
    });

    
  
  
    
  
    if (!fontsLoaded) {
      return undefined;
    }
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        return token;
      } catch (error) {
        console.error("Error retrieving token:", error);
        return null;
      }
    };
  
    const handleSubmit = async () => {
      const token = await getToken();
      console.log("Token:", token);
      const terms1 = pickupLocation;
      const slicedPickupSubLocalityAddress = terms1.substring(
        0,
        terms1.indexOf(",")
      );
  
      const firstCommaIndex1 = terms1.indexOf(",");
      const secondCommaIndex1 = terms1.indexOf(",", firstCommaIndex1 + 1);
  
      const slicedPickupCityAddress =
        secondCommaIndex1 !== -1
          ? terms1.substring(firstCommaIndex1 + 1, secondCommaIndex1)
          : "";
  
      const terms2 = dropLocation;
      const slicedDropSubLocalityAddress = terms2.substring(
        0,
        terms2.indexOf(",")
      );
  
      const firstCommaIndex2 = terms2.indexOf(",");
      const secondCommaIndex2 = terms2.indexOf(",", firstCommaIndex2 + 1);
  
      const slicedDropCityAddress =
        secondCommaIndex2 !== -1
          ? terms2.substring(firstCommaIndex2 + 1, secondCommaIndex2)
          : "";
  
      //  if (terms.offset === 12) {
      //   from: pickupValue.predictions[0].terms[1]
      //  }
  
      const date1 = moment(startdate, "YYYY-MM-DD");
      const date2 = moment(enddate, "YYYY-MM-DD");
      const diffInDays = date2.diff(date1, "days");
      const diffInHours = date2.diff(date1, "hours");
  
      const data = {
        passengerLimit: pass,
        from: 'Bengaluru Urban',
        fromSubLocality: slicedPickupSubLocalityAddress,
        toSubLocality: dropLocation,
        fromDate: startdate,
        toDate: enddate,
        toSubLocality: slicedDropSubLocalityAddress,
        to: slicedDropCityAddress,
        totalHours: diffInHours,
        totalDays: diffInDays,
        tripType: "roundTrip",

      };
      

//       const data = {
//         from:"Bengaluru Urban",
// fromDate:"2023-06-23T10:00:00.000Z",
// fromSubLocality:"BTM Layout",
// isAcVehicle:true,
// passengerLimit:"3",
// to:"Panaji",
// toDate:"2023-06-30T10:00:00.000Z",
// toSubLocality:"Panaji",
// totalDays:7,
// totalDistanceInKm:350,
// tripType:"roundTrip"
//       }

      
  
      await fetch("https://trippr-production-64zvm7t2wa-em.a.run.app/api/v1/bucket", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Include the bearer token in the Authorization header
          "Content-Type": "application/json" ,
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((responseData) => {
          // Handle the response data here

          navigation.navigate('Cars',{responseData})
          // if(responseData.statusCode=== 200){
          //   navigation.navigate('Home')
          // } else{
          //   console.warn("Invalid email or password")
          console.log(responseData.data[0].data[0].images.front)
          
          
          // }
        })
        .catch((error) => {
          // Handle any errors here
          console.error(error);
        });
    };
  
    const handlePress1 = (index) => {
      const newButtonStates1 = [...buttonStates1];
      newButtonStates1.fill(false);
      newButtonStates1[index] = true;
      setButtonStates1(newButtonStates1);
    };
    const handlePress2 = (index) => {
      const newButtonStates2 = [...buttonStates1];
      newButtonStates2.fill(false);
      newButtonStates2[index] = true;
      setButtonStates2(newButtonStates2);
    };
  
    return (
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.navbar}>
          <View style={styles.left}>
            <EvilIcons name="navicon" size={30} color="black" />
            <Text style={styles.hometext}>Home</Text>
          </View>
          <View style={styles.right}>
            <AntDesign name="sharealt" size={24} color="black" />
            <Feather name="search" size={24} color="black" />
          </View>
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.maintext}>
            Discover the <Text style={styles.bluetext}>Best Car Rentals </Text>
            and <Text style={styles.bluetext}>Homestays</Text> in India.
          </Text>
        </View>
        <View style={styles.mainimage}>
          <Image
            source={require("../assets/background-img-home.png")}
            resizeMode="contain"
            style={styles.bigimage}
          />
          <Image
            source={require("../assets/discover.png")}
            style={styles.image1}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/tc-applied.png")}
            style={styles.image2}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/special-offer-new.png")}
            style={styles.image3}
            resizeMode="contain"
          />
          <View style={styles.getoffcontainer}>
            <Text style={styles.getofftext1}>GET</Text>
            <Text style={styles.getofftext2}>₹1500</Text>
            <Text style={styles.getofftext1}>OFF ON YOUR FIRST RIDE</Text>
          </View>
        </View>
        <View style={styles.btncontainer}>
          <TouchableOpacity
            style={[styles.button1, buttonStates1[0] && styles.activeButton1]}
            onPress={() => {
              handlePress1(0);
              navigation.navigate('CarDetails')
            }}
          >
            <Text style={styles.btntext}>Car</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={[styles.button1, buttonStates1[1] && styles.activeButton1]}
            onPress={() => {
              handlePress1(1);
              navigation.navigate('CheckOut')
            }}
          >
            <Text style={styles.btntext}>Buses</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={[styles.button1, buttonStates1[2] && styles.activeButton1]}
            onPress={() => handlePress1(2)}
          >
            <Text style={styles.btntext}>Homestays</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taxitab}>
          <TouchableOpacity
            style={[styles.cont1, buttonStates2[0] && styles.activeButton2]}
            onPress={() => handlePress2(0)}
          >
            <Image source={require("../assets/plane-takeoff.png")} />
            <Text>Airport Cabs</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={[styles.cont1, buttonStates2[1] && styles.activeButton2]}
            onPress={() => handlePress2(1)}
          >
            <Image source={require("../assets/car-local.png")} />
            <Text>Local</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={[styles.cont1, buttonStates2[2] && styles.activeButton2]}
            onPress={() => handlePress2(2)}
          >
            <Image source={require("../assets/car-outstation.png")} />
            <Text>Outstation</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pickdropbox}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('PickDropLocation');
            // console.log(pickupLocation);
            // console.log(dropLocation)
          }}>
            <Text>
              Press
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pickupContainer}>
            <Image source={require('../assets/gps-new.png')} resizeMode="center" style={{width:30,height:30}}/>
            <Text>{pickupLocation}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pickupContainer}>
            <Image source={require('../assets/gps-new.png')} resizeMode="center" style={{width:30,height:30}}/>
            <Text>{dropLocation}</Text>
          </TouchableOpacity>
          {/* <AutoComplete
            pickupValue={pickupValue}
            setPickupValue={setPickupValue}
            pickupSuggestions={pickupSuggestions}
            setPickupSuggestons={setPickupSuggestons}
            dropSuggestions={dropSuggestions}
            setDropSuggestions={setDropSuggestions}
            pickupDisplayList={pickupDisplayList}
            setPickupDisplayList={setPickupDisplayList}
            dropDisplayList={dropDisplayList}
            setDropDisplayList={setDropDisplayList}
            dropValue={dropValue}
            setDropValue={setDropValue}
          /> */}
        </View>
        <View style={styles.datetimecontainer}>
          <View style={styles.startdate}>
            <Button
              title="Start Date & Time"
              onPress={showStartDateTimePicker}
              style={styles.selectbutton}
            />
            <View style={styles.datetimeshow}>
              {startdate && (
                <Text style={styles.datetimetext}>
                  {formatDateTime(startdate)}
                </Text>
              )}
              <DateTimePickerModal
                isVisible={isStartDateTimePickerVisible}
                mode="datetime" // Set the mode to "datetime"
                onConfirm={handleStartConfirm}
                onCancel={hideStartDateTimePicker}
              />
            </View>
          </View>
          <View style={styles.startdate}>
            <Button
              title="End Date & Time"
              onPress={showEndDateTimePicker}
              style={styles.selectbutton}
            />
            <View style={styles.datetimeshow}>
              {enddate && (
                <Text style={styles.datetimetext}>{formatDateTime(enddate)}</Text>
              )}
              <DateTimePickerModal
                isVisible={isEndDateTimePickerVisible}
                mode="datetime" // Set the mode to "datetime"
                onConfirm={handleEndConfirm}
                onCancel={hideEndDateTimePicker}
              />
            </View>
          </View>
        </View>
        <View style={styles.passengercontainer}>
          <View style={styles.passengercontainer1}>
            <Image
              source={require("../assets/passengers.png")}
              resizeMode="center"
            />
            <Text>Passengers</Text>
          </View>
          <Passengers pass={pass} setPass={setPass} />
        </View>
        <View style={styles.searchcontainer}>
          <TouchableOpacity
            style={styles.searchbtn}
            onPress={() => {
              handleSubmit();
              navigation.navigate("Cars", {
                pickupLocation: "Pickup Location: " + pickupLocation,
                startdate:
                  "Date: " +
                  startdate.toISOString().split("T")[0] +
                  ",Time: " +
                  startdate.toISOString().split("T")[1].substring(0, 5),
                  
                  
              },);
            }}
          >
            <Text style={styles.searchbtntext}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.swiftdezirecontainer}>
          <View style={styles.carcontainer1}>
            <View style={styles.topcant}>
              <Image
                source={require("../assets/swift-dezire.png")}
                style={styles.swiftdezireimage}
              />
              <View style={styles.cardata}>
                <View style={styles.extrainfo}>
                  <View style={styles.fourseaters}>
                    <Image source={require("../assets/car-users.png")} />
                    <Text style={styles.carinfotext}>4 seaters</Text>
                  </View>
                  <View style={styles.ac}>
                    <Image source={require("../assets/ac.png")} />
                    <Text style={styles.carinfotext}>A/C</Text>
                  </View>
                  <View style={styles.spedometer}>
                    <Image source={require("../assets/spedo-meter.png")} />
                    <Text style={styles.carinfotext}>₹ 12/km</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bottomcant}>
              <View style={styles.carnameprice}>
                <View style={styles.carname}>
                  <Text>Maruti Suzuki</Text>
                  <Text>Swift Dezire</Text>
                  <Text>Booknow for just 2997, pay</Text>
                  <Text>the rest later</Text>
                </View>
                <View style={styles.carprice}>
                  <Text>8260</Text>
                </View>
              </View>
              <View style={styles.rentnowcont}>
                <TouchableOpacity style={styles.rentnowbutton}>
                  <Text>Rent Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.carcontainer1}>
            <View style={styles.topcant}>
              <Image
                source={require("../assets/swift-dezire.png")}
                style={styles.swiftdezireimage}
              />
              <View style={styles.cardata}>
                <View style={styles.extrainfo}>
                  <View style={styles.fourseaters}>
                    <Image source={require("../assets/car-users.png")} />
                    <Text style={styles.carinfotext}>4 seaters</Text>
                  </View>
                  <View style={styles.ac}>
                    <Image source={require("../assets/ac.png")} />
                    <Text style={styles.carinfotext}>A/C</Text>
                  </View>
                  <View style={styles.spedometer}>
                    <Image source={require("../assets/spedo-meter.png")} />
                    <Text style={styles.carinfotext}>₹ 12/km</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bottomcant}>
              <View style={styles.carnameprice}>
                <View style={styles.carname}>
                  <Text>Maruti Suzuki</Text>
                  <Text>Swift Dezire</Text>
                  <Text>Booknow for just 2997, pay</Text>
                  <Text>the rest later</Text>
                </View>
                <View style={styles.carprice}>
                  <Text>8260</Text>
                </View>
              </View>
              <View style={styles.rentnowcont}>
                <TouchableOpacity style={styles.rentnowbutton}>
                  <Text>Rent Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.showmore}>
            <Text>Show More</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.homestaysheading}>
          <Text style={styles.homestaystext}>
            Expierence the warmth of our home in our cozy homestays
          </Text>
        </View>
        <View style={styles.homestaysswipers}>
          <Swiper showsPagination={false}>
            <Template1 />
            <Template2 />
            <Template3 />
          </Swiper>
        </View>
      </ScrollView>
    );
  };
  
  export default Home;
  
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
    textcontainer: {
      // backgroundColor: "green",
      height: 120,
      width: 310,
      marginTop: 25,
    },
    maintext: {
      color: "black",
      fontSize: 30,
      fontFamily: "mosereta",
    },
    bluetext: {
      color: "#0056FB",
    },
    mainimage: {
      // backgroundColor: "blue",
      // width: "100%",
      height: 250,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 15,
    },
    bigimage: {
      width: "80%",
      height: 200,
      position: "relative",
    },
    image1: {
      position: "absolute",
      width: "55%",
  
      right: 0,
      bottom: 180,
    },
    image2: {
      position: "absolute",
      width: "35%",
      bottom: 95,
      left: 25,
    },
    image3: {
      position: "absolute",
      width: "60%",
      top: 58,
      left: 101,
    },
    getoffcontainer: {
      // backgroundColor:'red',
      width: 205,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: 65,
      right: 105,
      gap: 6,
    },
    getofftext1: {
      fontSize: 16,
      fontFamily: "post",
      color: "white",
    },
    getofftext2: {
      fontSize: 16,
      fontFamily: "porter",
      color: "white",
    },
    btncontainer: {
      // backgroundColor: "purple",
      width: "100%",
      flexDirection: "row",
      // alignItems:'center',
      height: 40,
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: 15,
    },
    button1: {
      backgroundColor: "white",
      width: "25%",
      height: 30,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "grey",
      borderWidth: 1,
      // marginTop: 20,
    },
    btntext: {
      color: "black",
    },
    activeButton1: {
      backgroundColor: "grey",
    },
    activeButton2: {
      backgroundColor: "lightblue",
    },
    taxitab: {
      backgroundColor: "white",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      height: 70,
      alignItems: "center",
      // borderWidth: 1,
      borderRadius: 10,
      shadowColor: "black",
      // shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      marginTop: 15,
    },
    cont1: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      borderColor: "black",
      // borderWidth: 1,
      padding: 5,
      height: 60,
      width: "27%",
      borderRadius: 20,
    },
  
    // pickdropbox: {
    //   width: "100%",
    //   backgroundColor:'red',
    //   justifyContent: "space-between",
    //   alignItems: "center",
    //   flexDirection: "column",
    //   marginTop: 15,
    // },
    passengercontainer: {
      // backgroundColor:'pink',
      height: 70,
      width: "100%",
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 15,
      justifyContent: "flex-start",
    },
    passengercontainer1: {
      // backgroundColor:'indigo',
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      height: 30,
      width: "100%",
    },
    searchcontainer: {
      // backgroundColor:'red',
      height: 50,
      width: "100%",
      marginTop: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    searchbtn: {
      width: "60%",
      backgroundColor: "#0056FB",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
  
      height: 45,
    },
    searchbtntext: {
      color: "white",
      fontSize: 22,
    },
    swiftdezirecontainer: {
      height: 300,
      // backgroundColor: "purple",
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    carcontainer1: {
      width: "49%",
      height: "100%",
      // backgroundColor: "indigo",
    },
    topcant: {
      height: "50%",
      width: "100%",
      backgroundColor: "grey",
      justifyContent: "flex-end",
      alignItems: "center",
      position: "relative",
    },
    cardata: {
      height: "60%",
      width: "100%",
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      borderTopEndRadius: 10,
    },
    extrainfo: {
      flexDirection: "row",
      width: "100%",
      // backgroundColor:'green',
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "60%",
    },
    fourseaters: {
      // backgroundColor:'red',
      justifyContent: "center",
      alignItems: "center",
    },
    ac: {
      // backgroundColor:'red',
      justifyContent: "center",
      alignItems: "center",
    },
    spedometer: {
      // backgroundColor:'red',
      justifyContent: "center",
      alignItems: "center",
    },
    carinfotext: {
      fontSize: 15,
    },
    swiftdezireimage: {
      position: "absolute",
      top: 20,
      zIndex: 1,
    },
    carnameprice: {
      backgroundColor: "white",
      flexDirection: "row",
      height: "55%",
      // alignItems:'center',
      justifyContent: "center",
      width: "100%",
      paddingHorizontal: 20,
      marginTop: 15,
    },
    rentnowcont: {
      // backgroundColor:'grey',
      justifyContent: "center",
      alignItems: "center",
      height: 23,
      marginTop: 15,
    },
    rentnowbutton: {
      // backgroundColor:'pink',
      width: "50%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 10,
    },
    showmore: {
      height: 50,
      // backgroundColor:'green',
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    bottomcant: {
      backgroundColor: "white",
      marginTop: 2,
      height: 170,
    },
    homestaysswipers: {
      width: 400,
      height: 250,
      backgroundColor: "pink",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 100,
    },
    homestaysheading: {
      width: "100%",
      height: 100,
      backgroundColor: "yellow",
      justifyContent: "center",
      alignItems: "center",
    },
    homestaystext: {
      fontSize: 28,
    },
    pick: {
      flexDirection: "row",
      borderWidth: 1,
      // backgroundColor: "aqua",
      alignItems: "center",
      // justifyContent: "start",
      height: 50,
      width: "100%",
      // justifyContent:'start',
      // position: "relative",
      borderRadius: 10,
      shadowOpacity: 0.5,
      shadowRadius: 10,
      shadowColor: "black",
    },
    gps: {
      // backgroundColor: "black",
      width: "10%",
      height: 50,
    },
    pickinput: {
      // backgroundColor: "purple",
      width: "90%",
      height: 50,
      color: "black",
    },
  
    drop: {
      flexDirection: "row",
      borderWidth: 1,
      // backgroundColor: "aqua",
      alignItems: "center",
      // justifyContent: "start",
      height: 50,
      width: "100%",
      // justifyContent:'start',
      // position: "relative",
      borderRadius: 10,
      shadowOpacity: 0.5,
      shadowRadius: 10,
      shadowColor: "black",
    },
    pickdropbox: {
      // backgroundColor: "green",
      height: 160,
      width: "100%",
      alignItems: "center",
  
      position: "relative",
      // marginTop: 10,
      justifyContent: "center",
      // marginTop: 15,
      gap: 20,
    },
    datetimecontainer: {
      padding: 5,
      height: 100,
      justifyContent: "space-between",
      alignItems: "flex-start",
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 15,
      flexDirection: "row",
      // padding: 10
    },
    pickupContainer: {
      borderWidth:1,
      borderColor:'#0056FB',
      width:'90%',
      height:40,
      flexDirection:'row',
      alignItems:'center',
      gap: 10,
      borderRadius: 10
    }
  });
  