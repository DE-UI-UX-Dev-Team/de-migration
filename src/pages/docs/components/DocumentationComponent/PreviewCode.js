import React, { Component } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/htmlmixed/htmlmixed'; // For HTML mixed mode
import 'codemirror/mode/css/css'; // For CSS mode

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '<h1 style="color: red;">Hello World</h1>', // HTML code
            mode: 'htmlmixed', // Initial mode set to htmlmixed
        };

        // Binding
        this.handleCopyCode = this.handleCopyCode.bind(this);
    }

    handleCopyCode() {
        if (navigator.clipboard) {
            navigator.clipboard
                .writeText(this.state.code)
                .then(() => alert('Code copied to clipboard!'))
                .catch((err) => console.error('Could not copy text: ', err));
        } else {
            console.log('Clipboard API not available');
        }
    }

    render() {
        return (
            <div>
                <CodeMirror
                    options={{
                        lineNumbers: true,
                        mode: this.state.mode, // Mode depends on state
                        theme: 'material',
                        lineWrapping: true,
                    }}
                    value={this.state.code}
                />
                <button onClick={this.handleCopyCode}>Copy Code</button>
            </div>
        );
    }
}

export default Editor;
