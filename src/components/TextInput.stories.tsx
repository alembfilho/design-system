import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from "./TextInput"
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput,
    args: {
        placeholder: 'e-mail',
        icon: <Envelope />
    },
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}