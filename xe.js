var $=(e,t,r)=>{let l=e.blur
return(l?e:document)["querySelector"+((l?r:t)?"All":"")](l?t:e)}
$.new=((e,t={})=>{let r=document.createElement(e),l=Object
return l.assign(r,l.keys(t).reduce((e,n)=>("object"==typeof t[n]?l.assign(r[n],t[n]):e[n]=t[n],e),{})),r}),$.all=((...e)=>$(...e,!0))