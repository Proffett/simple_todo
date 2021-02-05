import React, { useState } from "react";
import {
  ButtonGroup,
  Button,
  ListGroup,
  ListGroupItem,
  Form,
} from "react-bootstrap";


function ToDo(props) {
  const [task, addTask] = useState(["Выполнить оптимизацию кода"]);
  const [input, setInput] = useState({ text: "" });

  const onValueChanged = (event) => {
    setInput({ text: event.target.value });
  };
  const onSubmit = (event) => {
    setInput({ text: "" });
    event.preventDefault();
    if (input.text.length === 0) {
      alert("Поле не должно быть пустым");
    } else {
      addTask([...task, input.text]);
      console.log(task);
    }
  };
  const onRemove = (name) => {
        addTask(task.filter((item) => item !== name));
        console.log(name)
  }
  return (
    <main>
      <h1>To Do</h1>
      <ListGroup style={{ color: "#000", margin: "10px" }}>
        {task.map((item, i) => {
          return (
            <ListGroupItem key={i} style={{display: 'flex', justifyContent: "space-between"}}>
              {item}
              <button className="btn btn-warning" id={i} onClick={() => onRemove(task[i])}>
                Х
              </button>
            </ListGroupItem>
          );
        })}
      </ListGroup>

      <Form onSubmit={onSubmit}>

          <input
            style={{ color: "#222", fontSize: "18px" }}
            placeholder="что нужно сделать?"
            autoFocus
            value={input.text}
            onChange={onValueChanged}
          />


        <ButtonGroup>
          <Button type="submit" style={{ margin: "10px" }}>
            ДОБАВИТЬ
          </Button>
          {/* <Button style={{ margin: "10px" }}>УДАЛИТЬ</Button> */}
        </ButtonGroup>
      </Form>
    </main>
  );
}

export default ToDo;
