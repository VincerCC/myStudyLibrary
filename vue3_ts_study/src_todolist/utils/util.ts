import { ITodo } from "../types/todo";
export function saveTodos(todos: ITodo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
export function getTodos(): ITodo[] {
  return JSON.parse(localStorage.getItem("todos") || "[]");
}
