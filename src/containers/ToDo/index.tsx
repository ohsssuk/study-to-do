"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import useTodoStore from "@/stores/todo-store";
import CommonBtn from "@/components/ui/CommonBtn";
import TodoItem from "./TodoItem";
import Loading from "@/components/ui/Loading";
import Link from "next/link";

export default function ToDo() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { todoItems } = useTodoStore();

  useEffect(() => {
    setIsLoading(false);
  }, [todoItems]);

  return (
    <>
      <div className={styles.cta}>
        <Link href="/edit">
          <CommonBtn>추가 버튼</CommonBtn>
        </Link>
      </div>
      <div id={styles.todo_list}>
        {isLoading ? (
          <Loading />
        ) : todoItems.length === 0 ? (
          <p>일정이 없습니다.</p>
        ) : (
          <ul className={styles.list}>
            {todoItems.map((todo, index) => (
              <TodoItem key={index} todo={todo} index={index} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
