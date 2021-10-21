import { Search } from "@styled-icons/fa-solid/Search";
import { useState } from "react/cjs/react.development";
import { useValues } from "../../Providers/ValueContext";
import { Container, Label, ContainInpBtn, Input, BntSearch } from "./style";

const InputBar = () => {
  const { handleRequest } = useValues();
  const [cityInput, setCityInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setCityInput(e.target.value);
  };

  const handleGetCity = async () => {
    cityInput && await handleRequest(cityInput);
    setCityInput("");
  };

  const handleKeyPress = (event) => {
    event.key === "Enter" && handleGetCity();
  };
  return (
    <Container>
      <Label>Cidade:</Label>
      <ContainInpBtn>
        <Input
          onKeyPress={handleKeyPress}
          type="text"
          onChange={(e) => handleChange(e)}
          autoFocus
        />
        <BntSearch onClick={handleGetCity}>
          <Search className="icon" />
        </BntSearch>
      </ContainInpBtn>
    </Container>
  );
};
export default InputBar;
