import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';
import VehicleCarousel from './VehicleCarousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';

export default function SelectScreen({ setCurrentScreen }) {
		
	const [vehicles, setVehicles] = useState([]);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const selectedVehicle = vehicles.length > 0 ? vehicles[selectedIndex] : null;
	const [loading, setLoading] = useState(false);
	const API_URL = "http://localhost:3000";
	
	const logout = async () => {
		try {
			setLoading(true);
			await AsyncStorage.removeItem("userToken");
			setCurrentScreen("login");
		} catch(e) {
			console.log("Error al cerrar sesión: ", e);
		} finally {
			setLoading(false);
		}
	};
	
	useEffect(() => {
		const fetchVehicles = async () => {
			try {
				setLoading(true);
				const userToken = await AsyncStorage.getItem("userToken");
				const res = await axios.get(`${API_URL}/vehicles?usercode=${userToken}`);
				setVehicles(res.data);
			} catch(e) {
				console.log("Error cargando vehículos: ", e);
			} finally {
				setLoading(false);
			}
		}
		fetchVehicles();
	}, []);
				
	return (
		<View style={globalStyles.container}>
			{/* SELECT FORM */}
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
							setCurrentScreen={setCurrentScreen}
						/>
					) : (
						<Text>No hay vehículos disponibles</Text>
					)}
				</View>
				
				{/* CRUD BUTTONS: */}
				<View style={globalStyles.vehicleActionBtns}>				
					<TouchableOpacity style={globalStyles.registerVehicleBtn}
						onPress={()=> setCurrentScreen('register')}					
						activeOpacity={0.7}
						hitSlop={10}
					>
						<Text style={{ color: 'white' }}>Registrar Vehículo </Text>
						<Ionicons name='add-outline' size={28} color='white' />
					</TouchableOpacity>
					
				</View>							
			</View>
			
			{/* LOADING SCREEN */}
			{loading && <LoadingScreen visible={loading} />}
		</View>
	);	
}