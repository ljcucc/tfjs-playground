import EditorCell from './EditorCell';
import CodeObject from './CodeObject';

function EditorPage(){
  const cells = [
    "document.write()",
    "console.log(Object.getOwnPropertyNames(this))"
  ].map(item=>(
    <EditorCell codeobj={new CodeObject(item)}/>
  ));
  return (
    cells
  )
}

export default EditorPage;
