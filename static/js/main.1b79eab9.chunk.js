(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{53:function(e,t,n){e.exports=n(86)},58:function(e,t,n){},59:function(e,t,n){},74:function(e,t){},76:function(e,t){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(50),o=n.n(r),c=(n(58),n(59),n(52)),i=n(16),u=n(51),s=n.n(u);function m(e){return e.match(/id$/i)}function d(e){for(var t=0,n=Object.keys(e);t<n.length;t++){if(e[n[t]]instanceof Object)return!1}return!0}var h=function(e){var t,n=l.a.useState([]),a=Object(i.a)(n,2),r=a[0],o=a[1],u=l.a.useState(),h=Object(i.a)(u,2),f=h[0],p=h[1],E=l.a.useState(!1),v=Object(i.a)(E,2),b=v[0],y=v[1],g=function(){p(t.result)};return l.a.createElement("div",null,l.a.createElement("h1",null,"Ableton Corrupted Ids Fix"),l.a.createElement("p",null,"To get started using this tool, you will need to do some tasks beforehand"),l.a.createElement("ol",null,l.a.createElement("li",null,'Make a copy of .als file and rename it, appending ".zip" to the end'),l.a.createElement("li",null,"Unzip the new .zip file to get an uncompressed ALS file"),l.a.createElement("li",null,"This is actually an XML file now, so upload the XML here"),l.a.createElement("li",null,'Once you click "Get List", you will see a list of all the keys in your XML where there are duplicate nodes that have their keys ending with "id"'),l.a.createElement("li",null,"Use the error message from Ableton to help find the right duplicates to remove ",l.a.createElement("br",null),l.a.createElement("em",null,"for example:"),l.a.createElement("pre",null,'The document "______" is corrupt. (Non-unique Note ids)'),l.a.createElement("em",null,'This means that you should look for keys with duplicate "Note Id" values'))),l.a.createElement("div",null,"Import your project XML"),l.a.createElement("input",{type:"file",onChange:function(e){return n=e.target.files[0],(t=new FileReader).onloadend=g,void t.readAsText(n);var n}}),l.a.createElement("button",{onClick:function(){s.a.parseString(f,(function(e,t){e?console.log(e):(y(!0),function e(t,n,a,l){var r;if((r=t)instanceof Object&&!(r instanceof Array))for(var o=[],c=0,i=Object.keys(t);c<i.length;c++){var u=i[c],s=n+" > "+u;o.includes(t[u])&&m(u)?l.push({path:s,val:t[u]}):o.push(t[u]),e(t[u],s,a+1,l)}else if(function(e){return e instanceof Object&&e instanceof Array}(t)){var h=[];for(var f in t){var p=t[f];if(d(p))for(var E=0,v=Object.keys(p);E<v.length;E++){var b=v[E],y=n+" > "+b;h.includes(p[b])&&m(b)?l.push({path:y,val:p[b]}):h.push(p[b])}else e(t[f],"".concat(n,"[").concat(f,"]"),a+1,l)}}}(t.Ableton,"Ableton",0,r),o(Object(c.a)(r)),y(!1))}))}},"Get List"),l.a.createElement("section",null,l.a.createElement("div",null,b&&"processing..."),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"PATH"),l.a.createElement("td",null,"VALUE"))),l.a.createElement("tbody",null,r.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.path),l.a.createElement("td",null,e.val))}))))))};var f=function(){return l.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.1b79eab9.chunk.js.map