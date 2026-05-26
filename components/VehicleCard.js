import { View, Text } from 'react-native';
import ImageContainer from './ImageContainer';

export default function VehicleCard({ vehicle }) {
	return (
		<View style={globalStyles.card}>
			<ImageContainer image={vehicle.imageSource} useSetBtn={false} />
			
			<View>
				<View>
				<Text>Código de barras: {item.id}</Text>				
				<Text>Marca: {item.brand}</Text>					
				<Text>Color: {item.color}</Text>					
				<Text>Características: ...</Text>
			</View>
		</View>
	);
}