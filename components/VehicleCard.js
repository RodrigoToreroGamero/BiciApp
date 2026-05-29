import { View, Text } from 'react-native';
import ImageContainer from './ImageContainer';
import { globalStyles } from './globalStyles';

export default function VehicleCard({ vehicle }) {
	return (
		<View style={globalStyles.card}>
			<ImageContainer image={vehicle.image} useSetBtn={false} />
			
			<View style={globalStyles.cardInfo}>				
				<Text>Código de barras: {vehicle.barcode}</Text>				
				<Text>Tipo: {vehicle.type}</Text>
				<Text>Marca: {vehicle.brand}</Text>					
				<Text>Color: {vehicle.color}</Text>				
			</View>
		</View>
	);
}