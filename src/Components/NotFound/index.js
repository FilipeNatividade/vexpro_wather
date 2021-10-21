import { ArrowLeftCircleFill } from "@styled-icons/bootstrap/ArrowLeftCircleFill";
import { useHistory } from "react-router";
import { Container, Content, BackBnt } from "./style";

const NotFound = () => {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <BackBnt onClick={() => history.push("/")} title="Voltar">
          <ArrowLeftCircleFill className="icon" />
        </BackBnt>
        <h1>Página não encontrada</h1>
      </Content>
    </Container>
  );
};

export default NotFound;
