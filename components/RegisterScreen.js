import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';
import ImageContainer from './ImageContainer';
import ComboBox from './ComboBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function RegisterScreen({ setCurrentScreen }) {
	
	const [image, setImage] = useState("");
	
	const [vehicleType, setVehicleType] = useState("");
	const [brand, setBrand] = useState("");
	const [color, setColor] = useState("");
	
	const [vehicleTypes, setVehicleTypes] = useState([]);
	const [brands, setBrands] = useState([]);
	const [colors, setColors] = useState([]);
	
	useEffect(() => {
		const fetchVehicleData = async () => {
			try {
				const typesRes = await axios.get(`http://localhost:3000/vehicleTypes`);
				const colorsRes = await axios.get(`http://localhost:3000/colors`);
								
				/*
				const vehicles = res.data;
				setVehicleTypes([...new Set(vehicles.map(v => v.type))]);
				setBrands([...new Set(vehicles.map(v => v.brand))]);
				setColors([...new Set(vehicles.map(v => v.color))]);
				*/
				setVehicleTypes(typesRes.data);
				setColors(colorsRes.data);
			} catch(e) {
				console.log(e);
			}			
		};
		fetchVehicleData();
	}, []);
	
	const handleSelectVehicleType = (type) => {
		setVehicleType(type);
		const selectedType = vehicleTypes.find(v => v.type === type); /* buscar datos del tipo de vehículo. */
		setBrands(selectedType.brands);
		setBrand("");
	};
	
	const registerVehicle = async () => {
			try {
				const userToken = await AsyncStorage.getItem("userToken");
				const newVehicle = {
					usercode: userToken,
					type: vehicleType,
					brand: brand,
					color: color
				};
				
				await axios.post(`http://localhost:3000/vehicles`, newVehicle);				
				Alert.alert("Éxito", "Vehículo registrado");				
				setCurrentScreen("select");
			} catch(e) {
				console.log(e);
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
				
				<View>
					<ComboBox 
						placeholder='Tipo de vehículo'
						options={vehicleTypes.map(v => v.type)} /* arreglo de strings */
						selectedOption={vehicleType}
						onSelect={setVehicleType}
					/>
					
					<ComboBox 
						placeholder='Marca'
						options={brands.map(b => b)} /* arreglo de strings */
						selectedOption={brand}
						onSelect={setBrand}
					/>
					
					<ComboBox 
						placeholder='Color'
						options={colors.map(c => c.name)}
						selectedOption={color}
						onSelect={setColor}
					/>
				</View>				
				
				<View style={globalStyles.horizontalBtns}>										
					<TouchableOpacity style={globalStyles.editVehicleBtn} onPress={()=> setCurrentScreen('select')}>		
						<Ionicons name='return-down-back' size={28} color='black' />						
					</TouchableOpacity>
					
					<TouchableOpacity style={globalStyles.acceptBtn} onPress={()=> setCurrentScreen('select')}>
						<Ionicons name='checkmark' size={28} color='black' />					
					</TouchableOpacity>
				</View>							
			</View>
		</View>
	);	
}