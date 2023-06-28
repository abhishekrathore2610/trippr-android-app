import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React,{useState} from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const CheckOut = () => {
  const [applycode, setApplyCode] = useState('')
  const handleInput = (e) => {
    setApplyCode(e.target.value)
  }
  
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
          <Text style={styles.hometext}>Checkout</Text>
        </View>
        <View style={styles.right}>
          <AntDesign name="sharealt" size={24} color="black" />
          <Feather name="search" size={24} color="black" />
        </View>
      </View>
      <View style={styles.rentalsummarycontainer}>
        <Text style={{ fontSize: 25, fontWeight: 600 }}>Rental Summary</Text>
        <Text>
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </Text>
      </View>
      <View style={styles.carcheckoutcontainer}>
        <View style={styles.carimage}>
          <Image source={require("../assets/carcheckout.png")} />
        </View>
        <View style={styles.carText}>
          <Text style={{ fontSize: 25, fontFamily: "oswald" }}>
            Maruti Suzuki Swift Dezire
          </Text>
        </View>
      </View>

      <View style={styles.billcontainer}>
        <View style={styles.subtotalcontainer}>
          <Text style={{ fontSize: 20 }}>Subtotal</Text>
          <Text style={{ fontSize: 25, fontWeight: 600 }}>₹8620</Text>
        </View>
        <View style={styles.subtotalcontainer}>
          <Text style={{ fontSize: 20 }}>Tax</Text>
          <Text style={{ fontSize: 25, fontWeight: 600 }}>₹0</Text>
        </View>
        <View style={styles.subtotalcontainer}>
          <Text style={{ fontSize: 20 }}>Driver Allowance</Text>
          <Text style={{ fontSize: 25, fontWeight: 600 }}>₹1500</Text>
        </View>
      </View>
      <View style={styles.promocodecontainermain}>
        <View style={styles.promocodecontainer}>
            <TextInput placeholder="Apply promo code" onChange={handleInput} value={applycode}/>
            <TouchableOpacity style={styles.applybutton}>
                <Text style={{color:'white'}}>
                    APPLY
                </Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.totalbillcontainer}>
        <Text style={{ fontSize: 20 }}>Total Rental Price</Text>
        <Text style={{ fontSize: 25, fontWeight: 600 }}>₹1500</Text>
      </View>
      <View style={styles.billinginfocontainer}>
        <View style={styles.billinginfotext}>
          <View style={styles.left}>
            <Text style={{fontSize:25,fontWeight:600}}>Billing Info</Text>
            <Text>Please fill your bill info</Text>
          </View>
          <View style={styles.right}>
          <Text>Step 1 of 4</Text>
          </View>
        </View>
        <View style={{gap:10,width:'100%', backgroundColor:'green',height:'20%',padding:5}}>
          <Text style={{fontSize:20}}>Name</Text>
          <TextInput style={{width:'80%',backgroundColor:'grey',height:'40%',borderRadius:5}} placeholder="Your Name"/>
        </View>
        <View style={{gap:10,width:'100%', backgroundColor:'green',height:'20%',padding:5}}>
          <Text style={{fontSize:20}}>Address</Text>
          <TextInput style={{width:'80%',backgroundColor:'grey',height:'40%',borderRadius:5}} placeholder="Your Address"/>
        </View>
        <View style={{gap:10,width:'100%', backgroundColor:'green',height:'20%',padding:5}}>
          <Text style={{fontSize:20}}>Phone Number</Text>
          <TextInput style={{width:'80%',backgroundColor:'grey',height:'40%',borderRadius:5}} placeholder="Your Number"/>
        </View>
        <View style={{gap:10,width:'100%', backgroundColor:'green',height:'20%',padding:5}}>
          <Text style={{fontSize:20}}>Town/City</Text>
          <TextInput style={{width:'80%',backgroundColor:'grey',height:'40%',borderRadius:5}} placeholder="Your Town or City"/>
        </View>
        
        
      </View>
      <View style={styles.rentalinfocontainer}>
      <View style={styles.billinginfotext}>
          <View style={styles.left}>
            <Text style={{fontSize:25,fontWeight:600}}>Rental Info</Text>
            <Text>Please select date</Text>
          </View>
          <View style={styles.right}>
          <Text>Step 2 of 4</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckOut;

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
  rentalsummarycontainer: {
    gap: 10,
    marginTop: 20,
  },
  carcheckoutcontainer: {
    width: "100%",
    height: 150,
    backgroundColor: "pink",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  carimage: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  carText: {
    width: "50%",
  },
  billcontainer: {
    width: "100%",
    height: 100,
    backgroundColor: "red",
    marginTop: 15,
  },
  subtotalcontainer: {
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  promocodecontainermain: {
    width: "100%",
    height: 50,
    backgroundColor: "grey",
    marginTop: 15,
    justifyContent:'center',
    alignItems:'center'
    
  },
  promocodecontainer: {
    width:'80%',
    height:'80%',
    backgroundColor:'brown',
    borderRadius:15,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'

  },
  applybutton: {
    backgroundColor:'blue',
    width:'20%',
    height:'70%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  totalbillcontainer: {
    width:'100%',
    height:50,
    backgroundColor:'yellow',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  billinginfocontainer: {
    width:'100%',
    height: 600,
    backgroundColor:'purple',
    marginTop: 15,
  },
  billinginfotext: {
     width:'100%',
     height:100,
     backgroundColor:'red',
     flexDirection:'row',
     justifyContent:'space-between',
    //  alignItems:'center'
  },
  left: {
    flexDirection:'column',
    gap: 10
  }, 

  rentalinfocontainer: {
    width:'100%',
    height:500,
    backgroundColor:'indigo'
  }
  

  
});
