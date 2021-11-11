import "./App.css";
import { TodoList } from "./elements/TodoList";
import { Home } from "./elements/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/todos" element={<TodoList />} />
            </Routes>
        </BrowserRouter>
    );

    /*

    Let's create a personal assistant UI
    - TODO list for the day
    - List of events for the day
    - Fetch something from the web

    */
}

export default App;
