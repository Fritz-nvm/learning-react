import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Bamenda", "Buea", "Yaounde", "Douala", "Limbe", "Bambili"];
  const handleSelectionItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {/* anothe way to fragment without importing the fragment module */}
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            Hello world alert
          </Alert>
        )}

        <Button color="success" onClick={() => setAlertVisibility(true)}>
          Clickme
        </Button>
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectionItem}
        />
      </div>
    </>
  );
}

export default App;
