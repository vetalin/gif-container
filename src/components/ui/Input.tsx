import React, { FormEvent } from 'react'

interface IUiInputProps {
  value?: string
  change?: (changedValue: string) => void
  type?: 'text' | 'number'
  modifyer?: string | string[]
}

export const UiInput: React.FC<IUiInputProps> = (props) => {
  const onInput = (e: FormEvent<HTMLInputElement>) => props.change?.(e.currentTarget.value)
  const className = (() => {
    const baseClassName = 'ui-input'
    const classesStack = [baseClassName]
    const returnClassNames = (stack: string[]) => stack.join(' ')
    const addModToBase = (mod: string) =>`${baseClassName}_${mod}`
    if (!props.modifyer) return returnClassNames(classesStack)
    if (Array.isArray(props.modifyer)) {
      return returnClassNames([...classesStack, ...props.modifyer.map(addModToBase)])
    }
    return returnClassNames([...classesStack, addModToBase(props.modifyer)])
  })()
  return (
    <input
      type={props.type || 'text'}
      onChange={ onInput }
      value={props.value}
      className={className}
    />
  )
} 