import React, { Dispatch, FC, RefObject, SetStateAction } from 'react'
import { FlatList, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { fetchWordsByVowel } from '../../store/actions/dictionary'
import styles from './styles'

type MenuProps = {
	indexPage: number | null
	setIndexPage: Dispatch<SetStateAction<number | null>>
	vowels: string[]
	flatListRef: RefObject<FlatList<any>>
}

export const Menu: FC<MenuProps> = ({
	vowels,
	setIndexPage,
	flatListRef,
	indexPage
}) => {
	const dispatch = useDispatch()

	const movePage = (index: number) => {
		flatListRef.current?.scrollToIndex({ animated: false, index })
		dispatch(fetchWordsByVowel(vowels[indexPage!]))
		setIndexPage!(index)
	}

	return (
		<View style={styles.container}>
			{vowels.map((item: string, index: number) => (
				<TouchableOpacity
					style={{
						backgroundColor: index === indexPage ? 'darkblue' : undefined
					}}
					onPress={() => movePage(index)}
				>
					<Text
						style={{
							...styles.vowel,
							color: index === indexPage ? 'white' : undefined
						}}
					>
						{item}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}
