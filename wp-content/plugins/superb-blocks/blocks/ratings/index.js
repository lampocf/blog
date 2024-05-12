(()=>{var e,t={967:(e,t)=>{"use strict";t.N=void 0;var a=/^([^\w]*)(javascript|data|vbscript)/im,r=/&#(\w+)(^\w|;)?/g,l=/&(newline|tab);/gi,n=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,i=/^.+(:|&colon;)/gim,o=[".","/"];t.N=function(e){var t,g=(t=e||"",t.replace(r,(function(e,t){return String.fromCharCode(t)}))).replace(l,"").replace(n,"").trim();if(!g)return"about:blank";if(function(e){return o.indexOf(e[0])>-1}(g))return g;var s=g.match(i);if(!s)return g;var u=s[0];return a.test(u)?"about:blank":g}},837:(e,t,a)=>{"use strict";const r=window.wp.blocks,l=window.wp.i18n,n=window.React,i=window.wp.blockEditor,o=window.wp.element,g=e=>(0,n.createElement)("div",{className:"superbaddons-ratings-single-star"},(0,n.createElement)("svg",{width:"22",height:"21",viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M20.9843 9.72318L16.7562 13.4132L18.0228 18.9069C18.0898 19.1941 18.0707 19.4947 17.9678 19.7711C17.8649 20.0475 17.6828 20.2874 17.4443 20.4609C17.2058 20.6344 16.9215 20.7337 16.6268 20.7464C16.3322 20.7592 16.0404 20.6848 15.7878 20.5326L10.9962 17.6263L6.21495 20.5326C5.96236 20.6848 5.6705 20.7592 5.37586 20.7464C5.08122 20.7337 4.79688 20.6344 4.55838 20.4609C4.31988 20.2874 4.13781 20.0475 4.03493 19.7711C3.93205 19.4947 3.91292 19.1941 3.97995 18.9069L5.24464 13.4188L1.01557 9.72318C0.791893 9.53027 0.63015 9.27561 0.550625 8.99113C0.4711 8.70666 0.477335 8.40504 0.568546 8.1241C0.659758 7.84315 0.831886 7.59539 1.06335 7.41188C1.29481 7.22838 1.57529 7.11729 1.86964 7.09256L7.44401 6.60974L9.61995 1.41974C9.73358 1.14742 9.92524 0.914795 10.1708 0.751174C10.4164 0.587552 10.7049 0.500244 10.9999 0.500244C11.295 0.500244 11.5835 0.587552 11.8291 0.751174C12.0747 0.914795 12.2663 1.14742 12.3799 1.41974L14.5624 6.60974L20.1349 7.09256C20.4293 7.11729 20.7098 7.22838 20.9412 7.41188C21.1727 7.59539 21.3448 7.84315 21.436 8.1241C21.5272 8.40504 21.5335 8.70666 21.454 8.99113C21.3744 9.27561 21.2127 9.53027 20.989 9.72318H20.9843Z",fill:e.colorEmpty?e.colorEmpty:e.color})),e.percentage>0&&(0,n.createElement)("div",{className:"superbaddons-ratings-single-percentage-star",style:{width:e.percentage+"%"}},(0,n.createElement)("svg",{width:"22",height:"21",viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M20.9843 9.72318L16.7562 13.4132L18.0228 18.9069C18.0898 19.1941 18.0707 19.4947 17.9678 19.7711C17.8649 20.0475 17.6828 20.2874 17.4443 20.4609C17.2058 20.6344 16.9215 20.7337 16.6268 20.7464C16.3322 20.7592 16.0404 20.6848 15.7878 20.5326L10.9962 17.6263L6.21495 20.5326C5.96236 20.6848 5.6705 20.7592 5.37586 20.7464C5.08122 20.7337 4.79688 20.6344 4.55838 20.4609C4.31988 20.2874 4.13781 20.0475 4.03493 19.7711C3.93205 19.4947 3.91292 19.1941 3.97995 18.9069L5.24464 13.4188L1.01557 9.72318C0.791893 9.53027 0.63015 9.27561 0.550625 8.99113C0.4711 8.70666 0.477335 8.40504 0.568546 8.1241C0.659758 7.84315 0.831886 7.59539 1.06335 7.41188C1.29481 7.22838 1.57529 7.11729 1.86964 7.09256L7.44401 6.60974L9.61995 1.41974C9.73358 1.14742 9.92524 0.914795 10.1708 0.751174C10.4164 0.587552 10.7049 0.500244 10.9999 0.500244C11.295 0.500244 11.5835 0.587552 11.8291 0.751174C12.0747 0.914795 12.2663 1.14742 12.3799 1.41974L14.5624 6.60974L20.1349 7.09256C20.4293 7.11729 20.7098 7.22838 20.9412 7.41188C21.1727 7.59539 21.3448 7.84315 21.436 8.1241C21.5272 8.40504 21.5335 8.70666 21.454 8.99113C21.3744 9.27561 21.2127 9.53027 20.989 9.72318H20.9843Z",fill:e.color})))),s=e=>{const{attributes:t}=e,a=t.overallRating/t.maxRating*100,r=t.starAmount,l=100/r;let i=0,o=!1;const s=[];for(let e=0;e<r;e++)if(o||a<=0)s.push((0,n.createElement)(g,{key:e,color:t.colorStarsEmpty}));else if(i+l<=a)i+=l,s.push((0,n.createElement)(g,{key:e,color:t.colorStarsFilled}));else{const r=(a-i)/l*100;s.push((0,n.createElement)(g,{key:e,colorEmpty:t.colorStarsEmpty,color:t.colorStarsFilled,percentage:r})),o=!0}return(0,n.createElement)("div",{className:"superbaddons-ratings-stars-icons"},s)};function u({isEditable:e,...t}){const{placeholder:a,...r}=t;return e?(0,n.createElement)(i.RichText,{...t}):(0,n.createElement)(i.RichText.Content,{...r})}a(967);var M=a(241);const c=(e,t=!1,a=!1)=>(e=isNaN(e)?0:parseInt(e),t&&e<t&&(e=t),a&&e>a&&(e=a),e),N=(e,t=!1,a=!1)=>(e=isNaN(e)?0:parseFloat(e),t&&e<t&&(e=t),a&&e>a&&(e=a),e),D=e=>1==e,j=function(e,t){return void 0===t?e[0]:e.find((e=>e===t))},d=function(e,t,a=!1){return a?e.find((e=>e.slug===t))[a]:e.find((e=>e.slug===t))},m=function(e){return void 0!==e&&((0,M.validateHTMLColorHex)(e)||(0,M.validateHTMLColorRgb)(e)||(0,M.validateHTMLColorHsl)(e))?e:"unset"},I=window.wp.components,L=e=>{const{attributes:t,setAttributes:a}=e,r=e.ratingIndex,l=e.ratingAttributes;return(0,n.createElement)(o.Fragment,null,(0,n.createElement)("div",{className:"superbaddons-ratings-ratingbar"},(0,n.createElement)(u,{isEditable:e.IsInEditor,className:"superbaddons-ratings-ratingbar-label",tagName:"p",onChange:e=>{const l=[...t.ratingBars];l[r].label=e,a({ratingBars:l})},value:l.label,style:{color:t.colorText,fontSize:t.fontSizeLabelRatingBar+"px"}}),e.isSelected&&(0,n.createElement)(I.Button,{isSmall:!0,isDestructive:!0,className:"superbaddons-trash-button",onClick:()=>{const e=[...t.ratingBars];e.splice(r,1),a({ratingBars:e})}},(0,n.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljg3NSAyLjc1SDExLjc1VjIuMTI1QzExLjc1IDEuNjI3NzIgMTEuNTUyNSAxLjE1MDgxIDExLjIwMDggMC43OTkxNzVDMTAuODQ5MiAwLjQ0NzU0NCAxMC4zNzIzIDAuMjUgOS44NzUgMC4yNUg2LjEyNUM1LjYyNzcyIDAuMjUgNS4xNTA4MSAwLjQ0NzU0NCA0Ljc5OTE3IDAuNzk5MTc1QzQuNDQ3NTQgMS4xNTA4MSA0LjI1IDEuNjI3NzIgNC4yNSAyLjEyNVYyLjc1SDEuMTI1QzAuOTU5MjQgMi43NSAwLjgwMDI2OSAyLjgxNTg1IDAuNjgzMDU4IDIuOTMzMDZDMC41NjU4NDggMy4wNTAyNyAwLjUgMy4yMDkyNCAwLjUgMy4zNzVDMC41IDMuNTQwNzYgMC41NjU4NDggMy42OTk3MyAwLjY4MzA1OCAzLjgxNjk0QzAuODAwMjY5IDMuOTM0MTUgMC45NTkyNCA0IDEuMTI1IDRIMS43NVYxNS4yNUMxLjc1IDE1LjU4MTUgMS44ODE3IDE1Ljg5OTUgMi4xMTYxMiAxNi4xMzM5QzIuMzUwNTQgMTYuMzY4MyAyLjY2ODQ4IDE2LjUgMyAxNi41SDEzQzEzLjMzMTUgMTYuNSAxMy42NDk1IDE2LjM2ODMgMTMuODgzOSAxNi4xMzM5QzE0LjExODMgMTUuODk5NSAxNC4yNSAxNS41ODE1IDE0LjI1IDE1LjI1VjRIMTQuODc1QzE1LjA0MDggNCAxNS4xOTk3IDMuOTM0MTUgMTUuMzE2OSAzLjgxNjk0QzE1LjQzNDIgMy42OTk3MyAxNS41IDMuNTQwNzYgMTUuNSAzLjM3NUMxNS41IDMuMjA5MjQgMTUuNDM0MiAzLjA1MDI3IDE1LjMxNjkgMi45MzMwNkMxNS4xOTk3IDIuODE1ODUgMTUuMDQwOCAyLjc1IDE0Ljg3NSAyLjc1Wk01LjUgMi4xMjVDNS41IDEuOTU5MjQgNS41NjU4NSAxLjgwMDI3IDUuNjgzMDYgMS42ODMwNkM1LjgwMDI3IDEuNTY1ODUgNS45NTkyNCAxLjUgNi4xMjUgMS41SDkuODc1QzEwLjA0MDggMS41IDEwLjE5OTcgMS41NjU4NSAxMC4zMTY5IDEuNjgzMDZDMTAuNDM0MiAxLjgwMDI3IDEwLjUgMS45NTkyNCAxMC41IDIuMTI1VjIuNzVINS41VjIuMTI1Wk0xMyAxNS4yNUgzVjRIMTNWMTUuMjVaTTYuNzUgNy4xMjVWMTIuMTI1QzYuNzUgMTIuMjkwOCA2LjY4NDE1IDEyLjQ0OTcgNi41NjY5NCAxMi41NjY5QzYuNDQ5NzMgMTIuNjg0MiA2LjI5MDc2IDEyLjc1IDYuMTI1IDEyLjc1QzUuOTU5MjQgMTIuNzUgNS44MDAyNyAxMi42ODQyIDUuNjgzMDYgMTIuNTY2OUM1LjU2NTg1IDEyLjQ0OTcgNS41IDEyLjI5MDggNS41IDEyLjEyNVY3LjEyNUM1LjUgNi45NTkyNCA1LjU2NTg1IDYuODAwMjcgNS42ODMwNiA2LjY4MzA2QzUuODAwMjcgNi41NjU4NSA1Ljk1OTI0IDYuNSA2LjEyNSA2LjVDNi4yOTA3NiA2LjUgNi40NDk3MyA2LjU2NTg1IDYuNTY2OTQgNi42ODMwNkM2LjY4NDE1IDYuODAwMjcgNi43NSA2Ljk1OTI0IDYuNzUgNy4xMjVaTTEwLjUgNy4xMjVWMTIuMTI1QzEwLjUgMTIuMjkwOCAxMC40MzQyIDEyLjQ0OTcgMTAuMzE2OSAxMi41NjY5QzEwLjE5OTcgMTIuNjg0MiAxMC4wNDA4IDEyLjc1IDkuODc1IDEyLjc1QzkuNzA5MjQgMTIuNzUgOS41NTAyNyAxMi42ODQyIDkuNDMzMDYgMTIuNTY2OUM5LjMxNTg1IDEyLjQ0OTcgOS4yNSAxMi4yOTA4IDkuMjUgMTIuMTI1VjcuMTI1QzkuMjUgNi45NTkyNCA5LjMxNTg1IDYuODAwMjcgOS40MzMwNiA2LjY4MzA2QzkuNTUwMjcgNi41NjU4NSA5LjcwOTI0IDYuNSA5Ljg3NSA2LjVDMTAuMDQwOCA2LjUgMTAuMTk5NyA2LjU2NTg1IDEwLjMxNjkgNi42ODMwNkMxMC40MzQyIDYuODAwMjcgMTAuNSA2Ljk1OTI0IDEwLjUgNy4xMjVaIiBmaWxsPSIjRDU0ODNEIi8+Cjwvc3ZnPgo="})),e.isSelected&&(0,n.createElement)(I.__experimentalNumberControl,{min:0,max:t.maxRating,value:l.rating,onChange:e=>{const l=[...t.ratingBars];l[r].rating=c(e,0,t.maxRating),a({ratingBars:l})}}),!e.isSelected&&(0,n.createElement)("div",{className:"superbaddons-ratings-ratingbar-bar",style:{backgroundColor:t.colorStarsEmpty}},(0,n.createElement)("div",{className:"superbaddons-ratings-ratingbar-bar-fill",style:{backgroundColor:t.colorStarsFilled,width:l.rating/t.maxRating*100+"%"}}))))},y=e=>{const{attributes:t,setAttributes:a}=e;return(0,n.createElement)(o.Fragment,null,(0,n.createElement)("div",{className:"superbaddons-ratings-wrapper"},(0,n.createElement)("div",{className:"superbaddons-ratings-overall-wrapper superbaddons-ratings-alignment-"+t.toolbarAlignmentOverallRating},(0,n.createElement)(u,{isEditable:e.IsInEditor,className:"superbaddons-ratings-overall-label",tagName:"span",onChange:e=>{a({labelOverallRating:e})},value:t.labelOverallRating,style:{fontSize:t.fontSizeLabelOverallRating+"px",color:t.colorText}}),(0,n.createElement)("div",{className:"superbaddons-ratings-overall-rating-wrapper"},(0,n.createElement)("span",{className:"superbaddons-ratings-overall-rating",style:{fontSize:t.fontSizeOverallRating+"px",color:t.colorText}},e.isSelected&&e.IsInEditor&&t.ratingBars.length<=0&&(0,n.createElement)(I.__experimentalNumberControl,{min:0,max:t.maxRating,value:t.overallRating,onChange:e=>{let r=N(e,0,t.maxRating);a({overallRating:r})}}),(!e.isSelected||t.ratingBars.length>0)&&(t.roundOverallRating?parseInt(Math.round(t.overallRating)).toFixed(0):parseFloat(t.overallRating).toFixed(1)),t.displayMaxRating&&(0,n.createElement)("span",{style:{fontSize:c(t.fontSizeOverallRating-20,10,100)+"px",color:t.colorText}}," / "+t.maxRating)),(0,n.createElement)(s,{...e}))),(0,n.createElement)("div",{className:"superbaddons-ratings-ratingbars-wrapper superbaddons-ratings-alignment-"+t.toolbarAlignmentRatingBars},t.ratingBars.map(((t,a)=>(0,n.createElement)(L,{key:a,ratingAttributes:t,ratingIndex:a,...e}))))))},T=[{name:(0,l.__)("Small","superb-blocks"),slug:"small",size:14},{name:(0,l.__)("Medium","superb-blocks"),slug:"medium",size:16},{name:(0,l.__)("Large","superb-blocks"),slug:"large",size:24},{name:(0,l.__)("Huge","superb-blocks"),slug:"huge",size:32},{name:(0,l.__)("Enormous","superb-blocks"),slug:"enormous",size:40}],A=[{name:(0,l.__)("Superb Black","superb-blocks"),slug:"black",color:"#444444"},{name:(0,l.__)("Superb Gray","superb-blocks"),slug:"default",color:"#7C7C7C"},{name:(0,l.__)("Background Gray","superb-blocks"),slug:"bggray",color:"#F2F2F2"},{name:(0,l.__)("Superb Gold","superb-blocks"),slug:"sorange",color:"#FFCA28"},{name:(0,l.__)("White","superb-blocks"),slug:"white",color:"#fff"}],b={rating:0,label:(0,l.__)("Rating","superb-blocks")},E=JSON.parse('{"u2":"superb-addons/ratings"}');var p,O;function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},z.apply(this,arguments)}const x={labelOverallRating:{type:"string",default:(0,l.__)("Overall Rating","superb-blocks")},displayMaxRating:{type:"boolean",default:!1}},S={overallRating:{type:"number",default:0},maxRating:{type:"number",default:5},ratingBars:{type:"array",default:[b]},starAmount:{type:"number",default:5},roundOverallRating:{type:"boolean",default:!1}};(0,r.registerBlockType)(E.u2,{attributes:{toolbarAlignmentOverallRating:{type:"string",default:"left"},toolbarAlignmentRatingBars:{type:"string",default:"left"},...x,...S,fontSizeOverallRating:{type:"number",default:40},fontSizeLabelOverallRating:{type:"number",default:14},fontSizeLabelRatingBar:{type:"number",default:14},colorText:{type:"string",default:"#444444"},colorStarsFilled:{type:"string",default:"#FFCA28"},colorStarsEmpty:{type:"string",default:"#F2F2F2"}},example:{attributes:{ratingBars:[{rating:4.5,label:"Design"},{rating:4.7,label:"Performance"},{rating:4.3,label:"Usability"}]}},icon:{src:function(e){return n.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 256 256"},e),p||(p=n.createElement("path",{fill:"#6448e7",d:"M184.13 147.7a8.08 8.08 0 0 0-2.54 7.89l13.52 58.54a8 8 0 0 1-11.89 8.69l-51.1-31a7.93 7.93 0 0 0-8.24 0l-51.1 31a8 8 0 0 1-11.89-8.69l13.52-58.54a8.08 8.08 0 0 0-2.54-7.89l-45.11-39.35a8 8 0 0 1 4.54-14.07l59.46-5.14a8 8 0 0 0 6.67-4.88l23.23-55.36a8 8 0 0 1 14.68 0l23.23 55.36a8 8 0 0 0 6.67 4.88l59.46 5.14a8 8 0 0 1 4.54 14.07Z",opacity:.2})),O||(O=n.createElement("path",{fill:"#6448e7",d:"M239.2 97.29a16 16 0 0 0-13.81-11L166 81.17l-23.28-55.36a15.95 15.95 0 0 0-29.44 0L90.07 81.17l-59.46 5.15a16 16 0 0 0-9.11 28.06l45.11 39.42-13.52 58.54a16 16 0 0 0 23.84 17.34l51-31 51.11 31a16 16 0 0 0 23.84-17.34l-13.51-58.6 45.1-39.36a16 16 0 0 0 4.73-17.09m-15.22 5-45.1 39.36a16 16 0 0 0-5.08 15.71L187.35 216l-51.07-31a15.9 15.9 0 0 0-16.54 0l-51 31 13.46-58.6a16 16 0 0 0-5.08-15.71L32 102.35a.4.4 0 0 1 0-.09l59.44-5.14a16 16 0 0 0 13.35-9.75L128 32.08l23.2 55.29a16 16 0 0 0 13.35 9.75l59.45 5.14v.07Z"})))}},edit:function(e){const{attributes:t,setAttributes:a}=e;return(0,o.useEffect)((()=>{if(t.ratingBars.length>0){let r=0,l=0;for(var e=0;e<t.ratingBars.length;e++)l+=parseFloat(t.ratingBars[e].rating);l/=t.ratingBars.length,r=N(l,0,t.maxRating),a({overallRating:r})}}),[t.ratingBars]),(0,n.createElement)(o.Fragment,null,(0,n.createElement)(i.BlockControls,null,(0,n.createElement)(i.AlignmentToolbar,{value:t.toolbarAlignmentOverallRating,onChange:e=>{let t=j(["center","left","right"],e);a({toolbarAlignmentOverallRating:t})}}),(0,n.createElement)(i.AlignmentToolbar,{value:t.toolbarAlignmentRatingBars,onChange:e=>{let t=j(["left","center","right"],e);a({toolbarAlignmentRatingBars:t})}})),(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(I.PanelBody,{title:(0,l.__)("General Settings","superb-blocks"),initialOpen:!0},(0,n.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Max Rating","superb-blocks")),(0,n.createElement)(I.__experimentalNumberControl,{min:5,max:100,value:t.maxRating,onChange:e=>{const r=t.maxRating;e||(e=5);let l=c(e,5,100);a({maxRating:l});const n=[...t.ratingBars];n.forEach((e=>{let t=e.rating/r*l;e.rating=t%1==0?t:t.toFixed(1)})),a({ratingBars:n})}}),(0,n.createElement)(I.CheckboxControl,{label:(0,l.__)("Display Max Rating","superb-blocks"),onChange:e=>{let t=D(e);a({displayMaxRating:t})},checked:t.displayMaxRating}),(0,n.createElement)(I.CheckboxControl,{label:(0,l.__)("Round Overall Rating","superb-blocks"),onChange:e=>{let t=D(e);a({roundOverallRating:t})},checked:t.roundOverallRating}),(0,n.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Available Stars","superb-blocks")),(0,n.createElement)(I.__experimentalNumberControl,{min:1,max:100,value:t.starAmount,onChange:e=>{let t=c(e,1,100);a({starAmount:t})}}))),(0,n.createElement)(i.InspectorControls,{group:"styles"},(0,n.createElement)(I.PanelBody,{title:"Colors",initialOpen:!0},(0,n.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Text Color","superb-blocks")),(0,n.createElement)(I.ColorPalette,{colors:A,defaultValue:t.colorText,value:t.colorText,onChange:e=>{let t=m(e);a({colorText:t})}}),(0,n.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Empty Star Color","superb-blocks")),(0,n.createElement)(I.ColorPalette,{colors:A,defaultValue:t.colorStarsEmpty,value:t.colorStarsEmpty,onChange:e=>{let t=m(e);a({colorStarsEmpty:t})}}),(0,n.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Filled Star Color","superb-blocks")),(0,n.createElement)(I.ColorPalette,{colors:A,defaultValue:t.colorStarsFilled,value:t.colorStarsFilled,onChange:e=>{let t=m(e);a({colorStarsFilled:t})}})),(0,n.createElement)(I.PanelBody,{title:(0,l.__)("Font Sizes","superb-blocks"),initialOpen:!0},(0,n.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Overall Rating (Label)","superb-blocks")),(0,n.createElement)(I.FontSizePicker,{__nextHasNoMarginBottom:!0,fontSizes:T,value:t.fontSizeLabelOverallRating,withSlider:!0,withReset:!0,onChange:e=>{let t=0;t=void 0===e?d(T,"small","size"):c(e,0,100),a({fontSizeLabelOverallRating:t})}}),(0,n.createElement)("hr",null),(0,n.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Overall Rating (Number)","superb-blocks")),(0,n.createElement)(I.FontSizePicker,{__nextHasNoMarginBottom:!0,fontSizes:T,value:t.fontSizeOverallRating,withSlider:!0,withReset:!0,onChange:e=>{let t=0;t=void 0===e?d(T,"enormous","size"):c(e,0,100),a({fontSizeOverallRating:t})}}),(0,n.createElement)("hr",null),(0,n.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Rating Bars (Label)","superb-blocks")),(0,n.createElement)(I.FontSizePicker,{__nextHasNoMarginBottom:!0,fontSizes:T,value:t.fontSizeLabelRatingBar,withSlider:!0,withReset:!0,onChange:e=>{let t=0;t=void 0===e?d(T,"small","size"):c(e,0,100),a({fontSizeLabelRatingBar:t})}}))),(0,n.createElement)("div",{...(0,i.useBlockProps)()},(0,n.createElement)(y,{...e,IsInEditor:!0}),e.isSelected&&(0,n.createElement)(I.Button,{className:"superbaddons-add-button",onClick:()=>{let e=[...t.ratingBars,{...b}];a({ratingBars:e})}},(0,l.__)("Add Rating Bar","superb-blocks"),(0,n.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNSAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNSAwLjI1QzYuMTY0OTggMC4yNSA0Ljg1OTk0IDAuNjQ1ODgxIDMuNzQ5OSAxLjM4NzU4QzIuNjM5ODcgMi4xMjkyOCAxLjc3NDcxIDMuMTgzNDkgMS4yNjM4MiA0LjQxNjg5QzAuNzUyOTI1IDUuNjUwMjkgMC42MTkyNTIgNy4wMDc0OSAwLjg3OTcwMiA4LjMxNjg2QzEuMTQwMTUgOS42MjYyMyAxLjc4MzAzIDEwLjgyOSAyLjcyNzAzIDExLjc3M0MzLjY3MTA0IDEyLjcxNyA0Ljg3Mzc3IDEzLjM1OTggNi4xODMxNCAxMy42MjAzQzcuNDkyNTIgMTMuODgwOCA4Ljg0OTcxIDEzLjc0NzEgMTAuMDgzMSAxMy4yMzYyQzExLjMxNjUgMTIuNzI1MyAxMi4zNzA3IDExLjg2MDEgMTMuMTEyNCAxMC43NTAxQzEzLjg1NDEgOS42NDAwNyAxNC4yNSA4LjMzNTAyIDE0LjI1IDdDMTQuMjQ4IDUuMjEwNCAxMy41MzYyIDMuNDk0NjYgMTIuMjcwOCAyLjIyOTIyQzExLjAwNTMgMC45NjM3ODEgOS4yODk2MSAwLjI1MTk4NSA3LjUgMC4yNVpNNy41IDEyLjI1QzYuNDYxNjUgMTIuMjUgNS40NDY2MiAxMS45NDIxIDQuNTgzMjYgMTEuMzY1MkMzLjcxOTkgMTAuNzg4MyAzLjA0NyA5Ljk2ODQgMi42NDk2NCA5LjAwOTA5QzIuMjUyMjggOC4wNDk3OCAyLjE0ODMxIDYuOTk0MTggMi4zNTA4OCA1Ljk3NTc4QzIuNTUzNDUgNC45NTczOCAzLjA1MzQ3IDQuMDIxOTEgMy43ODc2OSAzLjI4NzY5QzQuNTIxOTIgMi41NTM0NiA1LjQ1NzM4IDIuMDUzNDUgNi40NzU3OCAxLjg1MDg4QzcuNDk0MTggMS42NDgzIDguNTQ5NzggMS43NTIyNyA5LjUwOTA5IDIuMTQ5NjNDMTAuNDY4NCAyLjU0Njk5IDExLjI4ODMgMy4yMTk5IDExLjg2NTIgNC4wODMyNkMxMi40NDIxIDQuOTQ2NjEgMTIuNzUgNS45NjE2NSAxMi43NSA3QzEyLjc0ODUgOC4zOTE5MyAxMi4xOTQ5IDkuNzI2NDIgMTEuMjEwNyAxMC43MTA3QzEwLjIyNjQgMTEuNjk0OSA4Ljg5MTkzIDEyLjI0ODUgNy41IDEyLjI1Wk0xMC43NSA3QzEwLjc1IDcuMTk4OTEgMTAuNjcxIDcuMzg5NjggMTAuNTMwMyA3LjUzMDMzQzEwLjM4OTcgNy42NzA5OCAxMC4xOTg5IDcuNzUgMTAgNy43NUg4LjI1VjkuNUM4LjI1IDkuNjk4OTEgOC4xNzA5OCA5Ljg4OTY4IDguMDMwMzMgMTAuMDMwM0M3Ljg4OTY4IDEwLjE3MSA3LjY5ODkyIDEwLjI1IDcuNSAxMC4yNUM3LjMwMTA5IDEwLjI1IDcuMTEwMzIgMTAuMTcxIDYuOTY5NjcgMTAuMDMwM0M2LjgyOTAyIDkuODg5NjggNi43NSA5LjY5ODkxIDYuNzUgOS41VjcuNzVINUM0LjgwMTA5IDcuNzUgNC42MTAzMyA3LjY3MDk4IDQuNDY5NjcgNy41MzAzM0M0LjMyOTAyIDcuMzg5NjggNC4yNSA3LjE5ODkxIDQuMjUgN0M0LjI1IDYuODAxMDkgNC4zMjkwMiA2LjYxMDMyIDQuNDY5NjcgNi40Njk2N0M0LjYxMDMzIDYuMzI5MDIgNC44MDEwOSA2LjI1IDUgNi4yNUg2Ljc1VjQuNUM2Ljc1IDQuMzAxMDkgNi44MjkwMiA0LjExMDMyIDYuOTY5NjcgMy45Njk2N0M3LjExMDMyIDMuODI5MDIgNy4zMDEwOSAzLjc1IDcuNSAzLjc1QzcuNjk4OTIgMy43NSA3Ljg4OTY4IDMuODI5MDIgOC4wMzAzMyAzLjk2OTY3QzguMTcwOTggNC4xMTAzMiA4LjI1IDQuMzAxMDkgOC4yNSA0LjVWNi4yNUgxMEMxMC4xOTg5IDYuMjUgMTAuMzg5NyA2LjMyOTAyIDEwLjUzMDMgNi40Njk2N0MxMC42NzEgNi42MTAzMiAxMC43NSA2LjgwMTA5IDEwLjc1IDdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"}))))},save:function(e){return(0,n.createElement)("div",{...i.useBlockProps.save()},(0,n.createElement)(y,{...e,IsInEditor:!1}))}})},241:e=>{e.exports=function(e){var t={};function a(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,a),l.l=!0,l.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(r,l,function(t){return e[t]}.bind(null,l));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t),a.d(t,"validateHTMLColorName",(function(){return i})),a.d(t,"validateHTMLColorSpecialName",(function(){return o})),a.d(t,"validateHTMLColorHex",(function(){return g})),a.d(t,"validateHTMLColorRgb",(function(){return j})),a.d(t,"validateHTMLColorHsl",(function(){return d})),a.d(t,"validateHTMLColorHwb",(function(){return m})),a.d(t,"validateHTMLColorLab",(function(){return I})),a.d(t,"validateHTMLColorLch",(function(){return L})),a.d(t,"validateHTMLColor",(function(){return y}));const r=e=>e&&"string"==typeof e,l=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenrod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","Goldenrod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenrodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquamarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenrod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"],n=["currentColor","inherit","transparent"],i=e=>{let t=!1;return r(e)&&l.map((a=>(e.toLowerCase()===a.toLowerCase()&&(t=!0),null))),t},o=e=>{let t=!1;return r(e)&&n.map((a=>(e.toLowerCase()===a.toLowerCase()&&(t=!0),null))),t},g=e=>!!r(e)&&(e&&/^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i.test(e)),s="(([\\d]{0,5})((\\.([\\d]{1,5}))?))",u=`(${s}%)`,M="(([0-9]|[1-9][0-9]|100)%)",c=`(${M}|(0?((\\.([\\d]{1,5}))?))|1)`,N=`([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?)([\\s]{1,5})(((${M}))|(0?((\\.([\\d]{1,5}))?))|1))?([\\s]{0,5})\\)`,D="(-?(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360)(deg)?)",j=e=>{if(r(e)){const t="([\\s]{0,5})([\\d]{1,5})%?([\\s]{0,5}),?",a="((([\\s]{0,5}),?([\\s]{0,5}))|(([\\s]{1,5})))",r=new RegExp(`^(rgb)a?\\(${t}${a}${t}${a}${t}${a}((\\/?([\\s]{0,5})(0?\\.?([\\d]{1,5})%?([\\s]{0,5}))?|1|0))?\\)$`);return e&&r.test(e)}return!1},d=e=>{if(r(e)){const t=new RegExp(`^(hsl)a?\\((([\\s]{0,5})(${D}|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-9][0-9]|400)grad)|((([0-5])?\\.([\\d]{1,5})|6\\.([0-9]|1[0-9]|2[0-8])|[0-6])rad)|((0?((\\.([\\d]{1,5}))?)|1)turn))((([\\s]{0,5}),([\\s]{0,5}))|(([\\s]{1,5}))))(([\\s]{0,5})(0|${M})((([\\s]{0,5}),([\\s]{0,5}))|(([\\s]{1,5}))))(([\\s]{0,5})(0|${M})([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?|,?)([\\s]{0,5})(((${M}))|(0?((\\.([\\d]{1,5}))?))|1))?\\)$`);return e&&t.test(e)}return!1},m=e=>{if(r(e)){const t=new RegExp(`^(hwb\\(([\\s]{0,5})${D}([\\s]{1,5}))((0|${M})([\\s]{1,5}))((0|${M})${N}$`);return e&&t.test(e)}return!1},I=e=>{if(r(e)){const t="(-?(([0-9]|[1-9][0-9]|1[0-5][0-9])((\\.([\\d]{1,5}))?)?|160))",a=new RegExp(`^(lab\\(([\\s]{0,5})${u}([\\s]{1,5})${t}([\\s]{1,5})${t}${N}$`);return e&&a.test(e)}return!1},L=e=>{if(r(e)){const t=new RegExp(`^lch\\((([\\s]{0,5})((([0-9]|[1-9][0-9])?((\\.([\\d]{1,5}))?)|100)(%)?)([\\s]{1,5})${""+s}([\\s]{1,5})((${D})|(0|${c})|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360))([\\s]{0,5})((\\/([\\s]{0,5})${c}))?)\\)$`);return e&&t.test(e)}return!1},y=e=>!!(e&&g(e)||j(e)||d(e)||m(e)||I(e)||L(e));t.default=e=>!!(e&&g(e)||i(e)||o(e)||j(e)||d(e)||m(e)||I(e)||L(e))}])}},a={};function r(e){var l=a[e];if(void 0!==l)return l.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,a,l,n)=>{if(!a){var i=1/0;for(u=0;u<e.length;u++){for(var[a,l,n]=e[u],o=!0,g=0;g<a.length;g++)(!1&n||i>=n)&&Object.keys(r.O).every((e=>r.O[e](a[g])))?a.splice(g--,1):(o=!1,n<i&&(i=n));if(o){e.splice(u--,1);var s=l();void 0!==s&&(t=s)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,l,n]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={891:0,801:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var l,n,[i,o,g]=a,s=0;if(i.some((t=>0!==e[t]))){for(l in o)r.o(o,l)&&(r.m[l]=o[l]);if(g)var u=g(r)}for(t&&t(a);s<i.length;s++)n=i[s],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},a=globalThis.webpackChunksuperb_elementor_and_gutenberg_addons=globalThis.webpackChunksuperb_elementor_and_gutenberg_addons||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=r.O(void 0,[801],(()=>r(837)));l=r.O(l)})();