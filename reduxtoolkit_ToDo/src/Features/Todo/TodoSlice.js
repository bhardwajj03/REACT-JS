import { createSlice,nanoid } from "@reduxjs/toolkit";

const intialState={
    todos:[{id:1,Text:"hello world"}]
}

export const  TodoSlice=createSlice({
    name:'todo',
    intialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                Text:action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
})

export const {addTodo,removeTodo}=TodoSlice.actions

export default TodoSlice.reducer