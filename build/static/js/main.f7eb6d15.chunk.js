(this.webpackJsonpfruitshop=this.webpackJsonpfruitshop||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(6),s=t.n(l),o=(t(13),t(7)),r=t(1),m=t(2),i=t(4),p=t(3),E=(t(14),t(15),function(e){Object(i.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(r.a)(this,t);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).useAdd=function(){e.props.add(e.props.logo,e.props.name,e.props.price)},e}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{class:"row "},n.a.createElement("div",{class:"col-1 "}),n.a.createElement("div",{class:"col-1 "},n.a.createElement("span",{className:"logo"}," ",this.props.logo," ")),n.a.createElement("div",{class:"col-3 co"},n.a.createElement("span",{className:"name"}," ",this.props.name," ")),n.a.createElement("div",{class:"col-3"}),n.a.createElement("div",{class:"col-2 co "},n.a.createElement("span",null,n.a.createElement("span",{className:"price"}," ",this.props.price,"$ "))),n.a.createElement("div",{class:"col-1 "},n.a.createElement("span",{className:"addText"}," ")," ",n.a.createElement("button",{onClick:this.useAdd,className:"addButton"}," + ")," "))}}]),t}(c.Component)),d=function(e){Object(i.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(r.a)(this,t);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).useClear=function(){e.props.clear()},e.useToHome=function(){e.props.toHome()},e.useToCart=function(){e.props.toCart()},e.useToShop=function(){e.props.toShop()},e}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"btnbox"},n.a.createElement("button",{className:"navbtn",onClick:this.useToHome}," Home ")),n.a.createElement("div",{className:"btnbox"},n.a.createElement("button",{className:"navbtn",onClick:this.useToShop}," Shop ")),n.a.createElement("div",{className:"btnbox"},n.a.createElement("button",{className:"navbtn",onClick:this.useToCart}," Cart ")),n.a.createElement("div",{className:"btnbox"},n.a.createElement("button",{className:"navbtn"}," Sign in ")),n.a.createElement("div",{className:"btnbox"},n.a.createElement("button",{className:"navbtn",onClick:this.useClear}," Clear ")))}}]),t}(c.Component),u=function(e){Object(i.a)(t,e);var a=Object(p.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Welcome to the best fruit shop in town"))}}]),t}(c.Component);function h(e){return n.a.createElement("div",{className:"headbox"},n.a.createElement("header",{className:"header"},n.a.createElement("span",{onClick:e.toHome,className:"home"},"\u2302"),n.a.createElement("span",{className:"htext"},"\ud83c\udf53Fruit\ud83c\udf4dShop\ud83c\udf47")," ",n.a.createElement("span",{className:"shopcart",onClick:e.toCart},"\ud83d\uded2")))}var v=[{logo:"\ud83c\udf4e",name:" Apple",price:3,id:1},{logo:"\ud83c\udf4c",name:"Banana",price:4,id:2},{logo:"\ud83c\udf49",name:"Watermelon",price:11,id:3},{logo:"\ud83c\udf4d",name:"Pineapple",price:8,id:4},{logo:"\ud83c\udf47",name:"Grapes",price:5,id:5},{logo:"\ud83e\udd5d",name:"Kiwi",price:4,id:6},{logo:"\ud83c\udf48",name:"Melon",price:6,id:7},{logo:"\ud83c\udf53",name:"Strawberry",price:12,id:8},{logo:"\ud83c\udf50",name:"Pear",price:2,id:9},{logo:"\ud83e\udd65",name:"Coconut",price:9,id:10},{logo:"\ud83c\udf52",name:"Cherries",price:13,id:11},{logo:"\ud83c\udf4b",name:"Lemon",price:6,id:12},{logo:"\ud83e\udd6d",name:"Mango",price:12,id:13},{logo:"\ud83c\udf51",name:"Peach",price:7,id:14}];function g(e){return n.a.createElement("div",null,e.items.map((function(a){return n.a.createElement(N,{logo:a.logo,remove:e.remove,name:a.name,price:a.price,amount:a.amount,key:a.id,id:a.id})})),n.a.createElement("div",{class:"row "},n.a.createElement("div",{class:"col-1 co"},n.a.createElement("span",null,"  # ")),n.a.createElement("div",{class:"col-1 "}),n.a.createElement("div",{class:"col-1 "},n.a.createElement("span",{className:"logo"}," ")),n.a.createElement("div",{class:"col-3 co"},n.a.createElement("span",{className:"name he"}," Item ")),n.a.createElement("div",{class:"col-3"}),n.a.createElement("div",{class:"col-3 co "},n.a.createElement("span",null,n.a.createElement("span",{className:"price he"}," Price ")))),n.a.createElement("div",{class:"row r2"},n.a.createElement("div",{className:"col-1 co"},n.a.createElement("span",null,"   ")),n.a.createElement("div",{class:"col-1 "}),n.a.createElement("div",{class:"col-1 "},n.a.createElement("span",{className:"logo"}," ")),n.a.createElement("div",{class:"col-2 co"},n.a.createElement("span",{className:"name he"},"  ")),n.a.createElement("div",{class:"col-4 co alignRight"},"Subtotal (",e.counter," items):"),n.a.createElement("div",{class:"col-1 co "},n.a.createElement("span",null,n.a.createElement("span",{className:"price he"}," ",e.total,"$ ")))),n.a.createElement("div",{class:"row r2"},n.a.createElement("div",{className:"col-1 co"},n.a.createElement("span",null,"   ")),n.a.createElement("div",{class:"col-1 "}),n.a.createElement("div",{class:"col-1 "},n.a.createElement("span",{className:"logo"}," ")),n.a.createElement("div",{class:"col-2 co"},n.a.createElement("span",{className:"name he"},"  ")),n.a.createElement("div",{class:"col-4 co alignRight"}),n.a.createElement("div",{class:"col-3 co "},n.a.createElement("span",null,n.a.createElement("span",{className:"price he"},"  ")))),n.a.createElement("div",{class:"row r2"},n.a.createElement("div",{className:"col-1 co"},n.a.createElement("span",null,"   ")),n.a.createElement("div",{class:"col-1 "}),n.a.createElement("div",{class:"col-1 "},n.a.createElement("span",{className:"logo"}," ")),n.a.createElement("div",{class:"col-2 co"},n.a.createElement("span",{className:"name he"},"  ")),n.a.createElement("div",{class:"col-4 co alignRight shit"},"Shipping"),n.a.createElement("div",{class:"col-1 co "},n.a.createElement("span",null,n.a.createElement("span",{className:"shit"}," 20$  ")))),n.a.createElement("div",{class:"row r2"},n.a.createElement("div",{className:"col-1 co"},n.a.createElement("span",null,"   ")),n.a.createElement("div",{class:"col-1 "}),n.a.createElement("div",{class:"col-1 "},n.a.createElement("span",{className:"logo"}," ")),n.a.createElement("div",{class:"col-2 co"},n.a.createElement("span",{className:"name he"},"  ")),n.a.createElement("div",{class:"col-4 co alignRight shit"},"Handaling"),n.a.createElement("div",{class:"col-1 co shit"},n.a.createElement("span",null,n.a.createElement("span",{className:"shit"}," 5$  ")))),n.a.createElement("div",{class:"row r2"},n.a.createElement("div",{className:"col-1 co"},n.a.createElement("span",null,"   ")),n.a.createElement("div",{class:"col-1 "}),n.a.createElement("div",{class:"col-1 "},n.a.createElement("span",{className:"logo"}," ")),n.a.createElement("div",{class:"col-2 co"},n.a.createElement("span",{className:"name he"},"  ")),n.a.createElement("div",{class:"col-4 co alignRight"}),n.a.createElement("div",{class:"col-3 co shit"},n.a.createElement("span",null,n.a.createElement("span",{className:"shit"}," ",e.total,"$ + 20$ + 5$ = ",e.total+20+5,"$  ")))),n.a.createElement("div",{class:"row "},n.a.createElement("div",{className:"col-1 co"},n.a.createElement("span",null,"   ")),n.a.createElement("div",{class:"col-1 "}),n.a.createElement("div",{class:"col-1 "},n.a.createElement("span",{className:"logo"}," ")),n.a.createElement("div",{class:"col-2 co"},n.a.createElement("span",{className:"name he"},"  ")),n.a.createElement("div",{class:"col-4 co alignRight shit"},"Tax 17%"),n.a.createElement("div",{class:"col-3 co shit"},n.a.createElement("span",null,n.a.createElement("span",{className:"shit"}," ",e.total+20+5,"$ + ",(.17*(e.total+20+5)).toFixed(2),"$  =")))),n.a.createElement("div",{class:"row r2"},n.a.createElement("div",{className:"col-1 co"},n.a.createElement("span",null,"   ")),n.a.createElement("div",{class:"col-1 "}),n.a.createElement("div",{class:"col-1 "},n.a.createElement("span",{className:"logo"}," ")),n.a.createElement("div",{class:"col-6 co alignRight gt"},"Grand Total (including Tax):"),n.a.createElement("div",{class:"col-3 co  "},n.a.createElement("span",null,n.a.createElement("span",{className:"price he"}," ",(.17*(e.total+20+5)+(e.total+20+5)).toFixed(2),"$    ")))))}var N=function(e){Object(i.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(r.a)(this,t);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).useRemove=function(){e.props.remove(e.props.id,e.props.price)},e}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{class:"row "},n.a.createElement("div",{class:"col-1 co r"},n.a.createElement("button",{onClick:this.useRemove,className:"removeButton"},"  \u2716 ")),n.a.createElement("div",{class:"col-1 "}),n.a.createElement("div",{class:"col-1 "},n.a.createElement("span",{className:"logo"}," ",this.props.logo," ")),n.a.createElement("div",{class:"col-3 co"},n.a.createElement("span",{className:"name"}," ",this.props.name," ")),n.a.createElement("div",{class:"col-3"}),n.a.createElement("div",{class:"col-3 co "},n.a.createElement("span",null,n.a.createElement("span",{className:"price"}," ",this.props.price,"$ "))))}}]),t}(c.Component);function b(e){return e.home?n.a.createElement("div",{className:"shopbox"},n.a.createElement(u,null)):e.cart?n.a.createElement("div",{className:"shopbox"},n.a.createElement("h3",null,"Cart:"),n.a.createElement(g,{remove:e.remove,items:e.cartItems,counter:e.counter,total:e.total,count:e.counter})):e.shop?n.a.createElement("div",{className:"shopbox"},n.a.createElement("h3",null," Welcome To Fruit Shop"),v.map((function(a){return n.a.createElement(E,{add:e.add,logo:a.logo,name:a.name,price:a.price,key:a.id,id:a.id})}))):void 0}var f=function(e){Object(i.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(r.a)(this,t);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={cartItems:[{logo:"\ud83c\udf4a",name:"Tangerine FREE",price:0,amount:1,id:0}],counter:1,totalPrice:0,home:!0,shop:!1,cart:!1},e.changeToCart=function(){e.setState({home:!1,shop:!1,cart:!0})},e.changeToShop=function(){e.setState({home:!1,shop:!0,cart:!1})},e.changeToHome=function(){e.setState({home:!0,shop:!1,cart:!1})},e.addItem=function(a,t,c){e.setState({counter:e.state.counter+1}),e.setState({cartItems:[].concat(Object(o.a)(e.state.cartItems),[{logo:a,name:t,price:c,amount:1,id:e.state.counter}])}),e.setState({totalPrice:e.state.totalPrice+c})},e.removeItem=function(a,t){e.setState((function(e){return{cartItems:e.cartItems.filter((function(e){return e.id!==a}))}})),e.setState({totalPrice:e.state.totalPrice-t}),e.setState({counter:e.state.counter-1})},e.resetCart=function(){e.setState({cartItems:[{logo:"\ud83c\udf4a",name:"Tangerine FREE",price:0,amount:1,id:0}]}),e.setState({counter:1}),e.setState({totalPrice:0})},e}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,{toCart:this.changeToCart,toHome:this.changeToHome}),n.a.createElement("div",{className:"mainWindow"},n.a.createElement(b,{add:this.addItem,remove:this.removeItem,cartItems:this.state.cartItems,total:this.state.totalPrice,counter:this.state.counter,home:this.state.home,shop:this.state.shop,cart:this.state.cart})),n.a.createElement("div",{className:"sideWindow"},n.a.createElement("h1",null),n.a.createElement(d,{toCart:this.changeToCart,toShop:this.changeToShop,toHome:this.changeToHome,clear:this.resetCart}),n.a.createElement("div",null,n.a.createElement("span",null,"Items in cart: "),n.a.createElement("span",null," ",this.state.counter," ")),n.a.createElement("span",null,"Total Price: "),n.a.createElement("span",null," ",this.state.totalPrice," $ ")))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f7eb6d15.chunk.js.map