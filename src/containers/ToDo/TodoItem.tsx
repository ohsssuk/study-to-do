import React from "react";
import useTodoStore from "@/stores/todo-store";
import styles from "./styles.module.css";
import CommonCheckbox from "@/components/ui/CommonCheckbox";
import IconBtn from "@/components/ui/IconBtn";
import { formatDateToYYYYMMDD } from "@/utils/weather";
import Link from "next/link";

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

  const isDueDateWarning = todo.dueDate
    ? new Date(todo.dueDate) <= new Date() && !todo.isDone
    : false;

  return (
    <li
      className={`${todo.isDone ? styles.done : ""} ${
        isDueDateWarning ? styles.warn : ""
      }`}
    >
      <CommonCheckbox isChecked={todo.isDone} onChange={handleCickCheck} />
      <Link href={`/edit/${index}`} className={styles.content}>
        <p>{todo.title}</p>
        {todo.dueDate && (
          <p>due date: {formatDateToYYYYMMDD(new Date(todo.dueDate))}</p>
        )}
      </Link>
      <IconBtn onClick={handleDeleteClick} />
    </li>
  );
}
