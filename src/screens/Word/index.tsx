import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { FC, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerNavigatorParamsList } from '../../routes/DrawerNavigator'
import styles from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWord, resetWordState } from '../../store/actions/dictionary'
import { DefaultRootState } from '../../store'
import { WordBody } from '../../api/dictionary'

export const Word: FC = () => {
	const { goBack } = useNavigation()
	const { params } = useRoute<RouteProp<DrawerNavigatorParamsList, 'Word'>>()

	const dispatch = useDispatch()
	const { word: wordAsParam, onBookmarkPress, isBookmark } = params

	const [bookmark, setBookmark] = useState<boolean | undefined>()

	useEffect(() => {
		setBookmark(isBookmark)
		dispatch(fetchWord(wordAsParam))
	}, [params])

	const word = useSelector<DefaultRootState, WordBody[]>(
		(state) => state.dictionary.word
	)

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => {
						dispatch(resetWordState())
						goBack()
					}}
				>
					<FontAwesome name='arrow-left' size={18} />
				</TouchableOpacity>
				<Text style={{ fontSize: 18 }}>{wordAsParam}</Text>
				<View />
			</View>

			<ScrollView contentContainerStyle={{ marginLeft: 12 }}>
				{!word ? (
					<Text style={{ fontSize: 24, fontWeight: 'bold' }}>
						No definition found
					</Text>
				) : (
					<>
						{(word || []).map((item, index) => (
							<View style={{ paddingVertical: 12 }}>
								<Text
									style={{
										fontSize: 24,
										fontWeight: 'bold',
										color: 'darkblue'
									}}
								>
									Definition {index + 1}
								</Text>
								<Text style={{ fontSize: 16 }}>{item.definition}</Text>

								<View style={{ flexDirection: 'row', marginTop: 8 }}>
									<Text style={styles.subtitle}>Part of speech: </Text>
									<Text style={{ fontSize: 16 }}>{item.partOfSpeech}</Text>
								</View>

								<View style={{ marginTop: 8 }}>
									{!!item.typeOf && (
										<Text style={styles.subtitle}>Type of: </Text>
									)}

									{(item.typeOf || []).map((typeOf) => (
										<Text style={{ fontSize: 16 }}>{typeOf}</Text>
									))}
								</View>

								<View style={{ marginTop: 8 }}>
									{!!item.synonyms && (
										<Text style={styles.subtitle}>Synonyms: </Text>
									)}

									{(item.synonyms || []).map((synonym) => (
										<Text style={{ fontSize: 16 }}>{synonym}</Text>
									))}
								</View>
							</View>
						))}

						<TouchableOpacity
							style={styles.bookmarkButton}
							onPress={() => {
								setBookmark(!bookmark)
								onBookmarkPress(wordAsParam)
							}}
						>
							<Text style={{ color: 'white' }}>
								{bookmark ? 'Remove bookmark' : 'Add bookmark'}
								{
									<AntDesign
										name={bookmark ? 'staro' : 'star'}
										size={16}
										color={'orange'}
									/>
								}
							</Text>
						</TouchableOpacity>
					</>
				)}
			</ScrollView>
		</View>
	)
}
