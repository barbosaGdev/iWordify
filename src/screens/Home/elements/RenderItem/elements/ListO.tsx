import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'
import { ListItem } from '../../../../../components'
import { DefaultRootState } from '../../../../../store'
import styles from '../../../styles'
import { ItemProps } from '..'

export const ListO: FC<ItemProps> = ({ item, dimensions, seeAboutWord }) => {
	const wordsStartingWithO = useSelector<DefaultRootState, string[]>(
		(state) => state.dictionary.wordsStartingWithO
	)

	return (
		<View style={{ width: dimensions?.width }}>
			<FlatList
				data={wordsStartingWithO}
				renderItem={(props) => (
					<ListItem {...props} seeAboutWord={seeAboutWord} />
				)}
				keyExtractor={(_, index) => `${index}`}
				ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}
