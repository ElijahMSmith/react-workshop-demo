import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    // Pull from weather API and display the result
    const [name, setName] = useState(undefined);
    const [age, setAge] = useState(undefined);
    const [count, setCount] = useState(undefined);
    let navigate = useNavigate();

    useEffect(() => {
        if (!name) return;

        fetch(`https://api.agify.io/?name=${name}`)
            .then((response) => response.json())
            .then((data) => {
                setAge(data ? data.age : undefined);
                setCount(data ? data.count : undefined);
            })
            .catch((error) => {
                console.error(error);
            });

        // MENTION KEEPING API KEYS PRIVATE, IGNORED BY GIT
        //https://api.agify.io/?name=bg
    }, [name]);

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
                onClick={() => navigate("/todos")}
            >
                TODOS
            </button>
            <form
                autocomplete="off"
                onSubmit={(event) => {
                    event.preventDefault();
                    setName(event.target.elements.name.value);
                }}
            >
                <span style={{ display: "inline-block", margin: 20 }}>
                    <label
                        htmlFor="name"
                        style={{
                            display: "block",
                            textAlign: "center",
                            width: 150,
                            margin: 10,
                        }}
                    >
                        Search Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        style={{
                            width: 150,
                            margin: 10,
                            textAlign: "center",
                            display: "block",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            margin: 10,
                        }}
                    >
                        <input type="submit" name="submit" />
                    </div>
                </span>
            </form>
            <div style={{ marginLeft: 20 }}>
                <h2>Name: {name ?? "Search a Name First!"}</h2>
                <p>Age: {age ?? "N/A"}</p>
                <p>Count: {count ?? "N/A"}</p>
            </div>
        </div>
    );
};
