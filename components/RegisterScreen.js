import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';
import ImageContainer from './ImageContainer';

export default function RegisterScreen({ setCurrentScreen }) {
	
	const [image, setImage] = useState("");
	
	return (
		<View style={globalStyles.container}>
			<View>
				<Text style={globalStyles.titleText}>
					Registra tu Vehículo
				</Text>
			</View>
			<View style={globalStyles.background}>
				
				<ImageContainer image={image} setImage={setImage} useSetBtn={true} />
								
				<TextInput style={globalStyles.input} placeholder='Tipo de vehículo' />
				<TextInput style={globalStyles.input} placeholder='Marca' />
				<TextInput style={globalStyles.input} placeholder='Características' />							
				
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