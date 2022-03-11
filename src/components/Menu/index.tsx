import React, { Dispatch, FC, RefObject, SetStateAction } from 'react'
import { FlatList, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { VowelsEntity } from '../../screens/Home'
import styles from './styles'

type MenuProps = {
	indexPage: number | null
	setIndexPage: Dispatch<SetStateAction<number | null>>
	vowels: VowelsEntity[]
	flatListRef: RefObject<FlatList<any>>
}

export const Menu: FC<MenuProps> = ({
	vowels,
	setIndexPage,
	flatListRef,
	indexPage
}) => {
	const movePage = (index: number) => {
		flatListRef.current?.scrollToIndex({ animated: false, index })
		setIndexPage!(index)
	}

	return (
		<View style={styles.container}>
			{vowels.map((item: VowelsEntity, index: number) => (
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
						{item.vowel}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}
