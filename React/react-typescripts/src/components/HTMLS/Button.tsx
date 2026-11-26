import React from 'react'

type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: React.ReactNode
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  )
}