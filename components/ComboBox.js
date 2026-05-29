import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';
import axios from 'axios';


export default function ComboBox({ placeholder, options, selectedOption, onSelect }) {	
	
	const [query, setQuery] = useState("");
	
	const filteredOptions = options.filter((option) =>
		String(option).toLowerCase().includes(query.toLowerCase())
	);		
	
	return (
		<View>
			<TextInput 
				placeholder={placeholder}
				value={query || selectedOption}
				onChangeText={setQuery}
			/>
			
			{ query.length > 0 && (
				<FlatList 
					data={filteredOptions}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={()=> {
								onSelect(item);
								setQuery("");
							}}
							activeOpacity={0.7}
							hitSlop={10}	
						>
							<Text>{ item }</Text>
						</TouchableOpacity>
					)}
				/>			
			)}			
		</View>
	);
}