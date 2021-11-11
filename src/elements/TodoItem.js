import React from "react";

export const TodoItem = (props) => {
    // We don't put the key here because it needs to be on the outer layer
    // Directly in the array.
    return (
        <tr>
            <td
                style={{
                    border: "2px solid black",
                }}
            >
                <div
                    style={{
                        display: "block",
                        width: 500,
                    }}
                >
                    <h3>{props.title ? props.title : "No Title"}</h3>
                    <p>Due By: {props.dueBy ? props.dueBy : "No Due Date"}</p>
                    <p>{props.desc ? props.desc : "No Description"}</p>
                </div>
            </td>
        </tr>
    );
};
