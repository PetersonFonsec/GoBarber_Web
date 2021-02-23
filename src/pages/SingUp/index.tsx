import { Wrapper, Content, Background } from './styles';
import {Form} from '@unform/web';
import logoImg from '../../assets/logo.svg';
import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import Input from '../../components/Inputs';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import * as Yup from "yup";
import { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback( async (data: object): Promise<void> => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é Obrigatório'),
          email: Yup.string().required('E-mail é Obrigatório').email('E-mail Invalído'),
          password:  Yup.string().min(6, 'Deve Conter no minimo 6 digitos')
        });
  
        await schema.validate(data, {
          abortEarly: false
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
  }, [])

  return (
  <Wrapper>
    <Background/>
    <Content>
      <img src={logoImg} alt='logo GoBaber'/>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <h1>Faça Barba, Cabelo e Bigode</h1>
        <Input icon={FiUser} name="name" type="text" placeholder="Nome"/>
        <Input icon={FiMail} name="email" type="email" placeholder="E-mail"/>
        <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>
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