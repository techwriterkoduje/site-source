"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3325,6810],{7198:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var r=n(6133),a=n(7294),i=n(3117),l=n(9162),c="square_gfka",s="tileButton_QM_8",o="done_PAXx",u="infinity_SVwJ",m="modalBackground_bwMK",d="modal_wi7p",f="button_Pkzl",E="toolbar_DDjp",S="startScreen_xbGc",h="sizeSelector_nyV4",v=n(3841),g=n(5819),p=n(913),z=n(1008),b=[Math.pow(4,2),Math.pow(5,2),Math.pow(6,2),Math.pow(7,2),Math.pow(8,2),Math.pow(9,2),Math.pow(10,2)];function w(e){var t=e.currentSize,n=e.setSize;return a.createElement(p.Z,{variant:"standard"},a.createElement(v.Z,{id:"grid-size-select-label"},"Rozmiar"),a.createElement(z.Z,{labelId:"grid-size-select-label",id:"grid-size-select",value:""+t,label:"Age",onChange:function(e){n(Number(e.target.value))},style:{width:"100px"}},b.map((function(e){return a.createElement(g.Z,{key:e,value:e},Math.sqrt(e),"x",Math.sqrt(e))}))))}var k=n(6010);function y(e){var t=e.id,n=e.label,r=e.done,i=e.markAsDone,l=e.fontSize;return a.createElement("div",{className:c},a.createElement("button",{key:t,id:n,onClick:i,className:(0,k.Z)(s,r&&o,r&&8===t&&u),style:{fontSize:l,lineHeight:l}},n))}var N=n(7918);function M(e){return new Date(1e3*e).toISOString().slice(11,19)}function _(e){var t=e.time;return a.createElement(N.Z,{label:M(t)})}function j(e){var t=e.startNewGame,n=e.seconds,r=e.minutes,i=e.hours,l=e.bestTime,c=A(n,r,i);return a.createElement("div",{className:m},a.createElement("div",{className:d},a.createElement("h1",null,"Wynik: ",M(c)),l&&a.createElement("p",null,"Tw\xf3j najlepszy czas dla planszy o tym rozmiarze to"," ",M(l)),a.createElement("p",null,"Spr\xf3buj swoich si\u0142 z innym rozmiarem planszy."),a.createElement("button",{className:f,onClick:t},"Graj dalej")))}function Z(e){var t=e.handleReset;return a.createElement("button",{className:f,style:{width:"100%"},onClick:t},"Resetuj gr\u0119")}function x(e){return e.toLocaleString("en-US",{minimumIntegerDigits:2})}function C(e){var t=e.stopwatch,n=t.seconds,r=t.minutes,i=t.hours;return a.createElement(N.Z,{style:{fontSize:"1.2rem",margin:"1rem auto"},label:"Czas: "+x(i)+":"+x(r)+":"+x(n)})}var I=n(3751);function q(e){var t=e.currentSize,n=e.setSize,r=e.handleStart;return a.createElement("div",{className:S},a.createElement("div",null,a.createElement("h1",null,"Focus Grid"),a.createElement("p",null,"\u0106wicz koncentracj\u0119")),a.createElement("div",{className:h},a.createElement(w,{currentSize:t,setSize:n})),a.createElement("button",{className:f,style:{border:"1px solid gray",borderRadius:"6px"},onClick:function(){return r(!0)}},"Start"))}function A(e,t,n){return e+60*t+60*n*60}function T(){return.5-Math.random()}function D(e){var t=Array.from(Array(e+1).keys()).slice(1);return t.sort(T),t.sort(T),t.map((function(t){return{id:t,label:""+t,done:!1,fontSize:(t<100?180/Math.sqrt(e):130/Math.sqrt(e))+"px"}}))}var G="gridSize",R="bestTime-";var P=function(){var e=(0,a.useState)(1),t=e[0],n=e[1],r=(0,a.useState)(!1),c=r[0],s=r[1],o=(0,a.useState)(),u=o[0],m=o[1],d=(0,a.useState)([]),f=d[0],S=d[1],h=(0,a.useState)(void 0),v=h[0],g=h[1],p=(0,a.useState)(!1),z=p[0],k=p[1],N=(0,I.useStopwatch)({autoStart:!0});function M(e){u&&(n(1),s(!1),S(D(u)),N.reset(),e&&k(!1))}function x(e){var r,a=Number(e.currentTarget.id);if(t===a){var i=f.find((function(e){return e.id===a}));if(i&&(i.done=!0),a===u)return N.pause(),r=A(N.seconds,N.minutes,N.hours),(!v||r<v)&&(g(r),localStorage.setItem(""+R+u,r.toString())),void setTimeout((function(){s(!0)}),1e3);n(t+1)}else e.currentTarget.animate([{transform:"rotate(10deg)"},{transform:"rotate(-10deg)"},{transform:"rotate(0)"}],{duration:100,iterations:1})}return(0,a.useEffect)((function(){var e=Number(localStorage.getItem(G))||b[0];m(e),g(Number(localStorage.getItem(""+R+e))||void 0)}),[]),(0,a.useEffect)((function(){u&&(localStorage.setItem(G,""+u),S(D(u)),n(1),g(Number(localStorage.getItem(""+R+u))||void 0))}),[u]),!z&&u?a.createElement(q,{currentSize:u,setSize:m,handleStart:k}):a.createElement(a.Fragment,null,a.createElement("div",{className:E},u&&a.createElement(w,{currentSize:u,setSize:m}),v&&a.createElement(_,{time:v})),u&&a.createElement(l.ZP,{container:!0,spacing:1/Math.sqrt(u),columns:Math.sqrt(u),width:"100%",alignItems:"center",justifyContent:"center",maxWidth:1200,overflow:"hidden",margin:"auto"},f.map((function(e){return a.createElement(l.ZP,{item:!0,key:e.id,xs:1,xl:1,lg:1,sm:1,md:1},a.createElement(y,(0,i.Z)({},e,{markAsDone:x})))}))),a.createElement("div",{className:E},a.createElement(C,{stopwatch:N})),a.createElement("div",{className:E},a.createElement(Z,{handleReset:function(){return M(!0)}})),c&&a.createElement(j,{startNewGame:function(){return M(!1)},seconds:N.seconds,minutes:N.minutes,hours:N.hours,bestTime:v}))},F="gameWrapper_k8g8";function W(){return a.createElement(r.Z,{title:"Focus Grid",description:"Aplikacja do \u0107wiczenia koncentracji"},a.createElement("div",{className:F},a.createElement(P,null)))}},4512:function(e,t,n){n.r(t);var r=n(7198);t.default=r.default}}]);