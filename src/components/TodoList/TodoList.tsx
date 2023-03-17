import React from "react";
import { Divider, List } from "antd";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { MdOutlineDelete } from "react-icons/md";
import { useActions } from "../../hooks/useActions";

import "./TodoList.css";

export const TodoList: React.FC = () => {
  const { todoData } = useTypedSelector((state: any) => state.todos);
  const { deleteTodo } = useActions();
  return (
    <>
      <Divider orientation="left">My Todo List</Divider>
      <List
        bordered
        size="large"
        dataSource={todoData}
        renderItem={(item: any) => (
          <div className="todo_list-item">
            <List.Item>{item.label}</List.Item>
            <MdOutlineDelete
              size={18}
              cursor="pointer"
              color="red"
              onClick={() => {
                deleteTodo(item.id);
              }}
            />
          </div>
        )}
      />
    </>
  );
};
