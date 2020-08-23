import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Button, IButtonProps } from './button.component'

export default {
    title: 'Button',
    component: Button
} as Meta

const Template: Story<IButtonProps> = (args) => <Button {...args}/>

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    isPrimary: true,
    children: 'Primary Button',
} 

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
    children: 'Secondary Button',
}