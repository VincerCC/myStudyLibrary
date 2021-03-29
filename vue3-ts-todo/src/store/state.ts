/*
 * @Author: your name
 * @Date: 2021-03-16 17:36:09
 * @LastEditTime: 2021-03-16 18:31:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-todo\src\store\state.ts
 */

import { IState } from "@/typings";

/*
list: [
  {
    id: new Date().getTime         -> number,
    content: ''                    ->string,
    status: finish / doing / todo  -> enum
  }
]
*/
export default <IState> {
  list: []
}
