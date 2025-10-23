import {createStore} from "redux";
const ADD_TASK = "task/add";
 const DELETE_TASK = "task/delete";
const initialState = {
    task: [],
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload]
            }
        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => index != action.payload);
            return {
                ...state,
                task: updatedTask
            }
        default: {
            return state;
        }
    }
}


 export const store = createStore(taskReducer);

console.log(store);
console.log("initial state:" ,store.getState());
store.dispatch({type:ADD_TASK , payload: "buy new car"});
console.log( "updated state:", store.getState());
