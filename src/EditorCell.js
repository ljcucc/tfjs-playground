import React from 'react';

import { Card, Button, AppBar, CardHeader} from '@mui/material';

import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CancelIcon from '@mui/icons-material/Cancel';

import CodeEditor from '@uiw/react-textarea-code-editor';


function EditorUI(props){
  const code = props.codeobj;
  return (
    <Card 
      variant="outlined"
      style={{
        maxWidth:"600px",
        padding: "8px",
        marginBottom: 16
      }}>
      <div style={{
        display: "flex",
        flexDirection: "row"
        }}>

      <div style={{
        paddingRight: 16
      }}>
        <IconButton onClick={code.run()} aria-label="settings">
          <PlayArrowIcon/>
        </IconButton>
      </div>
      <CodeEditor
        value={code.code}
        height="200px"
        width="500px"
        options={{
          theme: 'monokai',
          lineNumbers: false,
          firstLineNumber: 10
        }}
        language="python"
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          width:500
        }}
        onChange={(e) => {
          const value = e.target.value;

          console.log('value:', value);
          code.updateCode(value);
        }}
      />
      </div>

      <div style={{marginTop: 10,
          fontSize: 12,
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        display: "flex",
        flexDirection: "row"
        }}>
        {
          code.logString.length > 0?
            <IconButton style={{opacity: 0.35}} onClick={code.clearLogString()} aria-label="settings">
              <CancelIcon/>
            </IconButton>: (<div/>)
        }
        {code.logString.map((item)=>

          <div style={{
            paddingLeft: 24,
            paddingTop: 8
          }}>
            {String(item)}</div>
        )}
      </div>
    </Card>
  );
}

export default EditorUI;
