class CodeObject{
  constructor(code){
    this.code = code;
  }

  updateCode(code){
    this.code = code;
  }

  run(){
    return (()=>{
      console.log("running...")
      console.log(this.code)
      try{
          eval(this.code);
      }catch(e){
        console.error(e);
      }
    }).bind(this);
  }
}

export default CodeObject;
