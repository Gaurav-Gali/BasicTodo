import { React, useState } from "react";
import Message from "./components/Message";
import ToDos from "./components/ToDos";
import "./styles/NavBar.css";

import { useContext } from "react";
import { TodoListContext } from "./store/todo-items-store";

function App() {
    // Global Data
    let [listElements, setListElements] = useState([]);
    // Navbar states
    const [inputValue, setInputValue] = useState("");
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const [date, setDate] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        let updatedList = [
            ...listElements,
            {
                id: listElements.length + 1,
                title: inputValue,
                date: date,
            },
        ];
        setListElements(updatedList);
        setInputValue("");
        setDate("");
    };

    // Todo State
    const handleDelete = (itemId) => {
        let correctedList = listElements.filter((item) => item.id !== itemId);
        for (let i of correctedList) {
            i.id = correctedList.indexOf(i) + 1;
        }
        setListElements(correctedList);
    };
    return (
        <TodoListContext.Provider
            value={{
                listElements: listElements,
                handleDelete: handleDelete,
                handleSubmit: handleSubmit,
            }}
        >
            {/* Navbar */}
            <nav>
                <div className="lead">TodoList</div>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    id="controls"
                    className="input-group md-3"
                >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Task"
                        onChange={(e) => handleInput(e)}
                        value={inputValue}
                    />
                    <input
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        className="form-control"
                        value={date}
                    />
                    <button type="submit" className="btn btn-primary">
                        Add Todo
                    </button>
                </form>
            </nav>
            {/* Todo */}
            {listElements.length !== 0 ? (
                <ToDos />
            ) : (
                <Message msg={"No Todos"} />
            )}
        </TodoListContext.Provider>
    );
}

export default App;
