(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6810],{7198:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return O}});var n=a(6133),r=a(7294),i=a(3117),s=a(5449),l=a(9162),c="square_gfka",o="tileButton_QM_8",u="done_PAXx",m="infinity_SVwJ",d="modalBackground_bwMK",g="modal_wi7p",A="button_Pkzl",f="toolbar_DDjp",h="startScreen_xbGc",p="gameTitle_kZgY",S="sizeSelector_nyV4",E="gameDescription_q6mq",b=a(3841),w=a(5819),v=a(913),z=a(8478),k=[Math.pow(4,2),Math.pow(5,2),Math.pow(6,2),Math.pow(7,2),Math.pow(8,2),Math.pow(9,2),Math.pow(10,2)];function y(e){var t=e.currentSize,a=e.setSize;return r.createElement(v.Z,{variant:"standard"},r.createElement(b.Z,{id:"grid-size-select-label"},"Rozmiar"),r.createElement(z.Z,{labelId:"grid-size-select-label",id:"grid-size-select",value:""+t,label:"Age",onChange:function(e){a(Number(e.target.value))},style:{width:"100px"}},k.map((function(e){return r.createElement(w.Z,{key:e,value:e},Math.sqrt(e),"x",Math.sqrt(e))}))))}var N=a(6010);function M(e){var t=e.id,a=e.label,n=e.done,i=e.markAsDone,s=e.fontSize;return r.createElement("div",{className:c},r.createElement("button",{key:t,id:a,onClick:i,className:(0,N.Z)(o,n&&u,n&&8===t&&m),style:{fontSize:s,lineHeight:s}},a))}var j=a(7918);function C(e){return e?new Date(1e3*e).toISOString().slice(11,19):"brak"}function I(e){var t=e.time;return r.createElement(j.Z,{style:{fontSize:"1.2rem",margin:"1rem auto"},label:"Najlepszy czas: "+C(t)})}function Z(e){var t=e.startNewGame,a=e.seconds,n=e.minutes,i=e.hours,s=e.bestTime,l=V(a,n,i);return r.createElement("div",{className:d},r.createElement("div",{className:g},r.createElement("h1",null,"Wynik: ",C(l)),s&&r.createElement("p",null,"Tw\xf3j najlepszy czas dla planszy o tym rozmiarze to"," ",C(s)),r.createElement("p",null,"Spr\xf3buj swoich si\u0142 z innym rozmiarem planszy."),r.createElement("button",{className:A,onClick:t},"Graj dalej")))}function q(e){var t=e.handleReset;return r.createElement("button",{className:A,style:{width:"100%"},onClick:t},"Resetuj gr\u0119")}function x(e){return e.toLocaleString("en-US",{minimumIntegerDigits:2})}function Y(e){var t=e.stopwatch,a=t.seconds,n=t.minutes,i=t.hours;return r.createElement(j.Z,{style:{fontSize:"1rem"},label:"Czas: "+x(i)+":"+x(n)+":"+x(a)})}var Q=a(3751),R=a(6871),B=a.n(R);function T(e){var t=e.currentSize,a=e.setSize,n=e.handleStart;return r.createElement("div",{className:h,style:{backgroundImage:"url("+B()+")"}},r.createElement("div",null,r.createElement("h1",{className:p},"Focus Grid")),r.createElement("div",{className:E},"Gra poprawiaj\u0105ca koncentracj\u0119. Wybierz rozmiar tablicy i ods\u0142o\u0144 kolejne liczby w jak najkr\xf3tszym czasie."),r.createElement("div",{className:S},r.createElement(y,{currentSize:t,setSize:a})),r.createElement("button",{className:A,style:{border:"1px solid gray",borderRadius:"6px"},onClick:function(){return n(!0)}},"Start"))}function V(e,t,a){return e+60*t+60*a*60}function G(){return.5-Math.random()}function _(e){var t=Array.from(Array(e+1).keys()).slice(1);return t.sort(G),t.sort(G),t.map((function(t){return{id:t,label:""+t,done:!1,fontSize:(t<100?180/Math.sqrt(e):130/Math.sqrt(e))+"px"}}))}var U="gridSize",X="bestTime-";var W=function(){var e=(0,r.useState)(1),t=e[0],a=e[1],n=(0,r.useState)(!1),c=n[0],o=n[1],u=(0,r.useState)(),m=u[0],d=u[1],g=(0,r.useState)([]),A=g[0],h=g[1],p=(0,r.useState)(void 0),S=p[0],E=p[1],b=(0,r.useState)(!1),w=b[0],v=b[1],z=(0,Q.useStopwatch)({autoStart:!0});function y(e){m&&(a(1),o(!1),h(_(m)),z.reset(),e&&v(!1))}function N(e){var n,r=Number(e.currentTarget.id);if(t===r){var i=A.find((function(e){return e.id===r}));if(i&&(i.done=!0),r===m)return z.pause(),n=V(z.seconds,z.minutes,z.hours),(!S||n<S)&&(E(n),localStorage.setItem(""+X+m,n.toString())),setTimeout((function(){o(!0)}),1e3),void(document.body.style.overflow="hidden");a(t+1)}else e.currentTarget.animate([{transform:"rotate(10deg)"},{transform:"rotate(-10deg)"},{transform:"rotate(0)"}],{duration:100,iterations:1})}return(0,r.useEffect)((function(){var e=Number(localStorage.getItem(U))||k[0];d(e),E(Number(localStorage.getItem(""+X+e))||void 0)}),[]),(0,r.useEffect)((function(){m&&(localStorage.setItem(U,""+m),h(_(m)),a(1),E(Number(localStorage.getItem(""+X+m))||void 0))}),[m]),!w&&m?r.createElement(T,{currentSize:m,setSize:d,handleStart:v}):r.createElement(r.Fragment,null,r.createElement("div",{className:f},m&&r.createElement(s.Z,{disabled:!0,id:"outlined",label:"Rozmiar",defaultValue:Math.sqrt(m)+"x"+Math.sqrt(m)}),r.createElement(Y,{stopwatch:z})),m&&r.createElement(l.ZP,{container:!0,spacing:1/Math.sqrt(m),columns:Math.sqrt(m),width:"100%",alignItems:"center",justifyContent:"center",maxWidth:1200,overflow:"hidden",margin:"auto"},A.map((function(e){return r.createElement(l.ZP,{item:!0,key:e.id,xs:1,xl:1,lg:1,sm:1,md:1},r.createElement(M,(0,i.Z)({},e,{markAsDone:N})))}))),r.createElement("div",{className:f},r.createElement(q,{handleReset:function(){return y(!0)}})),r.createElement("div",{className:f},r.createElement(I,{time:S})),c&&r.createElement(Z,{startNewGame:function(){return y(!1)},seconds:z.seconds,minutes:z.minutes,hours:z.hours,bestTime:S}))},D="gameWrapper_k8g8";function O(){return r.createElement(n.Z,{title:"Focus Grid",description:"Aplikacja do \u0107wiczenia koncentracji"},r.createElement("div",{className:D},r.createElement(W,null)))}},6871:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/focus-grid.ec76216.1024.png 1024w",images:[{path:a.p+"assets/ideal-img/focus-grid.ec76216.1024.png",width:1024,height:1024}],src:a.p+"assets/ideal-img/focus-grid.ec76216.1024.png",toString:function(){return a.p+"assets/ideal-img/focus-grid.ec76216.1024.png"},placeholder:void 0,width:1024,height:1024},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQUlEQVQYlQE2Acn+AAU7kAQ5fww6YBVSYAc/dwMbUAARSAQmZAY/ggZOlAAHU6IIRogISoMIUokALnFARlN3fXARMmcCOn8GTpQABV6qAm6iCXqqJ2eXBihdPjc0ppVyIEd0BTh6Ck2UABtjpSVml0qXr0dxjwgsYSQzPjM8QgYoVhI2bRNQkwBMVYG4cGjTvJ2lt6uNsK92h311jIWCmpgiRHEWQYYAKj1xa2dpbH+LcZic19q108CJz8uk8fnOZneCCSJdABYoYmJOYp2Vn6ehebGBOuDHlKC+u1ultEuLmwUbSAAfH0x3TXyso6iroHeXaBujooajvLQwi6suh7QMGkEABggqDCNZmZWNXI6ZQXFlMVtnNm2OVXCLWluRDRI4AAUJMgUYSiMyTxEzVgNGbAcuWgwtYhgkRxoZOgYKKngFbX8jWMlhAAAAAElFTkSuQmCC"}}}]);