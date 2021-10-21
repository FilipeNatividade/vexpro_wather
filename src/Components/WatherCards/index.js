import { Delete } from "@styled-icons/typicons/Delete";
import { useValues } from "../../Providers/ValueContext";
import { Container, TextsValue, DeleteBnt } from "./style";

const WatherCards = ({ cityRes, temp, tempMax, tempMin, id }) => {
  const { wather, setWather } = useValues();
  console.log(wather);

  const handleDelete = (id) => {
    setWather((wather) => wather.filter((item) => item.id !== id));
  };
  return (
    <Container>
      <DeleteBnt onClick={() => handleDelete(id)}>
        <Delete className="icon" />
      </DeleteBnt>
      <TextsValue>
        Cidade:<span>{cityRes}</span>
      </TextsValue>
      <TextsValue>
        Clima:<span>{temp}°</span>
      </TextsValue>
      <TextsValue>
        Max:<span>{tempMax}°</span>
      </TextsValue>
      <TextsValue>
        Min:<span>{tempMin}°</span>
      </TextsValue>
    </Container>
  );
};
export default WatherCards;
