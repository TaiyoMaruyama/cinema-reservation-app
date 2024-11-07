import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { seatButtonSize } from '@/consts/reservation'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'w-full h-full border border-white hover:opacity-70 rounded text-white text-xs',
  {
    variants: {
      selected: {
        true: 'bg-primary',
        false: '',
      },
      reserved: {
        true: 'bg-primary opacity-60 pointer-events-none',
        false: '',
      },
    },
  },
)

export interface SeatButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  label: string
  selected?: boolean
  reserved: boolean
}

const SeatButtonComponent = React.forwardRef<
  HTMLButtonElement,
  SeatButtonComponentProps
>(
  (
    {
      className,
      asChild = false,
      label,
      selected = false,
      disabled = false,
      reserved = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <div className={seatButtonSize}>
        {!disabled ? (
          <Comp
            className={cn(buttonVariants({ className, selected, reserved }))}
            ref={ref}
            {...props}
          >
            {label}
          </Comp>
        ) : (
          ''
        )}
      </div>
    )
  },
)
SeatButtonComponent.displayName = 'Button'

const SeatBlankComponent: React.FC<{ alpha?: string }> = ({ alpha = '' }) => {
  return (
    <div className={`${seatButtonSize} text-center  text-white`}>{alpha}</div>
  )
}

export { SeatBlankComponent, SeatButtonComponent, buttonVariants }
