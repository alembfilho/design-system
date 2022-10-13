import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { ReactNode } from 'react';
export interface ButtonProps {
    children: ReactNode;
    asChild: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp className={clsx(
            "text-sm text-black font-semibold py-4 px-3 w-full bg-cyan-500 transition-colors hover:bg-cyan-300 rounded focus:ring-2 focus:ring-white",
        )}
        >{children}</Comp>
    )
}