import React, { useState, useRef } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';
import ImageContainer from './ImageContainer';
import VehicleCarousel from './VehicleCarousel';

export default function SelectScreen({ setCurrentScreen }) {
			
	const [vehicles, setVehicles] = useState([
		{ id: "1", imageSource: require("../assets/bicicle1.png"), brand: "Monark", color: "Rojo" },
		{ id: "2", imageSource: require("../assets/bicicle2.png", brand: "Giant", color: "Azul" },
		{ id: "3", imageSource: require("../assets/bicicle3.png", brand: "Oxford", color: "Negro" },
	]);
	
	const [selectedVehicle, setSelectedVehicle] = useState(null);
				
	return (
		<View style={globalStyles.container}>
			<View>
				<Text style={globalStyles.titleText}>Tus Vehículos</Text>
			</View>
			<View style={globalStyles.background}>
			
				<View>
					<TouchableOpacity
						onPress={()=> setCurrentScreen('login')}
					>
						<Ionicons name='log-out-outline' size={30} color='white' />
					</TouchableOpacity>
				</View>
				
				<VehicleCarousel
					vehicles={vehicles}
					onSelectVehicle={setSelectedVehicle}
				/>
				
				<View style={globalStyles.horizontalBtns}>
					<TouchableOpacity style={globalStyles.deleteVehicleBtn}
						onPress={()=> setCurrentScreen('delete')}
						activeOpacity={0.7}
						hitSlop={10}					
					>
						<Ionicons name='trash' size={28} color='white' />
					</TouchableOpacity>
					
					<TouchableOpacity style={globalStyles.editVehicleBtn}
						onPress={()=> setCurrentScreen('edit')}
						activeOpacity={0.7}
						hitSlop={10}					
					>
						<Ionicons name='pencil' size={28} color='black' />					
					</TouchableOpacity>
					
					<TouchableOpacity style={globalStyles.registerVehicleBtn}
						onPress={()=> setCurrentScreen('register')}					
						activeOpacity={0.7}
						hitSlop={10}
					>
						<Ionicons name='add-outline' size={28} color='white' />
					</TouchableOpacity>
				</View>							
			</View>
		</View>
	);	
}