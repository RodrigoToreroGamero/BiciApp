import React, { useState } from 'react';
import { Modal, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from './globalStyles';

export default function SelectorModal({ enable, options, onSelect, selected, label, disableLabel }) {
	const [visible, setVisible] = useState(false);
	
	return (
		<View style={globalStyles.modalContainer}>
			{enable ? 
				<View>		
					{/* Open Modal Button */}
					<TouchableOpacity style={{ padding: 12, backgroundColor: "#eee", borderRadius: 6 }}
						onPress={() => setVisible(true)}
					>
						<Text>
							{selected ? `${selected}` : `${label}`}
						</Text>
					</TouchableOpacity>
					
					{/* Floating Modal */}			
					<Modal 
							visible={visible}
							animationType="slide"
							transparent={true}
						>
						<View style={globalStyles.modalBackground}>
							<View style={globalStyles.modalContent}>
							
								{/* Return Button */}
								<TouchableOpacity style={{ padding: 15, borderBottomWidth: 1, borderColor: "#ccc", backgroundColor: "#f5f5f5" }}
									onPress={() => setVisible(false)}
								>
									<Text style={{ color: "red" }}>Regresar</Text>
								</TouchableOpacity>
								
								{/* Options List */}
								<FlatList
									data={options}
									keyExtractor={(item, index) => index.toString()}
									renderItem={({ item }) => (
										<TouchableOpacity style={{ padding: 16, borderBottomWidth: 1, borderColor: "#ccc" }}
											onPress={() => {
												onSelect(item);
												setVisible(false);
											}}
										>
											<Text style={{ padding: 20 }}>{item.name ?? item}</Text>
										</TouchableOpacity>
									)}
								/>						
							</View>
						</View>
					</Modal>
				</View>
			:
				<Text style={{ padding: 12, backgroundColor: "#bbb", borderRadius: 6, color: "red" }}>
					{disableLabel}
				</Text>
			}
		</View>	
	);	
}