(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),a=n(1),l=n(4),u=n.n(l),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.DEFAULT="",t.ALPHABET="alphabet",t.LENGTH="length"}(s||(s={}));var d=function(){var t=Object(a.useState)(s.DEFAULT),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),l=Object(r.a)(o,2),d=l[0],j=l[1],g=function(t,e){var n=e.sortField,c=e.sortReversed,o=Object(i.a)(t);switch(n){case s.ALPHABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case s.LENGTH:o.sort((function(t,e){return t.length-e.length}))}return c&&o.reverse(),o}(h,{sortField:n,sortReversed:d});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":n!==s.ALPHABET}),onClick:function(){return c(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":n!==s.LENGTH}),onClick:function(){return c(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!d}),onClick:function(){return j(!d)},children:"Reverse"}),(n||d)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(s.DEFAULT),j(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.98c913e9.chunk.js.map