import { Wrapper, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiLogIn , FiMail, FiLock} from 'react-icons/fi';
import Input from '../../components/Inputs';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Wrapper>
    <Content>
      <img src={logoImg} alt='logo GoBaber'/>
      <form>
        <h1>Faça Barba, Cabelo e Bigode</h1>
        <Input icon={FiMail} name="Email" type="email" placeholder="E-mail"/>
        <Input icon={FiLock} name="Password" type="text" placeholder="Senha"/>
        <Button type="submit">Entrar</Button>
        <a href="lofin">Esquecia minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background/>
  </Wrapper>
  )

export default SignIn