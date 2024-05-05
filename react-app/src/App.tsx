import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        Hello <span>World</span>
      </Alert>}

      <Button
        text="Button"
        color="danger"
        onClick={() => setAlertVisibility(true)}
      />
    </div>
  );
}

export default App;
