import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';
import ImageContainer from './ImageContainer';
import axios from 'axios';
import SelectorModal from './SelectorModal';
import * as Crypto from 'expo-crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ setCurrentScreen }) {
	
	const API_URL = "http://localhost:3000";
	
	const [image, setImage] = useState("");
	const [vehicleTypes, setVehicletypes] = useState([]);
	const [colors, setColors] = useState([]);
	const [selectedType, setSelectedType] = useState(null);
	const [selectedBrand, setSelectedBrand] = useState(null);
	const [selectedColor, setSelectedColor] = useState(null);
	
	const brands = vehicleTypes.find(v => v.type === selectedType)?.brands ?? [];
		
	useEffect(() => {
		const loadData = async () => {
			try {							
				const[types, colors] = await Promise.all([
					axios.get(`${API_URL}/vehicleTypes`),
					axios.get(`${API_URL}/colors`)
				]);
				
				setVehicletypes(types.data);
				setColors(colors.data);
			} catch(err) {
				console.log("Error al cargar datos de los vehículos: ",err);
			}
		};
		loadData();
	}, []);
	
	const registerNewVehicle = async (type, brand, color) => {
						
		try {
			const userToken = await AsyncStorage.getItem("userToken");	
			const barcode = `VMP-${Crypto.randomUUID()}`;
			
			const newVehicle = {				
				usercode: userToken,			
				type: type,
				barcode: barcode,
				brand: brand,
				color: color
			};
			axios.post(`${API_URL}/vehicles/`, newVehicle);
		} catch(err) {
			console.log("Error al registrar vehículo: ",err);
		} finally {			
			setCurrentScreen('select');
		}
	};
	
	return (
		<View style={globalStyles.container}>
			<View>
				<Text style={globalStyles.titleText}>
					Registra tu Vehículo
				</Text>
			</View>
			<View style={globalStyles.background}>
				
				<ImageContainer image={image} setImage={setImage} useSetBtn={true} />
												
				<SelectorModal
					enable={true}
					options={vehicleTypes.map(v => ({ name: v.type, value: v.type }))}
					selected={selectedType}
					onSelect={(item) => {
						setSelectedType(item.value);
						setSelectedBrand(null);
					}}
					label="Tipo de vehículo"
					disableLabel=""
				/>
								
				<SelectorModal
					enable={selectedType}
					options={brands.map(b => ({ name: b, value: b }))}
					selected={selectedBrand}
					onSelect={(item) => setSelectedBrand(item.value)}				
					label="Marca"
					disableLabel="Marca"
				/>
								
				<SelectorModal
					enable={true}
					options={colors.map(c => ({ name: c.name, value: c.value }))}
					selected={selectedColor}
					onSelect={(item) => setSelectedColor(item.name)}
					label="Color"
					disableLabel=""
				/>
				
				
				<View style={globalStyles.horizontalBtns}>										
					<TouchableOpacity style={globalStyles.editVehicleBtn} onPress={()=> setCurrentScreen('select')}>		
						<Ionicons name='return-down-back' size={28} color='black' />						
					</TouchableOpacity>
					
					<TouchableOpacity style={globalStyles.acceptBtn} onPress={()=> registerNewVehicle()}>
						<Ionicons name='checkmark' size={28} color='black' />					
					</TouchableOpacity>
				</View>							
			</View>
		</View>
	);	
}