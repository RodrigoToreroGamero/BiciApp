import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';

export default function SelectScreen({ setCurrentScreen }) {
	
	return (
		<View
		style={globalStyles.container}
		>
			<View>
				<Text style={globalStyles.titleText}>
					Tus Vehículos
				</Text>
			</View>
			<View style={globalStyles.background}>
				<Image />
				
				<TouchableOpacity
				onPress={()=> selectNextVehicle()}
				style={globalStyles.leftVehicleByn}
				>					
				</TouchableOpacity>
				
				<TouchableOpacity
				onPress={()=> selectNextVehicle()}
				style={globalStyles.rightVehicleBtn}
				>					
				</TouchableOpacity>
				
				<View style={globalStyles.center}>
					<Text>Código de barras</Text>				
					<Text>Marca</Text>					
					<Text>Color</Text>					
					<Text>Características</Text>
				</View>
				
				<View style={globalStyles.horizontalBtns}>
					<TouchableOpacity
					onPress={()=> setCurrentScreen('delete')}
					style={globalStyles.deleteVehicleBtn}
					>					
					</TouchableOpacity>
					
					<TouchableOpacity
					onPress={()=> setCurrentScreen('edit')}
					style={globalStyles.editVehicleBtn}
					>					
					</TouchableOpacity>
					
					<TouchableOpacity
					onPress={()=> setCurrentScreen('register')}
					style={globalStyles.registerVehicleBtn}
					>					
					</TouchableOpacity>
				</View>
							
			</View>
		</View>
	);
	
}