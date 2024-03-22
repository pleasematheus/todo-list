import React, {Component} from 'react'
import {
	View,
	ActivityIndicator,
	StyleSheet
} from 'react-native'
import { CommonActions } from '@react-navigation/native'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class AuthOrApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator size='large'/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	}
})