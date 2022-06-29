/** @jsx h */
import { h } from "preact";

import Countdown from "../islands/Countdown.tsx";

const CountdownPage = () => {
  const date = new Date();

  date.setHours(date.getHours() + 1);

  return (
    <p>
      Thebig event is happing <Countdown target={date.toISOString()} />
    </p>
  );
};

export default CountdownPage;
