import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ setCurrentScreen }) {
	
	return (
		<View
		style={globalStyles.container}
		>
			<View>
				<Text
				style={globalStyles.titleText}>
					Registra tu Vehículo
				</Text>
			</View>
			<View
			style={globalStyles.background}>
				<View>
					<Image
					//source={image ? { uri: image } : null}
					//style={globalStyles.image}
					/>
					<Ionicons name='image' size={28} color='white' />
					<TouchableOpacity
					style={globalStyles.setImgBtn}									
					>
						<Ionicons name='add-outline' size={28} color='white' />
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
				style={globalStyles.horizontalBtns}>										
					<TouchableOpacity
					style={globalStyles.editVehicleBtn}
					onPress={()=> setCurrentScreen('select')}				
					>		
						<Ionicons name='return-down-back' size={28} color='black' />						
					</TouchableOpacity>
					
					<TouchableOpacity					
					style={globalStyles.acceptBtn}
					onPress={()=> setCurrentScreen('select')}
					>
						<Ionicons name='checkmark' size={28} color='black' />					
					</TouchableOpacity>
				</View>							
			</View>
		</View>
	);	
}