(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),u=a.n(r),l=a(16),o=a(2),s=a(5),i=a.n(s);var m=function(e){var t=e.currencyOption,a=e.selectedOption,n=e.onChangeCurrency,r=e.handleAmountChange,u=e.amount;return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"input",type:"number",placeholder:"currency",value:u,onChange:r}),c.a.createElement("select",{className:"selection",value:a,onChange:n},t&&t.map((function(e){return c.a.createElement("option",{key:e,value:e},e)}))))};var p=function(e){var t=e.handleDateChange,a=e.pickDate,n=new Date,r="".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDate());return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Want to Know about past Currency Histories?"),c.a.createElement("p",null,"Pick your Date. By default it will be latest "),c.a.createElement("input",{type:"date",min:"1999-01-04",max:r,value:a,onChange:t}))};var h=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],r=t[1],u=Object(n.useState)(),s=Object(o.a)(u,2),h=s[0],b=s[1],O=Object(n.useState)(),d=Object(o.a)(O,2),g=d[0],v=d[1],f=Object(n.useState)(),y=Object(o.a)(f,2),j=y[0],E=y[1],C=Object(n.useState)(1),D=Object(o.a)(C,2),k=D[0],N=D[1],S=Object(n.useState)(!0),w=Object(o.a)(S,2),q=w[0],F=w[1],A=Object(n.useState)("live"),B=Object(o.a)(A,2),R=B[0],X=B[1];if("live"!==R){var x=(new Date).getFullYear();R.slice(0,4)>="".concat(x)&&X("live")}var H,J,L="https://api.apilayer.com/currency_data/".concat(R);return Object(n.useEffect)((function(){i()({method:"get",url:L,responseType:"json",headers:{"X-Requested-With":"XMLHttpRequest",apikey:"nO4BhDUfDqlrXNkDms6RaOs69O9Lizeq"}}).then((function(e){var t=Object.keys(e.data.rates)[0];r([e.data.base].concat(Object(l.a)(Object.keys(e.data.rates)))),b(e.data.base),v(t)})).catch((function(e){return console.log(e)}))}),[L]),Object(n.useEffect)((function(){null!=h&&null!=g&&i()("".concat(L,"?base=").concat(h,"&symbols=").concat(g)).then((function(e){return E(e.data.rates[g])})).catch((function(e){return console.log(e)}))}),[h,g,L]),q?(J=k,H=k*j):(H=k,J=k/j),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"converter coloumn"},c.a.createElement("h3",null,"Currency Changer"),c.a.createElement(m,{currencyOption:a,selectedOption:h,onChangeCurrency:function(e){return b(e.target.value)},handleAmountChange:function(e){N(e.target.value),F(!0)},amount:J}),c.a.createElement("div",{className:"equals"},"="),c.a.createElement(m,{currencyOption:a,selectedOption:g,onChangeCurrency:function(e){return v(e.target.value)},handleAmountChange:function(e){N(e.target.value),F(!1)},amount:H})),c.a.createElement("div",{className:"history coloumn"},c.a.createElement(p,{handleDateChange:function(e){return X(e.target.value)},pickDate:R})))};a(39);u.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7f8bde58.chunk.js.map