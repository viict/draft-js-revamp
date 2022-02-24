(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(147)),i={id:"quickstart-api-basics",title:"API Basics"},c={id:"quickstart-api-basics",title:"API Basics",description:"This document provides an overview of the basics of the Draft API. A",source:"@site/../docs/QuickStart-API-Basics.md",permalink:"/docs/quickstart-api-basics",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/QuickStart-API-Basics.md",lastUpdatedBy:"Micha\xebl De Boey",lastUpdatedAt:1595963352,sidebar:"docs",previous:{title:"Overview",permalink:"/docs/getting-started"},next:{title:"Rich Styling",permalink:"/docs/quickstart-rich-styling"}},l=[{value:"Controlled Inputs",id:"controlled-inputs",children:[]},{value:"Controlling Rich Text",id:"controlling-rich-text",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document provides an overview of the basics of the ",Object(o.b)("inlineCode",{parentName:"p"},"Draft")," API. A\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/plaintext"}),"working example"),"\nis also available to follow along."),Object(o.b)("h2",{id:"controlled-inputs"},"Controlled Inputs"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Editor")," React component is built as a controlled ContentEditable component,\nwith the goal of providing a top-level API modeled on the familiar React\n",Object(o.b)("em",{parentName:"p"},"controlled input")," API."),Object(o.b)("p",null,"As a brief refresher, controlled inputs involve two key pieces:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A ",Object(o.b)("em",{parentName:"li"},"value")," to represent the state of the input"),Object(o.b)("li",{parentName:"ol"},"An ",Object(o.b)("em",{parentName:"li"},"onChange")," prop function to receive updates to the input")),Object(o.b)("p",null,"This approach allows the component that composes the input to have strict\ncontrol over the state of the input, while still allowing updates to the DOM to\nprovide information about the text that the user has written."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const MyInput = () => {\n  const [value, setValue] = useState('');\n  const onChange = (evt) => setValue(evt.target.value);\n\n  return <input value={value} onChange={onChange} />;\n};\n")),Object(o.b)("p",null,"The top-level component can maintain control over the input state via this\n",Object(o.b)("inlineCode",{parentName:"p"},"value")," state property."),Object(o.b)("h2",{id:"controlling-rich-text"},"Controlling Rich Text"),Object(o.b)("p",null,"In a React rich text scenario, however, there are two clear problems:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A string of plaintext is insufficient to represent the complex state of a\nrich editor."),Object(o.b)("li",{parentName:"ol"},"There is no such ",Object(o.b)("inlineCode",{parentName:"li"},"onChange")," event available for a ContentEditable element.")),Object(o.b)("p",null,"State is therefore represented as a single immutable\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-editor-state"}),"EditorState")," object, and ",Object(o.b)("inlineCode",{parentName:"p"},"onChange")," is\nimplemented within the ",Object(o.b)("inlineCode",{parentName:"p"},"Editor")," core to provide this state value to the top\nlevel."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"EditorState")," object is a complete snapshot of the state of the editor,\nincluding contents, cursor, and undo/redo history. All changes to content and\nselection within the editor will create new ",Object(o.b)("inlineCode",{parentName:"p"},"EditorState")," objects. Note that\nthis remains efficient due to data persistence across immutable objects."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {Editor, EditorState} from 'draft-js';\n\nconst MyInput = () => {\n  const [editorState, setEditorState] = useState(() =>\n    EditorState.createEmpty(),\n  );\n\n  return <Editor editorState={editorState} onChange={setEditorState} />;\n};\n")),Object(o.b)("p",null,"For any edits or selection changes that occur in the editor DOM, your ",Object(o.b)("inlineCode",{parentName:"p"},"onChange"),"\nhandler will execute with the latest ",Object(o.b)("inlineCode",{parentName:"p"},"EditorState")," object based on those\nchanges."))}p.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);