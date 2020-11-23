import React from 'react';

const Console = () => {
    return (
        <div className="console">
            <p className="message">
                a = 0
            </p>
            <p className="message">
                b = 3
            </p>
            <p className="message">
                {"{a : 0}"}
            </p>
        </div>
    );
};

export default Console;