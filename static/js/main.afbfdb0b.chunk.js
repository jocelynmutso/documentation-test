(this["webpackJsonpdocumentation-test"]=this["webpackJsonpdocumentation-test"]||[]).push([[0],{182:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),s=a.n(i),c=a(10),r=a.n(c),o=a(225),d=a(32),m=a(213),p=a(226),l=a(224),h=a(217),u=a(222),b=a(57),j=a(215),f=a(58),g=a(13),x=a(227),O=a(87),y=a.n(O),v=a(218),w=a(86),k=a.n(w),C=Object(m.a)((function(e){return{root:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1},menuButton:{marginRight:e.spacing(2)},title:Object(b.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(b.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(g.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(g.b)(e.palette.common.white,.25)},marginLeft:1,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(b.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"15ch","&:focus":{width:"25ch"}})}})),I=function(e){var t=e.onClick,a=C();return Object(n.jsx)("div",{className:a.root,children:Object(n.jsx)(j.a,{position:"fixed",className:a.appBar,children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(f.a,{variant:"h6",noWrap:!0,onClick:t,children:Object(n.jsx)(v.a,{variant:"contained",color:"primary",disableElevation:!0,startIcon:Object(n.jsx)(k.a,{}),children:"Dialob Composer: User Documentation"})}),Object(n.jsxs)("div",{className:a.search,children:[Object(n.jsx)("div",{className:a.searchIcon,children:Object(n.jsx)(y.a,{})}),Object(n.jsx)(x.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"}})]})]})})})},R=a(219),L=a(220),S=a(221),F=a(89),N=a.n(F),W=a(90),z=a.n(W),B=a(223),E=a(88),T=a.n(E),M=function(e){var t=e.path,a=s.a.useState("MD loading..."),i=Object(d.a)(a,2),c=i[0],r=i[1];return fetch(t).then((function(e){return e.text()})).then((function(e){return r(e)})),Object(n.jsx)("div",{children:Object(n.jsx)(T.a,{source:c.replace("%PUBLIC_URL%","documentation-test")})})},P=Object(m.a)((function(e){return{nested:{paddingLeft:e.spacing(4)},nestedText:{fontSize:"0.9rem",paddingLeft:e.spacing(1),display:"block"}}})),D=function(e){var t=e.items,a=e.onClick,i=P(),c=s.a.useState(!1),r=Object(d.a)(c,2),o=r[0],m=r[1];return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsxs)(R.a,{button:!0,onClick:function(){return m(!o)},className:i.nested,children:[Object(n.jsx)(L.a,{primary:t.name}),o?Object(n.jsx)(N.a,{}):Object(n.jsx)(z.a,{})]}),Object(n.jsx)(S.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(u.a,{component:"div",disablePadding:!0,children:t.subs.map((function(e,t){return function(e,t,s){return Object(n.jsx)(R.a,{button:!0,className:i.nested,onClick:function(){return function(e,t){return a(Object(n.jsx)(M,{path:t}))}(0,t)},children:Object(n.jsx)(L.a,{children:Object(n.jsx)("span",{className:i.nestedText,children:e})})},s)}(e.name,e.path,t)}))})}),Object(n.jsx)(B.a,{})]})},_={name:"Response Types",subs:[{name:"Intro",path:a.p+"static/media/_index.7112a0b7.md"},{name:"Working with types",path:a.p+"static/media/working-with-types.4ad7ee0e.md"}]},G=a.p+"static/media/_index.c9c3cadb.md",H={name:"Expressions",path:G,subs:[{name:"Dialob Expression Language (DEL)",path:G}]},q=a.p+"static/media/_index.057d8ab4.md",A=a.p+"static/media/overview.b3c9c4d4.md",J=a.p+"static/media/regularexpressions.6fef6b9a.md",U=a.p+"static/media/basicdel.e5b6c9bd.md",V=a.p+"static/media/required.28ce61bd.md",Q=a.p+"static/media/validation.49bda369.md",K={name:"Logic",path:q,subs:[{name:"Overview",path:A},{name:"Basic DEL",path:U},{name:"Requirement Rules",path:V},{name:"Visibility Rules",path:a.p+"static/media/visibility.56438a75.md"},{name:"Validation Rules",path:Q},{name:"Java Regular Expressions",path:J}]},X=a.p+"static/media/_index.50bcdb30.md",Y=a.p+"static/media/page.9bd22781.md",Z=a.p+"static/media/groups.0177fd8e.md",$=a.p+"static/media/inputtypes.2481ca7d.md",ee=a.p+"static/media/outputtypes.5ed381e6.md",te=a.p+"static/media/testing.8af5d9b1.md",ae={name:"Basic Operations",path:X,subs:[{name:"Pages",path:Y},{name:"Groups",path:Z},{name:"Adding Items",path:a.p+"static/media/addingitems.59184e40.md"},{name:"Reordering Items",path:a.p+"static/media/reordering.fe807fe6.md"},{name:"Input Types",path:$},{name:"Output Types",path:ee},{name:"Testing",path:te}]},ne=a.p+"static/media/_index.52529008.md",ie=a.p+"static/media/csv.e779470d.md",se=a.p+"static/media/global-local-lists.48d9eda4.md",ce=a.p+"static/media/lifecycle-management.52c16d57.md",re=a.p+"static/media/translations.8485b065.md",oe={name:"Advanced Operations",subs:[{name:"Intro",path:ne},{name:"Tagging",path:a.p+"static/media/tags.9073b7be.md"},{name:"CSV",path:ie},{name:"Global local lists",path:se},{name:"Lifecycle management",path:ce},{name:"Translations",path:re},{name:"Options",path:a.p+"static/media/options.6cf78b58.md"}]},de={name:"Reference",path:a.p+"static/media/_index.52529008.md",subs:[{name:"New form walkthrough",path:a.p+"static/media/walkthrough.43c88bfa.md"},{name:"Quick Reference",path:a.p+"static/media/quickreference.58fbec63.md"}]},me=Object(m.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)},list:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,padding:5}}})),pe=function(){var e=me(),t=s.a.useState(Object(n.jsx)("div",{children:"start"})),a=Object(d.a)(t,2),i=a[0],c=a[1];return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(l.a,{}),Object(n.jsx)(I,{onClick:function(){return c(Object(n.jsx)("div",{}))}}),Object(n.jsxs)(p.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},children:[Object(n.jsx)(h.a,{}),Object(n.jsx)("div",{className:e.drawerContainer,children:Object(n.jsxs)(u.a,{component:"nav",className:e.list,children:[Object(n.jsx)(D,{onClick:function(e){return c(e)},items:ae}),Object(n.jsx)(D,{onClick:function(e){return c(e)},items:oe}),Object(n.jsx)(D,{onClick:function(e){return c(e)},items:H}),Object(n.jsx)(D,{onClick:function(e){return c(e)},items:_}),Object(n.jsx)(D,{onClick:function(e){return c(e)},items:K}),Object(n.jsx)(D,{onClick:function(e){return c(e)},items:de})]})})]}),Object(n.jsxs)("main",{className:e.content,children:[Object(n.jsx)(h.a,{}),i]})]})},le=a(91),he=Object(le.a)({palette:{type:"light",primary:{main:"#114B8E"},secondary:{main:"#ff8600"},text:{primary:"rgba(9,9,59,0.87)",secondary:"rgba(44,75,148,0.75)"}},props:{},overrides:{},typography:{h1:{fontSize:"2.2rem",lineHeight:1.5,padding:10,marginLeft:"10px",marginRight:"10px",fontFamily:'"Mulish", sans-serif',fontWeight:800,textAlign:"center"},h2:{fontSize:"1.8rem",lineHeight:1.5,fontFamily:'"Mulish", sans-serif',fontWeight:900},h3:{fontSize:"1.5rem",lineHeight:1.5,fontFamily:'"Mulish", sans-serif',fontWeight:900},h4:{fontSize:"1.2rem",lineHeight:1,fontFamily:'"Mulish", sans-serif',fontWeight:700},h5:{fontSize:"1.2rem",fontFamily:'"Mulish", sans-serif',fontWeight:700},h6:{fontFamily:'"Mulish", sans-serif',fontWeight:700},body1:{fontFamily:'"Mulish", sans-serif',fontWeight:400,fontSize:"1rem"},body2:{fontFamily:'"Mulish", sans-serif',fontWeight:400,fontSize:"1rem",paddingBottom:20}}}),ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,228)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};r.a.render(Object(n.jsx)(o.a,{theme:he,children:Object(n.jsx)(pe,{})}),document.getElementById("root")),ue()}},[[182,1,2]]]);
//# sourceMappingURL=main.afbfdb0b.chunk.js.map