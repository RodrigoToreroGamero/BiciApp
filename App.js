import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen';
import SelectScreen from './components/SelectScreen';
import DeleteScreen from './components/DeleteScreen';
import RegisterScreen from './components/RegisterScreen';
import EditScreen from './components/EditScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
	
	const [currentScreen, setCurrentScreen] = useState('login');
	
	useEffect(() => {
		const checkLogin = async () => {
			const token = await AsyncStorage.getItem("userToken");
			if(token) {
				setCurrentScreen("select");
			}
		};
		checkLogin();
	}, []);
			
	return (
		<View style={styles.container}>
			{currentScreen === 'login'		&& (<LoginScreen setCurrentScreen={setCurrentScreen} />)}
			{currentScreen === 'select' 	&& (<SelectScreen setCurrentScreen={setCurrentScreen} />)}
			{currentScreen === 'register'	&& (<RegisterScreen setCurrentScreen={setCurrentScreen} />)}
			{currentScreen === 'edit'		&& (<EditScreen setCurrentScreen={setCurrentScreen} />)}
			{currentScreen === 'delete' 	&& (<DeleteScreen setCurrentScreen={setCurrentScreen} />)}				
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
  },
});
