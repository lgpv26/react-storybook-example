import styled from 'styled-components'

const primaryColor = '#a134eb'
const secondaryColor = '#f5f5f5'

interface IButtonProps {
    isPrimary: boolean
}

export const Button = styled.button<IButtonProps>`
    padding: 10px;
    border-radius: 5px;
    background: ${props => props.isPrimary ? primaryColor : secondaryColor};
    color: ${props => props.isPrimary ? secondaryColor : primaryColor};
    font-weight: 700;
    font-family: sans-serif;
    border: none;
    cursor: pointer;

    &:disabled {
        opacity: .5;
    }
`