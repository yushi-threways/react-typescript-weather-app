(this["webpackJsonpreact-typescript-weather-appss"]=this["webpackJsonpreact-typescript-weather-appss"]||[]).push([[0],{10:function(t,e,c){},11:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),s=c(4),i=c.n(s),a=c(3),o=c(0),u=function(){return Object(o.jsx)("h1",{children:"\u30ef\u30fc\u30eb\u30c9\u30a6\u30a7\u30b6\u30fc"})},j=function(t){return Object(o.jsxs)("form",{onSubmit:t.getWeather,children:[Object(o.jsx)("input",{type:"text",name:"city",placeholder:"\u90fd\u5e02\u540d",onChange:function(e){return t.setCity(e.target.value)}}),Object(o.jsx)("button",{type:"submit",children:"Get Weather"})]})},l=function(t){return Object(o.jsxs)("div",{children:[t.results.cityName&&Object(o.jsx)("div",{children:t.results.cityName}),t.results.country&&Object(o.jsx)("div",{children:t.results.country}),t.results.temperature&&Object(o.jsxs)("div",{children:[t.results.temperature,Object(o.jsx)("span",{children:"\u2103"})]}),t.results.cityName&&Object(o.jsx)("div",{children:t.results.cityName}),t.results.conditionText&&Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:t.results.icon,alt:"icon"}),Object(o.jsx)("span",{children:t.results.conditionText})]})]})};c(10);var d=function(){var t=Object(n.useState)(""),e=Object(a.a)(t,2),c=e[0],r=e[1],s=Object(n.useState)({country:"",cityName:"",temperature:"",conditionText:"",icon:""}),i=Object(a.a)(s,2),d=i[0],b=i[1];return Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(u,{}),Object(o.jsx)(j,{setCity:r,getWeather:function(t){t.preventDefault(),fetch("https://api.weatherapi.com/v1/current.json?key=701cb2f152774df6a31172726210610&q=".concat(c,"&aqi=no")).then((function(t){return t.json()})).then((function(t){b({country:t.location.country,cityName:t.location.name,temperature:t.current.temp_c,conditionText:t.current.condition.text,icon:t.current.condition.icon})}))}}),Object(o.jsx)(l,{results:d})]})})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4bb8ff56.chunk.js.map