import { View, Text, TouchableOpacity } from 'react-native';
import ImageContainer from './ImageContainer';
import { globalStyles } from './globalStyles';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Barcode } from 'expo-barcode-generator';

export default function VehicleCard({ vehicle, setCurrentScreen }) {	
	
	const [menuOpen, setMenuOpen] = useState(false);
	
	const handleMenuOption = (newScreen) => {
		setCurrentScreen(newScreen);
		setMenuOpen(false);
	};
	
	return (
		<View style={globalStyles.card}>
			<ImageContainer image={vehicle.image} useSetBtn={false} />
			
			<View style={globalStyles.cardInfo}>
				<Barcode
					value={vehicle.barcode}
					options={{
						format: "CODE128",
						width: 1.2,
						height: 40,
						displayValue: false
					}}
				/>
				<Text>{vehicle.type}</Text>					
				<Text>{vehicle.brand}</Text>					
				<Text>Color: {vehicle.color}</Text>				
			</View>
			
			{/* Botón hamburguesa */}
			<TouchableOpacity style={globalStyles.hamburgerBtn}
				onPress={() => setMenuOpen(!menuOpen)}
			>
				<Ionicons name='menu-outline' size={28} color='black' />
			</TouchableOpacity>
			
			{/* Menú de opciones */}
				{menuOpen && (
					<View style={globalStyles.cardButtons}>
						<TouchableOpacity style={globalStyles.deleteVehicleBtn}
							onPress={()=> handleMenuOption('delete')}
							activeOpacity={0.7}
							hitSlop={10}					
						>							
							<Ionicons name='trash' size={28} color='white' />
						</TouchableOpacity>
						
						<TouchableOpacity style={globalStyles.editVehicleBtn}
							onPress={()=> handleMenuOption('edit')}							
							activeOpacity={0.7}
							hitSlop={10}					
						>							
							<Ionicons name='pencil' size={28} color='black' />					
						</TouchableOpacity>					
					</View>				
				)}
		</View>
	);
}