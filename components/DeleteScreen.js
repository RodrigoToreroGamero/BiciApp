import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';

export default function DeleteScreen({ setCurrentScreen }) {
	
	return (
		<View
		style={globalStyles.container}
		>
			<View>
				<Text style={globalStyles.titleText}>
					¿Eliminar tu Vehículo?
				</Text>
			</View>
			<View style={globalStyles.background}>
				<View>
					<Image />
					<Ionicons name='image' size={28} color='white' />
				</View>
										
				<View style={globalStyles.center}>				
					<Text>Marca</Text>					
					<Text>Color</Text>					
					<Text>Características</Text>
				</View>
				
				<View style={globalStyles.horizontalBtns}>
					<TouchableOpacity
					onPress={()=> setCurrentScreen('select')}
					style={globalStyles.previousScreenBtn}
					>
						<Ionicons name='return-down-back' size={28} color='black' />											
					</TouchableOpacity>
					
					<TouchableOpacity
					onPress={()=> setCurrentScreen('select')}
					style={globalStyles.deleteVehicleBtn}
					>
						<Ionicons name='trash' size={28} color='white' />					
					</TouchableOpacity>									
				</View>
							
			</View>
		</View>
	);
	
}