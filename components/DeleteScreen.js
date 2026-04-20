import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';

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
				<Image />
										
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
					</TouchableOpacity>
					
					<TouchableOpacity
					onPress={()=> setCurrentScreen('select')}
					style={globalStyles.deleteVehicleBtn}
					>					
					</TouchableOpacity>									
				</View>
							
			</View>
		</View>
	);
	
}