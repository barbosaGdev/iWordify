import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { FC, useEffect } from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerNavigatorParamsList } from '../../routes/DrawerNavigator'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWord } from '../../store/actions/dictionary'
import { DefaultRootState } from '../../store'
import { WordBody } from '../../api/dictionary'

export const Word: FC = () => {
	const { goBack } = useNavigation()
	const { params } = useRoute<RouteProp<DrawerNavigatorParamsList, 'Word'>>()

	const dispatch = useDispatch()
	const { word: wordAsParam } = params

	useEffect(() => {
		dispatch(fetchWord(wordAsParam))
	}, [])

	const word = useSelector<DefaultRootState, WordBody[]>(
		(state) => state.dictionary.word
	)

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={goBack}>
					<Icon name='arrow-left' size={18} />
				</TouchableOpacity>
				<Text style={{ fontSize: 18 }}>{wordAsParam}</Text>
				<View />
			</View>

			<ScrollView>
				{word.map((item) => (
					<View>
						<Text>Definition: {item.definition}</Text>
						<Text>Part of speech: {item.partOfSpeech}</Text>
						<Text>Type of: </Text>
						{item.typeOf.map((typeOf) => (
							<Text>{typeOf}</Text>
						))}
					</View>
				))}
			</ScrollView>
		</View>
	)
}
