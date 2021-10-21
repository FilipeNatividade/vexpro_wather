import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { Facebook } from "@styled-icons/bootstrap";
import { GooglePlus3 } from "@styled-icons/icomoon/GooglePlus3";
import { useValues } from "../../Providers/ValueContext";
import { googleLogar } from "../../Firebase";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import {
  Container,
  Logo,
  Content,
  ButtonLogin,
  Form,
  Inputs,
  Message,
  RegisterBtn,
} from "./style";
import { useState } from "react";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { user, actionLoginData } = useValues();
  const history = useHistory();
  const [error, setError] = useState(false);

  const actionLoginAccount = async () => {
    let result = "";
    result = await googleLogar();
    result && (await actionLoginData("google", result));
    result && history.push("/home");
  };
  const handleOnSubmit = (e) => {
    if (user.email === e.email && user.password === e.password) {
      history.push("/home");
    } else if (user.email !== e.email) {
      setError(true);
      setInterval(() => {
        setError(false);
      }, 3000);
    } else if (user.password !== e.password) {
      setError(true);
      setInterval(() => {
        setError(false);
      }, 3000);
    }
  };

  const responseFacebook = (response) => {
    history.push("/home");
    actionLoginData("facebook", response);
    console.log(response.picture.data.url);
  };

  return (
    <Container>
      <Content>
        <Logo src="./images/logo.png" alt="logo" />
        <h1>VexPro wather</h1>

        <ButtonLogin color="#3b5998">
          <FacebookLogin
            cssClass="bntSocialWeb"
            appId="2652308085076400"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            icon={<Facebook className="icon" />}
            textButton="Fazer login com Facebook"
          />
        </ButtonLogin>
        <ButtonLogin color="#ff0000" onClick={actionLoginAccount}>
          <GooglePlus3 className="icon" /> Fazer login com Google
        </ButtonLogin>
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
          <Inputs type="email" {...register("email")} placeholder="Email" />
          <Inputs {...register("password")} placeholder="Senha" />
          <Message className={error && "true"}>
            Senha errada ou usuário nao cadastrado
          </Message>
          <RegisterBtn type="submit" title="registrar" value="Entrar" />
        </Form>
        <Link to="/register">Registrar</Link>
      </Content>
      ,
    </Container>
  );
};

export default Login;
