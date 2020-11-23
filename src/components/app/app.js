import React, {useState} from 'react';
import "./app.scss";
import Editor from "../editor/editor";
import Console from "../console/console";

const App = () => {
    const [code, setCode] = useState("");

    const onCodeChange = (input) => {
        setCode(input);
    }

    return (
        <div className="app">
            <Editor onCodeChange={onCodeChange}/>
            <Console/>
        </div>
    );
};

export default App;