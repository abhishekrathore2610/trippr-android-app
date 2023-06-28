import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

const CheckboxList = ({navigation}) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxToggle = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(
        checkedItems.filter((checkedItem) => checkedItem !== item)
      );
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  const types = [
    "Sedan",
    "SUV",
    "Hatchback",
    "Tempo Traveler",
    "Mini Bus",
    "Bus",
  ];
  const capacity = [
    "1-4 Passengers",
    "4-8 Passengers",
    "8-12 Passengers",
    "12 and More",
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.type}>
        <View style={styles.navbar}>
          <Text style={styles.typetext}>Type</Text>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {types.map((item, index) => (
          <CheckBox
            key={index}
            title={item}
            checked={checkedItems.includes(item)}
            onPress={() => handleCheckboxToggle(item)}
          />
        ))}
      </View>
      <View style={styles.capacity}>
      <View style={styles.navbar}>
          <Text style={styles.typetext}>Capacity</Text>
          <TouchableOpacity>
            
          </TouchableOpacity>
        </View>
        {capacity.map((item, index) => (
          <CheckBox
            key={index}
            title={item}
            checked={checkedItems.includes(item)}
            onPress={() => handleCheckboxToggle(item)}
          />
        ))}
      </View>
    </ScrollView>
  );
};
export default CheckboxList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    padding: 15,
  },
  navbar: {
    width: "100%",
    height: 50,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  typetext: {
    fontSize: 20,
  },
});
