import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Linking } from 'react-native';
import { globalStyles } from './globalStyles';
import { regexPatterns } from './regexPatterns';

export default function LoginScreen({ setCurrentScreen }) {
	
	return (
		<View
		style={globalStyles.container}
		>
			<View>
				<Text
				style={globalStyles.titleText}>
					Iniciar Sesión
				</Text>
			</View>
			<View
			style={globalStyles.background}>
				<TextInput
				style={globalStyles.input}
				placeholder='Código de usuario'
				/>
				<TextInput
				style={globalStyles.input}
				placeholder='Contraseña'
				/>
				<TouchableOpacity
				style={globalStyles.loginBtn}
				onPress={()=> setCurrentScreen('select')}				
				>
					<Text
					style={globalStyles.loginTxt}>
						Ingresar
					</Text>
				</TouchableOpacity>
				<Text
				style={globalStyles.forgotPassword}
				onPress={()=> Linking.openURL('')}
				>
					Restablecer Contraseña
				</Text>
			</View>
		</View>
	);	
}