"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import useTodoStore from "@/stores/todo-store";
import CommonBtn from "@/components/ui/CommonBtn";
import { useRouter } from "next/navigation";

export default function ToDo() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const { todoItems, createTodo } = useTodoStore();

  const handleClickAddTodo = () => {
    router.push("/edit");
  };

  return (
    <div id={styles.todo_list}>
      <div className={styles.cta}>
        <CommonBtn onClick={handleClickAddTodo}>추가 버튼</CommonBtn>
      </div>
      <ul>
        {todoItems.map((todo, index) => (
          <li key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <p>Due Date: {String(todo.dueDate)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
