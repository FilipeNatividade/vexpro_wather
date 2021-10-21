import { useHistory } from "react-router-dom";
import { useValues } from "../../Providers/ValueContext";
import Header from "../../Components/Header";
import InputBar from "../../Components/InputBar";
import Watch from "../../Components/Watch";
import { Container, ContaiComponents, Content } from "./style";
import WatherCards from "../../Components/WatherCards";
import ModalError from "../../Components/ModalError";

const Home = () => {
  const { user,wather, error } = useValues();
  const history = useHistory();

  user.name === 'Usuário' && history.push("/");
  return (
    <Container>
      <Header />
      <ContaiComponents>
        <Watch />
        <Content>
          <InputBar />
          {error && <ModalError text="Cidade não encontrada" />}
          {wather.map((obj, index) => (
            <WatherCards
              key={index}
              cityRes={obj.city}
              temp={obj.temp}
              tempMax={obj.tempMax}
              tempMin={obj.tempMin}
              id={obj.id}
            />
          ))}
        </Content>
      </ContaiComponents>
    </Container>
  );
};
export default Home;
