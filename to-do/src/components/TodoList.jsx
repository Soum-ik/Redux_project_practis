// import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
    // const todos = useSelector((state) => state.todos);
 
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {/* {todos?.map((todo, idx)  =>{
                return <Todo todo={todo} key={idx}/>
                })
            } */}
        </div>
    );
}