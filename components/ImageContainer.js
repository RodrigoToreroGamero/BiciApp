import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';

export default function ImageContainer({ image, setImage, useSetBtn} ) {
	
	const API_URL = "http://localhost:3000";
	
	const [imageError, setImageError] = useState(false);
	
	function getImageSource() {
		try {
			if(!image) {
				return null;
			}
					
			// Imagen almacenada en el servidor
			if(typeof image === 'string') {
				return { uri: image.startsWith("/") ? API_URL + image : image };
			}
			
			// Imagen seleccionada en el dispositivo con ImagePicker
			if(image.uri) {
				return image;
			}
						
			return image;	
		} catch(e) {
			// Si el require de SelectScreen falla, retorna null para usar al placeholder.
			console.log(e.message);
			return null;
		}
	}
	
	console.log(image);
	console.log(getImageSource());
	
	const source = !imageError ? getImageSource() : null;
	
	return (
		<View style={globalStyles.imgContainer}>
			{source ? (
				<Image style={globalStyles.image}
					source={source}
					resizeMode='cover'
					onError={() => setImageError(true)}
				/>
			) : (
				<View style={globalStyles.imgPlaceholder}>
					<Ionicons name='image' size={200} color='white' />
				</View>
			)}
					
			{useSetBtn && ( 
				<TouchableOpacity style={globalStyles.setImgBtn}
					onPress={useSetBtn}
				>
					<Ionicons name='add-outline' size={28} color='white' />
				</TouchableOpacity>
			)}
		</View>
	);
}