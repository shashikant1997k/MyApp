(this["webpackJsonpkeep-note"]=this["webpackJsonpkeep-note"]||[]).push([[0],{40:function(e,t,a){e.exports=a(56)},45:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),o=(a(45),a(16)),m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"navDiv"},l.a.createElement(o.b,{exact:!0,className:"link",activeClassName:"active",to:"/MyApp"},"Random Image"),l.a.createElement(o.b,{className:"link",activeClassName:"active",to:"/MyApp/keep-note"},"Keep-Note")))},i=a(17),u=function(e){var t="https://source.unsplash.com/random/800x500?".concat(e.img);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"imgDiv"},e.img?l.a.createElement("img",{src:t,alt:""}):null))},s=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"searchDiv"},l.a.createElement("input",{type:"text",name:"search",onChange:function(e){c(e.target.value)},placeholder:"Search"})),l.a.createElement(u,{img:a}))},d=(a(51),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null))}),E=a(36),p=(a(52),a(53),a(25)),f=a(30),v=a(33),g=a.n(v),x=a(70),N=function(e){var t=Object(n.useState)({title:"",content:""}),a=Object(i.a)(t,2),c=a[0],r=a[1],o=function(e){var t=e.target.value,a=e.target.name;r((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(p.a)({},a,t))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"noteEdMain"},l.a.createElement("div",{className:"inputDiv"},l.a.createElement("input",{type:"text",placeholder:"Title",onChange:o,value:c.title,name:"title"}),l.a.createElement("textarea",{name:"content",placeholder:"Content",onChange:o,value:c.content,cols:"",rows:""}),l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement(x.a,{className:"addBtn allBtn",onClick:function(){e.onAddNote(c),c.title&&c.content&&r({title:"",content:""})},variant:"contained",color:"secondary"},l.a.createElement(g.a,null))))))},y=a(35),h=a.n(y),b=a(34),j=a.n(b),k=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card",style:{width:"210px",margin:"40px 0 5px 10px",float:"left"}},l.a.createElement("div",{className:"card-body",style:{padding:"10px 10px 4px 10px"}},l.a.createElement("h6",{className:"card-title"}," ",e.noteData.title," "),l.a.createElement("p",{className:"card-text",style:{marginBottom:"5px",fontSize:"14px"}}," ",e.noteData.content," "),l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement(x.a,{className:"editBtn allBtn",variant:"contained",color:"secondary"},l.a.createElement(j.a,null)),l.a.createElement(x.a,{className:"delBtn allBtn",variant:"contained",color:"secondary",onClick:function(){e.onDelNote(e.id)}},l.a.createElement(h.a,null))))))},F=function(){return l.a.createElement(l.a.Fragment,null)},C=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=function(e){c((function(t){return t.filter((function(t,a){return a!==e}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{onAddNote:function(e){c((function(t){return[].concat(Object(E.a)(t),[e])}))}}),l.a.createElement("div",null,a.length>0?a.map((function(e,t){return e.title&&e.content?l.a.createElement(k,{id:t,key:t,noteData:e,onDelNote:r}):null})):null),l.a.createElement(F,null))},O=a(3),D=(a(55),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"main"},l.a.createElement("div",{class:"fof"},l.a.createElement("h1",null,"Page Not Found 404"))))}),B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(O.c,null,l.a.createElement(O.a,{exact:!0,path:"/MyApp",component:d}),l.a.createElement(O.a,{path:"/MyApp/keep-note",component:C}),l.a.createElement(O.a,{component:D})))};r.a.render(l.a.createElement(o.a,null,l.a.createElement(B,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4dab461e.chunk.js.map