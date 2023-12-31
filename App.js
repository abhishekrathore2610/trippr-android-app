import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SwiperScreen from './SwiperScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Cars from './screens/Cars';
import CheckboxList from './screens/CheckBoxList';
import CarDetails from './screens/CarDetails';
import CheckOut from './screens/CheckOut';
import PickDropLocation from './screens/PickDropLocation';

// import Screen4 from './screens/Screen4';
// import Screen5 from './screens/Screen5';

// Import your screens
// import Screen1 from './Screen1';
// import Screen2 from './Screen2';
// import Screen3 from './Screen3';

// Create a stack navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Swiper" component={SwiperScreen} />
        {/* <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5}  /> */}
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Cars' component={Cars}/> 
        <Stack.Screen name='CheckBoxList' component={CheckboxList}/>
        <Stack.Screen name='CarDetails' component={CarDetails}/>
        <Stack.Screen name='CheckOut' component={CheckOut}/>
        <Stack.Screen name='PickDropLocation' component={PickDropLocation}/>
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
