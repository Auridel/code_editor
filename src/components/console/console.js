import React, {useState, useEffect} from 'react';

const Console = ({code}) => {
    const [logs, setLogs] = useState([]);
    const [errors, setErrors] = useState([])

    window.console.log = function(){
        setLogs((prev) => [...prev, ...Array.from(arguments)]);
    }

    useEffect(() => {
        setErrors([]);
        if(code){
            // console.clear();
            setLogs([]);
            runCode(code);
        }
    }, [code])

    const runCode = (data) => {
        try{
            eval(data);
        }catch (e) {
            setErrors([e.name, e.message])
        }
    }

    return (
        <div className="console">
            {logs.map((el, i) => <p key={"log" + i} className="message">{el}</p>)}
            {errors.map((el, i) => <p key={"e" + i} className="error">{el}</p>)}
        </div>
    );
};

export default Console;