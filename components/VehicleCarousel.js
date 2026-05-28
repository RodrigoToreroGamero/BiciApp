import React, { useState, useRef } from 'react';
import { View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import VehicleCard from './VehicleCard';



export default function VehicleCarousel({ vehicles }) {
	
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentVehicle = vehicles[currentIndex];
	
	function nextVehicle() {
		if(currentIndex < vehicles.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	}
	
	function previousVehicle() {
		if(currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	}
	
	return (
		<View style={{ alignItems: "center" }}>
			
			<VehicleCard vehicle={currentVehicle} />
			
			<View style={globalStyles.horizontalBtns}>
				<TouchableOpacity style={globalStyles.leftVehicleBtn}
					onPress={()=> previousVehicle()}						
					activeOpacity={0.7}
					hitSlop={10}
					disabled={currentIndex <= 0}
				>
					<Ionicons name='chevron-back' size={30} color='black' />
				</TouchableOpacity>
					
				<TouchableOpacity style={globalStyles.rightVehicleBtn}
					onPress={()=> nextVehicle()}						
					activeOpacity={0.7}
					hitSlop={10}
					disabled={currentIndex >= vehicles.length -1}
				>
					<Ionicons name='chevron-forward' size={30} color='black' />
				</TouchableOpacity>
			</View>
	
	);
	
}