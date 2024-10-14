import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<Text>Pantalla de home</Text>
		<Button
        	title="Start"
        	onPress={() => navigation.navigate('Start', {
				id: 1,
				message: 'Home ',
			})}
      		/>
		</View>
	);
};

export default HomeScreen;