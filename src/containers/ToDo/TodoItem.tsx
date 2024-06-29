import React from "react";
import useTodoStore from "@/stores/todo-store";
import styles from "./styles.module.css";
import CommonCheckbox from "@/components/ui/CommonCheckbox";
import IconBtn from "@/components/ui/IconBtn";
import { formatDateToYYYYMMDD } from "@/utils/weather";

interface TodoItemProps {
  todo: TodoItem;
  index: number;
}
export default function TodoItem({ todo, index }: TodoItemProps) {
  const { updateTodo, deleteTodo } = useTodoStore();

  const handleCickCheck = () => {
    updateTodo(index, { isDone: !todo.isDone });
  };

  const handleDeleteClick = () => {
    deleteTodo(index);
  };

  return (
    <li className={`${styles.todoItem} ${todo.isDone ? styles.done : ""}`}>
      <CommonCheckbox isChecked={todo.isDone} onChange={handleCickCheck} />
      <div className={styles.content}>
        <p>{todo.title}</p>
        {todo.dueDate && (
          <p>due date: {formatDateToYYYYMMDD(new Date(todo.dueDate))}</p>
        )}
      </div>
      <IconBtn onClick={handleDeleteClick} />
    </li>
  );
}
