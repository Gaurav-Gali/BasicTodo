import React, { useContext } from "react";
import { TodoListContext } from "../store/todo-items-store";
import List from "./List";

// import "../styles/ToDos.css";

function ToDos({ handleDelete }) {
    const contextObj = useContext(TodoListContext);
    return (
        <>
            <main>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th>Srno</th>
                            <th>Todo</th>
                            <th>Date</th>
                            <th>Deletion</th>
                        </tr>
                        {/* Start Todos */}
                        <List
                            listData={contextObj.listElements}
                            handleDelete={contextObj.handleDelete}
                        />
                        {/* End Todos */}
                    </tbody>
                </table>
            </main>
        </>
    );
}

export default ToDos;
