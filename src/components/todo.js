import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem, Form } from "react-bootstrap";

function ToDo({ header }) {
  const [task, setTask] = useState([{ id: 1, name: "Do plan for a month" }]);
  const [input, setInput] = useState({ text: "" });

  const onInputChanged = (event) => {
    setInput({ text: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setInput({ text: "" });

    if (input.text.length === 0) {
      alert("This field doesn't be empty");
    } else {
      setTask([...task, { id: Math.random(), name: input.text }]);
    }
  };

  const onRemove = (id) => {
    setTask(task.filter((item) => item.id !== id));
    console.log(id);
  };

  return (
    <main>
      <h1>{header}</h1>

      <ListGroup style={{ color: "#000", margin: "10px" }}>
        {task.length > 0 ? (
          task.map((item) => {
            return (
              <ListGroupItem
                key={item.id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {item.name}
                <button
                  className="btn btn-warning"
                  id={item.id}
                  onClick={() => onRemove(item.id)}
                >
                  Х
                </button>
              </ListGroupItem>
            );
          })
        ) : (
          <div className="list-group-item">No tasks, please add a new task</div>
        )}
      </ListGroup>

      <Form onSubmit={onSubmit}>
        <input
          style={{ color: "#222", fontSize: "18px" }}
          placeholder="What should i do?"
          autoFocus
          value={input.text}
          onChange={onInputChanged}
        />

        <Button type="submit" style={{ margin: "10px" }}>
          ADD
        </Button>
      </Form>
    </main>
  );
}

export default ToDo;
