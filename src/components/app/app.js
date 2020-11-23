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
            <Editor value={code} onCodeChange={onCodeChange}/>
            <Console code={code}/>
        </div>
    );
};

export default App;