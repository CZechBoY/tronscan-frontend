webpackJsonp([22],{1900:function(e,t,l){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{sync:e.app.syncStatus}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),c=l(0),d=function(e){return e&&e.__esModule?e:{default:e}}(c),f=(l(14),l(13)),m=l(15),i=l(18),s=l(9),b=function(e){function t(e){n(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.hideModal=function(){l.setState({modal:null})},l.state={modal:null},l}return r(t,e),o(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state.modal,t=this.props.sync;return t?d.default.createElement("main",{className:"container header-overlap _system"},e,d.default.createElement("div",{className:"",style:{borderTop:"4px solid #C23631"}},d.default.createElement("table",{className:"table table-hover m-0 bg-white"},d.default.createElement("tbody",null,d.default.createElement("tr",null,d.default.createElement("td",{colSpan:"2",className:"border-top-0"},"Tronscan")),d.default.createElement("tr",null,d.default.createElement("th",{style:{width:300}},(0,f.tu)("Sync"),":"),d.default.createElement("td",null,d.default.createElement(s.FormattedNumber,{value:t.sync.progress,maximumFractionDigits:2}),"%")),d.default.createElement("tr",null,d.default.createElement("th",null,(0,f.tu)("block"),":"),d.default.createElement("td",null,d.default.createElement(i.BlockNumberLink,{number:t.database.block},t.database.block))),d.default.createElement("tr",null,d.default.createElement("th",null,(0,f.tu)("confirmed_block"),":"),d.default.createElement("td",null,d.default.createElement(i.BlockNumberLink,{number:t.database.confirmedBlock-1},t.database.confirmedBlock-1))))),d.default.createElement("table",{className:"table table-hover m-0 bg-white mt-2"},d.default.createElement("tbody",null,d.default.createElement("tr",null,d.default.createElement("td",{colSpan:"2",className:""},"Full Node")),d.default.createElement("tr",null,d.default.createElement("th",{style:{width:300}},(0,f.tu)("block"),":"),d.default.createElement("td",null,d.default.createElement(i.BlockNumberLink,{number:t.full.block},t.full.block))))),d.default.createElement("table",{className:"table table-hover m-0 mt-2 bg-white"},d.default.createElement("tbody",null,d.default.createElement("tr",null,d.default.createElement("td",{colSpan:"2",className:""},"Solidity Node")),d.default.createElement("tr",null,d.default.createElement("th",{style:{width:300}},(0,f.tu)("block"),":"),d.default.createElement("td",null,d.default.createElement(i.BlockNumberLink,{number:t.solidity.block},t.solidity.block))))))):null}}]),t}(c.Component),p={};t.default=(0,m.connect)(u,p)(b)}});