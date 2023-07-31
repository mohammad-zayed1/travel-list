import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  // Add new item
  const handelAddItem = (newItem) =>
    setItems((currItems) => [...currItems, newItem]);

  // Delete item
  const handleDeleteItem = (id) =>
    setItems(items.filter((item) => item.id !== id));

  // Update Item
  const handleToggleItem = (id) =>
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

  // Clear All List
  const handleClearList = () => {
    const confirmed = window.confirm("Are You Sure To clear All List");
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handelAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
