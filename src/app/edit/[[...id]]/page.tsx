"use client";

import React, { useEffect, useState } from "react";
import useTodoStore from "@/stores/todo-store";
import PageTitle from "@/components/part/PageTitle";
import CommonBtn from "@/components/ui/CommonBtn";
import styles from "./styles.module.css";
import uiStyles from "@/components/ui/ui-styles.module.css";
import PageContent from "@/components/part/PageContent";
import CommonInput from "@/components/ui/CommonInput";
import CommonTextarea from "@/components/ui/CommonTextarea";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

interface EditTodoProps {
  params: {
    id?: string[];
  };
}
export default function EditTodo({ params }: EditTodoProps) {
  const router = useRouter();

  const { getTodo, updateTodo, createTodo } = useTodoStore();

  const [title, setTitle] = useState<TodoItem["title"]>("");
  const [content, setContent] = useState<TodoItem["content"]>("");
  const [dueDate, setDueDate] = useState<TodoItem["dueDate"]>(null);
  const [isDone, setIsDone] = useState<TodoItem["isDone"]>(false);

  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const { id } = params;

    if (id) {
      const thisIndex = Number(id[0]);
      setIndex(thisIndex);

      const todo = getTodo(thisIndex);

      if (todo) {
        setTitle(todo.title);
        setContent(todo.content);
        setDueDate(todo.dueDate ?? null);
      }
    }
  }, [getTodo, params]);

  const handleClickSave = () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요");
      return;
    }

    if (index !== null) {
      updateTodo(index, {
        title,
        content,
        dueDate,
      });
    } else {
      createTodo({
        title,
        content,
        isDone: false,
        dueDate,
      });
    }

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
          <DatePicker
            locale={ko}
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            dateFormat="yyyy-MM-dd"
            className={uiStyles.input}
            placeholderText="날짜 선택"
          />
        </div>
      </PageContent>

      <div className={styles.cta}>
        <CommonBtn onClick={handleClickSave}>저장 버튼</CommonBtn>
      </div>
    </main>
  );
}
