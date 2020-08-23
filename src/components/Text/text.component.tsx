import React from 'react'
import * as S from './text.styles'

export interface ITextProps {
    /**
     * The content of text. 
     * *Only strings
     */
    children: string
    /**
     * Set the texts size
     */
    size?: S.SizeType
    /**
     * Set the texts color
     */
    color?: string
}

export const Text: React.FC<ITextProps> = ({
    children,
    size = 'normal',
    color = '#666',
}) => (
    <S.Container
        size={size} 
        color={color}
    >
        {children}
    </S.Container>
)