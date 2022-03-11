"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6014],{4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),m=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=m(r),d=a,y=l["".concat(u,".").concat(d)]||l[d]||s[d]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},6623:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var n=r(3117),a=r(102),o=(r(7294),r(4137)),i=r(4694),c=["components"],u={title:"#23 Tech Writer mierzy jako\u015b\u0107 dokumentacji, czyli co i jak sprawdza\u0107",author:"Tech Writer koduje"},m=void 0,p={permalink:"/blog/2020/11/23/tech-writer-mierzy-jakosc-dokumentacji",editUrl:"https://github.com/techwriterkoduje/site-source/tree/master/website/blog/2020-11-23-tech-writer-mierzy-jakosc-dokumentacji.md",source:"@site/blog/2020-11-23-tech-writer-mierzy-jakosc-dokumentacji.md",title:"#23 Tech Writer mierzy jako\u015b\u0107 dokumentacji, czyli co i jak sprawdza\u0107",description:"Jak zrobi\u0107 najlepsz\u0105 dokumentacj\u0119? Ustalamy wewn\u0119trzne standardy i si\u0119 ich",date:"2020-11-23T00:00:00.000Z",formattedDate:"23 listopada 2020",tags:[],readingTime:.755,truncated:!1,authors:[{name:"Tech Writer koduje"}],frontMatter:{title:"#23 Tech Writer mierzy jako\u015b\u0107 dokumentacji, czyli co i jak sprawdza\u0107",author:"Tech Writer koduje"},prevItem:{title:"#24 Tech Writer publikuje inaczej, czyli API do dokumentacji",permalink:"/blog/2020/12/23/tech-writer-publikuje-inaczej"},nextItem:{title:"#22 Tech Writer buduje dokumentacj\u0119 API, czyli Next.js, ReDoc i OpenAPI w akcji",permalink:"/blog/2020/10/18/tech-writer-buduje-dokumentacje-api"}},s={authorsImageUrls:[void 0]},l=[],d={toc:l};function y(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jak zrobi\u0107 najlepsz\u0105 dokumentacj\u0119? Ustalamy wewn\u0119trzne standardy i si\u0119 ich\ntrzymamy, a potem sprawdzamy czy dokumentacja spe\u0142nia swoje cele. Nast\u0119pnie\nweryfikujemy standardy, \u017ceby nasza dokumentacja spe\u0142nia\u0142a za\u0142o\u017cone cele coraz\nlepiej."),(0,o.kt)("p",null,"Wydaje si\u0119 proste, ale diabe\u0142 tkwi w szczeg\xf3\u0142ach. Z Rafa\u0142em Pawlickim\nzastanawiamy si\u0119 jak utrzymywa\u0107 wewn\u0119trzne standardy jednocze\u015bnie ucz\u0105c ludzi\npisania dobrej dokumentacji oraz w jaki spos\xf3b mierzy\u0107 efektywno\u015b\u0107 dokumentacji.\nRozmawiamy o tym jak stworzy\u0107 model oceny dokumentacji pod k\u0105tem jako\u015bci i\ndojrza\u0142o\u015bci, a nast\u0119pnie jak wykorzysta\u0107 te informacje do planowania pracy\ndokumentacyjnej. Przygl\u0105damy si\u0119 te\u017c zbieraniu danych od u\u017cytkownik\xf3w oraz\nwykorzystywaniu ich do wdra\u017cania zmian w organizacji."),(0,o.kt)("p",null,"Kt\xf3re metryki najlepiej sprawdza\u0142y si\u0119 dla nas do tej pory? Kt\xf3re dzia\u0142aj\u0105\nnajlepiej osobno, a kt\xf3re w po\u0142\u0105czeniu? Kt\xf3re elementy mo\u017ce sprawdza\u0107 automat, a\nkt\xf3re powinny by\u0107 weryfikowane przez cz\u0142owieka? Pos\u0142uchajcie, a potem dajcie nam\nzna\u0107 jakie Wy macie sposoby i pomys\u0142y na mierzenie jako\u015bci dokumentacji."),(0,o.kt)(i.Z,{episodeId:"23-Tech-Writer-mierzy-jako-dokumentacji--czyli-co-i-jak-sprawdza-emralt",mdxType:"AnchorEmbed"}))}y.isMDXComponent=!0},4694:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a="iframe_P0Je";var o=function(e){var t=e.episodeId;return n.createElement("iframe",{src:"https://anchor.fm/docdeveloper/embed/episodes/"+t,frameBorder:"0",scrolling:"no",className:a})}}}]);