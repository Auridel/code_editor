import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = () => {
    return (
        <div className="editor">
            <AceEditor
                placeholder="Enter your javascript code"
                mode="javascript"
                theme="tomorrow"
                name="code-editor"
                // onLoad={this.onLoad}
                // onChange={this.onChange}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={``}
                style={{
                    width: "100%",
                    height: "100%"
                }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}/>
        </div>
    );
};

export default Editor;