import React from 'react'
import * as S from './button.styles'

export interface IButtonProps {
    /**
     * The display content of the button, can be any HTML Element
     */
    children: React.ReactNode
    /**
     * Check is primary button
     */
    isPrimary: boolean
    /**
     * Checks if button should be disabled
     */
    isDisabled: boolean
    /**
     * Callback Function called when click in button
     */
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