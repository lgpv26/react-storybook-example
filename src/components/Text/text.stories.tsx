import React from 'react'

import { Text, ITextProps } from './text.component'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
    title: 'Text',
    component: Text,
    argTypes: {
        color: { control: 'color' },
        children: { control: 'text' },
    },
} as Meta

const Template: Story<ITextProps> = (args) => <Text {...args}/>

export const TextNormal = Template.bind({})
TextNormal.args = {
    children: 'Text with size normal',
}

export const TextSmall = Template.bind({})
TextSmall.args = {
    size: 'small',
    children: 'Text with size small',
}

export const TextMedium = Template.bind({})
TextMedium.args = {
    size: 'medium',
    children: 'Text with size medium',
}

export const TextBig = Template.bind({})
TextBig.args = {
    size: 'big',
    children: 'Text with size big',
}