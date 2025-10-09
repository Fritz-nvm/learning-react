import { Fragment, useState } from "react";

interface ListProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      {/*we use this when we want to use multiple elements in thesame component
      ie h and ul */}

      {items.length === 0 && <p>No items found</p>}
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
