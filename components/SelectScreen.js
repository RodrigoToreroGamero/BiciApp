import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';

export default function SelectScreen({ setCurrentScreen }) {
	
	return (
		<View
		style={globalStyles.container}
		>
			<View>
				<Text
				style={globalStyles.titleText}
				>
					Tus Vehículos
				</Text>
			</View>
			<View
			style={globalStyles.background}
			>
				<Image />
				
				<View
				style={globalStyles.horizontalBtns}
				>
					<TouchableOpacity
					onPress={()=> selectNextVehicle()}
					style={globalStyles.leftVehicleBtn}
					>					
					</TouchableOpacity>
					
					<TouchableOpacity
					onPress={()=> selectNextVehicle()}
					style={globalStyles.rightVehicleBtn}
					>					
					</TouchableOpacity>
				</View>
				
				<View
				style={globalStyles.center}
				>
					<Text>Código de barras</Text>				
					<Text>Marca</Text>					
					<Text>Color</Text>					
					<Text>Características</Text>
				</View>
				
				<View
				style={globalStyles.horizontalBtns}
				>
					<TouchableOpacity
					style={globalStyles.deleteVehicleBtn}
					onPress={()=> setCurrentScreen('delete')}					
					>					
					</TouchableOpacity>
					
					<TouchableOpacity
					style={globalStyles.editVehicleBtn}
					onPress={()=> setCurrentScreen('edit')}					
					>					
					</TouchableOpacity>
					
					<TouchableOpacity
					style={globalStyles.registerVehicleBtn}
					onPress={()=> setCurrentScreen('register')}					
					>					
					</TouchableOpacity>
				</View>							
			</View>
		</View>
	);	
}