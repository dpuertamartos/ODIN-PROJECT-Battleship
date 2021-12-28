(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(81),o=r.n(n),a=r(645),c=r.n(a),i=r(667),l=r.n(i),s=new URL(r(967),r.b),d=c()(o()),u=l()(s);d.push([e.id,".hero-image{\r\n    background-image: url("+u+");\r\n    background-color: #cccccc;\r\n    height: 100%;\r\n    min-height: 1600px;\r\n    padding: 0% 0% 1.5%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n}\r\n\r\n.github:hover{\r\n    border-radius: 110px;\r\n    background-color: #1C292E;\r\n}\r\n.github{\r\n    width: 50px;\r\n}\r\n\r\n.rowGitHub{\r\n    max-height: 50px;\r\n    text-align: left;\r\n}\r\n\r\n.credentials{\r\n    padding-top: 3%;\r\n    color: whitesmoke;\r\n    font-size: 0.8rem;\r\n    font-style: italic;\r\n}\r\n\r\n.notificationContainerMain{\r\n    padding-top: 2.2%;\r\n}\r\n\r\n.notificationContainer{\r\n    padding-top: 1.3%;\r\n    background-color: #1C292E;\r\n    height: 80px;\r\n    border-radius: 10px;\r\n    opacity: 0.7;\r\n    color: wheat;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.square{\r\n    height: 60px;\r\n    width: 4vw;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-radius: 10px;\r\n    background-color:azure;\r\n    opacity: 0.7;\r\n}\r\n.boatplacingTitle{\r\n    color: whitesmoke;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.boatplacing{\r\n    height: 40px;\r\n    width: 40px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    background-color: green;\r\n    margin-right: 1%;\r\n    border-radius: 10px;\r\n}\r\n\r\n.placed{ \r\n    background-color: green;\r\n}\r\n\r\n.changeAxis{\r\n    margin: 5% 0% 6%;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.boardTitleContainer{\r\n    background-color: #355C64;\r\n    opacity: 0.65;\r\n    color:whitesmoke;\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    margin: 0% 10% 10% 12%;\r\n    border-radius: 20px;\r\n}\r\n\r\n.boardcontainer{\r\n    margin: 7% 0% 0% 0%;\r\n}\r\n\r\n\r\n.boardDestroyed{\r\n    border-style: solid;\r\n    border-width: 4px;\r\n    border-color: aqua;\r\n    border-radius: 15px;\r\n}\r\n\r\n.imgsquare{\r\n    width:100%;\r\n\r\n}\r\n\r\n.cr{\r\n    margin: 4% 0 0.5%;\r\n    text-align: center;\r\n    color: #1C292E;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/* modal */\r\n.modal {\r\n    display: block; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    opacity: 0.8;\r\n  }\r\n  \r\n  /* Modal Content/Box */\r\n  .modal-content {\r\n    background-color: #355C64;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    padding: 2% 4%;\r\n    border: 0px solid #888;\r\n    width: 40%; /* Could be more or less, depending on screen size */\r\n    text-align: center;\r\n  }\r\n\r\n  @media only screen and (max-width: 700px) {\r\n    .modal-content {\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n  @media only screen and (min-width: 700px) {\r\n    .modal-content {\r\n      width: 80%;\r\n    }\r\n  }\r\n\r\n  @media only screen and (min-width: 1000px) {\r\n    .modal-content {\r\n      width: 70%;\r\n    }\r\n  }\r\n  @media only screen and (min-width: 1200px) {\r\n    .modal-content {\r\n      width: 40%;\r\n    }\r\n  }\r\n  \r\n  /* The Close Button */\r\n  .close {\r\n    color: red;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.play{\r\n    margin: 8% 0% 8%;\r\n}\r\n\r\n#textLogin{\r\n    font-size: 1.5rem;\r\n    color: whitesmoke;\r\n}",""]);const p=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);n&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},c=[],i=0;i<e.length;i++){var l=e[i],s=n.base?l[0]+n.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=r(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=o(m,n);n.byIndex=i,t.splice(i,0,{identifier:u,updater:g,references:1})}c.push(u)}return c}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);t[i].references--}for(var l=n(e,o),s=0;s<a.length;s++){var d=r(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},967:(e,t,r)=>{e.exports=r.p+"5b5003f3189863db2e98.jpg"},956:(e,t,r)=>{e.exports=r.p+"3513fa4cb8b85137eb0e.png"},838:(e,t,r)=>{e.exports=r.p+"3994e086ebc1513d2aea.png"},298:(e,t,r)=>{e.exports=r.p+"66f2e0d28109a4850dba.png"},231:(e,t,r)=>{e.exports=r.p+"7b536c4aac5242149e9a.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href;var n={};(()=>{function e(e,t){let r=JSON.stringify(t);return e.some((function(e){return JSON.stringify(e)===r}))}r.d(n,{q:()=>L});const t=()=>{let t=[],r=[],n=!1;return{missed:t,size:10,placedShips:r,add:e=>(r.push(e),"ship added to gameboard"),receiveAttack:n=>{const o=r.filter((t=>!0===e(t.position,n)));return 1===o.length?(o[0].createHit(n),o[0]):0===o.length?(t.push(n),"missed"):void 0},checkGameOver:()=>{const e=r.filter((e=>!1===e.isSunk()));return 0===e.length&&(n=!0),console.log(n),n}}},o=(t,r,n)=>{let o=n,a=t,c=r,i=!1;1===r&&(i=!0);let l,s=[],d=(()=>{let e=[];for(let t=0;t<o.size;t++)for(let r=0;r<o.size;r++)e.push([t,r]);return e})();const u=()=>{i=!i},p=()=>{d=d.filter((t=>!e(s,t)));const t=Math.floor(Math.random()*d.length);return d[t]};return{board:o,mode:a,position:c,play:(t,r)=>{let n;if(console.log("generating play"),e(s,t))return"already played";if("random"===t){const e=p();n=[r.board.receiveAttack(e),e],s.push(e),"missed"===n[0]&&(u(),r.swapTurn()),l=e}else if("brained"===t){const t=(()=>{const t=[[l[0],l[1]+1],[l[0]+1,l[1]],[l[0]-1,l[1]],[l[0],l[1]-1]];d=d.filter((t=>!e(s,t)));const r=t.filter((t=>e(d,t)));return r.length>0?r[Math.floor(Math.random()*r.length)]:null})();if(null!==t)n=[r.board.receiveAttack(t),t],s.push(t),"missed"===n[0]&&(u(),r.swapTurn()),l=t;else{const e=p();n=[r.board.receiveAttack(e),e],s.push(e),"missed"===n[0]&&(u(),r.swapTurn()),l=e}}else console.log("inside of else"),n=r.board.receiveAttack(t),s.push(t),"missed"===n&&(u(),r.swapTurn()),l=t;return console.log("finalizing play"),n},swapTurn:u,getTurn:()=>i}};var a=r(838),c=r(231);r(956),r(298);const i=r.p+"e38f594694469ba3b82686349924b50b.mp3",l=e=>{let t=e,r=[],n=[];return{length:t,hits:r,position:n,place:(e,r)=>{let o=!0;e[0]===r[0]&&(o=!1);for(let r=0;r<t;r++)o?n.push([e[0]+r,e[1]]):n.push([e[0],e[1]+r])},createHit:e=>{r.push(e)},isSunk:()=>r.length<t!=1}},s=(()=>{let e=0,t=[2,2,2,2,3,3,3,4,6],r=[[2,[0,0],[1,0]],[2,[5,5],[5,6]],[2,[0,7],[0,7]],[2,[9,2],[9,3]],[3,[3,0],[3,2]],[3,[5,2],[7,2]],[3,[9,5],[9,7]],[4,[0,2],[0,5]],[6,[4,9],[9,9]]],n=[],o=[];return{generateShips:e=>{for(let t=0;t<o.length;t++){const r=l(o[t][0]);r.place(o[t][1],o[t][2]),e.board.add(r)}},generatePredetermined:e=>{for(let t=0;t<r.length;t++){const n=l(r[t][0]);n.place(r[t][1],r[t][2]),e.board.add(n)}},saveStartingBoat:(r,a,c)=>{o.push([r,a,c]);const i=l(r);return i.place(a,c),n.push(i),e+=1,console.log("Mockships",n),e<9?["create",t[e],n]:[null,null,n]}}})();var d=r(379),u=r.n(d),p=r(795),m=r.n(p),g=r(569),h=r.n(g),b=r(565),f=r.n(b),y=r(216),v=r.n(y),x=r(589),w=r.n(x),A=r(426),S={};S.styleTagTransform=w(),S.setAttributes=f(),S.insert=h().bind(null,"head"),S.domAPI=m(),S.insertStyleElement=v(),u()(A.Z,S),A.Z&&A.Z.locals&&A.Z.locals;const E=r.p+"731644094480f75eeccd7bb57d844f63.mp3",T=t(),C=t(),k=o("player",1,T),N=o("computer",2,C),q=(()=>{let t="",r=!0;const n=e=>{let t=[];for(let r=0;r<e.length;r++)t=t.concat(e[r].position);return t},o=(e,t)=>{e.textContent="";const r=document.createElement("img");r.clasName="img-fluid",r.setAttribute("class","img-fluid imgsquare"),r.src=t,e.append(r)},l=(e,t,r)=>{new Audio(i).play();const n=e[1][0].toString(),a=e[1][1].toString(),l=document.querySelector(`[row="${n}"][col="${a}"]`);"missed"===e[0]?l.setAttribute("style","opacity:0.2;"):(l.setAttribute("style","opacity:0.35;"),o(l,c),d(t,r,!0))},d=async(e,t,r)=>{let n;await(800,new Promise((e=>setTimeout(e,800)))),n=r?e.play("brained",t):e.play("random",t),l(n,e,t)},u=(e,r,n)=>{e.addEventListener("click",(()=>{if(!1===r.getTurn()&&!1===r.board.checkGameOver()&&!1===n.board.checkGameOver()){const c=Number(e.getAttribute("row")),l=Number(e.getAttribute("col")),s=n.play([c,l],r);"missed"===s?(new Audio(i).play(),e.setAttribute("style","opacity:0.2;"),!0===r.getTurn()&&(d(r,n,!1),n.board.checkGameOver()&&(b(r.position),p(`${t} has lost!! Computer won!!`)))):"already played"===s?p("square already played!!"):(new Audio(i).play(),o(e,a),r.board.checkGameOver()&&(b(n.position),p(`${t} has won!! Computer lost!!`)))}else!0===r.board.checkGameOver()||!0===n.board.checkGameOver()?p("A VICTORIOUS ARMY WAS ALREADY DECLARED"):(p("ENEMY TURN, AWAIT YOUR TURN!"),console.log("computer turn",r.getTurn(),"player turn",n.getTurn()))}))},p=e=>{const t=document.querySelector("#notification");t.textContent=e,setTimeout((()=>t.textContent=""),5e3)},m=(t,r,c)=>{const i=r.board.placedShips,l=n(i);console.log("placedPositions",l);const s=document.createElement("div");s.className="row justify-content-center boardTitleContainer",1===r.position?s.textContent="YOUR WATERS":s.textContent="ENEMY WATERS",t.append(s);for(let n=0;n<r.board.size;n++){const i=document.createElement("div");i.className="row";for(let t=0;t<r.board.size;t++){const s=document.createElement("div");s.className="col square d-flex justify-content-center",s.setAttribute("row",`${n}`),s.setAttribute("col",`${t}`),"computer"===r.mode?u(s,r,c):"player"===r.mode&&e(l,[n,t])&&o(s,a),i.append(s)}t.append(i)}},g=(e,t,n,o)=>{console.log("placing");const a=document.querySelector(".modal-content");let c=[];e.addEventListener("mouseover",(()=>{c=[];for(let e=0;e<o;e++)if(r){const r=a.querySelector(`[row="${t+e}"][col="${n}"][placed="no"]`);null!==r&&c.push(r)}else{const r=a.querySelector(`[row="${t}"][col="${n+e}"][placed="no"]`);null!==r&&c.push(r)}c.length<o?c.forEach((e=>e.setAttribute("style","opacity: 0.2; background-color: red;"))):c.forEach((e=>e.setAttribute("style","opacity: 0.2; background-color: green;"))),console.log(c)})),e.addEventListener("mouseout",(()=>{c.forEach((e=>e.setAttribute("style","opacity: 0.7;")))})),e.addEventListener("click",(()=>{if(c.length===o){c.forEach((e=>{e.classList.add("placed"),e.setAttribute("placed","yes")}));const e=[Number(c[0].getAttribute("row")),Number(c[0].getAttribute("col"))],t=[Number(c[c.length-1].getAttribute("row")),Number(c[c.length-1].getAttribute("col"))],r=s.saveStartingBoat(c.length,e,t);"create"===r[0]?h(r[1],r[2]):L(s)}}))},h=(t,o)=>{const a=n(o),c=document.querySelector(".modal-content");c.textContent="";const i=document.createElement("div");i.className="container";const l=document.createElement("div");l.className="row placingBoardTitle justify-content-start";const s=document.createElement("div");s.className="col-4 col-lg-6 boatplacingTitle d-flex justify-content-center",s.textContent="Placing boat:";const d=document.createElement("div");d.className="col-8 col-lg-6 d-flex justify-content-center",l.append(s,d);for(let e=0;e<t;e++){const e=document.createElement("span");e.className="boatplacing",d.append(e)}const u=document.createElement("div"),p=document.createElement("button");p.className="btn btn-success changeAxis",p.textContent="Change axis",p.addEventListener("click",(()=>{r=!r,console.log("axis X",r),h(t,o)})),u.append(p),i.append(l,u);for(let r=0;r<10;r++){const n=document.createElement("div");n.className="row";for(let o=0;o<10;o++){const c=document.createElement("div");c.className="col square d-flex justify-content-center",c.setAttribute("row",`${r}`),c.setAttribute("col",`${o}`),e(a,[r,o])?(c.setAttribute("placed","yes"),c.classList.add("placed")):c.setAttribute("placed","no"),g(c,r,o,t),n.append(c)}i.append(n)}c.append(i)},b=e=>{if(1===e){document.querySelector("#player1board").querySelector(".boardTitleContainer").textContent="Winner";const e=document.querySelector("#player2board");e.querySelector(".boardTitleContainer").textContent="Float Destroyed",e.classList.add("boardDestroyed")}else{document.querySelector("#player2board").querySelector(".boardTitleContainer").textContent="Winner";const e=document.querySelector("#player1board");e.querySelector(".boardTitleContainer").textContent="Float Destroyed",e.classList.add("boardDestroyed")}};return{initialize:(e,t)=>{const r=document.querySelector("#player1board");m(r,e,t);const n=document.querySelector("#player2board");m(n,t,e),p("GAME START. CLICK ENEMY WATERS TO ATTACK!!")},changePlayerName:e=>{t=e},addImg:o,createNotification:p,proccessComputerPlay:l,gameOver:b,createPlacingBoard:h}})(),M=document.querySelector(".play"),z=document.querySelector(".modal");let O=new Audio(E);M.addEventListener("click",(()=>{const e=document.querySelector("#inputName").value;console.log(e),O.play(),q.changePlayerName(e),q.createPlacingBoard(2,[])}));const L=e=>{e.generateShips(k),e.generatePredetermined(N),q.initialize(k,N),z.remove()}})()})();