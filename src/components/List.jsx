import React from "react";
import TodoStyle from "../styles/ToDos.module.css";

function List(props) {
    return (
        <>
            {props.listData.map((item) => (
                <tr
                    className={
                        item.id === 1 ? TodoStyle.firstElement : TodoStyle.list
                    }
                    key={item.id}
                >
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.date}</td>
                    <td>
                        <button
                            onClick={() => props.handleDelete(item.id)}
                            className="btn btn-danger"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
}

export default List;
