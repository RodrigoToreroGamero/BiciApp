import React, { useState, useRef } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';
import VehicleCard from './VehicleCard';



export default function VehicleCarousel({ vehicles, selectedIndex, onChangeIndex }) {
	
	const currentVehicle = vehicles[selectedIndex];
	
	function nextVehicle() {
		onChangeIndex((selectedIndex + 1) % vehicles.length);		
	}
	
	function previousVehicle() {
		onChangeIndex((selectedIndex + vehicles.length - 1) % vehicles.length);		
	}
	
	return (
		<View style={{ alignItems: "center" }}>
			
			<VehicleCard vehicle={currentVehicle} />
			
			<View style={globalStyles.horizontalBtns}>
				<TouchableOpacity style={globalStyles.leftVehicleBtn}
					onPress={()=> previousVehicle()}						
					activeOpacity={0.7}
					hitSlop={10}					
				>
					<Ionicons name='chevron-back' size={30} color='black' />
				</TouchableOpacity>
					
				<TouchableOpacity style={globalStyles.rightVehicleBtn}
					onPress={()=> nextVehicle()}						
					activeOpacity={0.7}
					hitSlop={10}					
				>
					<Ionicons name='chevron-forward' size={30} color='black' />
				</TouchableOpacity>
				
			</View>
		</View>	
	);	
}