"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6522],{4137:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),y=s(t),m=a,z=y["".concat(u,".").concat(m)]||y[m]||p[m]||o;return t?n.createElement(z,i(i({ref:r},l),{},{components:t})):n.createElement(z,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7112:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return p},toc:function(){return y},default:function(){return z}});var n=t(7462),a=t(3366),o=(t(7294),t(4137)),i=t(6547),c=["components"],u={title:"#21 Tech Writer zbiera informacje ze stron, czyli jak mo\u017cna wykorzysta\u0107 web scraping",author:"Tech Writer koduje"},s=void 0,l={permalink:"/blog/2020/09/15/tech-writer-zbiera-informacje-ze-stron",editUrl:"https://github.com/techwriterkoduje/site-source/tree/master/website/blog/2020-09-15-tech-writer-zbiera-informacje-ze-stron.md",source:"@site/blog/2020-09-15-tech-writer-zbiera-informacje-ze-stron.md",title:"#21 Tech Writer zbiera informacje ze stron, czyli jak mo\u017cna wykorzysta\u0107 web scraping",description:"Web scraping to zbieranie danych ze stron internetowych. Google, na przyk\u0142ad,",date:"2020-09-15T00:00:00.000Z",formattedDate:"15 wrze\u015bnia 2020",tags:[],readingTime:.83,truncated:!1,authors:[{name:"Tech Writer koduje"}],prevItem:{title:"#22 Tech Writer buduje dokumentacj\u0119 API, czyli Next.js, ReDoc i OpenAPI w akcji",permalink:"/blog/2020/10/18/tech-writer-buduje-dokumentacje-api"},nextItem:{title:"#20 Tech Writer optymalizuje, czyli web performance w dokumentacji",permalink:"/blog/2020/08/06/tech-writer-optymalizuje"}},p={authorsImageUrls:[void 0]},y=[],m={toc:y};function z(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Web scraping to zbieranie danych ze stron internetowych. Google, na przyk\u0142ad,\nrobi to, \u017ceby indeksowa\u0107 ca\u0142y internet w swojej wyszukiwarce. Web scraping\nwykorzystuje si\u0119 te\u017c do monitorowania cen w konkurencyjnych sklepach\ninternetowych."),(0,o.kt)("p",null,"U nas w firmie u\u017cywamy web scrapingu, \u017ceby indeksowa\u0107 dokumentacj\u0119 dla naszej\nwyszukiwarki. To samo rozwi\u0105zanie wykorzystujemy te\u017c, \u017ceby sprawdza\u0107 czy\nwszystkie linki dzia\u0142aj\u0105. Wyniki web scrapingu zapisujemy w Elasticsearchu, a\npotem analizujemy je za pomoc\u0105 raport\xf3w i filtr\xf3w w Kibanie. Dzi\u0119ki temu\nstworzyli\u015bmy zal\u0105\u017cek panelu kontrolnego, na kt\xf3rym wida\u0107 aktualn\u0105 jako\u015b\u0107 naszej\ndokumentacji."),(0,o.kt)("p",null,"W niedalekiej przysz\u0142o\u015bci chcemy rozszerzy\u0107 nasze rozwi\u0105zanie o dodatkowe\nfunkcje. Planujemy, na przyk\u0142ad, testowa\u0107 strony pod k\u0105tem wymaganych element\xf3w\ni zgodno\u015bci z regu\u0142ami naszego style guide\u2019a. Kolejn\u0105 opcj\u0105 jest sprawdzanie czy\nw tre\u015bci nie ma b\u0142\u0119d\xf3w gramatycznych i stylistycznych oraz czy j\u0119zyk, kt\xf3rego\nu\u017cywamy do tworzenia instrukcji jest wystarczaj\u0105co przejrzysty."),(0,o.kt)("p",null,"Co mo\u017cna jeszcze zrobi\u0107 za pomoc\u0105 web scrapingu? Jakie inne testy s\u0105 potrzebne w\n\u015bwiecie dokumentacji technicznej i pisania ustrukturyzowanego? Zapraszamy do\ns\u0142uchania."),(0,o.kt)(i.Z,{episodeId:"21-Tech-Writer-zbiera-informacje-ze-stron--czyli-jak-mona-wykorzysta-web-scraping-ejj0ah/a-a375vf3",mdxType:"AnchorEmbed"}))}z.isMDXComponent=!0},6547:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(7294),a="iframe_kDzl";var o=function(e){var r=e.episodeId;return n.createElement("iframe",{src:"https://anchor.fm/docdeveloper/embed/episodes/"+r,frameBorder:"0",scrolling:"no",className:a})}}}]);