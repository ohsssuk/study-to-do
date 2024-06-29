import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TodoStore {
  todoItems: TodoItem[];
  createTodo: (todo: TodoItem) => void;
  updateTodo: (index: number, updatedTodo: Partial<TodoItem>) => void;
  deleteTodo: (index: number) => void;
  getTodo: (index: number) => TodoItem | null;
}
const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todoItems: [],
      createTodo: (todo: TodoItem) =>
        set((state) => ({
          todoItems: [...state.todoItems, todo],
        })),
      updateTodo: (index: number, updatedTodo: Partial<TodoItem>) =>
        set((state) => {
          const newTodoItems = [...state.todoItems];
          newTodoItems[index] = { ...newTodoItems[index], ...updatedTodo };
          return { todoItems: newTodoItems };
        }),
      deleteTodo: (index: number) =>
        set((state) => ({
          todoItems: state.todoItems.filter((_, idx) => idx !== index),
        })),
      getTodo: (index: number) => get().todoItems[index] ?? null,
    }),
    {
      name: "todo-storage",
    }
  )
);
export default useTodoStore;
