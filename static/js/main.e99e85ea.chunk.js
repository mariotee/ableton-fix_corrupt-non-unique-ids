(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(4),r=n.n(o),i=(n(12),n(13),n(2)),c=n.n(i),s=n(5),u=n(1),h=n(6),m=n.n(h);function f(e){return e.match(/id$/i)}function p(e){for(var t=0,n=Object.keys(e);t<n.length;t++){if(e[n[t]]instanceof Object)return!1}return!0}function d(e,t,n,a){var l;if((l=e)instanceof Object&&!(l instanceof Array))for(var o=[],r=0,i=Object.keys(e);r<i.length;r++){var c=i[r],s=t+"."+c;o.includes(e[c])&&f(c)?a.push({path:s,val:e[c]}):o.push(e[c]),d(e[c],s,n+1,a)}else if(function(e){return e instanceof Object&&e instanceof Array}(e)){var u=[];for(var h in e){var m=e[h];if(p(m))for(var w=0,v=Object.keys(m);w<v.length;w++){var y=v[w],E=t+"[".concat(h,"].").concat(y);u.includes(m[y])&&f(y)?a.push({path:E,val:m[y]}):u.push(m[y])}else d(e[h],"".concat(t,"[").concat(h,"]"),n+1,a)}}return a}var w=function(){var e=l.a.useState(),t=Object(u.a)(e,2),n=t[0],a=t[1],o=l.a.useState(!1),r=Object(u.a)(o,2),i=r[0],h=r[1],f=l.a.useState(""),p=Object(u.a)(f,2),w=p[0],v=p[1],y=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,l,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!0),t=JSON.parse(n),a=[],l=d(t.Ableton,"Ableton",0,a),o=0,l.map((function(e){return m.a.set(t,e.path,"".concat(99999+o++))})),v(JSON.stringify(t)),h(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"main-ui"},l.a.createElement("h1",null,"Ableton Corrupted Ids Fix"),l.a.createElement("p",null,"To get started using this tool, you will need to do some tasks beforehand"),l.a.createElement("ol",null,l.a.createElement("li",null,'Make a copy of .als file and rename it, appending ".zip" to the end'),l.a.createElement("li",null,"Unzip the new .zip file to get an uncompressed ALS file"),l.a.createElement("li",null,"This is actually an XML file now, so upload the XML to ",l.a.createElement("a",{href:"https://www.convertjson.com/xml-to-json.htm"},"this site here")),l.a.createElement("li",null,"This will convert to a JSON file; download it and upload here"),l.a.createElement("li",null,'Click "Get New JSON" to get the text for the new JSON with duplicate keys renamed'),l.a.createElement("li",null,"Copy/Paste the new JSON text to ",l.a.createElement("a",{href:"https://www.convertjson.com/json-to-xml.htm"},"this sibling site")," to get XML back"),l.a.createElement("li",null,"Be patient as it may take a long time to copy/paste long text"),l.a.createElement("li",null,'Download result as XML, and then rename to ".als"; it should open in Ableton')),l.a.createElement("h3",null,"Import your project JSON"),l.a.createElement("input",{type:"file",onChange:function(e){return function(e){var t=new FileReader;t.onloadend=function(){a(t.result)},t.readAsText(e)}(e.target.files[0])}}),l.a.createElement("button",{onClick:y},"Get New JSON"),l.a.createElement("section",null,i?l.a.createElement("h5",null,"Processing..."):null,l.a.createElement("h3",null,"Output JSON"),l.a.createElement("textarea",{readOnly:!0,rows:24,cols:80,value:w})),l.a.createElement("p",{className:"disclaimer"},"DISCLAIMER: I am not liable for any damage done to your original file. This is why step 1 is absolutely crucial. You should still send your file to Ableton support to see if they can fix it. They will definitely do a much better job than this tool."))};var v=function(){return l.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.e99e85ea.chunk.js.map