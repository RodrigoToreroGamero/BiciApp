import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';
import ImageContainer from './ImageContainer';
import axios from 'axios';
import SelectorModal from './SelectorModal';
import * as Crypto from 'expo-crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

export default function RegisterScreen({ setCurrentScreen }) {
	
	const API_URL = "http://localhost:3000";
	const MULTER_UPLOAD = "image";	
	const MIN_WIDTH = 100;
	const MIN_HEIGHT = 100;
	const MAX_IMG_SIZE = 5 * 1024 * 1024; // 5 MB
	
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
			
	const pickImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ["image"],
			quality: 1
		});
		
		if(result.canceled) {
			return;
		}
		
		const asset = result.assets[0];		
		
		console.log(asset);
		
		if(asset.width < MIN_WIDTH || asset.height < MIN_HEIGHT) {
			alert(`Imagen debe medir mínimo ${MIN_WIDTH}x${MIN_HEIGHT} pixeles.`);
			return;
		}
		
		if(asset.fileSize > MAX_IMG_SIZE) {
			alert("Imagen no debe superar los 5 MB.");
			return;
		}
		
		setImage(asset);
	}
	
	const registerNewVehicle = async (type, brand, color, image) => {
						
		try {
			const userToken = await AsyncStorage.getItem("userToken");	
			const barcode = `VMP-${Crypto.randomUUID()}`;
			const formData = new FormData();
			
			formData.append("usercode", userToken);
			formData.append("type", type);
			formData.append("barcode", barcode);
			formData.append("brand", brand);
			formData.append("color", color);
			
			console.log("Imagen antes de enviar registro: ", image);
			
			if(image) {
				/*
				formData.append(MULTER_UPLOAD, {
					uri: image.uri,
					name: image.fileName ?? "vehicle.jpg",
					type: image.mimeType ?? "image/jpeg"
				});				
				*/
				formData.append(MULTER_UPLOAD, image.file, image.fileName ?? "vehicle.jpg");
			}
			
			await axios.post(
				`${API_URL}/vehicles`,
				formData,
				{
					headers: {
						"Content-type": "multipart/form-data"
					}
				}
			);
									
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
				
				<ImageContainer 
					image={image} 
					setImage={setImage} 
					useSetBtn={pickImage} 
				/>
				
				<View style={globalStyles.formContainer}>
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
				</View>				
				<View style={globalStyles.horizontalBtns}>										
					<TouchableOpacity style={globalStyles.editVehicleBtn} onPress={()=> setCurrentScreen('select')}>		
						<Ionicons name='return-down-back' size={28} color='black' />						
					</TouchableOpacity>
					
					<TouchableOpacity style={globalStyles.acceptBtn} 
						onPress={()=> registerNewVehicle(
							selectedType,
							selectedBrand,
							selectedColor,
							image
						)}>
						<Ionicons name='checkmark' size={28} color='black' />					
					</TouchableOpacity>
				</View>							
			</View>
		</View>
	);	
}