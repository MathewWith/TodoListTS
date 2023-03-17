import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { Button, Input, Space } from "antd";

import './CreateTodo.css';

export const CreateTodo = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const { createTodo } = useActions();
  return (
    <Space direction="vertical" size="large" className="create_todo">
      <Space.Compact style={{ width: "100%" }}>
        <Input
          placeholder="Add new todo"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          //Здесь можно было бы использовать дебаунс функцию, если бы выполнялся запрос в базу(хотя можно и сейчас, но смысла меньше)
        />
        <Button
          type="primary"
          onClick={() => {
            createTodo({
              label: newTodo,
              id: +(Math.random() * 100).toFixed(),
            });
            setNewTodo("");
          }}
        >
          Submit
        </Button>
      </Space.Compact>
    </Space>
  );
};
