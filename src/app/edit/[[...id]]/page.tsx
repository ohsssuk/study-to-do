"use client";

import React, { useState } from "react";
import useTodoStore from "@/stores/todo-store";
import PageTitle from "@/components/part/PageTitle";
import CommonBtn from "@/components/ui/CommonBtn";
import styles from "./styles.module.css";
import PageContent from "@/components/part/PageContent";
import CommonInput from "@/components/ui/CommonInput";
import CommonTextarea from "@/components/ui/CommonTextarea";
import { useRouter } from "next/navigation";

interface EditTodoProps {
  params: {
    id?: string[];
  };
}
export default function EditTodo({ params }: EditTodoProps) {
  const router = useRouter();

  const { getTodo, updateTodo, createTodo } = useTodoStore();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  const { id } = params;
  let index: number | null = null;

  if (id) {
    index = Number(id[0]);
    const todo = getTodo(index);
    if (todo) {
      setTitle(todo.title);
      setContent(todo.content);
      setDueDate(todo.dueDate ? String(todo.dueDate) : "");
    }
  }

  const handleClickSave = () => {
    const newTodo: TodoItem = {
      title,
      content,
      isDone: false,
      dueDate: new Date(dueDate),
    };

    createTodo(newTodo);

    router.push("/");
  };

  function handleChangeValue<T>(
    value: T,
    setState: React.Dispatch<React.SetStateAction<T>>
  ) {
    setState(value);
  }

  return (
    <main id={styles.todo_edit}>
      <PageTitle title={"To-Do"} />

      <PageContent title={"제목"} marginTop={40}>
        <div className={styles["input-wrap"]}>
          <CommonInput
            value={title}
            placeholder="제목 입력"
            onChange={(e) => handleChangeValue(e.target.value, setTitle)}
          />
        </div>
      </PageContent>

      <PageContent title={"내용"} marginTop={20}>
        <div className={styles["input-wrap"]}>
          <CommonTextarea
            value={content}
            placeholder="내용 입력"
            onChange={(e) => handleChangeValue(e.target.value, setContent)}
          />
        </div>
      </PageContent>

      <PageContent title={"Due Date (Option)"} marginTop={20}>
        <div className={styles["input-wrap"]}>
          <CommonInput
            value={dueDate}
            placeholder="내용 입력"
            onChange={(e) => handleChangeValue(e.target.value, setDueDate)}
          />
        </div>
      </PageContent>

      <div className={styles.cta}>
        <CommonBtn onClick={handleClickSave}>저장 버튼</CommonBtn>
      </div>
    </main>
  );
}
