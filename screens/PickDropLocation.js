import React, { useState } from 'react';
import { View, TextInput,TouchableOpacity,Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesAutoCompleteExample = ({navigation}) => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');

  const handlePickupLocation = (data, details = null) => {
    setPickupLocation(data.description);
    // console.log('Selected Location:', data.description);
  };
  const handleDropLocation = (data, details = null) => {
    setDropLocation(data.description);
    // console.log('Selected Location:', data.description);
  };

  const handlePress = ()=> {
     console.log(pickupLocation)
     console.log(dropLocation)
  }

  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
        placeholder="Where From?"
        styles={{
          container: {
            flex: 0,
            marginBottom: 10,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        fetchDetails={true}
        enablePoweredByContainer={false}
        onPress={handlePickupLocation}
        query={{
          key: "AIzaSyCUv7yJhnaMgU11mS-zDn9kCf9BklvsMsw",
          language: "en",
        }}
      />
      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
        placeholder="Where to?"
        styles={{
          container: {
            flex: 0,
            marginBottom: 10,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        fetchDetails={true}
        enablePoweredByContainer={false}
        onPress={handleDropLocation}
        query={{
          key: "AIzaSyCUv7yJhnaMgU11mS-zDn9kCf9BklvsMsw",
          language: "en",
        }}
      />

      {/* Display the selected location */}
      {/* <TextInput
        value={selectedLocation}
        editable={false}
        style={{
          fontSize: 18,
        }}
      /> */}
      <TouchableOpacity onPress={() => {
        handlePress();
        navigation.navigate('Home',{pickupLocation:pickupLocation,dropLocation:dropLocation})
      }}>
        <Text>
            Press
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GooglePlacesAutoCompleteExample;
