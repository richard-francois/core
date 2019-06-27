var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,s){function a(t){try{l(i.next(t))}catch(t){s(t)}}function o(t){try{l(i.throw(t))}catch(t){s(t)}}function l(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,o)}l((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,i,r,s,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,i=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){a.label=s[1];break}if(6===s[0]&&a.label<r[1]){a.label=r[1],r=s;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(s);break}r[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],i=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}};dotcmsFields.loadBundle("frcxe63c",["exports","./chunk-3873b584.js","./chunk-35cb6fec.js","./chunk-ce967dd2.js"],function(t,e,n,i){var r=window.dotcmsFields.h,s=e.createCommonjsModule(function(t,e){t.exports=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var e={resultsList:"autoComplete_results_list",result:"autoComplete_result",highlight:"autoComplete_highlighted"},n=function(t){return"string"==typeof t?document.querySelector(t):t()},i=function(t){return t.innerHTML=""},r={getInput:n,createResultsList:function(t){var n=document.createElement("ul");return t.container&&(e.resultsList=t.container(n)||e.resultsList),n.setAttribute("id",e.resultsList),t.destination.insertAdjacentElement(t.position,n),n},highlight:function(t){return"<span class=".concat(e.highlight,">").concat(t,"</span>")},addResultsToList:function(t,n,i,r){n.forEach(function(i,s){var a=document.createElement("li");a.setAttribute("data-result",n[s].value[i.key]||n[s].value),a.setAttribute("class",e.result),a.setAttribute("tabindex","1"),a.innerHTML=r?r(i,a):i.match||i,t.appendChild(a)})},navigation:function(t,e){var i=n(t),r=e.firstChild;document.onkeydown=function(t){var n=document.activeElement;switch(t.keyCode){case 38:n!==r&&n!==i?n.previousSibling.focus():n===r&&i.focus();break;case 40:n===i&&e.childNodes.length>0?r.focus():n!==e.lastChild&&n.nextSibling.focus()}}},clearResults:i,getSelection:function(t,r,s,a){var o=r.querySelectorAll(".".concat(e.result));Object.keys(o).forEach(function(l){["mousedown","keydown"].forEach(function(u){o[l].addEventListener(u,function(o){"mousedown"!==u&&13!==o.keyCode&&39!==o.keyCode||(s({event:o,query:n(t).value,matches:a.matches,results:a.list.map(function(t){return t.value}),selection:a.list.find(function(t){return(t.value[t.key]||t.value)===o.target.closest(".".concat(e.result)).getAttribute("data-result")})}),i(r))})})})}};return function(){function e(t){!function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.selector=t.selector||"#autoComplete",this.data={src:function(){return"function"==typeof t.data.src?t.data.src():t.data.src},key:t.data.key},this.searchEngine="loose"===t.searchEngine?"loose":"strict",this.threshold=t.threshold||0,this.resultsList=r.createResultsList({container:!(!t.resultsList||!t.resultsList.container)&&t.resultsList.container,destination:t.resultsList&&t.resultsList.destination?t.resultsList.destination:r.getInput(this.selector),position:t.resultsList&&t.resultsList.position?t.resultsList.position:"afterend"}),this.sort=t.sort||!1,this.placeHolder=t.placeHolder,this.maxResults=t.maxResults||5,this.resultItem=t.resultItem,this.highlight=t.highlight||!1,this.onSelection=t.onSelection,this.init()}return n=e,(i=[{key:"search",value:function(t,e){var n=this.highlight,i=e.toLowerCase();if("loose"===this.searchEngine){t=t.replace(/ /g,"");for(var s=[],a=0,o=0;o<i.length;o++){var l=e[o];a<t.length&&i[o]===t[a]&&(l=n?r.highlight(l):l,a++),s.push(l)}return a===t.length&&s.join("")}if(i.includes(t))return t=new RegExp("".concat(t),"i").exec(e),n?e.replace(t,r.highlight(t)):e}},{key:"listMatchedResults",value:function(t){var e=this,n=[],i=r.getInput(this.selector).value.toLowerCase();t.filter(function(t,r){var s=function(s){var a=e.search(i,t[s]||t);a&&s?n.push({key:s,index:r,match:a,value:t}):a&&!s&&n.push({index:r,match:a,value:t})};if(e.data.key){var a=!0,o=!1,l=void 0;try{for(var u,c=e.data.key[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){s(u.value)}}catch(t){o=!0,l=t}finally{try{a||null==c.return||c.return()}finally{if(o)throw l}}}else s()});var s=this.sort?n.sort(this.sort).slice(0,this.maxResults):n.slice(0,this.maxResults);return r.addResultsToList(this.resultsList,s,this.data.key,this.resultItem),r.navigation(this.selector,this.resultsList),{matches:n.length,list:s}}},{key:"ignite",value:function(t){var e=this,n=this.selector,i=r.getInput(n),s=this.placeHolder,a=this.onSelection;s&&i.setAttribute("placeholder",s),i.onkeyup=function(s){var o=e.resultsList;if(r.clearResults(o),i.value.length>e.threshold&&i.value.replace(/ /g,"").length){var l=e.listMatchedResults(t);i.dispatchEvent(new CustomEvent("type",{bubbles:!0,detail:{event:s,query:i.value,matches:l.matches,results:l.list},cancelable:!0})),a&&r.getSelection(n,o,a,l)}}}},{key:"init",value:function(){var t=this,e=this.data.src();e instanceof Promise?e.then(function(e){return t.ignite(e)}):this.ignite(e)}}])&&t(n.prototype,i),e;var n,i}()}()}),a=function(){function t(){this.disabled=!1,this.placeholder="",this.threshold=0,this.maxResults=0,this.debounce=300,this.data=null,this.id="autoComplete"+(new Date).getTime(),this.keyEvent={Enter:this.emitEnter.bind(this),Escape:this.clean.bind(this)}}return t.prototype.componentDidLoad=function(){this.data&&this.initAutocomplete()},t.prototype.render=function(){var t=this;return r("input",{id:this.id,placeholder:this.placeholder||null,disabled:this.disabled||null,onBlur:function(e){return t.handleBlur(e)},onKeyDown:function(e){return t.handleKeyDown(e)}})},t.prototype.watchThreshold=function(){this.initAutocomplete()},t.prototype.watchData=function(){this.initAutocomplete()},t.prototype.watchMaxResults=function(){this.initAutocomplete()},t.prototype.handleKeyDown=function(t){var e=this.getInputElement().value;e&&this.keyEvent[t.key]&&(t.preventDefault(),this.keyEvent[t.key](e))},t.prototype.handleBlur=function(t){var e=this;t.preventDefault(),setTimeout(function(){document.activeElement.parentElement!==e.getResultList()&&(e.clean(),e.lostFocus.emit(t))},0)},t.prototype.clean=function(){this.getInputElement().value="",this.cleanOptions()},t.prototype.cleanOptions=function(){this.getResultList().innerHTML=""},t.prototype.emitselect=function(t){this.clean(),this.selection.emit(t)},t.prototype.emitEnter=function(t){t&&(this.clean(),this.enter.emit(t))},t.prototype.getInputElement=function(){return this.el.querySelector("#"+this.id)},t.prototype.initAutocomplete=function(){var t=this;this.clearList(),new s({data:{src:function(){return __awaiter(t,void 0,void 0,function(){return __generator(this,function(t){return[2,this.getData()]})})}},sort:function(t,e){return t.match<e.match?-1:t.match>e.match?1:0},placeHolder:this.placeholder,selector:"#"+this.id,threshold:this.threshold,searchEngine:"strict",highlight:!0,maxResults:this.maxResults,debounce:this.debounce,resultsList:{container:function(){return t.getResultListId()},destination:this.getInputElement(),position:"afterend"},resultItem:function(t){return t.match},onSelection:function(e){var n=e.selection;e.event.preventDefault(),t.focusOnInput(),t.emitselect(n.value)}})},t.prototype.clearList=function(){var t=this.getResultList();t&&t.remove()},t.prototype.focusOnInput=function(){this.getInputElement().focus()},t.prototype.getResultList=function(){return this.el.querySelector("#"+this.getResultListId())},t.prototype.getResultListId=function(){return this.id+"_results_list"},t.prototype.getData=function(){return __awaiter(this,void 0,void 0,function(){var t,e,n;return __generator(this,function(i){switch(i.label){case 0:return(t=this.getInputElement()).setAttribute("placeholder","Loading..."),"function"!=typeof this.data?[3,2]:[4,this.data()];case 1:return n=i.sent(),[3,3];case 2:n=[],i.label=3;case 3:return e=n,t.setAttribute("placeholder",this.placeholder||""),[2,e]}})})},Object.defineProperty(t,"is",{get:function(){return"dot-autocomplete"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{data:{type:"Any",attr:"data",watchCallbacks:["watchData"]},debounce:{type:Number,attr:"debounce",reflectToAttr:!0},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},maxResults:{type:Number,attr:"max-results",reflectToAttr:!0,watchCallbacks:["watchMaxResults"]},placeholder:{type:String,attr:"placeholder",reflectToAttr:!0},threshold:{type:Number,attr:"threshold",reflectToAttr:!0,watchCallbacks:["watchThreshold"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"selection",method:"selection",bubbles:!0,cancelable:!0,composed:!0},{name:"enter",method:"enter",bubbles:!0,cancelable:!0,composed:!0},{name:"lostFocus",method:"lostFocus",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"dot-autocomplete input{-webkit-box-sizing:border-box;box-sizing:border-box;width:200px}dot-autocomplete ul{background-color:#fff;list-style:none;margin:0;max-height:300px;overflow:auto;padding:0;position:absolute;width:200px}dot-autocomplete ul li{background-color:#fff;border-top:0;border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box;padding:.25rem}dot-autocomplete ul li:first-child{border-top:1px solid #ccc}dot-autocomplete ul li:focus{background-color:#ffffe0;outline:0}dot-autocomplete ul li .autoComplete_highlighted{font-weight:700}"},enumerable:!0,configurable:!0}),t}(),o=function(){function t(){this.label="",this.deleteLabel="Delete",this.disabled=!1}return t.prototype.render=function(){var t=this,e=this.label?this.deleteLabel+" "+this.label:null;return r(n.Fragment,null,r("span",null,this.label),r("button",{type:"button","aria-label":e,disabled:this.disabled,onClick:function(){return t.remove.emit(t.label)}},this.deleteLabel))},Object.defineProperty(t,"is",{get:function(){return"dot-chip"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{deleteLabel:{type:String,attr:"delete-label",reflectToAttr:!0},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},label:{type:String,attr:"label",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"remove",method:"remove",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"dot-chip span{margin-right:.25rem}dot-chip button{cursor:pointer}"},enumerable:!0,configurable:!0}),t}(),l=function(){function t(){this.value="",this.data=null,this.name="",this.label="",this.hint="",this.placeholder="",this.required=!1,this.requiredMessage="This field is required",this.disabled=!1,this.threshold=0,this.debounce=300}return t.prototype.reset=function(){this.value="",this.status=i.getOriginalStatus(this.isValid()),this.emitChanges()},t.prototype.valueWatch=function(){this.value=i.checkProp(this,"value","string")},t.prototype.componentWillLoad=function(){this.status=i.getOriginalStatus(this.isValid()),this.validateProps(),this.emitStatusChange()},t.prototype.hostData=function(){return{class:i.getClassNames(this.status,this.isValid(),this.required)}},t.prototype.render=function(){var t=this;return r(n.Fragment,null,r("dot-label",{label:this.label,required:this.required,name:this.name},r("div",{"aria-describedby":i.getHintId(this.hint),tabIndex:this.hint?0:null,class:"dot-tags__container"},r("dot-autocomplete",{class:i.getErrorClass(this.status.dotValid),data:this.data,debounce:this.debounce,disabled:this.isDisabled(),onEnter:this.onEnterHandler.bind(this),onLostFocus:this.blurHandler.bind(this),onSelection:this.onSelectHandler.bind(this),placeholder:this.placeholder||null,threshold:this.threshold}),r("div",{class:"dot-tags__chips"},this.getValues().map(function(e){return r("dot-chip",{disabled:t.isDisabled(),label:e,onRemove:t.removeTag.bind(t)})})))),i.getTagHint(this.hint),i.getTagError(this.showErrorMessage(),this.getErrorMessage()))},t.prototype.addTag=function(t){var e=this.getValues();e.includes(t)||(e.push(t),this.value=e.join(","),this.updateStatus(),this.emitChanges())},t.prototype.blurHandler=function(){this.status.dotTouched||(this.status=i.updateStatus(this.status,{dotTouched:!0}),this.emitStatusChange())},t.prototype.emitChanges=function(){this.emitStatusChange(),this.emitValueChange()},t.prototype.emitStatusChange=function(){this.statusChange.emit({name:this.name,status:this.status})},t.prototype.emitValueChange=function(){this.valueChange.emit({name:this.name,value:this.value})},t.prototype.getErrorMessage=function(){return this.isValid()?"":this.requiredMessage},t.prototype.getValues=function(){return i.isStringType(this.value)?this.value.split(","):[]},t.prototype.isDisabled=function(){return this.disabled||null},t.prototype.isValid=function(){return!this.required||this.required&&!!this.value},t.prototype.onEnterHandler=function(t){var e=this,n=t.detail;(void 0===n?"":n).split(",").forEach(function(t){e.addTag(t.trim())})},t.prototype.onSelectHandler=function(t){var e=t.detail,n=(void 0===e?"":e).replace(","," ").replace(/\s+/g," ");this.addTag(n)},t.prototype.removeTag=function(t){var e=this.getValues().filter(function(e){return e!==t.detail});this.value=e.join(","),this.updateStatus(),this.emitChanges()},t.prototype.showErrorMessage=function(){return this.getErrorMessage()&&!this.status.dotPristine},t.prototype.updateStatus=function(){this.status=i.updateStatus(this.status,{dotTouched:!0,dotPristine:!1,dotValid:this.isValid()})},t.prototype.validateProps=function(){this.valueWatch()},Object.defineProperty(t,"is",{get:function(){return"dot-tags"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{data:{type:"Any",attr:"data"},debounce:{type:Number,attr:"debounce",reflectToAttr:!0},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},hint:{type:String,attr:"hint",reflectToAttr:!0},label:{type:String,attr:"label",reflectToAttr:!0},name:{type:String,attr:"name",reflectToAttr:!0},placeholder:{type:String,attr:"placeholder",reflectToAttr:!0},required:{type:Boolean,attr:"required",reflectToAttr:!0},requiredMessage:{type:String,attr:"required-message",reflectToAttr:!0},reset:{method:!0},status:{state:!0},threshold:{type:Number,attr:"threshold",reflectToAttr:!0},value:{type:String,attr:"value",reflectToAttr:!0,mutable:!0,watchCallbacks:["valueWatch"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"valueChange",method:"valueChange",bubbles:!0,cancelable:!0,composed:!0},{name:"statusChange",method:"statusChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"dot-tags .dot-tags__container{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;border:1px solid #d3d3d3;padding:.5rem .5rem 0;min-height:35px}dot-tags .dot-tags__container dot-autocomplete{margin-right:1rem}dot-tags .dot-tags__container dot-chip{border:1px solid #ccc;display:inline-block;margin:0 .5rem .5rem 0;padding:.2rem}dot-tags button{border:0}"},enumerable:!0,configurable:!0}),t}();t.DotAutocomplete=a,t.DotChip=o,t.DotTags=l,Object.defineProperty(t,"__esModule",{value:!0})});