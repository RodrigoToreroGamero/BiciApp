import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';

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
				<View>
					<Image src=''/>
					<Ionicons name='image' size={28} color='white' />
				</View>
				<View
				style={globalStyles.horizontalBtns}
				>
					<TouchableOpacity
					onPress={()=> selectPreviousVehicle()}
					style={globalStyles.leftVehicleBtn}
					activeOpacity={0.7}
					hitSlop={10}
					>
						<Ionicons name='chevron-back' size={30} color='black' />
					</TouchableOpacity>
					
					<TouchableOpacity
					onPress={()=> selectNextVehicle()}
					style={globalStyles.rightVehicleBtn}
					activeOpacity={0.7}
					hitSlop={10}
					>
						<Ionicons name='chevron-forward' size={30} color='black' />
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
					activeOpacity={0.7}
					hitSlop={10}					
					>
						<Ionicons name='trash' size={28} color='white' />
					</TouchableOpacity>
					
					<TouchableOpacity
					style={globalStyles.editVehicleBtn}
					onPress={()=> setCurrentScreen('edit')}
					activeOpacity={0.7}
					hitSlop={10}					
					>
						<Ionicons name='pencil' size={28} color='black' />					
					</TouchableOpacity>
					
					<TouchableOpacity
					style={globalStyles.registerVehicleBtn}
					onPress={()=> setCurrentScreen('register')}					
					activeOpacity={0.7}
					hitSlop={10}
					>
						<Ionicons name='add-outline' size={28} color='white' />
					</TouchableOpacity>
				</View>							
			</View>
		</View>
	);	
}