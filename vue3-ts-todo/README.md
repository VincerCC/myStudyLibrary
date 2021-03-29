# vue3-ts-todo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 组件划分
 - TodoList
    1. TodoInput -> 输入的组件
    2. TodoList -> 列表组件
        - TodoItem -> 列表项
        1. 完成 或 未完成的选择 checkbox
        2. 删除该项 button
        3. 正在做的确认按钮 button
