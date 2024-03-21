import { useEffect, useState } from "react";
import {
  TimerContainer,
  TimerWrapper,
  TimerTitle,
  TimerText,
  TimerTextSpan,
  TimerBlock
} from "./Timer.styled-component";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const numHours = 15;
    const startTime = localStorage.getItem("timerStart");
    let startDate;
    if (startTime) {
      startDate = new Date(startTime);
    } else {
      startDate = new Date();
      localStorage.setItem("timerStart", startDate);
    }

    const timeSet = new Date(startDate.getTime() + numHours * 3600000);

    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const remainingTime = timeSet - currentTime;

      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (remainingTime < 0) {
        localStorage.removeItem("timerStart");
        clearInterval(interval);
      }
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimerContainer>
      <TimerWrapper>
        <TimerTitle>Зареєструйся та прокачай усі часи англійської</TimerTitle>
        <TimerText>
          375 грн.
          <TimerTextSpan>1200 грн.</TimerTextSpan>
        </TimerText>

        <TimerBlock id="deadline-timer">
          00 : {hours < 10 ? "0" + hours : hours} : {""}
          {minutes < 10 ? "0" + minutes : minutes} : {""}
          {seconds < 10 ? "0" + seconds : seconds}
        </TimerBlock>
      </TimerWrapper>
    </TimerContainer>
  );
};

export default Timer;
