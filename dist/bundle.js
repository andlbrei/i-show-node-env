(()=>{var e={860:e=>{"use strict";e.exports=require("express")},214:e=>{"use strict";e.exports=require("i-print-node-env")}},r={};function t(o){var s=r[o];if(void 0!==s)return s.exports;var n=r[o]={exports:{}};return e[o](n,n.exports,t),n.exports}(()=>{const e=t(860),r=(t(214),e());r.get("/",((e,r)=>{r.send("Hello World!")})),r.listen(3e3,(()=>{console.log("Example app listening on port 3000")}))})()})();