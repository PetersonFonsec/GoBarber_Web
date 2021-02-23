import { InputHTMLAttributes, useEffect, useRef } from 'react';
import {IconBaseProps} from 'react-icons'
import { useField} from '@unform/core';
import * as S from './style';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, icon:Icon ,  ...props}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value'
        })
  }, [fieldName, registerField]);

  return (
    <S.Container> 
    <S.Input defaultValue={defaultValue} ref={inputRef} {...props}/> 
    { Icon && <Icon/> }
  </S.Container>
    )
  }

export default Input