(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{159:function(e,t,a){e.exports={controlLabel:"editorSetting_controlLabel__qOrd2",picker:"editorSetting_picker__LgHmD"}},160:function(e,t,a){e.exports={collaborators:"collaborators_collaborators__ZveAR",show:"collaborators_show__2o0Ij",option:"collaborators_option__uz5R1"}},182:function(e,t,a){e.exports={default:"button_default__3KiSZ",danger:"button_danger__f8tBy",success:"button_success__2lLij"}},200:function(e,t,a){e.exports={tab:"upperTab_tab__2Ft3S"}},202:function(e,t,a){e.exports=a(384)},207:function(e,t,a){},379:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var n=a(28),o=a.n(n),l=a(185),c=a.n(l),r=(a(207),a(163)),s=a(164),i=a(179),u=a(165),m=a(180),d=a(198),h=a.n(d),p=a(199),g=a.n(p),v=a(187),f=a.n(v),E=(a(379),a(200)),b=a.n(E),k=a(159),w=a.n(k);function y(e){var t=e.getLanguage,a=e.getTheme;return o.a.createElement("div",null,o.a.createElement("label",{className:w.a.controlLabel},"Language"),o.a.createElement("select",{className:w.a.picker,onChange:t},o.a.createElement("option",null,"JavaScript"),o.a.createElement("option",null,"C++"),o.a.createElement("option",null,"C"),o.a.createElement("option",null,"Python3")),o.a.createElement("label",{className:w.a.controlLabel},"Theme"),o.a.createElement("select",{className:w.a.picker,onChange:a},o.a.createElement("option",null,"Dark"),o.a.createElement("option",null,"Light")))}var C=a(160),N=a.n(C),_=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={show:!1},a.handleClick=function(){return a.setState({show:!a.state.show})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:N.a.collaborators,onClick:this.handleClick},o.a.createElement("i",{className:"fas fa-users fa-lg",style:{margin:"0 0.5rem"}}),"Collaborators"),this.state.show?o.a.createElement("div",{className:N.a.show},o.a.createElement("div",{className:N.a.option,onClick:function(t){e.props.modal(t),e.handleClick()}},"Add"),o.a.createElement("div",{className:N.a.option,onClick:function(t){e.props.modal(t),e.handleClick()}},"Remove")):null)}}]),t}(o.a.PureComponent),S=a(182),L=a.n(S),M=function(e){switch(e.type){case"success":return o.a.createElement("button",{className:L.a.success,style:{display:e.display},onClick:function(t){return e.click(t)}},e.name);case"danger":return o.a.createElement("button",{className:L.a.danger,style:{display:e.display},onClick:function(t){return e.click(t)}},e.name);default:return o.a.createElement("button",{className:L.a.default,style:{display:e.display},onClick:function(t){return e.click(t)}},e.name)}};function O(e){var t=e.getLanguage,a=e.getTheme,n=e.click,l=e.modal;return o.a.createElement("div",{className:b.a.tab},o.a.createElement(_,{modal:l}),o.a.createElement(y,{getLanguage:t,getTheme:a}),o.a.createElement(M,{type:"success",name:"Build",click:n}))}f.a.setAppElement("#root");var j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getLanguage=function(e){var t;"C++"===e.target.value?t="cpp":"C"===e.target.value?t="c":"JavaScript"===e.target.value?t="javascript":"Python3"===e.target.value&&(t="python"),a.setState({language:t})},a.getTheme=function(e){"Light"===e.target.value?a.setState({theme:"vs"}):a.setState({theme:"vs-dark"})},a.saveCode=function(e){a.setState({code:e})},a.saveInput=function(e){a.setState({input:e.target.value}),e.target.value=""},a.click=function(){var e={language:a.state.language,code:a.state.code,input:a.state.input};g.a.post("/eval",e).then(function(e){a.setState({output:e.data})}).catch(function(e){return console.log(e)})},a.handleCloseModal=function(e){e.preventDefault(),a.setState({showModal:!1}),"Add"===a.state.whichModal?a.setState(function(e,t){return{collaborators:e.collaborators.add(a.state.inputField)}}):a.setState(function(e,t){return e.collaborators.delete(a.state.inputField),{collaborators:a.state.collaborators}})},a.handleOpenModal=function(e){a.setState({showModal:!0}),console.log(e.currentTarget.innerHTML),a.state.inputField&&a.setState({whichModal:e.currentTarget.innerHTML})},a.state={code:"// type your code...",language:"javascript",theme:"vs-dark",output:"",input:"",collaborators:new Set([]),showModal:!1,whichModal:"",inputField:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"editorDidMount",value:function(e,t){e.focus()}},{key:"render",value:function(){var e=this,t=this.state.code;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"editor"},o.a.createElement(O,{getLanguage:this.getLanguage,getTheme:this.getTheme,click:this.click,modal:this.handleOpenModal}),o.a.createElement(h.a,{width:"40vw",height:document.documentElement.clientHeight-40,language:this.state.language,theme:this.state.theme,value:t,options:{selectOnLineNumbers:!0},onChange:this.saveCode,editorDidMount:this.editorDidMount})),o.a.createElement("div",{className:"block input"},"Enter input parameters here:",o.a.createElement("textarea",{className:"textBox",onChange:this.saveInput})),o.a.createElement("div",{className:"block output"},"Output:",o.a.createElement("div",null,o.a.createElement("div",{className:"outputArea"},o.a.createElement("code",null,this.state.output.stderr||this.state.output.error?this.state.output.stderr+this.state.output.error:this.state.output.stdout)))),o.a.createElement("div",{className:"view"},o.a.createElement("div",{className:"info"},"Your socket id is: 65555423fhjv65"),o.a.createElement("div",{className:"msgBlock"}),o.a.createElement("div",{className:"field"},o.a.createElement("form",{className:"form"},o.a.createElement("input",{className:"inputField",placeholder:"Type your message..."}),o.a.createElement("button",{className:"button"},"Send")))),o.a.createElement(f.a,{isOpen:this.state.showModal,contentLabel:"onRequestClose Example",onRequestClose:this.handleCloseModal,className:"Modal",overlayClassName:"Overlay"},o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("div",null,"HINT: Socket ID can be found on right side of your screen (on top of chat section)"),o.a.createElement("label",{htmlFor:"socketID"},"Enter Socker ID of the Collaborator"),o.a.createElement("input",{name:"socketID",type:"text",placeholder:"Enter socket id",onChange:function(t){return e.setState({inputField:t.target.value})}}),o.a.createElement(M,{click:this.handleCloseModal,name:"Submit"})))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[202,2,3]]]);
//# sourceMappingURL=main.1a4d8db4.chunk.js.map