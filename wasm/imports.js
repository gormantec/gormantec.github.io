var objects = [];
var getPointer = function (object) {
  var index = objects.findIndex(item => item === object);
  if (index < 0) {
    objects.push(object);
    index = objects.length - 1;
  }
  console.log("set [" + index + "] = " + object +" "+object.nodeName);
  return index;
};

var getObject = function (i) {
  console.log("get [" + i + "] = " + objects[i]);
  return objects[i];
};


export function init(window) {
  console.log("************ load imports ***************"+ window);
  var _wasm=null;
  return {
    get wasm(){
      return _wasm;},
    set wasm(w){
      _wasm=w;
    },
    env: {
        abort(_msg, _file, line, column) {
            console.error("abort called at index.ts:" + line + ":" + column);
        }
    },
    wasmdom: {
      abort(_msg, _file, line, column) {
        console.error("abort called at index.ts:" + line + ":" + column);
      },
      getWindow() {
        var e = window;
        return getPointer(e);
      },
      getDocument() {
        var e = window.document;
        return getPointer(e);
      },
      getBody() {
        var e = window.document.body;
        return getPointer(e);
      },
      getHead() {
        var e = window.document.head;
        console.log("getHead");
        return getPointer(e);
      },
      createElement(name) {
        var e = window.document.createElement(_wasm.getString(name));
        return getPointer(e);
      },
      nodeName(parent) {
        var e = getObject(parent).nodeName;
        return e;
      },
      setTimeout(guid,duration) {
        setTimeout(function(){
          _wasm.__alertTimeout(guid);
        },duration);
        return 0;
      },
      appendChild(parent, child) {
        var e = getObject(parent).appendChild(getObject(child));
        return getPointer(e);
      },
      setAttribute(parent, name, value) {
        getObject(parent).setAttribute(_wasm.getString(name), _wasm.getString(value));
      },
      setInnerText(parent, value) {
        console.log("setInnerText:"+getObject(parent)+" = "+_wasm.getString(value));
        getObject(parent).innerHTML = _wasm.getString(value);
        console.log("innerText:"+getObject(parent).innerHTML );
      },
      getAttribute(parent, name) {
        return getObject(parent).getAttribute(_wasm.getString(name));
      },
      consoleLog(text)
      {
        console.log("consoleLog:"+_wasm.getString(text));//test
        
      }
      ,getInnerText(e){return "";}
      ,setInnerHTML(e,s){}
      ,getInnerHTML(e){return "";}
      ,getAccessKey(){return "";}
      ,setAccessKey(key){}
      ,children(e){return [];}
      ,querySelector(e,s){return 0}
      ,querySelectorAll(e,q){return [];}
      ,remove(e){}
      ,insertBefore(p,n,e){}
      ,addEventListener(p,s){}
      ,setStyleProperty(p,name,value){}
    }
  };
}



