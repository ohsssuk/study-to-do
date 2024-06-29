"use client";

import React, { useState } from "react";
import useTodoStore from "@/stores/todo-store";
import PageTitle from "@/components/part/PageTitle";
import CommonBtn from "@/components/ui/CommonBtn";
import styles from "./styles.module.css";

interface EditTodoProps {
  params: {
    id?: string[];
  };
}
export default function EditTodo({ params }: EditTodoProps) {
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
    const newTodo: TodoItem = { title, content, dueDate: new Date(dueDate) };
    createTodo(newTodo);
  };

  return (
    <main id={styles.todo_edit}>
      <PageTitle title={"To-Do"} />
      <div className={styles.wrap}>
        <div className={styles.cta}>
          <CommonBtn onClick={handleClickSave}>저장 버튼</CommonBtn>
        </div>
      </div>
    </main>
  );
}
