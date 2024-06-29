"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import useTodoStore from "@/stores/todo-store";
import CommonBtn from "@/components/ui/CommonBtn";
import { useRouter } from "next/navigation";
import TodoItem from "./TodoItem";
import Loading from "@/components/ui/Loading";

export default function ToDo() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { todoItems, createTodo } = useTodoStore();

  useEffect(() => {
    setIsLoading(false);
  }, [todoItems]);

  const handleClickToEdit = () => {
    router.push("/edit");
  };

  return (
    <>
      <div className={styles.cta}>
        <CommonBtn onClick={handleClickToEdit}>추가 버튼</CommonBtn>
      </div>
      <div id={styles.todo_list}>
        {isLoading ? (
          <Loading />
        ) : todoItems.length === 0 ? (
          <p>일정이 없습니다.</p>
        ) : (
          <ul className={styles.list}>
            {todoItems.map((todo, index) => (
              <TodoItem todo={todo} index={index} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
