import React, { FormEvent } from 'react'

interface IUiInputProps {
  value: string
  change: (changedValue: string) => void
  type: 'text' | 'number'
}

export const UiInput: React.FC<IUiInputProps> = (props) => {
  const onInput = (e: FormEvent<HTMLInputElement>) => props.change(e.currentTarget.value)
  return (
    <input
      type={props.type || 'text'}
      onInput={ onInput }
      value={props.value} {...props}
    />
  )
} 