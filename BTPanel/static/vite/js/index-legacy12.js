System.register(["./index-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy3.js?v=1721298337096","./useTableData-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1721298337096","./useLoading-legacy.js?v=1721298337096","./useTableColumns-legacy.js?v=1721298337096","./index-legacy63.js?v=1721298337096","./hooks-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./pinia-legacy.js?v=1721298337096","./DataTable-legacy.js?v=1721298337096","./Checkbox-legacy.js?v=1721298337096","./Ellipsis-legacy.js?v=1721298337096","./Select-legacy.js?v=1721298337096","./Tag-legacy.js?v=1721298337096","./Empty-legacy.js?v=1721298337096","./omit-legacy.js?v=1721298337096","./Skeleton-legacy.js?v=1721298337096","./Progress-legacy.js?v=1721298337096","./index-legacy64.js?v=1721298337096","./index-legacy65.js?v=1721298337096"],(function(e,a){"use strict";var t,l,s,n,i,c,o,u,d,p,r,y,g,_,h,m,k,b,w,v,f,j,x,C,D,S,B,R,U,W,L,P,T,q,z,E,A,G,I,K,N,H,V,$,F,J,M,O,Q,X;return{setters:[e=>{t=e.e,l=e.u,s=e.g,n=e.s,i=e.o,c=e.h,o=e.t,u=e.w,d=e.j,p=e.k,r=e.m,y=e.l,g=e.B,_=e.p,h=e.q,m=e.r,k=e.v},e=>{b=e._},e=>{w=e._},e=>{v=e._},e=>{f=e.u,j=e._},e=>{x=e._},e=>{C=e.u},e=>{D=e.a,S=e.b},e=>{B=e.a,R=e.b,U=e.d,W=e._,L=e.e,P=e.f,T=e.g,q=e.u,z=e.c},e=>{E=e.g},e=>{A=e._},e=>{G=e.P,I=e.q,K=e.l,N=e.f,H=e.w,V=e.S,$=e.U,F=e.V,J=e._,M=e.W,O=e.b,Q=e.a1,X=e.t},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const Y={class:"p-16px"};e("default",K({__name:"index",setup(e){const K=Q((()=>k((()=>a.import("./index-legacy73.js?v=1721298337096")),void 0))),Z=l(),ee=s(),ae=()=>{ee.show=!0},te=()=>{P()},le=()=>{T()},se=async()=>{await n(Z.type,{ids:[]}),re()},ne=N({p:1,limit:10,sid:-1,search:""}),{keys:ie,table:ce,columns:oe}=f([{type:"selection",width:40},{key:"name",title:"Database name",width:"12%",minWidth:120},{key:"username",title:"Username",width:"12%",minWidth:120},{key:"password",title:"Password",minWidth:150,render:e=>G(A,{value:e.password},null)},{key:"backup_count",title:"Backup",width:"12%",render:e=>G("div",{class:"flex items-center"},[G(t,{type:e.backup_count>0?"primary":"warning",onClick:()=>{B(e)}},{default:()=>[e.backup_count>0?`\tExists(${e.backup_count})`:"Not exist"]}),G("span",{class:"mx-4px"},[I("|")]),G(t,{onClick:()=>{R(e)}},{default:()=>[I("Import")]})])},{key:"sid",title:"Location",width:"12%",minWidth:120,render:e=>E(e)},D({onBlur:async(e,a)=>{await i({id:a.id,ps:e})}}),S({width:100,options:e=>[{label:"CHG PW",onClick:()=>{q(e)}},{label:"Del",onClick:()=>{z([e])}}]})]),ue=[{key:"sync",label:"Sync to Server",onBatch:e=>{c({title:"Batch Sync to Server",content:"Please be cautious, The selected item will be [Sync to Server] after confirmation",onConfirm:async({hide:a})=>{await n(Z.type,{ids:e.map((e=>e.id))}),a()}})}},{key:"backup",type:"confirm",label:"DB backup",confirm:{title:"Batch backup database",desc:"Do you continue to operate in batch backup database?",api:e=>o(Z.type,{id:e.id},!1),done:()=>{re()},columns:[{key:"name",title:"Database Name"}]}},{key:"delete",label:"Delete database",onBatch:e=>{z(e)}}],{loading:de,setLoading:pe}=C(),re=async()=>{try{pe(!0);const{message:e}=await u(Z.type,(()=>{const e={...X(ne)};return-1===e.sid&&delete e.sid,e})());d(e)?(ce.data=p(e.data)?e.data:[],ce.total=r(e.page)):(ce.data=[],ce.total=0)}finally{ie.value=[],pe(!1)}};return H((()=>Z.isRefresh),(e=>{e&&(Z.setRefresh(!1),Z.delRemoteId===ne.sid&&(ne.sid=-1),re())})),(async()=>{await Z.getRemote(),Z.install?re():y()})(),(e,a)=>{const t=g,l=_,s=x,n=j,i=v,c=w,o=b,u=h,d=m;return V(),$(M(L),null,{default:F((()=>[G(d,null,{default:F((()=>[J("div",Y,[G(o,null,{toolsLeft:F((()=>[G(t,{type:"primary",onClick:ae},{default:F((()=>[I("Add DB")])),_:1}),G(t,{onClick:te},{default:F((()=>[I("Root password")])),_:1}),G(t,{onClick:le},{default:F((()=>[I("Remote DB")])),_:1}),G(l,{class:"mx-0!",vertical:""}),G(t,{onClick:se},{default:F((()=>[I("Sync all")])),_:1}),G(t,{onClick:M(U)},{default:F((()=>[I("Get DB from server")])),_:1},8,["onClick"])])),toolsRight:F((()=>[G(M(W),{value:M(ne).sid,"onUpdate:value":a[0]||(a[0]=e=>M(ne).sid=e),"store-key":"database-pgsql-page",onChange:re},null,8,["value"]),G(s,{value:M(ne).search,"onUpdate:value":a[1]||(a[1]=e=>M(ne).search=e),placeholder:"Database search",onSearch:re},null,8,["value"])])),table:F((()=>[G(n,{"checked-row-keys":M(ie),"onUpdate:checkedRowKeys":a[2]||(a[2]=e=>O(ie)?ie.value=e:null),loading:M(de),data:M(ce).data,columns:M(oe)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:F((()=>[G(i,{"checked-row-keys":M(ie),"onUpdate:checkedRowKeys":a[3]||(a[3]=e=>O(ie)?ie.value=e:null),data:M(ce).data,options:ue},null,8,["checked-row-keys","data"])])),pageRight:F((()=>[G(c,{page:M(ne).p,"onUpdate:page":a[4]||(a[4]=e=>M(ne).p=e),"page-size":M(ne).limit,"onUpdate:pageSize":a[5]||(a[5]=e=>M(ne).limit=e),"store-key":"database-pgsql-page","item-count":M(ce).total,onRefresh:re},null,8,["page","page-size","item-count"])])),_:1}),G(u,{show:M(ee).show,"onUpdate:show":a[6]||(a[6]=e=>M(ee).show=e),title:"Add Database",width:540,"min-height":280,footer:!0,component:M(K)},null,8,["show","component"])])])),_:1})])),_:1})}}}))}}}));