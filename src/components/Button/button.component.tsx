import React from 'react'
import * as S from './button.styles'

export interface IButtonProps {
    children: React.ReactNode
    isPrimary: boolean
    isDisabled: boolean
    onClick?: () => void
}

export const Button: React.FC<IButtonProps> = ({
    children,
    isPrimary = false,
    isDisabled = false,
    onClick,
}) => (
    <S.Button
        isPrimary={isPrimary} 
        onClick={onClick}
        disabled={isDisabled}
    >
        {children}
    </S.Button>
)