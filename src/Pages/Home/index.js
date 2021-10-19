import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useValues } from "../../Providers/ValueContext";
import Header from "../../Components/Header";

import {Container} from './style'

const Home = () => {
  const { user } = useValues();
  const history = useHistory();

    !user.name && history.push("/");
  return (
    <Container>
      <Header />
    </Container>
  );
};
export default Home;
