import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Pressable } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';
import ImageContainer from './ImageContainer';
import axios from 'axios';

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
				console.log(err.getMessage());
			}
		};
		loadData();
	}, []);
	
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
				{vehicleTypes.map(item => (
					<Pressable
						key={item.type}
						onPress={() => setSelectedType(item.type)}
						style={{
							padding: 12,
							backgroundColor:
								selectedType === item.type ? "#4caf50" : "#ddd",
							marginBottom: 0
						}}
					>
						<Text>{item.type}</Text>
					</Pressable>				
				))}
				</View>								
								
				<View>
				{brands.map(brand => (
					<Pressable
						key={brand}
						onPress={() => setSelectedBrand(brand)}
					>
						<Text>{brand}</Text>
					</Pressable>
				))}
				</View>
								
				<View style={{ flexDirection: "row", gap: 12 }}>
					{colors.map(color => (
						<Pressable
							key={color.name}
							onPress={() => setSelectedColor(color.name)}
						>
							<View style={{
								width: 32,
								height: 32,
								borderRadius: 16,
								backgroundColor: color.value,
								borderWidth: 1
							}}/>
						</Pressable>
							
					))}
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