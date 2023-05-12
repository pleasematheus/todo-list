import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import commonStyles from '../commonStyles'

export default props => {
	const doneOrNotStyle = props.doneAt != null ?
		{ textDecorationLine: 'line-through' } : {}
	
	const date = props.doneAt ? props.doneAt : props.estimateAt
	
	const formattedDate = moment(date).locale('pt-br')
		.format('ddd, D [de] MMMM')

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
				<View style={styles.checkContainer}>
					{getCheckView(props.doneAt)}
				</View>
			</TouchableWithoutFeedback>
			<View>				
				<Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
				<Text style={styles.date}>{formattedDate}</Text>
			</View>
		</View>
	)
}

function getCheckView(doneAt) {
	if (doneAt != null) {
		return (
			<View style={styles.done}>
				<Icon
					name='check'
					size={20}
					color='#FFF'
				>
					</Icon>
			</View>
		)
	} else {
		return (
			<View style={styles.pending}>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#AAA',
		flexDirection: 'row',
		paddingVertical: 10,
	},
	checkContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '15%'
	},
	pending: {
		borderColor: '#555',
		borderRadius: 16,
		borderWidth: 1,
		height: 32,
		width: 32,
	},
	done: {
		alignItems: 'center',
		borderRadius: 16,
		backgroundColor: '#4D7031',
		justifyContent: 'center',
		height: 32,
		width: 32,
	},
	desc: {
		color: commonStyles.colors.mainText,
		fontFamily: commonStyles.fontFamily,
		fontSize: 15
	},
	date: {
		color: commonStyles.colors.subText,
		fontFamily: commonStyles.fontFamily,
		fontSize: 12
	}
})