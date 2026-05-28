import React, { useState, useRef } from 'react';
import { View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from './globalStyles';
import VehicleCard from './VehicleCard';

const { width } = Dimensions.get('window');

export default function VehicleCarousel({ vehicles, onSelectVehicle }) {
	
	const [currentIndex, setCurrentIndex] = useState(0);
	const flatListRef = useRef(null);
	
	function scrollTo(index) {
		flatListRef.current?.scrollToIndex({ index, animated: true });
		setCurrentIndex(index);
		onSelectVehicle?.(vehicles[index]);
	}
	
	function nextVehicle() {
		if(currentIndex < vehicles.length - 1) {
			scrollTo(currentIndex + 1);
		}
	}
	
	function previousVehicle() {
		if(currentIndex > 0) {
			scrollTo(currentIndex - 1);
		}
	}
	
	return (
		<View style={{ 
			width: '100%',
			height: '100%',
			justifyContent: 'center'		
		}}>
			<FlatList
				ref={flatListRef}
				data={vehicles}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<View style={{ 					
						width: width - 48,
						justifyContent: 'center',
						alignItems: 'center'
					}}>
						<VehicleCard vehicle={item} />
					</View>				
				)}				
				onMomentumScrollEnd={(event) => {
					const index = Math.round(event.nativeEvent.contentOffset.x / width);
					setCurrentIndex(index);
					onSelectVehicle?.(vehicles[index]);
				}}
			/>
			
			<View style={ globalStyles.horizontalBtns }>
				<TouchableOpacity style={globalStyles.leftVehicleBtn}
					onPress={()=> previousVehicle()}						
					activeOpacity={0.7}
					hitSlop={10}
				>
					<Ionicons name='chevron-back' size={30} color='black' />
				</TouchableOpacity>
					
				<TouchableOpacity style={globalStyles.rightVehicleBtn}
					onPress={()=> nextVehicle()}						
					activeOpacity={0.7}
					hitSlop={10}
				>
					<Ionicons name='chevron-forward' size={30} color='black' />
				</TouchableOpacity>
			</View>
		</View>
	
	);
	
}