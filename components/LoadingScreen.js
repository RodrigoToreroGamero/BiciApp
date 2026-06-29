import React, { useRef, useEffect } from 'react';
import { Animated, Text, ActivityIndicator } from 'react-native';

export default function LoadingScreen({ visible }) {
	const fadeAnimation = useRef(new Animated.Value(0)).current;
	
	useEffect(() => {
		Animated.timing(
			fadeAnimation, {
				toValue: visible ? 1 : 0,
				duration: 300,
				useNativeDriver: true,
		}).start();		
	}, [visible]);
	
	return (
		<Animated.View>
			<ActivityIndicator size="large" color="#fff" />
			<Text>Cargando...</Text>
		</Animated.View>
	);
}