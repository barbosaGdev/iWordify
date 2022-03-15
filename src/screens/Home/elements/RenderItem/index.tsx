import React, { FC, memo } from 'react'
import { LayoutRectangle } from 'react-native'
import { VowelsEntity } from '../..'
import { ListA, ListE, ListI, ListO, ListU } from './elements'

export type ItemProps = {
	item: VowelsEntity
	index: number
	dimensions?: Partial<LayoutRectangle>
	seeAboutWord: (
		word: string,
		onBookmarkPress: (word: string) => void,
		isBookmark?: boolean
	) => void
}
const RenderItem: FC<ItemProps> = (props) => {
	const lists: Record<string, JSX.Element> = {
		A: <ListA {...props} />,
		E: <ListE {...props} />,
		I: <ListI {...props} />,
		O: <ListO {...props} />,
		U: <ListU {...props} />
	}

	return lists[props.item.vowel] || null
}

export default memo(RenderItem)
