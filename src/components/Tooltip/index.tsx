import * as S from "./style";
interface TootipProps {
  message: string;
  className?: string;
}

const Tooltip: React.FC<TootipProps> = ({ message, children, className }) => (
  <S.Container className={className}>
    {children}
    <span>{message}</span>
  </S.Container>
);

export default Tooltip;
