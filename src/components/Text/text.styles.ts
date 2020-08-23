import styled from 'styled-components'

export type SizeType = 'small' | 'normal' | 'medium' | 'big' 

const size = {
    small: '.8em',
    normal: '1em',
    medium: '3em',
    big: '6em',
}

interface IContainerProps {
    size: SizeType
}

export const Container = styled.div<IContainerProps>`
    color: ${props => props.color};
    font-size: ${props => size[props.size]}; 
`