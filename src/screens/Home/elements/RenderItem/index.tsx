import React, { FC } from 'react'
import { LayoutRectangle } from 'react-native'
import { VowelsEntity } from '../..'
import { ListA, ListE, ListI, ListO, ListU } from './elements'

export type ItemProps = {
	item: VowelsEntity
	index: number
	dimensions?: Partial<LayoutRectangle>
	seeAboutWord: (word: string) => void
}

export const RenderItem: FC<ItemProps> = (props) => {
	const lists: Record<string, JSX.Element> = {
		A: <ListA {...props} />,
		E: <ListE {...props} />,
		I: <ListI {...props} />,
		O: <ListO {...props} />,
		U: <ListU {...props} />
	}

	return lists[props.item.vowel] || null
}
