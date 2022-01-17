import * as tf from '@tensorflow/tfjs';
import rapydscript from 'Main/../node_modules/rapydscript/lib/rapydscript_web.js';

// Define the scoper
var Scoper = (function() {
    var rv = {};

    rv.scope = function(sourcecode, imports) {
        var window,
            document,
            ActiveXObject,
            XMLHttpRequest,
            alert,
            setTimeout,
            setInterval,
            clearTimeout,
            clearInterval,
            Function,
            console;
            // arguments;
            // etc., etc., etc.

        console = imports.console;
        // Just declaring `arguments` doesn't work (which makes
        // sense, actually), but overwriting it does
        // arguments = undefined;

        // Execute the code; still probably pretty unsafe!
        eval(sourcecode);
    };

    return rv;
})();

// Usage:

class CodeObject{
  constructor(code){
    this.code = code;
    this.eventCallback = ()=>{
      console.log("callback unset");
    };

    this.logString = [];
  }

  updateCode(code){
    this.code = code;
  }

  updateEvent(callback){
    console.log("callback updated");
    this.eventCallback = callback;
  }

  clearLogString(){
    return (()=>{
      console.log("clear log...")
      this.logString = [];
      this.eventCallback("log","");
    }).bind(this);
  }

  run(){
    return (()=>{
      console.log("running...")
      console.log(this.code)
      console.log(tf);

      var pycode = rapydscript.compile(this.code, {});
      console.log(pycode);

      this.clearLogString()();

      try{
        Scoper.scope(pycode, {
          tf,
          console:{
            log:(msg)=>{
              console.log(`message: ${msg}`);
              this.logString.push(msg);
              this.eventCallback("log",msg);
            }
          }
        });
      }catch(e){
        console.error(e);
      }
    }).bind(this);
  }
}

export default CodeObject;
