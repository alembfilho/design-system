import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';
import { Envelope } from 'phosphor-react'
import { Slot } from '@radix-ui/react-slot';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode
}

export function TextInput(props: TextInputProps) {
    // const Icon = props.icon ? 'div' : Slot
    return (
        <div className='flex gap-3 items-center py-4 px-3 h-12 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300'>

            <Slot className='text-gray-400 w-6 h-6'>{props.icon}</Slot>
            <input className={clsx(
                `bg-transparent text-xs text-gray-100 
                placeholder:text-gray-400
                outline-none flex-1`,
            )}
                {...props}
            />
        </div>
    )
}