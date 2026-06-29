import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';

export default function ImageContainer({ image, setImage, useSetBtn} ) {
	
	function getImageSource() {
		try {
			if(!image) {
				return null;
			}
			
			// Imagen remota
			if(typeof image === 'string') {
				return { uri: image };
			}
			
			// Imagen local require(...)
			return image;	
		} catch(e) {
			// Si el require de SelectScreen falla, retorna null para usar al placeholder.
			console.log(e.getMessage());
			return null;
		}
	}
	
	
	return (
		<View style={globalStyles.imgContainer}>
			{image ? (
				<Image style={globalStyles.image}
					source={getImageSource()}
					resizeMode='cover' 
				/>
			) : (
				<View style={globalStyles.imgPlaceholder}>
					<Ionicons name='image' size={200} color='white' />
				</View>
			)}
			{useSetBtn && ( 
				<TouchableOpacity style={globalStyles.setImgBtn}>
					<Ionicons name='add-outline' size={28} color='white' />
				</TouchableOpacity>
			)}
		</View>
	);
}