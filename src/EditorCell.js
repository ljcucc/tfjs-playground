import { Card, Button, AppBar, CardHeader} from '@mui/material';

import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';


function EditorUI(props){
  const code = props.codeobj;
  return (
    <Card 
      variant="outlined"
      style={{
        maxWidth:"600px",
        padding: "8px",
        display: "flex",
        flexDirection: "row",
        marginBottom: 16
      }}>
      <div style={{
        paddingRight: 16
      }}>
        <IconButton onClick={code.run()} aria-label="settings">
          <PlayArrowIcon/>
        </IconButton>
      </div>
      <CodeMirror
        value={code.code}
        height="200px"
        width="500px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          console.log('value:', value);
          code.updateCode(value);
        }}
      />
    </Card>
  );
}

export default EditorUI;
