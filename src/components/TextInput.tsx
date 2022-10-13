import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';
import { Envelope } from 'phosphor-react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function TextInput(props: TextInputProps) {
    return (
        <div className='flex gap-3 items-center py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300'>
            <Envelope className='text-gray-400 w-6 h-6' />
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