import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import axios from 'axios';
import './App.css';
import UpperTab from "./components/upperTab/upperTab";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
      language: 'javascript',
      theme: 'vs-dark',
      output: '',
      inputs: ''
    }
  }

  editorDidMount(editor, monaco) {
    editor.focus();
  }

  getLanguage = (event) => {
    let language;
    if (event.target.value === 'C++')
      language = 'cpp';
    else if (event.target.value === 'C')
      language = 'c';
    else if (event.target.value === 'JavaScript')
      language = 'javascript';
    else if (event.target.value === 'Python3')
      language = 'python';
    this.setState({ language })
  }

  getTheme = (event) => {
    if (event.target.value === 'Visual Studio')
      this.setState({ theme: 'vs' })
    else
      this.setState({ theme: 'vs-dark' });
  }

  saveCode = (newValue) => {
    this.setState({ code: newValue });
    console.log(newValue);
  }

  saveInput = (event) => {
    this.setState({ inputs: event.target.value })
  }

  click = () => {
    const data = {
      language: this.state.language,
      code: this.state.code,
      inputs: this.state.inputs
    }

    axios.post('/eval', data)
      .then(res => {
        console.log(res.data);
        this.setState({ output: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div className="App">
        <div className="editor">
          <UpperTab getLanguage={this.getLanguage} getTheme={this.getTheme} click={this.click} />
          <MonacoEditor
            width="70vw"
            height={document.documentElement.clientHeight - (2.5 * 16)}
            language={this.state.language}
            theme={this.state.theme}
            value={code}
            options={options}
            onChange={this.saveCode}
            editorDidMount={this.editorDidMount}
          />
        </div>
        <div className='block'>
          Enter input parameters here:
          <textarea className='textBox' onChange={this.saveInput} />
        </div>
        <div className='block'>
          Output:
          <div className='output'>{this.state.output}</div>
        </div>
      </div>
    );
  }
}

export default App;
