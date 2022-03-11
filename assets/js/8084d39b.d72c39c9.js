"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9113],{4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(r),d=o,k=l["".concat(u,".").concat(d)]||l[d]||m[d]||i;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},9741:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var n=r(3117),o=r(102),i=(r(7294),r(4137)),a=r(4694),c=["components"],u={title:"#25 Tech Writer koduje w dokumentacji, czyli Markdown w wersji rozszerzonej",author:"Tech Writer koduje"},s=void 0,p={permalink:"/blog/2021/01/21/tech-writer-koduje-w-dokumentacji",editUrl:"https://github.com/techwriterkoduje/site-source/tree/master/website/blog/2021-01-21-tech-writer-koduje-w-dokumentacji.md",source:"@site/blog/2021-01-21-tech-writer-koduje-w-dokumentacji.md",title:"#25 Tech Writer koduje w dokumentacji, czyli Markdown w wersji rozszerzonej",description:"Markdown to prosty i lekki j\u0119zyk znacznik\xf3w, kt\xf3ry w ostatnich latach zyska\u0142",date:"2021-01-21T00:00:00.000Z",formattedDate:"21 stycznia 2021",tags:[],readingTime:.71,truncated:!1,authors:[{name:"Tech Writer koduje"}],frontMatter:{title:"#25 Tech Writer koduje w dokumentacji, czyli Markdown w wersji rozszerzonej",author:"Tech Writer koduje"},prevItem:{title:"#26 Tech Writerzy dokumentuj\u0105 API",permalink:"/blog/2021/02/10/tech-writerzy-dokumentuja-api"},nextItem:{title:"#24 Tech Writer publikuje inaczej, czyli API do dokumentacji",permalink:"/blog/2020/12/23/tech-writer-publikuje-inaczej"}},m={authorsImageUrls:[void 0]},l=[],d={toc:l};function k(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Markdown to prosty i lekki j\u0119zyk znacznik\xf3w, kt\xf3ry w ostatnich latach zyska\u0142\nspor\u0105 popularno\u015b\u0107, szczeg\xf3lnie w \u015bwiecie dokumentacji dla programist\xf3w. Pozwala\nnam on \u0142atwo i szybko stworzy\u0107 tekst, a nast\u0119pnie opublikowa\u0107 go jako HTML. Z\nbiegiem czasu pojawi\u0142y si\u0119 r\xf3\u017cne odmiany i rozszerzenia Markdowna, pozwalaj\u0105ce\nwycisn\u0105\u0107 z niego jeszcze wi\u0119cej. Jednym z nich jest MDX, kt\xf3ry pozwala na\nu\u017cywanie bezpo\u015brednio w tek\u015bcie element\xf3w JSX. Takie rozwi\u0105zanie otwiera przed\nnami nowe mo\u017cliwo\u015bci, jak na przyk\u0142ad opcj\u0119 umieszczenia w dokumentacji\ninteraktywnej pr\xf3bki kodu. Dzi\u0119ki temu mo\u017cemy przesun\u0105\u0107 nasz\u0105 dokumentacj\u0119 na\nwy\u017cszy poziom. Rozmawiamy o tym czym jest MDX, jakie daje nam mo\u017cliwo\u015bci i w\njakich sytuacjach mo\u017ce nam si\u0119 przyda\u0107."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'Muzyka w intro oraz d\u017awi\u0119ki pochodz\u0105 z kolekcji "107 Free Retro Game Sounds"\ndost\u0119pnej na stronie ',(0,i.kt)("a",{parentName:"em",href:"https://dominik-braun.net"},"https://dominik-braun.net"),", udost\u0119pnianej na podstawie\nlicencji\n",(0,i.kt)("a",{parentName:"em",href:"https://creativecommons.org/licenses/by/4.0/"},"Creative Commons license CC BY 4.0"),".")),(0,i.kt)(a.Z,{episodeId:"25-Tech-Writer-koduje-w-dokumentacji--czyli-Markdown-w-wersji-rozszerzonej-ep7cpm",mdxType:"AnchorEmbed"}))}k.isMDXComponent=!0},4694:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),o="iframe_P0Je";var i=function(e){var t=e.episodeId;return n.createElement("iframe",{src:"https://anchor.fm/docdeveloper/embed/episodes/"+t,frameBorder:"0",scrolling:"no",className:o})}}}]);