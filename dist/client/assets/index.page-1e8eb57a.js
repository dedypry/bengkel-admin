import{r as u}from"./index-cf469603.js";var i={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=u,m=Symbol.for("react.element"),x=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function _(t,r,f){var e,o={},s=null,l=null;f!==void 0&&(s=""+f),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(l=r.ref);for(e in r)c.call(r,e)&&!y.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:m,type:t,key:s,ref:l,props:o,_owner:d.current}}n.Fragment=x;n.jsx=_;n.jsxs=_;i.exports=n;var v=i.exports;const p=v.jsx;function O(){return p("main",{children:p("h1",{children:"Hello world! test ya"})})}export{O as default};
