import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { useNavigate } from "react-router-dom";

export const TodoList = () => {
    // List of tasks to complete for the day, lets you enter new ones
    const [todos, setTodosList] = useState([]);
    const [nextID, setNextId] = useState(0);
    let navigate = useNavigate();

    // the key prop is used in lists of elements to help react know when
    // items have been changed, added, or removed.
    // We can assign it a string that is unique to the todo, in this case the title.
    const addTODO = (event) => {
        event.preventDefault();
        setTodosList([
            ...todos,
            <TodoItem
                // Gets by the "name" property on the inputs
                key={nextID}
                title={event.target.elements.title.value}
                desc={event.target.elements.desc.value}
                dueBy={event.target.elements.dueBy.value}
            />,
        ]);
        setNextId(nextID + 1);
    };

    return (
        <div>
            <button
                style={{
                    width: 100,
                    padding: 10,
                    fontSize: 20,
                    margin: 20,
                    borderRadius: "5px",
                    backgroundColor: "lightblue",
                }}
                onClick={() => navigate("/")}
            >
                Home
            </button>
            <form onSubmit={addTODO} autocomplete="off">
                <span style={{ display: "inline-block", margin: 5 }}>
                    <label htmlFor="title" style={{ display: "block" }}>
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        style={{ width: 300 }}
                    />
                </span>

                <br />

                <span style={{ display: "inline-block", margin: 5 }}>
                    <label htmlFor="desc" style={{ display: "block" }}>
                        Description
                    </label>
                    <input
                        type="text"
                        id="desc"
                        name="desc"
                        style={{ width: 300 }}
                    />
                </span>

                <br />

                <span
                    style={{
                        display: "inline-block",
                        margin: 5,
                        marginBottom: 30,
                    }}
                >
                    <label htmlFor="dueBy" style={{ display: "block" }}>
                        Due By
                    </label>
                    <input
                        type="text"
                        id="dueBy"
                        name="dueBy"
                        style={{ width: 300 }}
                    />
                </span>

                <br />

                <input
                    type="submit"
                    value="Submit"
                    style={{
                        width: 100,
                        marginLeft: 100,
                        marginTop: 20,
                        marginBottom: 20,
                    }}
                />
            </form>
            <table>
                <tbody>{todos}</tbody>
            </table>
        </div>
    );
};
