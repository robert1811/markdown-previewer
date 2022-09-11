import './App.css';
import {useState} from "react";
import {marked} from "marked";

marked.setOptions({breaks: true});

const renderer = new marked.Renderer();

function App() {

  const backticks = '`';

  const [text, setText] = useState(
    `# Welcome to my react markdown previewer
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, ${backticks}<div></div>${backticks}, between 2 backticks.

${backticks}${backticks}${backticks}
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '${backticks}${backticks}${backticks}' && lastLine == '${backticks}${backticks}${backticks}') {
    return multiLineCode;
  }
}
${backticks}${backticks}${backticks}

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![Tommy Shelby](https://www.corbataslester.com/magazine/wp-content/uploads/2021/04/elegantes-series-01.jpg)`
    );

  return (
    <div className="App">
      <div id='main-container'>
        <div id="editor-container">
          <textarea id="editor"  className='scrollbar' value={text} rows="20" onChange={ev => setText(ev.target.value)}/>
        </div>
          <div id="output-text">
            <Preview markdown={text}/>
          </div>
        </div>
      </div>
  );
}

function Preview({markdown}){
  return(
    <div 
    dangerouslySetInnerHTML ={{
      __html: marked(markdown, {renderer: renderer})
    }} id="preview"
    ></div>
  )
}

export default App;
