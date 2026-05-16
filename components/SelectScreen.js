import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';
import ImageContainer from './ImageContainer';

export default function SelectScreen({ setCurrentScreen }) {
	
	const [image, setImage] = useState("");
	
	return (
		<View style={globalStyles.container}>
			<View>
				<Text style={globalStyles.titleText}>Tus Vehículos</Text>
			</View>
			<View style={globalStyles.background}>
			
				<View>
					<TouchableOpacity
						onPress={()=> setCurrentScreen('login')}
					>
						<Ionicons name='log-out-outline' size={30} color='white' />
					</TouchableOpacity>
				</View>
				<ImageContainer image={image} setImage={setImage} useSetBtn={false} />
				
				<View style={globalStyles.horizontalBtns}>
					<TouchableOpacity style={globalStyles.leftVehicleBtn}
						onPress={()=> selectPreviousVehicle()}						
						activeOpacity={0.7}
						hitSlop={10}
					>
						<Ionicons name='chevron-back' size={30} color='black' />
					</TouchableOpacity>
					
					<TouchableOpacity style={globalStyles.rightVehicleBtn}
						onPress={()=> selectNextVehicle()}						
						activeOpacity={0.7}
						hitSlop={10}
					>
						<Ionicons name='chevron-forward' size={30} color='black' />
					</TouchableOpacity>
				</View>
				
				<View style={globalStyles.center}>
					<Text>Código de barras</Text>				
					<Text>Marca</Text>					
					<Text>Color</Text>					
					<Text>Características</Text>
				</View>
				
				<View style={globalStyles.horizontalBtns}>
					<TouchableOpacity style={globalStyles.deleteVehicleBtn}
						onPress={()=> setCurrentScreen('delete')}
						activeOpacity={0.7}
						hitSlop={10}					
					>
						<Ionicons name='trash' size={28} color='white' />
					</TouchableOpacity>
					
					<TouchableOpacity style={globalStyles.editVehicleBtn}
						onPress={()=> setCurrentScreen('edit')}
						activeOpacity={0.7}
						hitSlop={10}					
					>
						<Ionicons name='pencil' size={28} color='black' />					
					</TouchableOpacity>
					
					<TouchableOpacity style={globalStyles.registerVehicleBtn}
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