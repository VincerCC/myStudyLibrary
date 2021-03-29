import store from "@/store"
import { ITodo, TODO_STATUS } from "@/typings"
import { watch } from "vue"
import { Store, useStore } from "vuex"

/*
 * @Author: your name
 * @Date: 2021-03-16 18:41:00
 * @LastEditTime: 2021-03-17 15:08:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-todo\src\hooks\index.ts
 */
interface IUseTodo{
  // 都是函数，返回值都是void
  setTodo: (value: string)=>void,
  setTodoList: ()=>void,
  delTodo: (id: number)=> void,
  setTodoStatus: (id: number)=>void,
  setDoing: (id: number)=>void
}

interface IUseLocalStorage{
  // 都是函数，返回值都是void
  getLocalList: ()=> ITodo[],
  setLocalList: (todoList: ITodo[])=>void,
}


function useTodo (): IUseTodo{
  const store: Store<any> = useStore()
  const { setLocalList, getLocalList } = useLocalStorage()

  watch(()=>{
    return store.state.list
  },(newVal)=>{
    console.log(newVal)
    setLocalList(newVal)
  })
  const todoList: ITodo[] = getLocalList()

  function setTodo(value: string): void{
    // todo
    const todo: ITodo = {
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.TODO
    }

    // 调用store方法，设置state
    store.dispatch('SET_TODO', todo)
  }
  function setTodoList(){
    // 调用store方法，设置state
    store.dispatch('SET_TODO_LIST', todoList)
  }
  function delTodo(id: number): void{
     // 调用store方法，设置state
    store.dispatch('DEL_TODO', id)
  }
  function setTodoStatus(id: number): void{
    // 调用store方法，设置state
    store.dispatch('SET_STATUS', id)

  }
  function setDoing(id: number): void{
    // 调用store方法，设置state
    store.dispatch('SET_DOING', id)

  }

  return {
    setTodo,
    setTodoList,
    delTodo,
    setTodoStatus,
    setDoing
  }
}

function useLocalStorage(): IUseLocalStorage{
  function getLocalList(): ITodo[]{
    return JSON.parse(localStorage.getItem('todoList') || '[]')
  }
  function setLocalList(todoList: ITodo[]): void{
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }
  return {
    getLocalList,
    setLocalList
  }
}

export {
  IUseTodo,
  useTodo,
  useLocalStorage
}