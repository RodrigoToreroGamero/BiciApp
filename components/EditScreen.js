import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from './globalStyles';

export default function EditScreen({ setCurrentScreen }) {
	
	return (
		<View
		style={globalStyles.container}
		>
			<View>
				<Text
				style={globalStyles.titleText}>
					Edita tu Vehículo
				</Text>
			</View>
			<View
			style={globalStyles.background}>
				<View>
					<Image />
					<TouchableOpacity
					style={globalStyles.setImgBtn}
					onPress={()=> setCurrentScreen('delete')}					
					>
					</TouchableOpacity>
				</View>
								
				<TextInput
				style={globalStyles.input}
				placeholder='Tipo de vehículo'
				/>
				<TextInput
				style={globalStyles.input}
				placeholder='Marca'
				/>
				<TextInput
				style={globalStyles.input}
				placeholder='Características'
				/>							
				
				<View
				style={globalStyles.horizontalBtns}
				>										
					<TouchableOpacity
					style={globalStyles.editVehicleBtn}
					onPress={()=> setCurrentScreen('select')}				
					>					
					</TouchableOpacity>
					
					<TouchableOpacity
					style={globalStyles.registerVehicleBtn}
					onPress={()=> setCurrentScreen('select')}					
					>					
					</TouchableOpacity>
				</View>							
			</View>
		</View>
	);	
}