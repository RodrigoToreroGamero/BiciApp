import { View, Text } from 'react-native';
import ImageContainer from './ImageContainer';

export default function VehicleCard({ vehicle }) {
	return (
		<View style={globalStyles.card}>
			<ImageContainer image={vehicle.imageSource} useSetBtn={false} />
			
			<View>
				<View>
				<Text>Código de barras: {vehicle.id}</Text>				
				<Text>Marca: {vehicle.brand}</Text>					
				<Text>Color: {vehicle.color}</Text>					
				<Text>Características: ...</Text>
			</View>
		</View>
	);
}