(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,n){e.exports=n(69)},69:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),r=n(43),o=n.n(r),s=n(12),c=n(27),l=(n(57),n(71),n(70),c.a.initializeApp({apiKey:"AIzaSyDH6rySddl7QAoqkwATwz7CgXrPe7LQis8",authDomain:"croquistool.firebaseapp.com",projectId:"croquistool",storageBucket:"croquistool.appspot.com",messagingSenderId:"843301254465",appId:"1:843301254465:web:046d03ff7cf7e8619f9dc0",measurementId:"G-JT9C23VQFT"})),u=c.a.auth(),h=c.a.firestore(),d=(c.a.storage(),n(17)),f=n(31),p=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,"Profile"),i.a.createElement("button",{onClick:function(){return u.signOut()}},"Log Out"))},v=n(0),m=n.n(v),w=n(2),g=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),c=Object(s.a)(o,2),l=c[0],h=c[1],d=Object(a.useState)(!0),f=Object(s.a)(d,2),p=f[0],v=f[1],g=Object(a.useState)(""),b=Object(s.a)(g,2),y=b[0],S=b[1],x=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&h(a)},O=function(){var e=Object(w.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,u.createUserWithEmailAndPassword(n,l);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,u.signInWithEmailAndPassword(n,l);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),S(e.t0.message);case 17:case"end":return e.stop()}},e,null,[[1,14]])}));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:O},i.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:x}),i.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:l,onChange:x}),i.a.createElement("input",{type:"submit",value:p?"Create Account":"Log In"}),y),i.a.createElement("span",{onClick:function(){return v(function(e){return!e})}},p?"Sign In":"Create Account"),i.a.createElement("div",null,i.a.createElement("button",null,"Continue with Google"),i.a.createElement("button",null,"Continue with Github")))},b=n(23),y=n(14),S=n(1),x=n(3),O=n(11),D=n(7),E=n(10),C=n(15),j=n(44),M=n(45),P=n(46),z=Object.freeze({x:0,y:0,untransformedX:0,untransformedY:0}),L=Object.freeze({canvasWidth:0,canvasHeight:0,left:0,top:0,right:0,bottom:0,viewMin:z,viewMax:z}),R=Object.freeze({a:1,b:0,c:0,d:1,e:0,f:0});var T=function(){function e(t){var n=this,a=t.scaleExtents,i=t.documentSize;Object(S.a)(this,e),this._canvas=null,this._view={scale:1,x:0,y:0},this._viewChangeListeners=new Set,this.setScale=function(e){n.setView({scale:e})},this.clampView=function(e){var t=e.scale,a=e.x,i=e.y,r=n.scaleExtents,o=r.min,s=r.max,c=n.documentSize,l=c.width,u=c.height,h=n.canvasRect||L,d=h.left,f=h.top,p=h.right-d,v=h.bottom-f,m=p/2,w=-(l*n._view.scale-p/2),g=v/2,b=-(u*n._view.scale-v/2);return{scale:Math.min(Math.max(t,o),s),x:Math.min(Math.max(a,w),m),y:Math.min(Math.max(i,b),g)}},this.resetView=function(){n.setView({scale:1,x:0,y:0})},this.setView=function(e){var t=n.clampView(Object(b.a)({},n._view,e||{})),a=n._view,i=a.scale,r=a.x,o=a.y;return t.scale===i&&t.x===r&&t.y===o||(n._view=t,n._viewChangeListeners.forEach(function(e){return e&&e(t)})),Object(b.a)({},n._view)},this.scaleAtClientPoint=function(e,t){var a=n.clientPointToViewPoint(t),i=n.clampView(Object(b.a)({},n._view,{scale:n._view.scale+e})),r=n.viewPointToClientPoint(a,i);return i.x=n._view.x-(r.clientX-t.clientX),i.y=n._view.y-(r.clientY-t.clientY),n.setView(i)},this.clientPointToViewPoint=function(e){var t=e.clientX,a=e.clientY,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n._view,r=n.canvasRect||L,o=t-r.left,s=a-r.top;return{x:(o-i.x)/i.scale,y:(s-i.y)/i.scale,relativeClientX:o,relativeClientY:s}},this.viewPointToClientPoint=function(e){var t=e.x,a=e.y,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n._view,r=n.canvasRect||L,o=r.left,s=r.top,c=t*i.scale+i.x,l=a*i.scale+i.y,u=c+o,h=l+s;return{clientX:u,clientY:h,relativeX:c,relativeY:l,x:u,y:h}},this.attachViewChangeListener=function(e){n._viewChangeListeners.add(e)},this._scaleExtents=a,this._documentSize=i}return Object(x.a)(e,[{key:"canvas",get:function(){return this._canvas},set:function(e){this._canvas=e,this.setView()}},{key:"scale",get:function(){return this._view.scale}},{key:"x",get:function(){return this._view.x},set:function(e){this.setView({x:e})}},{key:"y",get:function(){return this._view.y},set:function(e){this.setView({y:e})}},{key:"view",get:function(){return Object(b.a)({},this._view)}},{key:"scaleExtents",get:function(){return Object(b.a)({},this._scaleExtents)},set:function(e){var t=e.min,n=e.max;this._scaleExtents={min:t,max:n},this.setView()}},{key:"documentSize",get:function(){return Object(b.a)({},this._documentSize)},set:function(e){var t=e.width,n=e.height;this._documentSize={width:t,height:n},this.setView()}},{key:"transformMatrix",get:function(){return{a:this._view.scale,b:0,c:0,d:this._view.scale,e:this._view.x,f:this._view.y}}},{key:"canvasBounds",get:function(){if(this._canvas){var e=this._canvas.getBoundingClientRect(),t=e.left,n=e.top,a=e.right,i=e.bottom;return{viewMin:this.clientPointToViewPoint({clientX:t,clientY:n}),viewMax:this.clientPointToViewPoint({clientX:a,clientY:i}),left:t,top:n,right:a,bottom:i,canvasWidth:this._canvas.width,canvasHeight:this._canvas.height}}}},{key:"canvasRect",get:function(){return this.canvas?this.canvas.getBoundingClientRect():void 0}}]),e}();var k=function(e){e.preventDefault()},W=function e(){var t=this;Object(S.a)(this,e),this.handleMouseWheel=function(e,n){var a=n.props,i=a.disabled,r=a.enablePanAndZoom,o=a.mouseZoomFactor;return i?new I:(r&&e.ctrlKey&&(e.preventDefault(),n.coordSystem.scaleAtClientPoint(o*e.deltaY,B(e))),t)},this.handleDrawStart=function(e,t){return t.props.disabled?new I:e.ctrlKey&&t.props.enablePanAndZoom?(new _).handleDrawStart(e,t):(new V).handleDrawStart(e,t)},this.handleDrawMove=function(e,n){if(n.props.disabled)return new I;var a=F(n.coordSystem,e),i=a.x,r=a.y;return n.lazy.update({x:i,y:r}),t},this.handleDrawEnd=function(e,n){return n.props.disabled?new I:t}},I=function e(){var t=this;Object(S.a)(this,e),this.handleMouseWheel=function(e,n){return n.props.disabled?t:(new W).handleMouseWheel(e,n)},this.handleDrawStart=function(e,n){return n.props.disabled?t:(new W).handleDrawStart(e,n)},this.handleDrawMove=function(e,n){return n.props.disabled?t:(new W).handleDrawMove(e,n)},this.handleDrawEnd=function(e,n){return n.props.disabled?t:(new W).handleDrawEnd(e,n)}},_=function e(){var t=this;Object(S.a)(this,e),this.handleMouseWheel=k.bind(this),this.handleDrawStart=function(e,n){return e.preventDefault(),t.dragStart=B(e),t.panStart={x:n.coordSystem.x,y:n.coordSystem.y},t},this.handleDrawMove=function(e,n){e.preventDefault();var a=B(e),i=a.clientX,r=a.clientY,o=i-t.dragStart.clientX,s=r-t.dragStart.clientY;return n.coordSystem.setView({x:t.panStart.x+o,y:t.panStart.y+s}),t},this.handleDrawEnd=function(){return new W}},V=function e(){var t=this;Object(S.a)(this,e),this.handleMouseWheel=k.bind(this),this.handleDrawStart=function(e,n){var a=n.props.enablePanAndZoom;return e.preventDefault(),e.touches&&e.touches.length&&a?a&&e.touches&&e.touches.length>=2?(new Y).handleDrawStart(e,n):t.handleDrawMove(e,n):(new H).handleDrawStart(e,n)},this.handleDrawMove=function(e,n){if(e.preventDefault(),e.touches&&e.touches.length>=2)return(new Y).handleDrawStart(e,n);var a=B(e);if((t.deferredPoints.push(a),(new Date).valueOf()-t.startTimestamp<250)&&(null===t.startClientPoint&&(t.startClientPoint=a),Math.abs(a.clientX-t.startClientPoint.clientX)+Math.abs(a.clientY-t.startClientPoint.clientY)<10))return t;return t.issueDeferredPoints(n)},this.handleDrawEnd=function(e,n){return t.issueDeferredPoints(n).handleDrawEnd(e,n)},this.issueDeferredPoints=function(e){for(var n=new H,a=0;a<t.deferredPoints.length;a++){var i=t.deferredPoints[a],r=new U(i);n=(0===a?n.handleDrawStart:n.handleDrawMove)(r,e)}return n},this.startClientPoint=null,this.startTimestamp=(new Date).valueOf(),this.deferredPoints=[]},Y=function e(){var t=this;Object(S.a)(this,e),this.handleMouseWheel=k.bind(this),this.handleDrawStart=function(e,n){return e.preventDefault(),!e.touches||e.touches.length<2?new W:(t.start=t.getTouchMetrics(e),t.panStart={x:n.coordSystem.x,y:n.coordSystem.y},t.scaleStart=n.coordSystem.scale,t)},this.handleDrawMove=function(e,n){if(e.preventDefault(),!e.touches||e.touches.length<2)return new W;var a=t.recentMetrics=t.getTouchMetrics(e),i=a.centroid,r=a.distance;if(Math.abs(r-t.start.distance)>=10)return new A(t).handleDrawMove(e,n);var o=i.clientX-t.start.centroid.clientX,s=i.clientY-t.start.centroid.clientY;return Math.abs(o)+Math.abs(s)>=10?new X(t).handleDrawMove(e,n):t},this.handleDrawEnd=function(){return new W},this.getTouchMetrics=function(e){var t=B(e.touches[0]),n=t.clientX,a=t.clientY,i=B(e.touches[1]),r=i.clientX,o=i.clientY,s=r-n,c=o-a;return{t1:{clientX:n,clientY:a},t2:{clientX:r,clientY:o},distance:Math.sqrt(s*s+c*c),centroid:{clientX:(n+r)/2,clientY:(a+o)/2}}}},X=function e(t){var n=this;Object(S.a)(this,e),this.handleMouseWheel=k.bind(this),this.handleDrawStart=function(){return n},this.handleDrawMove=function(e,t){if(e.preventDefault(),!e.touches||e.touches.length<2)return new W;var a=n.scaleOrPanState,i=a.recentMetrics=a.getTouchMetrics(e),r=i.centroid,o=(i.distance,r.clientX-a.start.centroid.clientX),s=r.clientY-a.start.centroid.clientY;return t.setView({x:a.panStart.x+o,y:a.panStart.y+s}),n},this.handleDrawEnd=function(){return new W},this.scaleOrPanState=t},A=function e(t){var n=this;Object(S.a)(this,e),this.handleMouseWheel=k.bind(this),this.handleDrawStart=function(){return n},this.handleDrawMove=function(e,t){if(e.preventDefault(),!e.touches||e.touches.length<2)return new W;var a=n.scaleOrPanState,i=a.recentMetrics=a.getTouchMetrics(e),r=i.centroid,o=i.distance,s=a.scaleStart*(o/a.start.distance)-t.coordSystem.scale;return t.coordSystem.scaleAtClientPoint(s,r),n},this.handleDrawEnd=function(){return new W},this.scaleOrPanState=t},H=function e(){var t=this;Object(S.a)(this,e),this.handleMouseWheel=k.bind(this),this.handleDrawStart=function(e,n){if(e.preventDefault(),e.touches&&e.touches.length){var a=F(n.coordSystem,e),i=a.x,r=a.y;n.lazy.update({x:i,y:r},{both:!0})}return t.handleDrawMove(e,n)},this.handleDrawMove=function(e,n){e.preventDefault();var a=F(n.coordSystem,e),i=a.x,r=a.y;n.lazy.update({x:i,y:r});var o=!n.lazy.isEnabled();return t.isDrawing&&!o||(n.points.push(n.clampPointToDocument(n.lazy.brush.toObject())),t.isDrawing=!0),n.points.push(n.clampPointToDocument(n.lazy.brush.toObject())),n.drawPoints({points:n.points,brushColor:n.props.brushColor,brushRadius:n.props.brushRadius}),t},this.handleDrawEnd=function(e,n){return e.preventDefault(),t.handleDrawMove(e,n),n.saveLine(),new W},this.isDrawing=!1},U=function e(t){var n=t.clientX,a=t.clientY;Object(S.a)(this,e),this.preventDefault=function(){},this.clientX=n,this.clientY=a,this.touches=[{clientX:n,clientY:a}]};function B(e){var t=e.clientX,n=e.clientY;return e.changedTouches&&e.changedTouches.length>0&&(t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY),{clientX:t,clientY:n}}function F(e,t){return e.clientPointToViewPoint(B(t))}var G=!1;try{var q={get passive(){return G=!0,!1}};window.addEventListener("test",q,q),window.removeEventListener("test",q,q)}catch(ie){G=!1}function J(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw r}}}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Z(e,t){return{x:e.x+(t.x-e.x)/2,y:e.y+(t.y-e.y)/2}}var K={display:"block",position:"absolute"},Q=["grid","drawing","temp","interface"],$=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(O.a)(this,Object(D.a)(t).call(this,e))).undo=function(){var e=[];n.lines.length?e=n.lines.slice(0,-1):n.erasedLines.length&&(e=n.erasedLines.pop()),n.clearExceptErasedLines(),n.simulateDrawingLines({lines:e,immediate:!0}),n.triggerOnChange()},n.eraseAll=function(){n.erasedLines.push(Object(y.a)(n.lines)),n.clearExceptErasedLines(),n.triggerOnChange()},n.clear=function(){n.erasedLines=[],n.clearExceptErasedLines(),n.resetView()},n.resetView=function(){return n.coordSystem.resetView()},n.setView=function(e){return n.coordSystem.setView(e)},n.getSaveData=function(){return JSON.stringify({lines:n.lines,width:n.props.canvasWidth,height:n.props.canvasHeight})},n.getDataURL=function(e,t,a){var i=n.canvas.drawing,r=i.getContext("2d"),o=i.width,s=i.height,c=r.getImageData(0,0,o,s),l=r.globalCompositeOperation;if(r.globalCompositeOperation="destination-over",t){if(!n.props.imgSrc)return"Background image source not set";n.drawImage()}else null!=a&&(r.fillStyle=a,r.fillRect(0,0,o,s));e||(e="png");var u=i.toDataURL("image/".concat(e));return r.clearRect(0,0,o,s),r.putImageData(c,0,0),r.globalCompositeOperation=l,u},n.loadSaveData=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.props.immediateLoading;if("string"!==typeof e)throw new Error("saveData needs to be of type string!");var a=JSON.parse(e),i=a.lines,r=a.width,o=a.height;if(!i||"function"!==typeof i.push)throw new Error("saveData.lines needs to be an array!");if(n.clear(),r===n.props.canvasWidth&&o===n.props.canvasHeight)n.simulateDrawingLines({lines:i,immediate:t});else{var s=n.props.canvasWidth/r,c=n.props.canvasHeight/o,l=(s+c)/2;n.simulateDrawingLines({lines:i.map(function(e){return Object(b.a)({},e,{points:e.points.map(function(e){return{x:e.x*s,y:e.y*c}}),brushRadius:e.brushRadius*l})}),immediate:t})}},n.componentWillUnmount=function(){n.canvasObserver.unobserve(n.canvasContainer),n.canvas.interface&&n.canvas.interface.removeEventListener("wheel",n.handleWheel)},n.handleWheel=function(e){n.interactionSM=n.interactionSM.handleMouseWheel(e,Object(C.a)(Object(C.a)(n)))},n.handleDrawStart=function(e){n.interactionSM=n.interactionSM.handleDrawStart(e,Object(C.a)(Object(C.a)(n))),n.mouseHasMoved=!0},n.handleDrawMove=function(e){n.interactionSM=n.interactionSM.handleDrawMove(e,Object(C.a)(Object(C.a)(n))),n.mouseHasMoved=!0},n.handleDrawEnd=function(e){n.interactionSM=n.interactionSM.handleDrawEnd(e,Object(C.a)(Object(C.a)(n))),n.mouseHasMoved=!0},n.applyView=function(){if(n.ctx.drawing&&(Q.map(function(e){return n.ctx[e]}).forEach(function(e){n.clearWindow(e);var t=n.coordSystem.transformMatrix;e.setTransform(t.a,t.b,t.c,t.d,t.e,t.f)}),!n.deferRedrawOnViewChange)){n.drawGrid(n.ctx.grid),n.redrawImage(),n.loop({once:!0});var e=n.lines;n.lines=[],n.simulateDrawingLines({lines:e,immediate:!0})}},n.handleCanvasResize=function(e){var t=n.getSaveData();n.deferRedrawOnViewChange=!0;try{var a,i=J(e);try{for(i.s();!(a=i.n()).done;){var r=a.value.contentRect,o=r.width,s=r.height;n.setCanvasSize(n.canvas.interface,o,s),n.setCanvasSize(n.canvas.drawing,o,s),n.setCanvasSize(n.canvas.temp,o,s),n.setCanvasSize(n.canvas.grid,o,s),n.coordSystem.documentSize={width:o,height:s},n.drawGrid(n.ctx.grid),n.drawImage(),n.loop({once:!0})}}catch(c){i.e(c)}finally{i.f()}n.loadSaveData(t,!0)}finally{n.deferRedrawOnViewChange=!1}},n.clampPointToDocument=function(e){return n.props.clampLinesToDocument?{x:Math.max(Math.min(e.x,n.props.canvasWidth),0),y:Math.max(Math.min(e.y,n.props.canvasHeight),0)}:e},n.redrawImage=function(){n.image&&n.image.complete&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ctx,n=e.img,a=e.x,i=e.y,r=e.w,o=e.h,s=e.offsetX,c=e.offsetY;"number"!==typeof a&&(a=0),"number"!==typeof i&&(i=0),"number"!==typeof r&&(r=t.canvas.width),"number"!==typeof o&&(o=t.canvas.height),"number"!==typeof s&&(s=.5),"number"!==typeof c&&(c=.5),s<0&&(s=0),c<0&&(c=0),s>1&&(s=1),c>1&&(c=1);var l,u,h,d,f=n.width,p=n.height,v=Math.min(r/f,o/p),m=f*v,w=p*v,g=1;m<r&&(g=r/m),Math.abs(g-1)<1e-14&&w<o&&(g=o/w),(l=(f-(h=f/((m*=g)/r)))*s)<0&&(l=0),(u=(p-(d=p/((w*=g)/o)))*c)<0&&(u=0),h>f&&(h=f),d>p&&(d=p),t.drawImage(n,l,u,h,d,a,i,r,o)}({ctx:n.ctx.grid,img:n.image})},n.simulateDrawingLines=function(e){var t=e.lines,a=e.immediate,i=0,r=a?0:n.props.loadTimeOffset;t.forEach(function(e){var t=e.points,o=e.brushColor,s=e.brushRadius;if(a)return n.drawPoints({points:t,brushColor:o,brushRadius:s}),n.points=t,void n.saveLine({brushColor:o,brushRadius:s});for(var c=function(e){i+=r,window.setTimeout(function(){n.drawPoints({points:t.slice(0,e+1),brushColor:o,brushRadius:s})},i)},l=1;l<t.length;l++)c(l);i+=r,window.setTimeout(function(){n.points=t,n.saveLine({brushColor:o,brushRadius:s})},i)})},n.setCanvasSize=function(e,t,n){e.width=t,e.height=n,e.style.width=t,e.style.height=n},n.drawPoints=function(e){var t=e.points,a=e.brushColor,i=e.brushRadius;n.ctx.temp.lineJoin="round",n.ctx.temp.lineCap="round",n.ctx.temp.strokeStyle=a,n.clearWindow(n.ctx.temp),n.ctx.temp.lineWidth=2*i;var r=t[0],o=t[1];n.ctx.temp.moveTo(o.x,o.y),n.ctx.temp.beginPath();for(var s=1,c=t.length;s<c;s++){var l=Z(r,o);n.ctx.temp.quadraticCurveTo(r.x,r.y,l.x,l.y),r=t[s],o=t[s+1]}n.ctx.temp.lineTo(r.x,r.y),n.ctx.temp.stroke()},n.saveLine=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.brushColor,a=e.brushRadius;n.points.length<2||(n.lines.push({points:Object(y.a)(n.points),brushColor:t||n.props.brushColor,brushRadius:a||n.props.brushRadius}),n.points.length=0,n.inClientSpace([n.ctx.drawing,n.ctx.temp],function(){n.ctx.drawing.drawImage(n.canvas.temp,0,0,n.canvas.drawing.width,n.canvas.drawing.height)}),n.clearWindow(n.ctx.temp),n.triggerOnChange())},n.triggerOnChange=function(){n.props.onChange&&n.props.onChange(Object(C.a)(Object(C.a)(n)))},n.clearWindow=function(e){n.inClientSpace([e],function(){return e.clearRect(0,0,e.canvas.width,e.canvas.height)})},n.clearExceptErasedLines=function(){n.lines=[],n.valuesChanged=!0,n.clearWindow(n.ctx.drawing),n.clearWindow(n.ctx.temp)},n.loop=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).once,t=void 0!==e&&e;if(n.mouseHasMoved||n.valuesChanged){var a=n.lazy.getPointerCoordinates(),i=n.lazy.getBrushCoordinates();n.drawInterface(n.ctx.interface,a,i),n.mouseHasMoved=!1,n.valuesChanged=!1}t||window.requestAnimationFrame(function(){n.loop()})},n.inClientSpace=function(e,t){e.forEach(function(e){e.save(),e.setTransform(R.a,R.b,R.c,R.d,R.e,R.f)});try{t()}finally{e.forEach(function(e){return e.restore()})}},n.drawImage=function(){n.props.imgSrc&&(n.image=new Image,n.image.crossOrigin="anonymous",n.image.onload=n.redrawImage,n.image.src=n.props.imgSrc)},n.drawGrid=function(e){if(!n.props.hideGrid){n.clearWindow(e);var t=n.coordSystem.canvasBounds,a=t.viewMin,i=t.viewMax,r=25*Math.floor(a.x/25-1),o=25*Math.floor(a.y/25-1),s=i.x+25,c=i.y+25;if(e.beginPath(),e.setLineDash([5,1]),e.setLineDash([]),e.strokeStyle=n.props.gridColor,e.lineWidth=n.props.gridLineWidth,!n.props.hideGridX){for(var l=r,u=n.props.gridSizeX;l<s;)l+=u,e.moveTo(l,o),e.lineTo(l,c);e.stroke()}if(!n.props.hideGridY){for(var h=o,d=n.props.gridSizeY;h<c;)h+=d,e.moveTo(r,h),e.lineTo(s,h);e.stroke()}}},n.drawInterface=function(e,t,a){n.props.hideInterface||(n.clearWindow(e),e.beginPath(),e.fillStyle=n.props.brushColor,e.arc(a.x,a.y,n.props.brushRadius,0,2*Math.PI,!0),e.fill(),e.beginPath(),e.fillStyle=n.props.catenaryColor,e.arc(t.x,t.y,4,0,2*Math.PI,!0),e.fill(),n.lazy.isEnabled()&&(e.beginPath(),e.lineWidth=2,e.lineCap="round",e.setLineDash([2,4]),e.strokeStyle=n.props.catenaryColor,n.catenary.drawToCanvas(n.ctx.interface,a,t,n.chainLength),e.stroke()),e.beginPath(),e.fillStyle=n.props.catenaryColor,e.arc(a.x,a.y,2,0,2*Math.PI,!0),e.fill())},n.canvas={},n.ctx={},n.catenary=new M.Catenary,n.points=[],n.lines=[],n.erasedLines=[],n.mouseHasMoved=!0,n.valuesChanged=!0,n.isDrawing=!1,n.isPressing=!1,n.deferRedrawOnViewChange=!1,n.interactionSM=new W,n.coordSystem=new T({scaleExtents:e.zoomExtents,documentSize:{width:e.canvasWidth,height:e.canvasHeight}}),n.coordSystem.attachViewChangeListener(n.applyView.bind(Object(C.a)(Object(C.a)(n)))),n}return Object(E.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;this.lazy=new j.LazyBrush({radius:this.props.lazyRadius*window.devicePixelRatio,enabled:!0,initialPoint:{x:window.innerWidth/2,y:window.innerHeight/2}}),this.chainLength=this.props.lazyRadius*window.devicePixelRatio,this.canvasObserver=new P.a(function(e,n){return t.handleCanvasResize(e,n)}),this.canvasObserver.observe(this.canvasContainer),this.drawImage(),this.loop(),window.setTimeout(function(){var e=window.innerWidth/2,n=window.innerHeight/2;t.lazy.update({x:e-t.chainLength/4,y:n},{both:!0}),t.lazy.update({x:e+t.chainLength/4,y:n},{both:!1}),t.mouseHasMoved=!0,t.valuesChanged=!0,t.clearExceptErasedLines(),t.props.saveData&&t.loadSaveData(t.props.saveData)},100),this.canvas.interface&&this.canvas.interface.addEventListener("wheel",this.handleWheel,G?{passive:e}:e)}},{key:"componentDidUpdate",value:function(e){e.lazyRadius!==this.props.lazyRadius&&(this.chainLength=this.props.lazyRadius*window.devicePixelRatio,this.lazy.setRadius(this.props.lazyRadius*window.devicePixelRatio)),e.saveData!==this.props.saveData&&this.loadSaveData(this.props.saveData),JSON.stringify(e)!==JSON.stringify(this.props)&&(this.valuesChanged=!0),this.coordSystem.scaleExtents=this.props.zoomExtents,this.props.enablePanAndZoom||this.coordSystem.resetView(),e.imgSrc!==this.props.imgSrc&&this.drawImage()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.props.className,style:Object(b.a)({display:"block",background:this.props.backgroundColor,touchAction:"none",width:this.props.canvasWidth,height:this.props.canvasHeight},this.props.style),ref:function(t){t&&(e.canvasContainer=t)}},Q.map(function(t){var n="interface"===t;return i.a.createElement("canvas",{key:t,ref:function(a){a&&(e.canvas[t]=a,e.ctx[t]=a.getContext("2d"),n&&(e.coordSystem.canvas=a))},style:Object(b.a)({},K),onMouseDown:n?e.handleDrawStart:void 0,onMouseMove:n?e.handleDrawMove:void 0,onMouseUp:n?e.handleDrawEnd:void 0,onMouseOut:n?e.handleDrawEnd:void 0,onTouchStart:n?e.handleDrawStart:void 0,onTouchMove:n?e.handleDrawMove:void 0,onTouchEnd:n?e.handleDrawEnd:void 0,onTouchCancel:n?e.handleDrawEnd:void 0})}))}}]),t}(a.PureComponent);$.defaultProps={onChange:null,loadTimeOffset:5,lazyRadius:12,brushRadius:10,brushColor:"#444",catenaryColor:"#0a0302",gridColor:"rgba(150,150,150,0.17)",backgroundColor:"#FFF",hideGrid:!1,canvasWidth:400,canvasHeight:400,disabled:!1,imgSrc:"",saveData:"",immediateLoading:!1,hideInterface:!1,gridSizeX:25,gridSizeY:25,gridLineWidth:.5,hideGridX:!1,hideGridY:!1,enablePanAndZoom:!1,mouseZoomFactor:.01,zoomExtents:{min:.33,max:3},clampLinesToDocument:!1};var ee=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(s.a)(n,2),o=(r[0],r[1]),l=Object(a.useState)([]),u=Object(s.a)(l,2),d=(u[0],u[1]),f=Object(a.useState)([]),p=Object(s.a)(f,2),v=(p[0],p[1],Object(a.useRef)()),g=Object(a.useState)(""),y=Object(s.a)(g,2),S=y[0],x=y[1],O=Object(a.useState)([]),D=Object(s.a)(O,2),E=D[0],C=D[1],j=Object(a.useState)(0),M=Object(s.a)(j,2),P=M[0],z=M[1],L=Object(a.useState)(0),R=Object(s.a)(L,2),T=R[0],k=R[1],W=Object(a.useState)(60),I=Object(s.a)(W,2),_=I[0],V=I[1],Y=Object(a.useState)(0),X=Object(s.a)(Y,2),A=X[0],H=X[1],U=Object(a.useState)(0),B=Object(s.a)(U,2),F=B[0],G=B[1],q=Object(a.useRef)(_),J=Object(a.useRef)(null),N=function(){z(P+1),k(T+1),console.log("timeout",E[T]),q.current=_;var e=v.current.getSaveData();v.current.clear(),h.collection("Csubmit").add({text:e,createdAt:Date.now(),creatorId:t.uid,heart:0}),o("")};Object(a.useEffect)(function(){return J.current=setInterval(function(){H(parseInt(q.current/60)),G(q.current%60),q.current-=1},1e3),function(){return clearInterval(J.current)}},[]),Object(a.useEffect)(function(){q.current<=-1&&N()},[F]),Object(a.useEffect)(function(){h.doc("RefDB/refStrings").get().then(function(e){if(e.exists){var t=e.data().refUrl.sort(function(){return Math.random()-.5});C(t)}else console.log("No such document!")}).catch(function(e){console.log("Error getting document:",e)}),h.collection("Csubmit").onSnapshot(function(e){var t=e.docs.map(function(e){return Object(b.a)({id:e.id},e.data())});d(t)})},[]);var Z=function(){var e=Object(w.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),N();case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(w.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),h.doc("RefDB/refStrings").update({refUrl:c.a.firestore.FieldValue.arrayUnion(S)}),x("");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(w.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:Q},i.a.createElement("input",{value:_,onChange:function(e){var t=e.target.value;V(t)},type:"number",placeholder:"Input Croquis Time"}),i.a.createElement("input",{type:"submit",value:"Set Time"})),i.a.createElement("div",null,A," \ubd84 ",F," \ucd08"),i.a.createElement("form",{onSubmit:K},i.a.createElement("input",{value:S,onChange:function(e){var t=e.target.value;x(t)},type:"text",placeholder:"You Can Upload Pinterst Pin By Url Number"}),i.a.createElement("input",{type:"submit",value:"Upload Pin"})),i.a.createElement("div",null,"https://assets.pinterest.com/ext/embed.html?id=",E[T],"    ",T),i.a.createElement("div",{style:{float:"left"}},i.a.createElement("iframe",{key:P,src:"https://assets.pinterest.com/ext/embed.html?id="+E[T],height:"998",width:"300",frameBorder:0,scrolling:"no"})),i.a.createElement("div",{style:{float:"left"}},i.a.createElement("div",null,i.a.createElement("form",{onSubmit:Z},i.a.createElement("input",{type:"submit",value:"Upload Your Drawing"}))),i.a.createElement($,{canvasWidth:500,canvasHeight:550,ref:v})))},te=function(){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(f.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(f.b,{to:"/profile"},"My Profile"))))},ne=function(e){var t=e.isLoggedIn,n=e.userObj;return i.a.createElement(f.a,null,t&&i.a.createElement(te,null),i.a.createElement(d.d,null,t?i.a.createElement(i.a.Fragment,null,i.a.createElement(d.b,{exact:!0,path:"/"},i.a.createElement(ee,{userObj:n})),i.a.createElement(d.b,{exact:!0,path:"/profile"},i.a.createElement(p,null)),i.a.createElement(d.a,{from:"*",to:"/"})):i.a.createElement(i.a.Fragment,null,i.a.createElement(d.b,{exact:!0,path:"/"},i.a.createElement(g,null)),i.a.createElement(d.a,{from:"*",to:"/"}))))};var ae=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),c=Object(s.a)(o,2),l=c[0],h=c[1],d=Object(a.useState)(null),f=Object(s.a)(d,2),p=f[0],v=f[1];return Object(a.useEffect)(function(){u.onAuthStateChanged(function(e){e?(h(!0),v(e)):h(!1),r(!0)})},[]),i.a.createElement(i.a.Fragment,null,n?i.a.createElement(ne,{isLoggedIn:l,userObj:p}):"Inisializing..")};console.log(l),o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ae,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.b5f98eb8.chunk.js.map