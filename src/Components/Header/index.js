import { useValues } from "../../Providers/ValueContext";
import { Exit } from "@styled-icons/icomoon/Exit";
import { Container, Infos, Logo, Avatar, NameUser, BntExit } from "./style";
import { useHistory } from "react-router";

const Header = () => {
  const { user, setUser } = useValues();
  const history = useHistory()
  const handleBack = () =>{
    history.push('/')
    setUser({})
  }
  return (
    <Container>
      <Logo src="./images/logo.png" alt="logo" />
      <Infos>
        <Avatar src={user.avatar} alt="avatar" />
        <NameUser>{user.name}</NameUser>
        <BntExit title="Sair" onClick={handleBack}>
          <Exit className="icon"/>
        </BntExit>
      </Infos>
    </Container>
  );
};
export default Header;
