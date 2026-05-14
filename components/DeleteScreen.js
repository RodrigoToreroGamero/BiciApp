import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';
import ImageContainer from './ImageContainer';

export default function DeleteScreen({ setCurrentScreen }) {
	
	const [image, setImage] = useState("");
	
	return (
		<View style={globalStyles.container}>
			<View>
				<Text style={globalStyles.titleText}>¿Eliminar tu Vehículo?</Text>
			</View>
			<View style={globalStyles.background}>
				<ImageContainer image={image} setImage={setImage} useSetBtn={false} />
										
				<View style={globalStyles.center}>				
					<Text>Marca</Text>					
					<Text>Color</Text>					
					<Text>Características</Text>
				</View>
				
				<View style={globalStyles.horizontalBtns}>
					<TouchableOpacity style={globalStyles.previousScreenBtn}
						onPress={()=> setCurrentScreen('select')}					
					>
						<Ionicons name='return-down-back' size={28} color='black' />											
					</TouchableOpacity>
					
					<TouchableOpacity style={globalStyles.deleteVehicleBtn}
						onPress={()=> setCurrentScreen('select')}					
					>
						<Ionicons name='trash' size={28} color='white' />					
					</TouchableOpacity>									
				</View>							
			</View>
		</View>
	);	
}