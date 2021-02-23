import { Wrapper, Content, Background } from './styles';
import {Form} from '@unform/web';
import logoImg from '../../assets/logo.svg';
import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import Input from '../../components/Inputs';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data)
  } 

  return (
  <Wrapper>
  <Background/>
    <Content>
      <img src={logoImg} alt='logo GoBaber'/>
      <Form onSubmit={handleSubmit} >
        <h1>Faça Barba, Cabelo e Bigode</h1>
        <Input icon={FiUser} name="Name" type="text" placeholder="Nome"/>
        <Input icon={FiMail} name="Email" type="email" placeholder="E-mail"/>
        <Input icon={FiLock} name="Password" type="password" placeholder="Senha"/>
        <Button type="submit">Cadastrar</Button>
      </Form>

      <a href="login">
        <FiArrowLeft/>
        Voltar para o login
      </a>
    </Content>
  </Wrapper>
  )
}

export default SignIn