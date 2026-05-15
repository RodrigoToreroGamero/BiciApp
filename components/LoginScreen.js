import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Linking } from 'react-native';
import { globalStyles } from './globalStyles';
import { regexPatterns } from './regexPatterns';

export default function LoginScreen({ setCurrentScreen }) {
		
	const [usercode, setUsercode] = useState('');
	const [password, setPassword] = useState('');
	const [usercodeError, setUsercodeError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	
	
	const validateUsercode = (text) => {
		setUsercode(text);
		if(!regexPatterns.usercode.regex.test(text)) {
			setUsercodeError(regexPatterns.usercode.errorMsg);
		} else {
			setUsercodeError('');
		}	
	};
	
	const validatePassword = (text) => {
		setPassword(text);
		if(text.trim() === "") {
			setPasswordError(regexPatterns.password.errorMsg);
		} else {
			setPasswordError('');
		}	
	};
	
	
	return (
		<View style={globalStyles.container}>
			<View>
				<Text style={globalStyles.titleText}>Iniciar Sesión</Text>
			</View>
			<View style={globalStyles.background}>
				<TextInput style={globalStyles.input}
					placeholder='Código de usuario'
					value={usercode}
					onChangeText={validateUsercode}
				/>
				{usercodeError ? <Text style={{color: 'red'}}>{regexPatterns.usercode.errorMsg}</Text> : null}
				
				<TextInput style={globalStyles.input}
					placeholder='Contraseña'
					value={password}
					onChangeText={validatePassword}
				/>
				{passwordError ? <Text style={{color: 'red'}}>{regexPatterns.password.errorMsg}</Text> : null}
				
				<TouchableOpacity style={globalStyles.loginBtn}
					onPress={()=> setCurrentScreen('select')}				
				>
					<Text style={globalStyles.loginTxt}>Ingresar</Text>
				</TouchableOpacity>
				<Text style={globalStyles.forgotPassword}
					onPress={()=> Linking.openURL('')}
				>
					Restablecer Contraseña
				</Text>
			</View>
		</View>
	);	
}