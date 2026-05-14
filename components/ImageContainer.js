import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import { Ionicons } from '@expo/vector-icons';

export default function ImageContainer({ image, setImage, useSetBtn} ) {
		
	return (
		<View style={globalStyles.imgContainer}>
			{image ? (
				<Image source={{ uri: image }} style={globalStyles.image} />
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