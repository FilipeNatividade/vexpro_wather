import { Github, Facebook } from "@styled-icons/bootstrap";
import { GooglePlus3 } from "@styled-icons/icomoon/GooglePlus3";
import { Container, Content, ButtonLogin } from "./style";

const Login = () => {
  return (
    <Container>
      <Content>
        <img src="./images/logo.png" alt="logo" />
        <h1>VexPro wather</h1>
        <ButtonLogin color="#000">
          <Github className="icon" /> Fazer login com Github
        </ButtonLogin>
        <ButtonLogin color="#3b5998">
          <Facebook className="icon" /> Fazer login com Facebook
        </ButtonLogin>
        <ButtonLogin color="#ff0000">
          <GooglePlus3 className="icon" /> Fazer login com Google
        </ButtonLogin>
      </Content>
    </Container>
  );
};

export default Login;
