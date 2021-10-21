import { useState } from "react";
import { Container } from "./style";

const Watch = () => {
  let data = new Date();
  let date = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  const [timer, setTimer] = useState({});

  const getHours = () => {
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes(2);
    let seconds = time.getSeconds(2);

    setTimer({
      hour: hour,
      minute: Number(minutes) < 10 ? "0" + minutes : minutes,
      seconds: Number(seconds) < 10 ? "0" + seconds : seconds,
    });
  };

  setInterval(() => {
    getHours();
  }, 1000);

  return (
    <Container>
      <p className="hour">{timer.hour}h</p>
      <p className="min">
        {timer.minute}:<span className="sec">{timer.seconds}</span>
      </p>
      <p className="date">{date}</p>
    </Container>
  );
};
export default Watch;
