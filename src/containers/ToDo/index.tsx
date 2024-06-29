"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import useTodoStore from "@/stores/todo-store";
import CommonBtn from "@/components/ui/CommonBtn";
import { useRouter } from "next/navigation";
import TodoItem from "./TodoItem";

export default function ToDo() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const { todoItems, createTodo } = useTodoStore();

  const handleClickToEdit = () => {
    router.push("/edit");
  };

  return (
    <div id={styles.todo_list}>
      <div className={styles.cta}>
        <CommonBtn onClick={handleClickToEdit}>추가 버튼</CommonBtn>
      </div>
      <ul className={styles.list}>
        {todoItems.map((todo, index) => (
          <TodoItem todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
}
