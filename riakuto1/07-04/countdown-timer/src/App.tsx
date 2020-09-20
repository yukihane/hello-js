import React, { useState, useEffect } from "react";
import { Button, Card, Icon, Statistic } from "semantic-ui-react";
import "./App.css";

const LIMIT = 60;

function App() {
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  useEffect(() => {
    const tick = () => {
      setTimeLeft(timeLeft - 1);
    };

    const timerId = setInterval(tick, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [timeLeft]);

  const reset = () => {
    setTimeLeft(LIMIT);
  };

  return (
    <div className="number-board">
      <header>
        <h1>タイマー</h1>
      </header>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>time</Statistic.Label>
          <Statistic.Value>{timeLeft}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <Button color="red" onClick={reset} fluid>
            <Icon name="redo" />
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default App;
