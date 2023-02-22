"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[263],{3263:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var r,o,i,a,c,s,u,d,f,m,l,h,p,g,x,b,Z,w,v,j=t(9434),z=t(2791),y=function(n){return n.contacts.contacts.items},C=function(n){return n.contacts.contacts.isLoading},k=function(n){return n.contacts.contacts.error},P=function(n){return n.contacts.filter},A=t(9016),S=t(168),B=t(6444),L=t(854),W=(0,B.ZP)(L.W)(r||(r=(0,S.Z)(["\n    display: flex;\n    height: 100%;\n"]))),I=B.ZP.div(o||(o=(0,S.Z)(["\n    padding-top: ",";\n    padding-right: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(3)})),N=B.ZP.div(i||(i=(0,S.Z)(["\n    padding-top: ",";\n    padding-left: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(3)})),_=(B.ZP.h1(a||(a=(0,S.Z)(["\n    display: block;\n    font-size: 30px;\n    font-weight: 600;\n    margin: 20px;\n    color: inherit;\n"]))),B.ZP.h2(c||(c=(0,S.Z)(["\n    display: block;\n    margin: 20px;\n    font-size: 30px;\n    font-weight: 600;\n    color: inherit;\n"]))),t(9439)),E=function(){return{contacts:(0,j.v9)(y),isLoading:(0,j.v9)(C),error:(0,j.v9)(k),filteredContact:(0,j.v9)(P)}},F=B.ZP.form(s||(s=(0,S.Z)(["\n    width: fit-content;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 1px solid ",";\n\n    padding: ",";\n    margin-top: ",";\n    border-radius: ",";\n    box-shadow: 0px 0px 3px 1px rgba(211, 211, 211, 0.5);\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(3)})),$=B.ZP.label(u||(u=(0,S.Z)(["\n    font-size: ",";\n    font-weight: ",";\n    margin-bottom: ",";\n    text-transform: capitalize;\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.m}),(function(n){return n.theme.spacing(4)})),q=B.ZP.input(d||(d=(0,S.Z)(["\n    display: block;\n    width: 200px;\n    margin-top: ",";\n    outline: none;\n    border: none;\n    border-radius: ",";\n    padding: 5px 10px;\n    box-shadow: 0 0 2px 0.2px #d3d3d3;\n    font-weight: ",";\n    font-size: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.fontWeights.norm}),(function(n){return n.theme.fontSizes.sm})),H=B.ZP.button(f||(f=(0,S.Z)(["\n    width: fix-content;\n    padding: ",";\n    text-align: center;\n    color: ",";\n    text-transform: uppercase;\n    font-weight: ",";\n    font-size: ",";\n    cursor: pointer;\n    display: inline-block;\n\n    background-color: transparent;\n    border: "," solid\n        ",";\n    border-radius: 50px;\n    transition: "," ease-in-out;\n    color: ",";\n    margin-bottom: ",";\n\n    :hover {\n        box-shadow: 0 0 5px 0 "," inset,\n            0 0 10px 2px ",";\n        border: "," solid\n            ",";\n    }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontWeights.l}),(function(n){return n.theme.fontSizes.sm}),(function(n){return n.theme.spacing(.7)}),(function(n){return n.theme.colors.neonBlue}),(function(n){return n.theme.transition.btnHoverTime}),(function(n){return n.theme.colors.neonBlue}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.neonBlue}),(function(n){return n.theme.colors.neonBlue}),(function(n){return n.theme.spacing(.7)}),(function(n){return n.theme.colors.neonBlue})),J=t(184),M=function(){var n=E().contacts,e=(0,j.I0)(),t=(0,z.useState)(""),r=(0,_.Z)(t,2),o=r[0],i=r[1],a=(0,z.useState)(""),c=(0,_.Z)(a,2),s=c[0],u=c[1],d=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":i(r);break;case"number":u(r);break;default:return}},f=function(){i(""),u("")};return(0,J.jsxs)(F,{onSubmit:function(t){var r;t.preventDefault(),r={name:o,number:s},n.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(r.name," is already in contacts")):e((0,A.je)(r)),n.find((function(n){return n.name.toLowerCase()===o.toLowerCase()}))||f()},autoComplete:"off",children:[(0,J.jsxs)($,{children:["Name",(0,J.jsx)(q,{name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d,placeholder:"Enter name"})]}),(0,J.jsxs)($,{children:["Number",(0,J.jsx)(q,{type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:d,placeholder:"000-00-00"})]}),(0,J.jsx)(H,{type:"submit",children:"Add contact"})]})},T=B.ZP.ul(m||(m=(0,S.Z)(["\n    margin: 0;\n    padding: 0;\n    width: fit-content;\n"]))),D=t(828),X=B.ZP.li(l||(l=(0,S.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    max-width: inherit;\n"]))),G=B.ZP.div(h||(h=(0,S.Z)(["\n    word-break: break-all;\n    white-space: pre-wrap;\n"]))),K=B.ZP.p(p||(p=(0,S.Z)(["\n    margin: 0;\n    padding: 0;\n    font-size: ",";\n    font-weight: ",";\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.norm})),O=(B.ZP.button(g||(g=(0,S.Z)(["\n    display: inline-block;\n    width: fix-content;\n    text-align: center;\n    text-transform: capitalize;\n    padding: ",";\n    color: ",";\n    font-weight: ",";\n    font-size: ",";\n    background: ",";\n    border: "," solid transparent;\n    border-radius: 50px;\n    transition: "," ease-in-out;\n    cursor: pointer;\n    margin-left: ",";\n\n    :hover {\n        box-shadow: 0 0 5px 0 "," inset,\n            0 0 10px 2px ",";\n        border: "," solid\n            ",";\n    }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.fontWeights.l}),(function(n){return n.theme.fontSizes.sm}),(function(n){return n.theme.colors.greyBtnBgrColor}),(function(n){return n.theme.spacing(.7)}),(function(n){return n.theme.transition.btnHoverTime}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.neonCrimson}),(function(n){return n.theme.colors.neonCrimson}),(function(n){return n.theme.spacing(.7)}),(function(n){return n.theme.colors.neonCrimson})),(0,B.ZP)(D._51)(x||(x=(0,S.Z)(["\n    width: ",";\n    height: ",";\n\n    fill: ",";\n    margin-left: ",";\n\n    :hover {\n        fill: ",";\n    }\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.neonCrimson}))),Q=function(n){var e=n.userId,t=n.userName,r=n.tel,o=(0,j.I0)();return(0,J.jsxs)(X,{children:[(0,J.jsx)(G,{children:(0,J.jsxs)(K,{children:[t+":  ",r]})}),(0,J.jsx)("div",{onClick:function(){return o((0,A.xX)(e))},children:(0,J.jsx)(O,{})})]})},R=function(){var n=E(),e=n.contacts,t=n.filteredContact,r=e.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,J.jsx)(T,{children:r.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,J.jsx)(Q,{userId:e,userName:t,tel:r},e)}))})},U=B.ZP.div(b||(b=(0,S.Z)(["\n    margin-top: ",";\n    margin-bottom: ",";\n\n    border: 1px solid ",";\n    padding: ",";\n    border-radius: ",";\n    box-shadow: 0px 0px 3px 1px rgba(211, 211, 211, 0.5);\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(3)})),V=B.ZP.label(Z||(Z=(0,S.Z)(["\n    font-size: ",";\n    font-weight: ",";\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.m})),Y=B.ZP.input(w||(w=(0,S.Z)(["\n    display: block;\n    width: 100%;\n    margin-top: ",";\n    outline: none;\n    border: none;\n    border-radius: ",";\n    padding: 5px 10px;\n    box-shadow: 0 0 2px 0.2px #d3d3d3;\n    font-weight: ",";\n    font-size: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.fontWeights.norm}),(function(n){return n.theme.fontSizes.sm})),nn=t(9652),en=function(){var n=(0,z.useState)(""),e=(0,_.Z)(n,2),t=e[0],r=e[1],o=(0,j.I0)();return(0,J.jsx)(U,{children:(0,J.jsxs)(V,{children:["Find contact by name",(0,J.jsx)(Y,{autocomplete:"off",type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(n){r(n.target.value);var e=n.target.value.toLowerCase().trim();o((0,nn.fW)(e))},placeholder:"Enter name"})]})})},tn=t(5243),rn=B.ZP.div(v||(v=(0,S.Z)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"]))),on=function(){return(0,J.jsx)(rn,{children:(0,J.jsx)(tn.g4,{height:"80",width:"80",radius:"9",color:"#2becd2",ariaLabel:"three-dots-loading",visible:!0})})},an=function(){var n=(0,j.I0)(),e=(0,j.v9)(C),t=(0,j.v9)(k);return(0,z.useEffect)((function(){n((0,A.m$)())}),[n]),(0,J.jsxs)(W,{children:[(0,J.jsx)(I,{children:(0,J.jsx)(M,{})}),(0,J.jsxs)(N,{children:[(0,J.jsx)(en,{}),e&&!t&&(0,J.jsx)(on,{}),(0,J.jsx)(R,{})]})]})}}}]);
//# sourceMappingURL=263.5fb575b2.chunk.js.map