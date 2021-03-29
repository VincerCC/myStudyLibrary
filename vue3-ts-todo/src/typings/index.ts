interface ITodo {
  id: number;
  content: string;
  status: TODO_STATUS
}
// 规定state对象中，要有list数组，数组每一项限定是ITodo的类型
interface IState {
  list: ITodo[]
}
enum TODO_STATUS {
  FINISH = 'finish',
  DOING = 'doing',
  TODO = 'todo',
}
export {
  ITodo,
  IState,
  TODO_STATUS
}