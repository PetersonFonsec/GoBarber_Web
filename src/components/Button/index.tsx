import { ButtonHTMLAttributes } from "react";
import * as S from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = (props) => <S.Button type="button" {...props}/>

export default Button