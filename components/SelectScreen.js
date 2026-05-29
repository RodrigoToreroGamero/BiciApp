import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';
import ImageContainer from './ImageContainer';
import VehicleCarousel from './VehicleCarousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function SelectScreen({ setCurrentScreen }) {
	/*	
	const [vehicles, setVehicles] = useState([
		{ id: "1", image: null, barcode: "a", brand: "Monark", color: "Rojo" },
		{ id: "2", image: "este es un url", barcode: "b", brand: "Giant", color: "Azul" },
		{ id: "3", image: null, barcode: "c", brand: "Oxford", color: "Negro" },
	]);
	*/
	
	const [vehicles, setVehicles] = useState([]);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const selectedVehicle = vehicles.length > 0 ? vehicles[selectedIndex] : null;	
	
	const logout = async () => {
		try {
			await AsyncStorage.removeItem("userToken");
			setCurrentScreen("login");
		} catch(e) {
			console.log("Error al cerrar sesión: ", e);
		}		
	};
	
	useEffect(() => {
		const fetchVehicles = async () => {
			try {
				const userToken = await AsyncStorage.getItem("userToken");
				const res = await axios.get(`http://localhost:3000/vehicles?usercode=${userToken}`);
				setVehicles(res.data);
			} catch(e) {
				console.log("Error cargando vehículos: ", e);
			}
		}
		fetchVehicles();
	}, []);
				
	return (
		<View style={globalStyles.container}>
		
			{/* HEADER: */}
			<View style={globalStyles.header}>
				<Text style={globalStyles.titleText}>Tus Vehículos</Text>
				
				<TouchableOpacity
					onPress={ logout }
				>
					<Ionicons name='log-out-outline' size={30} color='white' />
				</TouchableOpacity>
			</View>
			
			{/* CONTENT: */}
			<View style={globalStyles.content}>
			
				{/* CAROUSEL: */}
				<View style={globalStyles.carouselSelection}>
					{selectedVehicle ? (					
						<VehicleCarousel
							vehicles={vehicles}
							selectedIndex={selectedIndex}
							onChangeIndex={setSelectedIndex}
						/>
					) : (
						<Text>No hay vehículos disponibles</Text>
					)}
				</View>
				
				{/* CRUD BUTTONS: */}
				<View style={globalStyles.vehicleActionBtns}>
				
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