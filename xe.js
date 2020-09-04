var $=(e,t,r)=>{let l=e.blur
return(l?e:document)[(l?r:t)?"querySelectorAll":"querySelector"](l?t:e)}
$.new=((e,t={})=>{let r=document.createElement(e),l=Object
return l.assign(r,l.keys(t).reduce((e,c)=>("object"==typeof t[c]&&t[c]?l.assign(r[c],t[c]):e[c]=t[c],e),{})),r}),$.all=((...e)=>$(...e,!0))
