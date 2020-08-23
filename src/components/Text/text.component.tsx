import React from 'react'
import * as S from './text.styles'

export interface ITextProps {
    children: string
    size?: S.SizeType
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