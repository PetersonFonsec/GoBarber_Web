import { InputHTMLAttributes } from 'react';
import {IconBaseProps} from 'react-icons'
import * as S from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({icon:Icon , ...props}) => 
  <S.Container> 
    { Icon && <Icon/> }
    <S.Input {...props} type="text"/> 
  </S.Container>

export default Input