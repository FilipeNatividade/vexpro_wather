import { useHistory } from "react-router";
import { Github, Facebook } from "@styled-icons/bootstrap";
import { GooglePlus3 } from "@styled-icons/icomoon/GooglePlus3";
import { useValues } from "../../Providers/ValueContext";
import { Container, Content, ButtonLogin } from "./style";
import { googleLogar, facebookLogar, githubLogar } from "../../Firebase";

const Login = () => {
  const { user, actionLoginData } = useValues(null);
  const history = useHistory();

  const actionLoginAccount = async (account) => {
    let result = "";

    switch (account) {
      case "github":
        result = await githubLogar();
        break;
      case "facebook":
        result = await facebookLogar();
        break;
      case "google":
        result = await googleLogar();
        break;
      default:
        history.push("/");
        break;
    }

    result && (await actionLoginData(result));
    result && (await history.push("/home"));
  };

  return (
    <Container>
      <Content>
        <img src="./images/logo.png" alt="logo" />
        <h1>VexPro wather</h1>
        <ButtonLogin color="#000" onClick={() => actionLoginAccount("github")}>
          <Github className="icon" /> Fazer login com Github
        </ButtonLogin>
        <ButtonLogin
          color="#3b5998"
          onClick={() => actionLoginAccount("facebook")}
        >
          <Facebook className="icon" /> Fazer login com Facebook
        </ButtonLogin>
        <ButtonLogin
          color="#ff0000"
          onClick={() => actionLoginAccount("google")}
        >
          <GooglePlus3 className="icon" /> Fazer login com Google
        </ButtonLogin>
      </Content>
    </Container>
  );
};

export default Login;
