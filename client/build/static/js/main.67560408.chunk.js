(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{25:function(e,a,t){e.exports=t.p+"static/media/book150.6c3e143f.png"},28:function(e,a,t){e.exports=t(57)},50:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),l=t.n(c),o=t(26),i=t(1),s=t(10);var m=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},"Search")),r.a.createElement("p",null,"  |  "),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/saved"},"Saved"))))};var u=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid col-lg-8"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Google Books Search"),r.a.createElement("p",{className:"lead"},"Search for books then save the ones you might be interested in.")))};var d=function(e){return r.a.createElement("div",{className:"row justify-content-lg-center main-container"},e.children)},E=t(8),f=t.n(E),g=function(e){return f.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},v=function(){return f.a.get("/api/books")},p=function(e){return f.a.post("/api/books/",e)},h=function(e){return f.a.delete("/api/books/"+e)},b=t(25),N=t.n(b);var w=function(e){var a,t=e.data;a=t.imageLinks?t.imageLinks.thumbnail:N.a;var n={title:t.title,authors:t.authors,description:t.description,image:a,link:t.previewLink,publishedDate:t.publishedDate,rating:t.averageRating,categories:t.categories,pageCount:t.pageCount};return r.a.createElement("div",{className:"card col-lg-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title row"},t.title),r.a.createElement("h4",{className:"card-text row"},"Authors: ",t.authors),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-auto"},r.a.createElement("img",{src:a,className:"card-img-left",alt:t.title}),r.a.createElement("br",null),r.a.createElement("a",{type:"button",href:t.previewLink,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary"},"View"),r.a.createElement("button",{className:"btn btn-success",onClick:function(){p(n).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"Add")),r.a.createElement("br",null),r.a.createElement("div",{className:"col-lg-auto"},r.a.createElement("p",{className:"card-text"},"Description: ",t.description),r.a.createElement("br",null),r.a.createElement("p",{className:"card-text"},"Pages: ",t.pageCount),r.a.createElement("br",null),r.a.createElement("p",{className:"card-text"},"Rating: ",t.averageRating),r.a.createElement("br",null),r.a.createElement("p",{className:"card-text"},"Published: ",t.publishedDate),r.a.createElement("br",null),r.a.createElement("p",{className:"card-text"},"Category: ",t.categories))))))},k=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)({}),o=Object(s.a)(l,2),i=o[0],E=o[1];function f(e){g(e).then((function(e){c(e.data.items)})).catch((function(e){return console.log(e)}))}Object(n.useEffect)((function(){f("Cosmere")}),[]);return r.a.createElement("div",{className:"search"},r.a.createElement(m,null),r.a.createElement(d,null,r.a.createElement(u,null)),r.a.createElement(d,null,r.a.createElement("form",{className:"col-lg-8",onSubmit:function(e){e.preventDefault(),f(i),E("")}},r.a.createElement("input",{className:"form-control form-control-lg",type:"search",placeholder:"Search For Books Here",onChange:function(e){return E(e.target.value)}}))),r.a.createElement("br",null),r.a.createElement(d,null,t.map((function(e){return r.a.createElement(w,{data:e.volumeInfo,key:e.id})}))))};var x=function(e){var a=e.data;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},a.title),r.a.createElement("p",{className:"card-text"},"Authors: ",a.authors),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("img",{src:a.image,className:"card-img-left",alt:a.title}),r.a.createElement("br",null),r.a.createElement("a",{type:"button",href:a.link,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary"},"View"),r.a.createElement("button",{className:"btn btn-danger",id:a._id,onClick:function(){return e=a._id,void h(e).then((function(e){window.location.reload()})).catch((function(e){return console.log(e)}));var e}},"Delete"),r.a.createElement("br",null)),r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("p",{className:"card-text"},"Description: ",a.description),r.a.createElement("br",null),r.a.createElement("p",{className:"card-text"},"Pages: ",a.pageCount),r.a.createElement("br",null),r.a.createElement("p",{className:"card-text"},"Rating: ",a.rating),r.a.createElement("br",null),r.a.createElement("p",{className:"card-text"},"Published: ",a.publishedDate),r.a.createElement("br",null),r.a.createElement("p",{className:"card-text"},"Category: ",a.categories))))))};var y=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){v().then((function(e){c(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:"saved"},r.a.createElement(m,null),r.a.createElement(d,null,r.a.createElement(u,null),t.map((function(e){return r.a.createElement(x,{data:e,key:e._id})}))))};t(50);var j=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:k}),r.a.createElement(i.a,{exact:!0,path:"/saved",component:y}),r.a.createElement(i.a,{path:"*",component:k}))))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(56);l.a.render(r.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");C?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):O(e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.67560408.chunk.js.map