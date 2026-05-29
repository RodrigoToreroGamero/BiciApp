import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Linking } from 'react-native';
import { globalStyles } from './globalStyles';
import { regexPatterns } from './regexPatterns';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function LoginScreen({ setCurrentScreen }) {
		
	const [usercode, setUsercode] = useState('');
	const [usercodeError, setUsercodeError] = useState('');
	const [usercodeIsValid, setUsercodeIsValid] = useState(false);
	const [password, setPassword] = useState('');	
	const [passwordError, setPasswordError] = useState('');
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [canLogin, setCanLogin] = useState(false);
	
	
	const validateUsercode = (text) => {
		setUsercode(text);
		if(!regexPatterns.usercode.regex.test(text)) {
			setUsercodeError(regexPatterns.usercode.errorMsg);
			setUsercodeIsValid(false);
		} else {
			setUsercodeError('');
			setUsercodeIsValid(true);
		}		
	};
	
	const validatePassword = (text) => {
		setPassword(text);
		if(text.trim() === "") {
			setPasswordError(regexPatterns.password.errorMsg);
			setPasswordIsValid(false);
		} else {
			setPasswordError('');
			setPasswordIsValid(true);
		}
	};
	
	useEffect(() => {
		setCanLogin(usercodeIsValid && passwordIsValid);
	}, [usercodeIsValid, passwordIsValid]);
	
	/*
	const handleLogin = async () => {
		try {
			const res = await axios.post("http://localhost:3000/login", {
				usercode,
				password
			});
			if(res.data && res.data.token) {
				await AsyncStorage.setItem("userToken", res.data.token);
				setCurrentScreen("select");
			} else {
				alert("Credenciales inválidas");
			}			
		} catch(e) {
			console.log("Error guardando el token: ", e);
		}
	};
	*/
	
	const handleLogin = async () => {
		try {		
			const res = await axios.get(`http://localhost:3000/users`, {
				params: {
					usercode,
					password
				}
			});
			if(res.data.length > 0) {
				await AsyncStorage.setItem("userToken", usercode);
				setCurrentScreen("select");
			} else {
				alert("Credenciales inválidas");
			}
		} catch (e) {
			console.log("Error en login: ", e);
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
				{usercodeError ? <Text style={{color: 'red', fontWeight: 'bold'}}>{regexPatterns.usercode.errorMsg}</Text> : null}
				
				<TextInput style={globalStyles.input}
					placeholder='Contraseña'
					value={password}
					onChangeText={validatePassword}
				/>
				{passwordError ? <Text style={{color: 'red', fontWeight: 'bold'}}>{regexPatterns.password.errorMsg}</Text> : null}
				
				{canLogin ?
					<TouchableOpacity style={globalStyles.loginBtn}
						onPress={ handleLogin }				
					>						
						<Ionicons name='log-in-outline' size={30} color='white' />
					</TouchableOpacity>
				:
					<TouchableOpacity style={globalStyles.loginBtnDisabled}>						
						<Ionicons name='log-in' size={30} color='white' />
					</TouchableOpacity>
				}
				
					
				<Text style={globalStyles.forgotPassword}
					onPress={()=> Linking.openURL('')}
				>
					Restablecer Contraseña
				</Text>
			</View>
		</View>
	);	
}