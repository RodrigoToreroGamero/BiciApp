import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
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
				<FlatList
					data={}
					renderItem={(vehicleType) => <Text>{vehicleType.name}</Text>}
					keyExtractor={vehicleType => vehicleType.name}			
				/>
				<TextInput style={globalStyles.input} placeholder='Marca' />
				<FlatList
					data={}
					renderItem={(brand) => <Text>{brand.name}</Text>}
					keyExtractor={brand => brand.name}			
				/>
								
				<TextInput style={globalStyles.input} placeholder='Color' />							
				<FlatList
					data={}
					renderItem={(color) => <Text>{color.name}</Text>}
					keyExtractor={color => color.name}			
				/>
				
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