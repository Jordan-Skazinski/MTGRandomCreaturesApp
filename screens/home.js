import { Text, View, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../globalStyles";
import { NavigationContainer } from "@react-navigation/native";

export default function Home({navigation}) {
    

    function getRandomItem(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
    
        // get random item
        const item = arr[randomIndex];
    
        return item;
    }
    

    return (
        <View style={globalStyles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('ZeroCost')}>
                <Text style={globalStyles.button}> 0 Cost</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('OneCost')}>
                <Text style={globalStyles.button}> 1 Cost</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('TwoCost')}>
                <Text style={globalStyles.button}> 2 Cost</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('ThreeCost')}>
                <Text style={globalStyles.button}> 3 Cost</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('FourCost')}>
                <Text style={globalStyles.button}> 4 Cost</Text>
            </TouchableOpacity>    
            <TouchableOpacity onPress={()=>navigation.navigate('FiveCost')}>
                <Text style={globalStyles.button}> 5 Cost</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('SixCost')}>
                <Text style={globalStyles.button}> 6 Cost</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('SevenCost')}>
                <Text style={globalStyles.button}> 7 Cost</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('EightCost')}>
                <Text style={globalStyles.button}> 8 Cost</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('NineCost')}>
                <Text style={globalStyles.button}> 9+ Cost</Text>
            </TouchableOpacity>


        </View>
    )
}