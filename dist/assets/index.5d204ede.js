const Uu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};Uu();function Ho(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Bu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ku=Ho(Bu);function fc(n){return!!n||n===""}function Vo(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=it(i)?Vu(i):Vo(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(it(n))return n;if(rt(n))return n}}const Gu=/;(?![^(]*\))/g,Hu=/:(.+)/;function Vu(n){const e={};return n.split(Gu).forEach(t=>{if(t){const i=t.split(Hu);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Wo(n){let e="";if(it(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){const i=Wo(n[t]);i&&(e+=i+" ")}else if(rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const _a=n=>it(n)?n:n==null?"":Le(n)||rt(n)&&(n.toString===mc||!Ie(n.toString))?JSON.stringify(n,hc,2):String(n),hc=(n,e)=>e&&e.__v_isRef?hc(n,e.value):Di(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:dc(e)?{[`Set(${e.size})`]:[...e.values()]}:rt(e)&&!Le(e)&&!gc(e)?String(e):e,je={},Li=[],kt=()=>{},Wu=()=>!1,qu=/^on[^a-z]/,us=n=>qu.test(n),qo=n=>n.startsWith("onUpdate:"),lt=Object.assign,Xo=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xu=Object.prototype.hasOwnProperty,Ne=(n,e)=>Xu.call(n,e),Le=Array.isArray,Di=n=>fs(n)==="[object Map]",dc=n=>fs(n)==="[object Set]",Ie=n=>typeof n=="function",it=n=>typeof n=="string",jo=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",pc=n=>rt(n)&&Ie(n.then)&&Ie(n.catch),mc=Object.prototype.toString,fs=n=>mc.call(n),ju=n=>fs(n).slice(8,-1),gc=n=>fs(n)==="[object Object]",Yo=n=>it(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Kr=Ho(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Yu=/-(\w)/g,zi=hs(n=>n.replace(Yu,(e,t)=>t?t.toUpperCase():"")),$u=/\B([A-Z])/g,Vi=hs(n=>n.replace($u,"-$1").toLowerCase()),_c=hs(n=>n.charAt(0).toUpperCase()+n.slice(1)),Cs=hs(n=>n?`on${_c(n)}`:""),ur=(n,e)=>!Object.is(n,e),Ls=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ns=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Zu=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let xa;const Ku=()=>xa||(xa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let $t;class Ju{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&$t&&(this.parent=$t,this.index=($t.scopes||($t.scopes=[])).push(this)-1)}run(e){if(this.active){const t=$t;try{return $t=this,e()}finally{$t=t}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Qu(n,e=$t){e&&e.active&&e.effects.push(n)}const $o=n=>{const e=new Set(n);return e.w=0,e.n=0,e},xc=n=>(n.w&Ln)>0,vc=n=>(n.n&Ln)>0,ef=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Ln},tf=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];xc(r)&&!vc(r)?r.delete(n):e[t++]=r,r.w&=~Ln,r.n&=~Ln}e.length=t}},_o=new WeakMap;let tr=0,Ln=1;const xo=30;let Ot;const Yn=Symbol(""),vo=Symbol("");class Zo{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Qu(this,i)}run(){if(!this.active)return this.fn();let e=Ot,t=wn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ot,Ot=this,wn=!0,Ln=1<<++tr,tr<=xo?ef(this):va(this),this.fn()}finally{tr<=xo&&tf(this),Ln=1<<--tr,Ot=this.parent,wn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ot===this?this.deferStop=!0:this.active&&(va(this),this.onStop&&this.onStop(),this.active=!1)}}function va(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let wn=!0;const Mc=[];function Wi(){Mc.push(wn),wn=!1}function qi(){const n=Mc.pop();wn=n===void 0?!0:n}function yt(n,e,t){if(wn&&Ot){let i=_o.get(n);i||_o.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=$o()),yc(r)}}function yc(n,e){let t=!1;tr<=xo?vc(n)||(n.n|=Ln,t=!xc(n)):t=!n.has(Ot),t&&(n.add(Ot),Ot.deps.push(n))}function fn(n,e,t,i,r,s){const a=_o.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Le(n))a.forEach((l,c)=>{(c==="length"||c>=i)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Le(n)?Yo(t)&&o.push(a.get("length")):(o.push(a.get(Yn)),Di(n)&&o.push(a.get(vo)));break;case"delete":Le(n)||(o.push(a.get(Yn)),Di(n)&&o.push(a.get(vo)));break;case"set":Di(n)&&o.push(a.get(Yn));break}if(o.length===1)o[0]&&Mo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Mo($o(l))}}function Mo(n,e){const t=Le(n)?n:[...n];for(const i of t)i.computed&&Ma(i);for(const i of t)i.computed||Ma(i)}function Ma(n,e){(n!==Ot||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const nf=Ho("__proto__,__v_isRef,__isVue"),bc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(jo)),rf=Ko(),sf=Ko(!1,!0),of=Ko(!0),ya=af();function af(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Be(this);for(let s=0,a=this.length;s<a;s++)yt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Be)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Wi();const i=Be(this)[e].apply(this,t);return qi(),i}}),n}function Ko(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Sf:Ac:e?Tc:Ec).get(i))return i;const a=Le(i);if(!n&&a&&Ne(ya,r))return Reflect.get(ya,r,s);const o=Reflect.get(i,r,s);return(jo(r)?bc.has(r):nf(r))||(n||yt(i,"get",r),e)?o:at(o)?a&&Yo(r)?o:o.value:rt(o)?n?Cc(o):ea(o):o}}const lf=Sc(),cf=Sc(!0);function Sc(n=!1){return function(t,i,r,s){let a=t[i];if(fr(a)&&at(a)&&!at(r))return!1;if(!n&&!fr(r)&&(yo(r)||(r=Be(r),a=Be(a)),!Le(t)&&at(a)&&!at(r)))return a.value=r,!0;const o=Le(t)&&Yo(i)?Number(i)<t.length:Ne(t,i),l=Reflect.set(t,i,r,s);return t===Be(s)&&(o?ur(r,a)&&fn(t,"set",i,r):fn(t,"add",i,r)),l}}function uf(n,e){const t=Ne(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&fn(n,"delete",e,void 0),i}function ff(n,e){const t=Reflect.has(n,e);return(!jo(e)||!bc.has(e))&&yt(n,"has",e),t}function hf(n){return yt(n,"iterate",Le(n)?"length":Yn),Reflect.ownKeys(n)}const wc={get:rf,set:lf,deleteProperty:uf,has:ff,ownKeys:hf},df={get:of,set(n,e){return!0},deleteProperty(n,e){return!0}},pf=lt({},wc,{get:sf,set:cf}),Jo=n=>n,ds=n=>Reflect.getPrototypeOf(n);function yr(n,e,t=!1,i=!1){n=n.__v_raw;const r=Be(n),s=Be(e);t||(e!==s&&yt(r,"get",e),yt(r,"get",s));const{has:a}=ds(r),o=i?Jo:t?na:hr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function br(n,e=!1){const t=this.__v_raw,i=Be(t),r=Be(n);return e||(n!==r&&yt(i,"has",n),yt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Sr(n,e=!1){return n=n.__v_raw,!e&&yt(Be(n),"iterate",Yn),Reflect.get(n,"size",n)}function ba(n){n=Be(n);const e=Be(this);return ds(e).has.call(e,n)||(e.add(n),fn(e,"add",n,n)),this}function Sa(n,e){e=Be(e);const t=Be(this),{has:i,get:r}=ds(t);let s=i.call(t,n);s||(n=Be(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?ur(e,a)&&fn(t,"set",n,e):fn(t,"add",n,e),this}function wa(n){const e=Be(this),{has:t,get:i}=ds(e);let r=t.call(e,n);r||(n=Be(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&fn(e,"delete",n,void 0),s}function Ea(){const n=Be(this),e=n.size!==0,t=n.clear();return e&&fn(n,"clear",void 0,void 0),t}function wr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=Be(a),l=e?Jo:n?na:hr;return!n&&yt(o,"iterate",Yn),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Er(n,e,t){return function(...i){const r=this.__v_raw,s=Be(r),a=Di(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Jo:e?na:hr;return!e&&yt(s,"iterate",l?vo:Yn),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function pn(n){return function(...e){return n==="delete"?!1:this}}function mf(){const n={get(s){return yr(this,s)},get size(){return Sr(this)},has:br,add:ba,set:Sa,delete:wa,clear:Ea,forEach:wr(!1,!1)},e={get(s){return yr(this,s,!1,!0)},get size(){return Sr(this)},has:br,add:ba,set:Sa,delete:wa,clear:Ea,forEach:wr(!1,!0)},t={get(s){return yr(this,s,!0)},get size(){return Sr(this,!0)},has(s){return br.call(this,s,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:wr(!0,!1)},i={get(s){return yr(this,s,!0,!0)},get size(){return Sr(this,!0)},has(s){return br.call(this,s,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:wr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Er(s,!1,!1),t[s]=Er(s,!0,!1),e[s]=Er(s,!1,!0),i[s]=Er(s,!0,!0)}),[n,t,e,i]}const[gf,_f,xf,vf]=mf();function Qo(n,e){const t=e?n?vf:xf:n?_f:gf;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ne(t,r)&&r in i?t:i,r,s)}const Mf={get:Qo(!1,!1)},yf={get:Qo(!1,!0)},bf={get:Qo(!0,!1)},Ec=new WeakMap,Tc=new WeakMap,Ac=new WeakMap,Sf=new WeakMap;function wf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ef(n){return n.__v_skip||!Object.isExtensible(n)?0:wf(ju(n))}function ea(n){return fr(n)?n:ta(n,!1,wc,Mf,Ec)}function Tf(n){return ta(n,!1,pf,yf,Tc)}function Cc(n){return ta(n,!0,df,bf,Ac)}function ta(n,e,t,i,r){if(!rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Ef(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Pi(n){return fr(n)?Pi(n.__v_raw):!!(n&&n.__v_isReactive)}function fr(n){return!!(n&&n.__v_isReadonly)}function yo(n){return!!(n&&n.__v_isShallow)}function Lc(n){return Pi(n)||fr(n)}function Be(n){const e=n&&n.__v_raw;return e?Be(e):n}function Dc(n){return ns(n,"__v_skip",!0),n}const hr=n=>rt(n)?ea(n):n,na=n=>rt(n)?Cc(n):n;function Pc(n){wn&&Ot&&(n=Be(n),yc(n.dep||(n.dep=$o())))}function Rc(n,e){n=Be(n),n.dep&&Mo(n.dep)}function at(n){return!!(n&&n.__v_isRef===!0)}function Ta(n){return Af(n,!1)}function Af(n,e){return at(n)?n:new Cf(n,e)}class Cf{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Be(e),this._value=t?e:hr(e)}get value(){return Pc(this),this._value}set value(e){e=this.__v_isShallow?e:Be(e),ur(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:hr(e),Rc(this))}}function Ic(n){return at(n)?n.value:n}const Lf={get:(n,e,t)=>Ic(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return at(r)&&!at(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Fc(n){return Pi(n)?n:new Proxy(n,Lf)}class Df{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Zo(e,()=>{this._dirty||(this._dirty=!0,Rc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Be(this);return Pc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Pf(n,e,t=!1){let i,r;const s=Ie(n);return s?(i=n,r=kt):(i=n.get,r=n.set),new Df(i,r,s||!r,t)}function En(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ps(s,e,t)}return r}function Ct(n,e,t,i){if(Ie(n)){const s=En(n,e,t,i);return s&&pc(s)&&s.catch(a=>{ps(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Ct(n[s],e,t,i));return r}function ps(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){En(l,null,10,[n,a,o]);return}}Rf(n,t,r,i)}function Rf(n,e,t,i=!0){console.error(n)}let is=!1,bo=!1;const Mt=[];let ln=0;const sr=[];let nr=null,bi=0;const or=[];let bn=null,Si=0;const Nc=Promise.resolve();let ia=null,So=null;function If(n){const e=ia||Nc;return n?e.then(this?n.bind(this):n):e}function Ff(n){let e=ln+1,t=Mt.length;for(;e<t;){const i=e+t>>>1;dr(Mt[i])<n?e=i+1:t=i}return e}function zc(n){(!Mt.length||!Mt.includes(n,is&&n.allowRecurse?ln+1:ln))&&n!==So&&(n.id==null?Mt.push(n):Mt.splice(Ff(n.id),0,n),Oc())}function Oc(){!is&&!bo&&(bo=!0,ia=Nc.then(kc))}function Nf(n){const e=Mt.indexOf(n);e>ln&&Mt.splice(e,1)}function Uc(n,e,t,i){Le(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),Oc()}function zf(n){Uc(n,nr,sr,bi)}function Of(n){Uc(n,bn,or,Si)}function ms(n,e=null){if(sr.length){for(So=e,nr=[...new Set(sr)],sr.length=0,bi=0;bi<nr.length;bi++)nr[bi]();nr=null,bi=0,So=null,ms(n,e)}}function Bc(n){if(ms(),or.length){const e=[...new Set(or)];if(or.length=0,bn){bn.push(...e);return}for(bn=e,bn.sort((t,i)=>dr(t)-dr(i)),Si=0;Si<bn.length;Si++)bn[Si]();bn=null,Si=0}}const dr=n=>n.id==null?1/0:n.id;function kc(n){bo=!1,is=!0,ms(n),Mt.sort((t,i)=>dr(t)-dr(i));const e=kt;try{for(ln=0;ln<Mt.length;ln++){const t=Mt[ln];t&&t.active!==!1&&En(t,null,14)}}finally{ln=0,Mt.length=0,Bc(),is=!1,ia=null,(Mt.length||sr.length||or.length)&&kc(n)}}function Uf(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||je;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||je;h&&(r=t.map(m=>m.trim())),f&&(r=t.map(Zu))}let o,l=i[o=Cs(e)]||i[o=Cs(zi(e))];!l&&s&&(l=i[o=Cs(Vi(e))]),l&&Ct(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Ct(c,n,6,r)}}function Gc(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ie(n)){const l=c=>{const u=Gc(c,e,!0);u&&(o=!0,lt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(i.set(n,null),null):(Le(s)?s.forEach(l=>a[l]=null):lt(a,s),i.set(n,a),a)}function gs(n,e){return!n||!us(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(n,e[0].toLowerCase()+e.slice(1))||Ne(n,Vi(e))||Ne(n,e))}let Qt=null,_s=null;function rs(n){const e=Qt;return Qt=n,_s=n&&n.type.__scopeId||null,e}function Bf(n){_s=n}function kf(){_s=null}function Gf(n,e=Qt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&za(-1);const s=rs(e),a=n(...r);return rs(s),i._d&&za(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function Ds(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:x,inheritAttrs:p}=n;let d,v;const S=rs(n);try{if(t.shapeFlag&4){const T=r||i;d=Zt(u.call(T,T,f,s,m,h,x)),v=l}else{const T=e;d=Zt(T.length>1?T(s,{attrs:l,slots:o,emit:c}):T(s,null)),v=e.props?l:Hf(l)}}catch(T){ar.length=0,ps(T,n,1),d=Tn(cn)}let L=d;if(v&&p!==!1){const T=Object.keys(v),{shapeFlag:w}=L;T.length&&w&7&&(a&&T.some(qo)&&(v=Vf(v,a)),L=Dn(L,v))}return t.dirs&&(L=Dn(L),L.dirs=L.dirs?L.dirs.concat(t.dirs):t.dirs),t.transition&&(L.transition=t.transition),d=L,rs(S),d}const Hf=n=>{let e;for(const t in n)(t==="class"||t==="style"||us(t))&&((e||(e={}))[t]=n[t]);return e},Vf=(n,e)=>{const t={};for(const i in n)(!qo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Wf(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Aa(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!gs(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Aa(i,a,c):!0:!!a;return!1}function Aa(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!gs(t,s))return!0}return!1}function qf({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Xf=n=>n.__isSuspense;function jf(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):Of(n)}function Yf(n,e){if(nt){let t=nt.provides;const i=nt.parent&&nt.parent.provides;i===t&&(t=nt.provides=Object.create(i)),t[n]=e}}function Ps(n,e,t=!1){const i=nt||Qt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ie(e)?e.call(i.proxy):e}}const Ca={};function Rs(n,e,t){return Hc(n,e,t)}function Hc(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=je){const o=nt;let l,c=!1,u=!1;if(at(n)?(l=()=>n.value,c=yo(n)):Pi(n)?(l=()=>n,i=!0):Le(n)?(u=!0,c=n.some(v=>Pi(v)||yo(v)),l=()=>n.map(v=>{if(at(v))return v.value;if(Pi(v))return Ei(v);if(Ie(v))return En(v,o,2)})):Ie(n)?e?l=()=>En(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),Ct(n,o,3,[h])}:l=kt,e&&i){const v=l;l=()=>Ei(v())}let f,h=v=>{f=d.onStop=()=>{En(v,o,4)}};if(mr)return h=kt,e?t&&Ct(e,o,3,[l(),u?[]:void 0,h]):l(),kt;let m=u?[]:Ca;const x=()=>{if(!!d.active)if(e){const v=d.run();(i||c||(u?v.some((S,L)=>ur(S,m[L])):ur(v,m)))&&(f&&f(),Ct(e,o,3,[v,m===Ca?void 0:m,h]),m=v)}else d.run()};x.allowRecurse=!!e;let p;r==="sync"?p=x:r==="post"?p=()=>pt(x,o&&o.suspense):p=()=>zf(x);const d=new Zo(l,p);return e?t?x():m=d.run():r==="post"?pt(d.run.bind(d),o&&o.suspense):d.run(),()=>{d.stop(),o&&o.scope&&Xo(o.scope.effects,d)}}function $f(n,e,t){const i=this.proxy,r=it(n)?n.includes(".")?Vc(i,n):()=>i[n]:n.bind(i,i);let s;Ie(e)?s=e:(s=e.handler,t=e);const a=nt;Ui(this);const o=Hc(r,s.bind(i),t);return a?Ui(a):$n(),o}function Vc(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ei(n,e){if(!rt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),at(n))Ei(n.value,e);else if(Le(n))for(let t=0;t<n.length;t++)Ei(n[t],e);else if(dc(n)||Di(n))n.forEach(t=>{Ei(t,e)});else if(gc(n))for(const t in n)Ei(n[t],e);return n}function Zf(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ra(()=>{n.isMounted=!0}),jc(()=>{n.isUnmounting=!0}),n}const bt=[Function,Array],Kf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bt,onEnter:bt,onAfterEnter:bt,onEnterCancelled:bt,onBeforeLeave:bt,onLeave:bt,onAfterLeave:bt,onLeaveCancelled:bt,onBeforeAppear:bt,onAppear:bt,onAfterAppear:bt,onAppearCancelled:bt},setup(n,{slots:e}){const t=Oh(),i=Zf();let r;return()=>{const s=e.default&&qc(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const p of s)if(p.type!==cn){a=p;break}}const o=Be(n),{mode:l}=o;if(i.isLeaving)return Is(a);const c=La(a);if(!c)return Is(a);const u=wo(c,o,i,t);Eo(c,u);const f=t.subTree,h=f&&La(f);let m=!1;const{getTransitionKey:x}=c.type;if(x){const p=x();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(h&&h.type!==cn&&(!Gn(c,h)||m)){const p=wo(h,o,i,t);if(Eo(h,p),l==="out-in")return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.update()},Is(a);l==="in-out"&&c.type!==cn&&(p.delayLeave=(d,v,S)=>{const L=Wc(i,h);L[String(h.key)]=h,d._leaveCb=()=>{v(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return a}}},Jf=Kf;function Wc(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function wo(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:x,onBeforeAppear:p,onAppear:d,onAfterAppear:v,onAppearCancelled:S}=e,L=String(n.key),T=Wc(t,n),w=(M,E)=>{M&&Ct(M,i,9,E)},P=(M,E)=>{const F=E[1];w(M,E),Le(M)?M.every(B=>B.length<=1)&&F():M.length<=1&&F()},O={mode:s,persisted:a,beforeEnter(M){let E=o;if(!t.isMounted)if(r)E=p||o;else return;M._leaveCb&&M._leaveCb(!0);const F=T[L];F&&Gn(n,F)&&F.el._leaveCb&&F.el._leaveCb(),w(E,[M])},enter(M){let E=l,F=c,B=u;if(!t.isMounted)if(r)E=d||l,F=v||c,B=S||u;else return;let ce=!1;const se=M._enterCb=z=>{ce||(ce=!0,z?w(B,[M]):w(F,[M]),O.delayedLeave&&O.delayedLeave(),M._enterCb=void 0)};E?P(E,[M,se]):se()},leave(M,E){const F=String(n.key);if(M._enterCb&&M._enterCb(!0),t.isUnmounting)return E();w(f,[M]);let B=!1;const ce=M._leaveCb=se=>{B||(B=!0,E(),se?w(x,[M]):w(m,[M]),M._leaveCb=void 0,T[F]===n&&delete T[F])};T[F]=n,h?P(h,[M,ce]):ce()},clone(M){return wo(M,e,t,i)}};return O}function Is(n){if(xs(n))return n=Dn(n),n.children=null,n}function La(n){return xs(n)?n.children?n.children[0]:void 0:n}function Eo(n,e){n.shapeFlag&6&&n.component?Eo(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function qc(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===zt?(a.patchFlag&128&&r++,i=i.concat(qc(a.children,e,o))):(e||a.type!==cn)&&i.push(o!=null?Dn(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}const Jr=n=>!!n.type.__asyncLoader,xs=n=>n.type.__isKeepAlive;function Qf(n,e){Xc(n,"a",e)}function eh(n,e){Xc(n,"da",e)}function Xc(n,e,t=nt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(vs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)xs(r.parent.vnode)&&th(i,e,t,r),r=r.parent}}function th(n,e,t,i){const r=vs(e,n,i,!0);Yc(()=>{Xo(i[e],r)},t)}function vs(n,e,t=nt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Wi(),Ui(t);const o=Ct(e,t,n,a);return $n(),qi(),o});return i?r.unshift(s):r.push(s),s}}const hn=n=>(e,t=nt)=>(!mr||n==="sp")&&vs(n,e,t),nh=hn("bm"),ra=hn("m"),ih=hn("bu"),rh=hn("u"),jc=hn("bum"),Yc=hn("um"),sh=hn("sp"),oh=hn("rtg"),ah=hn("rtc");function lh(n,e=nt){vs("ec",n,e)}function In(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Wi(),Ct(l,t,8,[n.el,o,n,e]),qi())}}const ch=Symbol(),To=n=>n?au(n)?la(n)||n.proxy:To(n.parent):null,ss=lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>To(n.parent),$root:n=>To(n.root),$emit:n=>n.emit,$options:n=>Zc(n),$forceUpdate:n=>n.f||(n.f=()=>zc(n.update)),$nextTick:n=>n.n||(n.n=If.bind(n.proxy)),$watch:n=>$f.bind(n)}),uh={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==je&&Ne(i,e))return a[e]=1,i[e];if(r!==je&&Ne(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Ne(c,e))return a[e]=3,s[e];if(t!==je&&Ne(t,e))return a[e]=4,t[e];Ao&&(a[e]=0)}}const u=ss[e];let f,h;if(u)return e==="$attrs"&&yt(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==je&&Ne(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,Ne(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==je&&Ne(r,e)?(r[e]=t,!0):i!==je&&Ne(i,e)?(i[e]=t,!0):Ne(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==je&&Ne(n,a)||e!==je&&Ne(e,a)||(o=s[0])&&Ne(o,a)||Ne(i,a)||Ne(ss,a)||Ne(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ne(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Ao=!0;function fh(n){const e=Zc(n),t=n.proxy,i=n.ctx;Ao=!1,e.beforeCreate&&Da(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:x,activated:p,deactivated:d,beforeDestroy:v,beforeUnmount:S,destroyed:L,unmounted:T,render:w,renderTracked:P,renderTriggered:O,errorCaptured:M,serverPrefetch:E,expose:F,inheritAttrs:B,components:ce,directives:se,filters:z}=e;if(c&&hh(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const I in a){const k=a[I];Ie(k)&&(i[I]=k.bind(t))}if(r){const I=r.call(t,t);rt(I)&&(n.data=ea(I))}if(Ao=!0,s)for(const I in s){const k=s[I],G=Ie(k)?k.bind(t,t):Ie(k.get)?k.get.bind(t,t):kt,$=!Ie(k)&&Ie(k.set)?k.set.bind(t):kt,Q=Vh({get:G,set:$});Object.defineProperty(i,I,{enumerable:!0,configurable:!0,get:()=>Q.value,set:te=>Q.value=te})}if(o)for(const I in o)$c(o[I],i,t,I);if(l){const I=Ie(l)?l.call(t):l;Reflect.ownKeys(I).forEach(k=>{Yf(k,I[k])})}u&&Da(u,n,"c");function q(I,k){Le(k)?k.forEach(G=>I(G.bind(t))):k&&I(k.bind(t))}if(q(nh,f),q(ra,h),q(ih,m),q(rh,x),q(Qf,p),q(eh,d),q(lh,M),q(ah,P),q(oh,O),q(jc,S),q(Yc,T),q(sh,E),Le(F))if(F.length){const I=n.exposed||(n.exposed={});F.forEach(k=>{Object.defineProperty(I,k,{get:()=>t[k],set:G=>t[k]=G})})}else n.exposed||(n.exposed={});w&&n.render===kt&&(n.render=w),B!=null&&(n.inheritAttrs=B),ce&&(n.components=ce),se&&(n.directives=se)}function hh(n,e,t=kt,i=!1){Le(n)&&(n=Co(n));for(const r in n){const s=n[r];let a;rt(s)?"default"in s?a=Ps(s.from||r,s.default,!0):a=Ps(s.from||r):a=Ps(s),at(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function Da(n,e,t){Ct(Le(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function $c(n,e,t,i){const r=i.includes(".")?Vc(t,i):()=>t[i];if(it(n)){const s=e[n];Ie(s)&&Rs(r,s)}else if(Ie(n))Rs(r,n.bind(t));else if(rt(n))if(Le(n))n.forEach(s=>$c(s,e,t,i));else{const s=Ie(n.handler)?n.handler.bind(t):e[n.handler];Ie(s)&&Rs(r,s,n)}}function Zc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>os(l,c,a,!0)),os(l,e,a)),s.set(e,l),l}function os(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&os(n,s,t,!0),r&&r.forEach(a=>os(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=dh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const dh={data:Pa,props:Un,emits:Un,methods:Un,computed:Un,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Un,directives:Un,watch:mh,provide:Pa,inject:ph};function Pa(n,e){return e?n?function(){return lt(Ie(n)?n.call(this,this):n,Ie(e)?e.call(this,this):e)}:e:n}function ph(n,e){return Un(Co(n),Co(e))}function Co(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ft(n,e){return n?[...new Set([].concat(n,e))]:e}function Un(n,e){return n?lt(lt(Object.create(null),n),e):e}function mh(n,e){if(!n)return e;if(!e)return n;const t=lt(Object.create(null),n);for(const i in e)t[i]=ft(n[i],e[i]);return t}function gh(n,e,t,i=!1){const r={},s={};ns(s,Ms,1),n.propsDefaults=Object.create(null),Kc(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Tf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function _h(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Be(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(gs(n.emitsOptions,h))continue;const m=e[h];if(l)if(Ne(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const x=zi(h);r[x]=Lo(l,o,x,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Kc(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ne(e,f)&&((u=Vi(f))===f||!Ne(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Lo(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ne(e,f)&&!0)&&(delete s[f],c=!0)}c&&fn(n,"set","$attrs")}function Kc(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Kr(l))continue;const c=e[l];let u;r&&Ne(r,u=zi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:gs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Be(t),c=o||je;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Lo(r,l,f,c[f],n,!Ne(c,f))}}return a}function Lo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ne(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Ie(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Ui(r),i=c[t]=l.call(null,e),$n())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Vi(t))&&(i=!0))}return i}function Jc(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ie(n)){const u=f=>{l=!0;const[h,m]=Jc(f,e,!0);lt(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return i.set(n,Li),Li;if(Le(s))for(let u=0;u<s.length;u++){const f=zi(s[u]);Ra(f)&&(a[f]=je)}else if(s)for(const u in s){const f=zi(u);if(Ra(f)){const h=s[u],m=a[f]=Le(h)||Ie(h)?{type:h}:h;if(m){const x=Na(Boolean,m.type),p=Na(String,m.type);m[0]=x>-1,m[1]=p<0||x<p,(x>-1||Ne(m,"default"))&&o.push(f)}}}const c=[a,o];return i.set(n,c),c}function Ra(n){return n[0]!=="$"}function Ia(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Fa(n,e){return Ia(n)===Ia(e)}function Na(n,e){return Le(e)?e.findIndex(t=>Fa(t,n)):Ie(e)&&Fa(e,n)?0:-1}const Qc=n=>n[0]==="_"||n==="$stable",sa=n=>Le(n)?n.map(Zt):[Zt(n)],xh=(n,e,t)=>{if(e._n)return e;const i=Gf((...r)=>sa(e(...r)),t);return i._c=!1,i},eu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Qc(r))continue;const s=n[r];if(Ie(s))e[r]=xh(r,s,i);else if(s!=null){const a=sa(s);e[r]=()=>a}}},tu=(n,e)=>{const t=sa(e);n.slots.default=()=>t},vh=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Be(e),ns(e,"_",t)):eu(e,n.slots={})}else n.slots={},e&&tu(n,e);ns(n.slots,Ms,1)},Mh=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=je;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(lt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,eu(e,r)),a=e}else e&&(tu(n,e),a={default:1});if(s)for(const o in r)!Qc(o)&&!(o in a)&&delete r[o]};function nu(){return{app:null,config:{isNativeTag:Wu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yh=0;function bh(n,e){return function(i,r=null){Ie(i)||(i=Object.assign({},i)),r!=null&&!rt(r)&&(r=null);const s=nu(),a=new Set;let o=!1;const l=s.app={_uid:yh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Wh,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ie(c.install)?(a.add(c),c.install(l,...u)):Ie(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=Tn(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,la(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Do(n,e,t,i,r=!1){if(Le(n)){n.forEach((h,m)=>Do(h,e&&(Le(e)?e[m]:e),t,i,r));return}if(Jr(i)&&!r)return;const s=i.shapeFlag&4?la(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===je?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(it(c)?(u[c]=null,Ne(f,c)&&(f[c]=null)):at(c)&&(c.value=null)),Ie(l))En(l,o,12,[a,u]);else{const h=it(l),m=at(l);if(h||m){const x=()=>{if(n.f){const p=h?u[l]:l.value;r?Le(p)&&Xo(p,s):Le(p)?p.includes(s)||p.push(s):h?(u[l]=[s],Ne(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,Ne(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(x.id=-1,pt(x,t)):x()}}}const pt=jf;function Sh(n){return wh(n)}function wh(n,e){const t=Ku();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=kt,cloneNode:x,insertStaticContent:p}=n,d=(b,C,V,K=null,J=null,ie=null,re=!1,ae=null,le=!!C.dynamicChildren)=>{if(b===C)return;b&&!Gn(b,C)&&(K=Ae(b),oe(b,J,ie,!0),b=null),C.patchFlag===-2&&(le=!1,C.dynamicChildren=null);const{type:_,ref:g,shapeFlag:D}=C;switch(_){case oa:v(b,C,V,K);break;case cn:S(b,C,V,K);break;case Fs:b==null&&L(C,V,K,re);break;case zt:se(b,C,V,K,J,ie,re,ae,le);break;default:D&1?P(b,C,V,K,J,ie,re,ae,le):D&6?z(b,C,V,K,J,ie,re,ae,le):(D&64||D&128)&&_.process(b,C,V,K,J,ie,re,ae,le,ge)}g!=null&&J&&Do(g,b&&b.ref,ie,C||b,!C)},v=(b,C,V,K)=>{if(b==null)i(C.el=o(C.children),V,K);else{const J=C.el=b.el;C.children!==b.children&&c(J,C.children)}},S=(b,C,V,K)=>{b==null?i(C.el=l(C.children||""),V,K):C.el=b.el},L=(b,C,V,K)=>{[b.el,b.anchor]=p(b.children,C,V,K,b.el,b.anchor)},T=({el:b,anchor:C},V,K)=>{let J;for(;b&&b!==C;)J=h(b),i(b,V,K),b=J;i(C,V,K)},w=({el:b,anchor:C})=>{let V;for(;b&&b!==C;)V=h(b),r(b),b=V;r(C)},P=(b,C,V,K,J,ie,re,ae,le)=>{re=re||C.type==="svg",b==null?O(C,V,K,J,ie,re,ae,le):F(b,C,J,ie,re,ae,le)},O=(b,C,V,K,J,ie,re,ae)=>{let le,_;const{type:g,props:D,shapeFlag:H,transition:Y,patchFlag:ne,dirs:ve}=b;if(b.el&&x!==void 0&&ne===-1)le=b.el=x(b.el);else{if(le=b.el=a(b.type,ie,D&&D.is,D),H&8?u(le,b.children):H&16&&E(b.children,le,null,K,J,ie&&g!=="foreignObject",re,ae),ve&&In(b,null,K,"created"),D){for(const de in D)de!=="value"&&!Kr(de)&&s(le,de,null,D[de],ie,b.children,K,J,We);"value"in D&&s(le,"value",null,D.value),(_=D.onVnodeBeforeMount)&&Yt(_,K,b)}M(le,b,b.scopeId,re,K)}ve&&In(b,null,K,"beforeMount");const N=(!J||J&&!J.pendingBranch)&&Y&&!Y.persisted;N&&Y.beforeEnter(le),i(le,C,V),((_=D&&D.onVnodeMounted)||N||ve)&&pt(()=>{_&&Yt(_,K,b),N&&Y.enter(le),ve&&In(b,null,K,"mounted")},J)},M=(b,C,V,K,J)=>{if(V&&m(b,V),K)for(let ie=0;ie<K.length;ie++)m(b,K[ie]);if(J){let ie=J.subTree;if(C===ie){const re=J.vnode;M(b,re,re.scopeId,re.slotScopeIds,J.parent)}}},E=(b,C,V,K,J,ie,re,ae,le=0)=>{for(let _=le;_<b.length;_++){const g=b[_]=ae?Sn(b[_]):Zt(b[_]);d(null,g,C,V,K,J,ie,re,ae)}},F=(b,C,V,K,J,ie,re)=>{const ae=C.el=b.el;let{patchFlag:le,dynamicChildren:_,dirs:g}=C;le|=b.patchFlag&16;const D=b.props||je,H=C.props||je;let Y;V&&Fn(V,!1),(Y=H.onVnodeBeforeUpdate)&&Yt(Y,V,C,b),g&&In(C,b,V,"beforeUpdate"),V&&Fn(V,!0);const ne=J&&C.type!=="foreignObject";if(_?B(b.dynamicChildren,_,ae,V,K,ne,ie):re||G(b,C,ae,null,V,K,ne,ie,!1),le>0){if(le&16)ce(ae,C,D,H,V,K,J);else if(le&2&&D.class!==H.class&&s(ae,"class",null,H.class,J),le&4&&s(ae,"style",D.style,H.style,J),le&8){const ve=C.dynamicProps;for(let N=0;N<ve.length;N++){const de=ve[N],_e=D[de],xe=H[de];(xe!==_e||de==="value")&&s(ae,de,_e,xe,J,b.children,V,K,We)}}le&1&&b.children!==C.children&&u(ae,C.children)}else!re&&_==null&&ce(ae,C,D,H,V,K,J);((Y=H.onVnodeUpdated)||g)&&pt(()=>{Y&&Yt(Y,V,C,b),g&&In(C,b,V,"updated")},K)},B=(b,C,V,K,J,ie,re)=>{for(let ae=0;ae<C.length;ae++){const le=b[ae],_=C[ae],g=le.el&&(le.type===zt||!Gn(le,_)||le.shapeFlag&70)?f(le.el):V;d(le,_,g,null,K,J,ie,re,!0)}},ce=(b,C,V,K,J,ie,re)=>{if(V!==K){for(const ae in K){if(Kr(ae))continue;const le=K[ae],_=V[ae];le!==_&&ae!=="value"&&s(b,ae,_,le,re,C.children,J,ie,We)}if(V!==je)for(const ae in V)!Kr(ae)&&!(ae in K)&&s(b,ae,V[ae],null,re,C.children,J,ie,We);"value"in K&&s(b,"value",V.value,K.value)}},se=(b,C,V,K,J,ie,re,ae,le)=>{const _=C.el=b?b.el:o(""),g=C.anchor=b?b.anchor:o("");let{patchFlag:D,dynamicChildren:H,slotScopeIds:Y}=C;Y&&(ae=ae?ae.concat(Y):Y),b==null?(i(_,V,K),i(g,V,K),E(C.children,V,g,J,ie,re,ae,le)):D>0&&D&64&&H&&b.dynamicChildren?(B(b.dynamicChildren,H,V,J,ie,re,ae),(C.key!=null||J&&C===J.subTree)&&iu(b,C,!0)):G(b,C,V,g,J,ie,re,ae,le)},z=(b,C,V,K,J,ie,re,ae,le)=>{C.slotScopeIds=ae,b==null?C.shapeFlag&512?J.ctx.activate(C,V,K,re,le):j(C,V,K,J,ie,re,le):q(b,C,le)},j=(b,C,V,K,J,ie,re)=>{const ae=b.component=zh(b,K,J);if(xs(b)&&(ae.ctx.renderer=ge),Uh(ae),ae.asyncDep){if(J&&J.registerDep(ae,I),!b.el){const le=ae.subTree=Tn(cn);S(null,le,C,V)}return}I(ae,b,C,V,J,ie,re)},q=(b,C,V)=>{const K=C.component=b.component;if(Wf(b,C,V))if(K.asyncDep&&!K.asyncResolved){k(K,C,V);return}else K.next=C,Nf(K.update),K.update();else C.el=b.el,K.vnode=C},I=(b,C,V,K,J,ie,re)=>{const ae=()=>{if(b.isMounted){let{next:g,bu:D,u:H,parent:Y,vnode:ne}=b,ve=g,N;Fn(b,!1),g?(g.el=ne.el,k(b,g,re)):g=ne,D&&Ls(D),(N=g.props&&g.props.onVnodeBeforeUpdate)&&Yt(N,Y,g,ne),Fn(b,!0);const de=Ds(b),_e=b.subTree;b.subTree=de,d(_e,de,f(_e.el),Ae(_e),b,J,ie),g.el=de.el,ve===null&&qf(b,de.el),H&&pt(H,J),(N=g.props&&g.props.onVnodeUpdated)&&pt(()=>Yt(N,Y,g,ne),J)}else{let g;const{el:D,props:H}=C,{bm:Y,m:ne,parent:ve}=b,N=Jr(C);if(Fn(b,!1),Y&&Ls(Y),!N&&(g=H&&H.onVnodeBeforeMount)&&Yt(g,ve,C),Fn(b,!0),D&&De){const de=()=>{b.subTree=Ds(b),De(D,b.subTree,b,J,null)};N?C.type.__asyncLoader().then(()=>!b.isUnmounted&&de()):de()}else{const de=b.subTree=Ds(b);d(null,de,V,K,b,J,ie),C.el=de.el}if(ne&&pt(ne,J),!N&&(g=H&&H.onVnodeMounted)){const de=C;pt(()=>Yt(g,ve,de),J)}(C.shapeFlag&256||ve&&Jr(ve.vnode)&&ve.vnode.shapeFlag&256)&&b.a&&pt(b.a,J),b.isMounted=!0,C=V=K=null}},le=b.effect=new Zo(ae,()=>zc(_),b.scope),_=b.update=()=>le.run();_.id=b.uid,Fn(b,!0),_()},k=(b,C,V)=>{C.component=b;const K=b.vnode.props;b.vnode=C,b.next=null,_h(b,C.props,K,V),Mh(b,C.children,V),Wi(),ms(void 0,b.update),qi()},G=(b,C,V,K,J,ie,re,ae,le=!1)=>{const _=b&&b.children,g=b?b.shapeFlag:0,D=C.children,{patchFlag:H,shapeFlag:Y}=C;if(H>0){if(H&128){Q(_,D,V,K,J,ie,re,ae,le);return}else if(H&256){$(_,D,V,K,J,ie,re,ae,le);return}}Y&8?(g&16&&We(_,J,ie),D!==_&&u(V,D)):g&16?Y&16?Q(_,D,V,K,J,ie,re,ae,le):We(_,J,ie,!0):(g&8&&u(V,""),Y&16&&E(D,V,K,J,ie,re,ae,le))},$=(b,C,V,K,J,ie,re,ae,le)=>{b=b||Li,C=C||Li;const _=b.length,g=C.length,D=Math.min(_,g);let H;for(H=0;H<D;H++){const Y=C[H]=le?Sn(C[H]):Zt(C[H]);d(b[H],Y,V,null,J,ie,re,ae,le)}_>g?We(b,J,ie,!0,!1,D):E(C,V,K,J,ie,re,ae,le,D)},Q=(b,C,V,K,J,ie,re,ae,le)=>{let _=0;const g=C.length;let D=b.length-1,H=g-1;for(;_<=D&&_<=H;){const Y=b[_],ne=C[_]=le?Sn(C[_]):Zt(C[_]);if(Gn(Y,ne))d(Y,ne,V,null,J,ie,re,ae,le);else break;_++}for(;_<=D&&_<=H;){const Y=b[D],ne=C[H]=le?Sn(C[H]):Zt(C[H]);if(Gn(Y,ne))d(Y,ne,V,null,J,ie,re,ae,le);else break;D--,H--}if(_>D){if(_<=H){const Y=H+1,ne=Y<g?C[Y].el:K;for(;_<=H;)d(null,C[_]=le?Sn(C[_]):Zt(C[_]),V,ne,J,ie,re,ae,le),_++}}else if(_>H)for(;_<=D;)oe(b[_],J,ie,!0),_++;else{const Y=_,ne=_,ve=new Map;for(_=ne;_<=H;_++){const ye=C[_]=le?Sn(C[_]):Zt(C[_]);ye.key!=null&&ve.set(ye.key,_)}let N,de=0;const _e=H-ne+1;let xe=!1,A=0;const fe=new Array(_e);for(_=0;_<_e;_++)fe[_]=0;for(_=Y;_<=D;_++){const ye=b[_];if(de>=_e){oe(ye,J,ie,!0);continue}let me;if(ye.key!=null)me=ve.get(ye.key);else for(N=ne;N<=H;N++)if(fe[N-ne]===0&&Gn(ye,C[N])){me=N;break}me===void 0?oe(ye,J,ie,!0):(fe[me-ne]=_+1,me>=A?A=me:xe=!0,d(ye,C[me],V,null,J,ie,re,ae,le),de++)}const he=xe?Eh(fe):Li;for(N=he.length-1,_=_e-1;_>=0;_--){const ye=ne+_,me=C[ye],Se=ye+1<g?C[ye+1].el:K;fe[_]===0?d(null,me,V,Se,J,ie,re,ae,le):xe&&(N<0||_!==he[N]?te(me,V,Se,2):N--)}}},te=(b,C,V,K,J=null)=>{const{el:ie,type:re,transition:ae,children:le,shapeFlag:_}=b;if(_&6){te(b.component.subTree,C,V,K);return}if(_&128){b.suspense.move(C,V,K);return}if(_&64){re.move(b,C,V,ge);return}if(re===zt){i(ie,C,V);for(let D=0;D<le.length;D++)te(le[D],C,V,K);i(b.anchor,C,V);return}if(re===Fs){T(b,C,V);return}if(K!==2&&_&1&&ae)if(K===0)ae.beforeEnter(ie),i(ie,C,V),pt(()=>ae.enter(ie),J);else{const{leave:D,delayLeave:H,afterLeave:Y}=ae,ne=()=>i(ie,C,V),ve=()=>{D(ie,()=>{ne(),Y&&Y()})};H?H(ie,ne,ve):ve()}else i(ie,C,V)},oe=(b,C,V,K=!1,J=!1)=>{const{type:ie,props:re,ref:ae,children:le,dynamicChildren:_,shapeFlag:g,patchFlag:D,dirs:H}=b;if(ae!=null&&Do(ae,null,V,b,!0),g&256){C.ctx.deactivate(b);return}const Y=g&1&&H,ne=!Jr(b);let ve;if(ne&&(ve=re&&re.onVnodeBeforeUnmount)&&Yt(ve,C,b),g&6)Z(b.component,V,K);else{if(g&128){b.suspense.unmount(V,K);return}Y&&In(b,null,C,"beforeUnmount"),g&64?b.type.remove(b,C,V,J,ge,K):_&&(ie!==zt||D>0&&D&64)?We(_,C,V,!1,!0):(ie===zt&&D&384||!J&&g&16)&&We(le,C,V),K&&Me(b)}(ne&&(ve=re&&re.onVnodeUnmounted)||Y)&&pt(()=>{ve&&Yt(ve,C,b),Y&&In(b,null,C,"unmounted")},V)},Me=b=>{const{type:C,el:V,anchor:K,transition:J}=b;if(C===zt){be(V,K);return}if(C===Fs){w(b);return}const ie=()=>{r(V),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(b.shapeFlag&1&&J&&!J.persisted){const{leave:re,delayLeave:ae}=J,le=()=>re(V,ie);ae?ae(b.el,ie,le):le()}else ie()},be=(b,C)=>{let V;for(;b!==C;)V=h(b),r(b),b=V;r(C)},Z=(b,C,V)=>{const{bum:K,scope:J,update:ie,subTree:re,um:ae}=b;K&&Ls(K),J.stop(),ie&&(ie.active=!1,oe(re,b,C,V)),ae&&pt(ae,C),pt(()=>{b.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},We=(b,C,V,K=!1,J=!1,ie=0)=>{for(let re=ie;re<b.length;re++)oe(b[re],C,V,K,J)},Ae=b=>b.shapeFlag&6?Ae(b.component.subTree):b.shapeFlag&128?b.suspense.next():h(b.anchor||b.el),Te=(b,C,V)=>{b==null?C._vnode&&oe(C._vnode,null,null,!0):d(C._vnode||null,b,C,null,null,null,V),Bc(),C._vnode=b},ge={p:d,um:oe,m:te,r:Me,mt:j,mc:E,pc:G,pbc:B,n:Ae,o:n};let Oe,De;return e&&([Oe,De]=e(ge)),{render:Te,hydrate:Oe,createApp:bh(Te,Oe)}}function Fn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function iu(n,e,t=!1){const i=n.children,r=e.children;if(Le(i)&&Le(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Sn(r[s]),o.el=a.el),t||iu(a,o))}}function Eh(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Th=n=>n.__isTeleport,zt=Symbol(void 0),oa=Symbol(void 0),cn=Symbol(void 0),Fs=Symbol(void 0),ar=[];let Bt=null;function ru(n=!1){ar.push(Bt=n?null:[])}function Ah(){ar.pop(),Bt=ar[ar.length-1]||null}let pr=1;function za(n){pr+=n}function su(n){return n.dynamicChildren=pr>0?Bt||Li:null,Ah(),pr>0&&Bt&&Bt.push(n),n}function Ch(n,e,t,i,r,s){return su(vt(n,e,t,i,r,s,!0))}function Lh(n,e,t,i,r){return su(Tn(n,e,t,i,r,!0))}function Dh(n){return n?n.__v_isVNode===!0:!1}function Gn(n,e){return n.type===e.type&&n.key===e.key}const Ms="__vInternal",ou=({key:n})=>n!=null?n:null,Qr=({ref:n,ref_key:e,ref_for:t})=>n!=null?it(n)||at(n)||Ie(n)?{i:Qt,r:n,k:e,f:!!t}:n:null;function vt(n,e=null,t=null,i=0,r=null,s=n===zt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ou(e),ref:e&&Qr(e),scopeId:_s,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(aa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=it(t)?8:16),pr>0&&!a&&Bt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Bt.push(l),l}const Tn=Ph;function Ph(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ch)&&(n=cn),Dh(n)){const o=Dn(n,e,!0);return t&&aa(o,t),pr>0&&!s&&Bt&&(o.shapeFlag&6?Bt[Bt.indexOf(n)]=o:Bt.push(o)),o.patchFlag|=-2,o}if(Hh(n)&&(n=n.__vccOpts),e){e=Rh(e);let{class:o,style:l}=e;o&&!it(o)&&(e.class=Wo(o)),rt(l)&&(Lc(l)&&!Le(l)&&(l=lt({},l)),e.style=Vo(l))}const a=it(n)?1:Xf(n)?128:Th(n)?64:rt(n)?4:Ie(n)?2:0;return vt(n,e,t,i,r,a,s,!0)}function Rh(n){return n?Lc(n)||Ms in n?lt({},n):n:null}function Dn(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Ih(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&ou(o),ref:e&&e.ref?t&&r?Le(r)?r.concat(Qr(e)):[r,Qr(e)]:Qr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==zt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Dn(n.ssContent),ssFallback:n.ssFallback&&Dn(n.ssFallback),el:n.el,anchor:n.anchor}}function Oi(n=" ",e=0){return Tn(oa,null,n,e)}function Zt(n){return n==null||typeof n=="boolean"?Tn(cn):Le(n)?Tn(zt,null,n.slice()):typeof n=="object"?Sn(n):Tn(oa,null,String(n))}function Sn(n){return n.el===null||n.memo?n:Dn(n)}function aa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),aa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ms in e)?e._ctx=Qt:r===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:Qt},t=32):(e=String(e),i&64?(t=16,e=[Oi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ih(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Wo([e.class,i.class]));else if(r==="style")e.style=Vo([e.style,i.style]);else if(us(r)){const s=e[r],a=i[r];a&&s!==a&&!(Le(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Yt(n,e,t,i=null){Ct(n,e,7,[t,i])}const Fh=nu();let Nh=0;function zh(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Fh,s={uid:Nh++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ju(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jc(i,r),emitsOptions:Gc(i,r),emit:null,emitted:null,propsDefaults:je,inheritAttrs:i.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Uf.bind(null,s),n.ce&&n.ce(s),s}let nt=null;const Oh=()=>nt||Qt,Ui=n=>{nt=n,n.scope.on()},$n=()=>{nt&&nt.scope.off(),nt=null};function au(n){return n.vnode.shapeFlag&4}let mr=!1;function Uh(n,e=!1){mr=e;const{props:t,children:i}=n.vnode,r=au(n);gh(n,t,r,e),vh(n,i);const s=r?Bh(n,e):void 0;return mr=!1,s}function Bh(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Dc(new Proxy(n.ctx,uh));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Gh(n):null;Ui(n),Wi();const s=En(i,n,0,[n.props,r]);if(qi(),$n(),pc(s)){if(s.then($n,$n),e)return s.then(a=>{Oa(n,a,e)}).catch(a=>{ps(a,n,0)});n.asyncDep=s}else Oa(n,s,e)}else lu(n,e)}function Oa(n,e,t){Ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:rt(e)&&(n.setupState=Fc(e)),lu(n,t)}let Ua;function lu(n,e,t){const i=n.type;if(!n.render){if(!e&&Ua&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=lt(lt({isCustomElement:s,delimiters:o},a),l);i.render=Ua(r,c)}}n.render=i.render||kt}Ui(n),Wi(),fh(n),qi(),$n()}function kh(n){return new Proxy(n.attrs,{get(e,t){return yt(n,"get","$attrs"),e[t]}})}function Gh(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=kh(n))},slots:n.slots,emit:n.emit,expose:e}}function la(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Fc(Dc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ss)return ss[t](n)}}))}function Hh(n){return Ie(n)&&"__vccOpts"in n}const Vh=(n,e)=>Pf(n,e,mr),Wh="3.2.37",qh="http://www.w3.org/2000/svg",Hn=typeof document<"u"?document:null,Ba=Hn&&Hn.createElement("template"),Xh={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Hn.createElementNS(qh,n):Hn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Hn.createTextNode(n),createComment:n=>Hn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Hn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ba.innerHTML=i?`<svg>${n}</svg>`:n;const o=Ba.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function jh(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Yh(n,e,t){const i=n.style,r=it(t);if(t&&!r){for(const s in t)Po(i,s,t[s]);if(e&&!it(e))for(const s in e)t[s]==null&&Po(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const ka=/\s*!important$/;function Po(n,e,t){if(Le(t))t.forEach(i=>Po(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=$h(n,e);ka.test(t)?n.setProperty(Vi(i),t.replace(ka,""),"important"):n[i]=t}}const Ga=["Webkit","Moz","ms"],Ns={};function $h(n,e){const t=Ns[e];if(t)return t;let i=zi(e);if(i!=="filter"&&i in n)return Ns[e]=i;i=_c(i);for(let r=0;r<Ga.length;r++){const s=Ga[r]+i;if(s in n)return Ns[e]=s}return e}const Ha="http://www.w3.org/1999/xlink";function Zh(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Ha,e.slice(6,e.length)):n.setAttributeNS(Ha,e,t);else{const s=ku(e);t==null||s&&!fc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Kh(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=fc(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}const[cu,Jh]=(()=>{let n=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let Ro=0;const Qh=Promise.resolve(),ed=()=>{Ro=0},td=()=>Ro||(Qh.then(ed),Ro=cu());function nd(n,e,t,i){n.addEventListener(e,t,i)}function id(n,e,t,i){n.removeEventListener(e,t,i)}function rd(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=sd(e);if(i){const c=s[e]=od(i,r);nd(n,o,c,l)}else a&&(id(n,o,a,l),s[e]=void 0)}}const Va=/(?:Once|Passive|Capture)$/;function sd(n){let e;if(Va.test(n)){e={};let t;for(;t=n.match(Va);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[Vi(n.slice(2)),e]}function od(n,e){const t=i=>{const r=i.timeStamp||cu();(Jh||r>=t.attached-1)&&Ct(ad(i,t.value),e,5,[i])};return t.value=n,t.attached=td(),t}function ad(n,e){if(Le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Wa=/^on[a-z]/,ld=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?jh(n,i,r):e==="style"?Yh(n,t,i):us(e)?qo(e)||rd(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cd(n,e,i,r))?Kh(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Zh(n,e,i,r))};function cd(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Wa.test(e)&&Ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Wa.test(e)&&it(t)?!1:e in n}const ud={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Jf.props;const fd=lt({patchProp:ld},Xh);let qa;function hd(){return qa||(qa=Sh(fd))}const dd=(...n)=>{const e=hd().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=pd(i);if(!r)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function pd(n){return it(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ca="142";const md=0,Xa=1,gd=2,uu=1,_d=2,ir=3,gr=0,Gt=1,Pn=2,xd=1,An=0,Ri=1,ja=2,Ya=3,$a=4,vd=5,wi=100,Md=101,yd=102,Za=103,Ka=104,bd=200,Sd=201,wd=202,Ed=203,fu=204,hu=205,Td=206,Ad=207,Cd=208,Ld=209,Dd=210,Pd=0,Rd=1,Id=2,Io=3,Fd=4,Nd=5,zd=6,Od=7,du=0,Ud=1,Bd=2,un=0,kd=1,Gd=2,Hd=3,Vd=4,Wd=5,pu=300,Bi=301,ki=302,Fo=303,No=304,ys=306,zo=1e3,Ut=1001,Oo=1002,mt=1003,Ja=1004,Qa=1005,wt=1006,qd=1007,bs=1008,Jn=1009,Xd=1010,jd=1011,mu=1012,Yd=1013,Wn=1014,qn=1015,_r=1016,$d=1017,Zd=1018,Ii=1020,Kd=1021,Jd=1022,en=1023,Qd=1024,ep=1025,Zn=1026,Gi=1027,tp=1028,np=1029,ip=1030,rp=1031,sp=1033,zs=33776,Os=33777,Us=33778,Bs=33779,el=35840,tl=35841,nl=35842,il=35843,op=36196,rl=37492,sl=37496,ol=37808,al=37809,ll=37810,cl=37811,ul=37812,fl=37813,hl=37814,dl=37815,pl=37816,ml=37817,gl=37818,_l=37819,xl=37820,vl=37821,Ml=36492,Qn=3e3,$e=3001,ap=3200,lp=3201,cp=0,up=1,an="srgb",Xn="srgb-linear",ks=7680,fp=519,yl=35044,bl="300 es",Uo=1035;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const st=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sl=1234567;const Fi=Math.PI/180,as=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(st[n&255]+st[n>>8&255]+st[n>>16&255]+st[n>>24&255]+"-"+st[e&255]+st[e>>8&255]+"-"+st[e>>16&15|64]+st[e>>24&255]+"-"+st[t&63|128]+st[t>>8&255]+"-"+st[t>>16&255]+st[t>>24&255]+st[i&255]+st[i>>8&255]+st[i>>16&255]+st[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function ua(n,e){return(n%e+e)%e}function hp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function dp(n,e,t){return n!==e?(t-n)/(e-n):0}function lr(n,e,t){return(1-t)*n+t*e}function pp(n,e,t,i){return lr(n,e,1-Math.exp(-t*i))}function mp(n,e=1){return e-Math.abs(ua(n,e*2)-e)}function gp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _p(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function xp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vp(n,e){return n+Math.random()*(e-n)}function Mp(n){return n*(.5-Math.random())}function yp(n){n!==void 0&&(Sl=n);let e=Sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bp(n){return n*Fi}function Sp(n){return n*as}function Bo(n){return(n&n-1)===0&&n!==0}function wp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ls(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ep(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Tp(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ap(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Cp=Object.freeze({__proto__:null,DEG2RAD:Fi,RAD2DEG:as,generateUUID:Xi,clamp:gt,euclideanModulo:ua,mapLinear:hp,inverseLerp:dp,lerp:lr,damp:pp,pingpong:mp,smoothstep:gp,smootherstep:_p,randInt:xp,randFloat:vp,randFloatSpread:Mp,seededRandom:yp,degToRad:bp,radToDeg:Sp,isPowerOfTwo:Bo,ceilPowerOfTwo:wp,floorPowerOfTwo:ls,setQuaternionFromProperEuler:Ep,normalize:Ap,denormalize:Tp});class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],p=r[0],d=r[3],v=r[6],S=r[1],L=r[4],T=r[7],w=r[2],P=r[5],O=r[8];return s[0]=a*p+o*S+l*w,s[3]=a*d+o*L+l*P,s[6]=a*v+o*T+l*O,s[1]=c*p+u*S+f*w,s[4]=c*d+u*L+f*P,s[7]=c*v+u*T+f*O,s[2]=h*p+m*S+x*w,s[5]=h*d+m*L+x*P,s[8]=h*v+m*T+x*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,x=t*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*a+i*c,r[6]=t*o+i*u,r[1]=-i*s+t*l,r[4]=-i*a+t*c,r[7]=-i*o+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function gu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function cs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Gs={[an]:{[Xn]:Kn},[Xn]:{[an]:es}},Rt={legacyMode:!0,get workingColorSpace(){return Xn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Gs[e]&&Gs[e][t]!==void 0){const i=Gs[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Je={r:0,g:0,b:0},It={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Hs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Ar(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Xn){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Xn){if(e=ua(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Hs(a,s,e+1/3),this.g=Hs(a,s,e),this.b=Hs(a,s,e-1/3)}return Rt.toWorkingColorSpace(this,r),this}setStyle(e,t=an){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Rt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Rt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Rt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Rt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=an){const i=_u[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Rt.fromWorkingColorSpace(Ar(this,Je),e),gt(Je.r*255,0,255)<<16^gt(Je.g*255,0,255)<<8^gt(Je.b*255,0,255)<<0}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xn){Rt.fromWorkingColorSpace(Ar(this,Je),t);const i=Je.r,r=Je.g,s=Je.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xn){return Rt.fromWorkingColorSpace(Ar(this,Je),t),e.r=Je.r,e.g=Je.g,e.b=Je.b,e}getStyle(e=an){return Rt.fromWorkingColorSpace(Ar(this,Je),e),e!==an?`color(${e} ${Je.r} ${Je.g} ${Je.b})`:`rgb(${Je.r*255|0},${Je.g*255|0},${Je.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(It),It.h+=e,It.s+=t,It.l+=i,this.setHSL(It.h,It.s,It.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(It),e.getHSL(Tr);const i=lr(It.h,Tr.h,t),r=lr(It.s,Tr.s,t),s=lr(It.l,Tr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qe.NAMES=_u;let oi;class xu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=cs("canvas")),oi.width=e.width,oi.height=e.height;const i=oi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Kn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kn(t[i]/255)*255):t[i]=Kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class vu{constructor(e=null){this.isSource=!0,this.uuid=Xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vs(r[a].image)):s.push(Vs(r[a]))}else s=Vs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Vs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lp=0;class Ht extends ni{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Ut,r=Ut,s=wt,a=bs,o=en,l=Jn,c=1,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Xi(),this.name="",this.source=new vu(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zo:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zo:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=pu;class et{constructor(e=0,t=0,i=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],p=l[2],d=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(x+d)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(c+1)/2,T=(m+1)/2,w=(v+1)/2,P=(u+h)/4,O=(f+p)/4,M=(x+d)/4;return L>T&&L>w?L<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(L),r=P/i,s=O/i):T>w?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=P/r,s=M/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=O/s,r=M/s),this.set(i,r,s,t),this}let S=Math.sqrt((d-x)*(d-x)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(d-x)/S,this.y=(f-p)/S,this.z=(h-u)/S,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ei extends ni{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Ht(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:wt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mu extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mt,this.minFilter=mt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dp extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mt,this.minFilter=mt,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],x=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==x){let d=1-o;const v=l*h+c*m+u*x+f*p,S=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const w=Math.sqrt(L),P=Math.atan2(w,v*S);d=Math.sin(d*P)/w,o=Math.sin(o*P)/w}const T=o*S;if(l=l*d+h*T,c=c*d+m*T,u=u*d+x*T,f=f*d+p*T,d===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*h,e[t+1]=l*x+u*h+c*f-o*m,e[t+2]=c*x+u*m+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new R,wl=new xr;class ji{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Nn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Nn)}else i.boundingBox===null&&i.computeBoundingBox(),qs.copy(i.boundingBox),qs.applyMatrix4(e.matrixWorld),this.union(qs);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Cr.subVectors(this.max,Ji),ai.subVectors(e.a,Ji),li.subVectors(e.b,Ji),ci.subVectors(e.c,Ji),mn.subVectors(li,ai),gn.subVectors(ci,li),zn.subVectors(ai,ci);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-zn.z,zn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,zn.z,0,-zn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-zn.y,zn.x,0];return!Xs(t,ai,li,ci,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Xs(t,ai,li,ci,Cr))?!1:(Lr.crossVectors(mn,gn),t=[Lr.x,Lr.y,Lr.z],Xs(t,ai,li,ci,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Nn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new R,new R,new R,new R,new R,new R,new R,new R],Nn=new R,qs=new ji,ai=new R,li=new R,ci=new R,mn=new R,gn=new R,zn=new R,Ji=new R,Cr=new R,Lr=new R,On=new R;function Xs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){On.fromArray(n,s);const o=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),l=e.dot(On),c=t.dot(On),u=i.dot(On);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Pp=new ji,El=new R,Dr=new R,js=new R;class Ss{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Pp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(js.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Dr.set(0,0,1).multiplyScalar(e.radius):Dr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(El.copy(e.center).add(Dr)),this.expandByPoint(El.copy(e.center).sub(Dr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new R,Ys=new R,Pr=new R,_n=new R,$s=new R,Rr=new R,Zs=new R;class fa{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.direction).multiplyScalar(t).add(this.origin),nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ys.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(Ys);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=_n.dot(this.direction),l=-_n.dot(Pr),c=_n.lengthSq(),u=Math.abs(1-a*a);let f,h,m,x;if(u>0)if(f=a*l-o,h=a*o-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Pr).multiplyScalar(h).add(Ys),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const i=nn.dot(this.direction),r=nn.dot(nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,i,r,s){$s.subVectors(t,e),Rr.subVectors(i,e),Zs.crossVectors($s,Rr);let a=this.direction.dot(Zs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,e);const l=o*this.direction.dot(Rr.crossVectors(_n,Rr));if(l<0)return null;const c=o*this.direction.dot($s.cross(_n));if(c<0||l+c>a)return null;const u=-o*_n.dot(Zs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,a,o,l,c,u,f,h,m,x,p,d){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=h,v[3]=m,v[7]=x,v[11]=p,v[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ui.setFromMatrixColumn(e,0).length(),s=1/ui.setFromMatrixColumn(e,1).length(),a=1/ui.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,x=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,x=c*u,p=c*f;t[0]=h+p*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,x=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,x=o*u,p=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,x=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,x=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rp,e,Ip)}lookAt(e,t,i){const r=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),xn.crossVectors(i,_t),xn.lengthSq()===0&&(Math.abs(i.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),xn.crossVectors(i,_t)),xn.normalize(),Ir.crossVectors(_t,xn),r[0]=xn.x,r[4]=Ir.x,r[8]=_t.x,r[1]=xn.y,r[5]=Ir.y,r[9]=_t.y,r[2]=xn.z,r[6]=Ir.z,r[10]=_t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],p=i[6],d=i[10],v=i[14],S=i[3],L=i[7],T=i[11],w=i[15],P=r[0],O=r[4],M=r[8],E=r[12],F=r[1],B=r[5],ce=r[9],se=r[13],z=r[2],j=r[6],q=r[10],I=r[14],k=r[3],G=r[7],$=r[11],Q=r[15];return s[0]=a*P+o*F+l*z+c*k,s[4]=a*O+o*B+l*j+c*G,s[8]=a*M+o*ce+l*q+c*$,s[12]=a*E+o*se+l*I+c*Q,s[1]=u*P+f*F+h*z+m*k,s[5]=u*O+f*B+h*j+m*G,s[9]=u*M+f*ce+h*q+m*$,s[13]=u*E+f*se+h*I+m*Q,s[2]=x*P+p*F+d*z+v*k,s[6]=x*O+p*B+d*j+v*G,s[10]=x*M+p*ce+d*q+v*$,s[14]=x*E+p*se+d*I+v*Q,s[3]=S*P+L*F+T*z+w*k,s[7]=S*O+L*B+T*j+w*G,s[11]=S*M+L*ce+T*q+w*$,s[15]=S*E+L*se+T*I+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],p=e[7],d=e[11],v=e[15];return x*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+v*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],p=e[13],d=e[14],v=e[15],S=f*d*c-p*h*c+p*l*m-o*d*m-f*l*v+o*h*v,L=x*h*c-u*d*c-x*l*m+a*d*m+u*l*v-a*h*v,T=u*p*c-x*f*c+x*o*m-a*p*m-u*o*v+a*f*v,w=x*f*l-u*p*l-x*o*h+a*p*h+u*o*d-a*f*d,P=t*S+i*L+r*T+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=S*O,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*v-i*h*v)*O,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*v+i*l*v)*O,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*O,e[4]=L*O,e[5]=(u*d*s-x*h*s+x*r*m-t*d*m-u*r*v+t*h*v)*O,e[6]=(x*l*s-a*d*s-x*r*c+t*d*c+a*r*v-t*l*v)*O,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*O,e[8]=T*O,e[9]=(x*f*s-u*p*s-x*i*m+t*p*m+u*i*v-t*f*v)*O,e[10]=(a*p*s-x*o*s+x*i*c-t*p*c-a*i*v+t*o*v)*O,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*O,e[12]=w*O,e[13]=(u*p*r-x*f*r+x*i*h-t*p*h-u*i*d+t*f*d)*O,e[14]=(x*o*r-a*p*r-x*i*l+t*p*l+a*i*d-t*o*d)*O,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,x=s*f,p=a*u,d=a*f,v=o*f,S=l*c,L=l*u,T=l*f,w=i.x,P=i.y,O=i.z;return r[0]=(1-(p+v))*w,r[1]=(m+T)*w,r[2]=(x-L)*w,r[3]=0,r[4]=(m-T)*P,r[5]=(1-(h+v))*P,r[6]=(d+S)*P,r[7]=0,r[8]=(x+L)*O,r[9]=(d-S)*O,r[10]=(1-(h+p))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ui.set(r[0],r[1],r[2]).length();const a=ui.set(r[4],r[5],r[6]).length(),o=ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ft.copy(this);const c=1/s,u=1/a,f=1/o;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=u,Ft.elements[5]*=u,Ft.elements[6]*=u,Ft.elements[8]*=f,Ft.elements[9]*=f,Ft.elements[10]*=f,t.setFromRotationMatrix(Ft),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ui=new R,Ft=new tt,Rp=new R(0,0,0),Ip=new R(1,1,1),xn=new R,Ir=new R,_t=new R,Tl=new tt,Al=new xr;class Yi{constructor(e=0,t=0,i=0,r=Yi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Yi.DefaultOrder="XYZ";Yi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ha{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fp=0;const Cl=new R,fi=new xr,rn=new tt,Fr=new R,Qi=new R,Np=new R,zp=new xr,Ll=new R(1,0,0),Dl=new R(0,1,0),Pl=new R(0,0,1),Op={type:"added"},Rl={type:"removed"};class Pt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DefaultUp.clone();const e=new R,t=new Yi,i=new xr,r=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Tt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Pt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Dl,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Dl,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fr.copy(e):Fr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Qi,Fr,this.up):rn.lookAt(Fr,Qi,this.up),this.quaternion.setFromRotationMatrix(rn),r&&(rn.extractRotation(r.matrixWorld),fi.setFromRotationMatrix(rn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Op)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Rl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Np),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,zp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DefaultUp=new R(0,1,0);Pt.DefaultMatrixAutoUpdate=!0;const Nt=new R,sn=new R,Ks=new R,on=new R,hi=new R,di=new R,Il=new R,Js=new R,Qs=new R,eo=new R;class Jt{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Nt.subVectors(e,t),r.cross(Nt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Nt.subVectors(r,t),sn.subVectors(i,t),Ks.subVectors(e,t);const a=Nt.dot(Nt),o=Nt.dot(sn),l=Nt.dot(Ks),c=sn.dot(sn),u=sn.dot(Ks),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,x=(a*u-o*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,on),on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,on),l.set(0,0),l.addScaledVector(s,on.x),l.addScaledVector(a,on.y),l.addScaledVector(o,on.z),l}static isFrontFacing(e,t,i,r){return Nt.subVectors(i,t),sn.subVectors(e,t),Nt.cross(sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Nt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Jt.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;hi.subVectors(r,i),di.subVectors(s,i),Js.subVectors(e,i);const l=hi.dot(Js),c=di.dot(Js);if(l<=0&&c<=0)return t.copy(i);Qs.subVectors(e,r);const u=hi.dot(Qs),f=di.dot(Qs);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(hi,a);eo.subVectors(e,s);const m=hi.dot(eo),x=di.dot(eo);if(x>=0&&m<=x)return t.copy(s);const p=m*c-l*x;if(p<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(di,o);const d=u*x-m*f;if(d<=0&&f-u>=0&&m-x>=0)return Il.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(Il,o);const v=1/(d+p+h);return a=p*v,o=h*v,t.copy(i).addScaledVector(hi,a).addScaledVector(di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Up=0;class vr extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Ri,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fu,this.blendDst=hu,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===xd;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ti extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new R,Nr=new Xe;class Lt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=yl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new qe),t[i++]=a.r,t[i++]=a.g,t[i++]=a.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new Xe),t[i++]=a.x,t[i++]=a.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new R),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new et),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z,t[i++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class yu extends Lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bu extends Lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends Lt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bp=0;const St=new tt,to=new Pt,pi=new R,xt=new ji,er=new ji,Qe=new R;class Vt extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gu(e)?bu:yu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return St.makeRotationFromQuaternion(e),this.applyMatrix4(St),this}rotateX(e){return St.makeRotationX(e),this.applyMatrix4(St),this}rotateY(e){return St.makeRotationY(e),this.applyMatrix4(St),this}rotateZ(e){return St.makeRotationZ(e),this.applyMatrix4(St),this}translate(e,t,i){return St.makeTranslation(e,t,i),this.applyMatrix4(St),this}scale(e,t,i){return St.makeScale(e,t,i),this.applyMatrix4(St),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,xt.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,xt.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(xt.min),this.boundingBox.expandByPoint(xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(xt.min,er.min),xt.expandByPoint(Qe),Qe.addVectors(xt.max,er.max),xt.expandByPoint(Qe)):(xt.expandByPoint(er.min),xt.expandByPoint(er.max))}xt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Qe.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Qe));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Qe.fromBufferAttribute(o,c),l&&(pi.fromBufferAttribute(e,c),Qe.add(pi)),r=Math.max(r,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let F=0;F<o;F++)c[F]=new R,u[F]=new R;const f=new R,h=new R,m=new R,x=new Xe,p=new Xe,d=new Xe,v=new R,S=new R;function L(F,B,ce){f.fromArray(r,F*3),h.fromArray(r,B*3),m.fromArray(r,ce*3),x.fromArray(a,F*2),p.fromArray(a,B*2),d.fromArray(a,ce*2),h.sub(f),m.sub(f),p.sub(x),d.sub(x);const se=1/(p.x*d.y-d.x*p.y);!isFinite(se)||(v.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(se),S.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(se),c[F].add(v),c[B].add(v),c[ce].add(v),u[F].add(S),u[B].add(S),u[ce].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let F=0,B=T.length;F<B;++F){const ce=T[F],se=ce.start,z=ce.count;for(let j=se,q=se+z;j<q;j+=3)L(i[j+0],i[j+1],i[j+2])}const w=new R,P=new R,O=new R,M=new R;function E(F){O.fromArray(s,F*3),M.copy(O);const B=c[F];w.copy(B),w.sub(O.multiplyScalar(O.dot(B))).normalize(),P.crossVectors(M,B);const se=P.dot(u[F])<0?-1:1;l[F*4]=w.x,l[F*4+1]=w.y,l[F*4+2]=w.z,l[F*4+3]=se}for(let F=0,B=T.length;F<B;++F){const ce=T[F],se=ce.start,z=ce.count;for(let j=se,q=se+z;j<q;j+=3)E(i[j+0]),E(i[j+1]),E(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,u=new R,f=new R;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const a=i[r].array,o=e.attributes[r],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let f=0,h=c;f<u;f++,h++)a[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let v=0;v<u;v++)h[x++]=c[m++]}return new Lt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new tt,mi=new fa,no=new Ss,vn=new R,Mn=new R,yn=new R,io=new R,ro=new R,so=new R,zr=new R,Or=new R,Ur=new R,Br=new Xe,kr=new Xe,Gr=new Xe,oo=new R,Hr=new R;class At extends Pt{constructor(e=new Vt,t=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(s),e.ray.intersectsSphere(no)===!1)||(Fl.copy(s).invert(),mi.copy(e.ray).applyMatrix4(Fl),i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,x=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const v=m[p],S=r[v.materialIndex],L=Math.max(v.start,x.start),T=Math.min(o.count,Math.min(v.start+v.count,x.start+x.count));for(let w=L,P=T;w<P;w+=3){const O=o.getX(w),M=o.getX(w+1),E=o.getX(w+2);a=Vr(this,S,e,mi,l,c,u,f,h,O,M,E),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const p=Math.max(0,x.start),d=Math.min(o.count,x.start+x.count);for(let v=p,S=d;v<S;v+=3){const L=o.getX(v),T=o.getX(v+1),w=o.getX(v+2);a=Vr(this,r,e,mi,l,c,u,f,h,L,T,w),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const v=m[p],S=r[v.materialIndex],L=Math.max(v.start,x.start),T=Math.min(l.count,Math.min(v.start+v.count,x.start+x.count));for(let w=L,P=T;w<P;w+=3){const O=w,M=w+1,E=w+2;a=Vr(this,S,e,mi,l,c,u,f,h,O,M,E),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const p=Math.max(0,x.start),d=Math.min(l.count,x.start+x.count);for(let v=p,S=d;v<S;v+=3){const L=v,T=v+1,w=v+2;a=Vr(this,r,e,mi,l,c,u,f,h,L,T,w),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function kp(n,e,t,i,r,s,a,o){let l;if(e.side===Gt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side!==Pn,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:n}}function Vr(n,e,t,i,r,s,a,o,l,c,u,f){vn.fromBufferAttribute(r,c),Mn.fromBufferAttribute(r,u),yn.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){zr.set(0,0,0),Or.set(0,0,0),Ur.set(0,0,0);for(let x=0,p=s.length;x<p;x++){const d=h[x],v=s[x];d!==0&&(io.fromBufferAttribute(v,c),ro.fromBufferAttribute(v,u),so.fromBufferAttribute(v,f),a?(zr.addScaledVector(io,d),Or.addScaledVector(ro,d),Ur.addScaledVector(so,d)):(zr.addScaledVector(io.sub(vn),d),Or.addScaledVector(ro.sub(Mn),d),Ur.addScaledVector(so.sub(yn),d)))}vn.add(zr),Mn.add(Or),yn.add(Ur)}n.isSkinnedMesh&&(n.boneTransform(c,vn),n.boneTransform(u,Mn),n.boneTransform(f,yn));const m=kp(n,e,t,i,vn,Mn,yn,oo);if(m){o&&(Br.fromBufferAttribute(o,c),kr.fromBufferAttribute(o,u),Gr.fromBufferAttribute(o,f),m.uv=Jt.getUV(oo,vn,Mn,yn,Br,kr,Gr,new Xe)),l&&(Br.fromBufferAttribute(l,c),kr.fromBufferAttribute(l,u),Gr.fromBufferAttribute(l,f),m.uv2=Jt.getUV(oo,vn,Mn,yn,Br,kr,Gr,new Xe));const x={a:c,b:u,c:f,normal:new R,materialIndex:0};Jt.getNormal(vn,Mn,yn,x.normal),m.face=x}return m}class Cn extends Vt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(f,2));function x(p,d,v,S,L,T,w,P,O,M,E){const F=T/O,B=w/M,ce=T/2,se=w/2,z=P/2,j=O+1,q=M+1;let I=0,k=0;const G=new R;for(let $=0;$<q;$++){const Q=$*B-se;for(let te=0;te<j;te++){const oe=te*F-ce;G[p]=oe*S,G[d]=Q*L,G[v]=z,c.push(G.x,G.y,G.z),G[p]=0,G[d]=0,G[v]=P>0?1:-1,u.push(G.x,G.y,G.z),f.push(te/O),f.push(1-$/M),I+=1}}for(let $=0;$<M;$++)for(let Q=0;Q<O;Q++){const te=h+Q+j*$,oe=h+Q+j*($+1),Me=h+(Q+1)+j*($+1),be=h+(Q+1)+j*$;l.push(te,oe,be),l.push(oe,Me,be),k+=6}o.addGroup(m,k,E),m+=k,h+=I}}static fromJSON(e){return new Cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ot(n){const e={};for(let t=0;t<n.length;t++){const i=Hi(n[t]);for(const r in i)e[r]=i[r]}return e}const Gp={clone:Hi,merge:ot};var Hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Hp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Su extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Et extends Su{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=90,_i=1;class Wp extends Pt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Et(gi,_i,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(1,0,0)),this.add(r);const s=new Et(gi,_i,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const a=new Et(gi,_i,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new R(0,1,0)),this.add(a);const o=new Et(gi,_i,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new R(0,-1,0)),this.add(o);const l=new Et(gi,_i,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new Et(gi,_i,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=un,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class wu extends Ht{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qp extends ei{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cn(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:An});s.uniforms.tEquirect.value=t;const a=new At(r,s),o=t.minFilter;return t.minFilter===bs&&(t.minFilter=wt),new Wp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ao=new R,Xp=new R,jp=new Tt;class Bn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ao.subVectors(i,t).cross(Xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(ao),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jp.getNormalMatrix(e),r=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Ss,Wr=new R;class Eu{constructor(e=new Bn,t=new Bn,i=new Bn,r=new Bn,s=new Bn,a=new Bn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],x=i[10],p=i[11],d=i[12],v=i[13],S=i[14],L=i[15];return t[0].setComponents(o-r,f-l,p-h,L-d).normalize(),t[1].setComponents(o+r,f+l,p+h,L+d).normalize(),t[2].setComponents(o+s,f+c,p+m,L+v).normalize(),t[3].setComponents(o-s,f-c,p-m,L-v).normalize(),t[4].setComponents(o-a,f-u,p-x,L-S).normalize(),t[5].setComponents(o+a,f+u,p+x,L+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wr.x=r.normal.x>0?e.max.x:e.min.x,Wr.y=r.normal.y>0?e.max.y:e.min.y,Wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Yp(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class jn extends Vt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],x=[],p=[],d=[];for(let v=0;v<u;v++){const S=v*h-a;for(let L=0;L<c;L++){const T=L*f-s;x.push(T,-S,0),p.push(0,0,1),d.push(L/o),d.push(1-v/l)}}for(let v=0;v<l;v++)for(let S=0;S<o;S++){const L=S+c*v,T=S+c*(v+1),w=S+1+c*(v+1),P=S+1+c*v;m.push(L,T,P),m.push(T,w,P)}this.setIndex(m),this.setAttribute("position",new Dt(x,3)),this.setAttribute("normal",new Dt(p,3)),this.setAttribute("uv",new Dt(d,2))}static fromJSON(e){return new jn(e.width,e.height,e.widthSegments,e.heightSegments)}}var $p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm="vec3 transformed = vec3( position );",nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,rm=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",bm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Im=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,zm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Om=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Hm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Vm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ag=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Cg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Ug=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Bg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,kg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Gg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Hg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Vg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Wg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,n_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,b_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:$p,alphamap_pars_fragment:Zp,alphatest_fragment:Kp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:em,begin_vertex:tm,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:rm,bumpmap_pars_fragment:sm,clipping_planes_fragment:om,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:um,color_pars_fragment:fm,color_pars_vertex:hm,color_vertex:dm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:_m,displacementmap_vertex:xm,emissivemap_fragment:vm,emissivemap_pars_fragment:Mm,encodings_fragment:ym,encodings_pars_fragment:bm,envmap_fragment:Sm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Em,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Om,envmap_vertex:Am,fog_vertex:Cm,fog_pars_vertex:Lm,fog_fragment:Dm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Rm,lightmap_fragment:Im,lightmap_pars_fragment:Fm,lights_lambert_vertex:Nm,lights_pars_begin:zm,lights_toon_fragment:Um,lights_toon_pars_fragment:Bm,lights_phong_fragment:km,lights_phong_pars_fragment:Gm,lights_physical_fragment:Hm,lights_physical_pars_fragment:Vm,lights_fragment_begin:Wm,lights_fragment_maps:qm,lights_fragment_end:Xm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:Zm,map_fragment:Km,map_pars_fragment:Jm,map_particle_fragment:Qm,map_particle_pars_fragment:eg,metalnessmap_fragment:tg,metalnessmap_pars_fragment:ng,morphcolor_vertex:ig,morphnormal_vertex:rg,morphtarget_pars_vertex:sg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:ug,normal_vertex:fg,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,output_fragment:_g,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:Mg,dithering_fragment:yg,dithering_pars_fragment:bg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Tg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Cg,skinbase_vertex:Lg,skinning_pars_vertex:Dg,skinning_vertex:Pg,skinnormal_vertex:Rg,specularmap_fragment:Ig,specularmap_pars_fragment:Fg,tonemapping_fragment:Ng,tonemapping_pars_fragment:zg,transmission_fragment:Og,transmission_pars_fragment:Ug,uv_pars_fragment:Bg,uv_pars_vertex:kg,uv_vertex:Gg,uv2_pars_fragment:Hg,uv2_pars_vertex:Vg,uv2_vertex:Wg,worldpos_vertex:qg,background_vert:Xg,background_frag:jg,cube_vert:Yg,cube_frag:$g,depth_vert:Zg,depth_frag:Kg,distanceRGBA_vert:Jg,distanceRGBA_frag:Qg,equirect_vert:e_,equirect_frag:t_,linedashed_vert:n_,linedashed_frag:i_,meshbasic_vert:r_,meshbasic_frag:s_,meshlambert_vert:o_,meshlambert_frag:a_,meshmatcap_vert:l_,meshmatcap_frag:c_,meshnormal_vert:u_,meshnormal_frag:f_,meshphong_vert:h_,meshphong_frag:d_,meshphysical_vert:p_,meshphysical_frag:m_,meshtoon_vert:g_,meshtoon_frag:__,points_vert:x_,points_frag:v_,shadow_vert:M_,shadow_frag:y_,sprite_vert:b_,sprite_frag:S_},pe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Tt},uv2Transform:{value:new Tt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}}},Kt={basic:{uniforms:ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:ot([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:ot([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:ot([pe.points,pe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:ot([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:ot([pe.common,pe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:ot([pe.sprite,pe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:ot([pe.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:ot([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:ot([pe.lights,pe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Kt.physical={uniforms:ot([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function w_(n,e,t,i,r,s){const a=new qe(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function m(p,d){let v=!1,S=d.isScene===!0?d.background:null;S&&S.isTexture&&(S=e.get(S));const L=n.xr,T=L.getSession&&L.getSession();T&&T.environmentBlendMode==="additive"&&(S=null),S===null?x(a,o):S&&S.isColor&&(x(S,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ys)?(c===void 0&&(c=new At(new Cn(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Hi(Kt.cube.uniforms),vertexShader:Kt.cube.vertexShader,fragmentShader:Kt.cube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(u!==S||f!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new At(new jn(2,2),new ti({name:"BackgroundMaterial",uniforms:Hi(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,x(a,o)},render:m}}function E_(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(z,j,q,I,k){let G=!1;if(a){const $=p(I,q,j);c!==$&&(c=$,m(c.object)),G=v(z,I,q,k),G&&S(z,I,q,k)}else{const $=j.wireframe===!0;(c.geometry!==I.id||c.program!==q.id||c.wireframe!==$)&&(c.geometry=I.id,c.program=q.id,c.wireframe=$,G=!0)}k!==null&&t.update(k,34963),(G||u)&&(u=!1,M(z,j,q,I),k!==null&&n.bindBuffer(34963,t.get(k).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(z){return i.isWebGL2?n.bindVertexArray(z):s.bindVertexArrayOES(z)}function x(z){return i.isWebGL2?n.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,j,q){const I=q.wireframe===!0;let k=o[z.id];k===void 0&&(k={},o[z.id]=k);let G=k[j.id];G===void 0&&(G={},k[j.id]=G);let $=G[I];return $===void 0&&($=d(h()),G[I]=$),$}function d(z){const j=[],q=[],I=[];for(let k=0;k<r;k++)j[k]=0,q[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:q,attributeDivisors:I,object:z,attributes:{},index:null}}function v(z,j,q,I){const k=c.attributes,G=j.attributes;let $=0;const Q=q.getAttributes();for(const te in Q)if(Q[te].location>=0){const Me=k[te];let be=G[te];if(be===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(be=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(be=z.instanceColor)),Me===void 0||Me.attribute!==be||be&&Me.data!==be.data)return!0;$++}return c.attributesNum!==$||c.index!==I}function S(z,j,q,I){const k={},G=j.attributes;let $=0;const Q=q.getAttributes();for(const te in Q)if(Q[te].location>=0){let Me=G[te];Me===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(Me=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(Me=z.instanceColor));const be={};be.attribute=Me,Me&&Me.data&&(be.data=Me.data),k[te]=be,$++}c.attributes=k,c.attributesNum=$,c.index=I}function L(){const z=c.newAttributes;for(let j=0,q=z.length;j<q;j++)z[j]=0}function T(z){w(z,0)}function w(z,j){const q=c.newAttributes,I=c.enabledAttributes,k=c.attributeDivisors;q[z]=1,I[z]===0&&(n.enableVertexAttribArray(z),I[z]=1),k[z]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,j),k[z]=j)}function P(){const z=c.newAttributes,j=c.enabledAttributes;for(let q=0,I=j.length;q<I;q++)j[q]!==z[q]&&(n.disableVertexAttribArray(q),j[q]=0)}function O(z,j,q,I,k,G){i.isWebGL2===!0&&(q===5124||q===5125)?n.vertexAttribIPointer(z,j,q,k,G):n.vertexAttribPointer(z,j,q,I,k,G)}function M(z,j,q,I){if(i.isWebGL2===!1&&(z.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const k=I.attributes,G=q.getAttributes(),$=j.defaultAttributeValues;for(const Q in G){const te=G[Q];if(te.location>=0){let oe=k[Q];if(oe===void 0&&(Q==="instanceMatrix"&&z.instanceMatrix&&(oe=z.instanceMatrix),Q==="instanceColor"&&z.instanceColor&&(oe=z.instanceColor)),oe!==void 0){const Me=oe.normalized,be=oe.itemSize,Z=t.get(oe);if(Z===void 0)continue;const We=Z.buffer,Ae=Z.type,Te=Z.bytesPerElement;if(oe.isInterleavedBufferAttribute){const ge=oe.data,Oe=ge.stride,De=oe.offset;if(ge.isInstancedInterleavedBuffer){for(let b=0;b<te.locationSize;b++)w(te.location+b,ge.meshPerAttribute);z.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let b=0;b<te.locationSize;b++)T(te.location+b);n.bindBuffer(34962,We);for(let b=0;b<te.locationSize;b++)O(te.location+b,be/te.locationSize,Ae,Me,Oe*Te,(De+be/te.locationSize*b)*Te)}else{if(oe.isInstancedBufferAttribute){for(let ge=0;ge<te.locationSize;ge++)w(te.location+ge,oe.meshPerAttribute);z.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<te.locationSize;ge++)T(te.location+ge);n.bindBuffer(34962,We);for(let ge=0;ge<te.locationSize;ge++)O(te.location+ge,be/te.locationSize,Ae,Me,be*Te,be/te.locationSize*ge*Te)}}else if($!==void 0){const Me=$[Q];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(te.location,Me);break;case 3:n.vertexAttrib3fv(te.location,Me);break;case 4:n.vertexAttrib4fv(te.location,Me);break;default:n.vertexAttrib1fv(te.location,Me)}}}}P()}function E(){ce();for(const z in o){const j=o[z];for(const q in j){const I=j[q];for(const k in I)x(I[k].object),delete I[k];delete j[q]}delete o[z]}}function F(z){if(o[z.id]===void 0)return;const j=o[z.id];for(const q in j){const I=j[q];for(const k in I)x(I[k].object),delete I[k];delete j[q]}delete o[z.id]}function B(z){for(const j in o){const q=o[j];if(q[z.id]===void 0)continue;const I=q[z.id];for(const k in I)x(I[k].object),delete I[k];delete q[z.id]}}function ce(){se(),u=!0,c!==l&&(c=l,m(c.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ce,resetDefaultState:se,dispose:E,releaseStatesOfGeometry:F,releaseStatesOfProgram:B,initAttributes:L,enableAttribute:T,disableUnusedAttributes:P}}function T_(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function A_(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(O){if(O==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),v=n.getParameter(36348),S=n.getParameter(36349),L=h>0,T=a||e.has("OES_texture_float"),w=L&&T,P=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:L,floatFragmentTextures:T,floatVertexTextures:w,maxSamples:P}}function C_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Bn,o=new Tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const x=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,x},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const x=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,v=n.get(f);if(!r||x===null||x.length===0||s&&!d)s?u(null):c();else{const S=s?0:i,L=S*4;let T=v.clippingState||null;l.value=T,T=u(x,h,L,m);for(let w=0;w!==L;++w)T[w]=t[w];v.clippingState=T,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,x!==!0||d===null){const v=m+p*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<v)&&(d=new Float32Array(v));for(let L=0,T=m;L!==p;++L,T+=4)a.copy(f[L]).applyMatrix4(S,o),a.normal.toArray(d,T),d[T+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function L_(n){let e=new WeakMap;function t(a,o){return o===Fo?a.mapping=Bi:o===No&&(a.mapping=ki),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Fo||o===No)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qp(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class D_ extends Su{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,Nl=[.125,.215,.35,.446,.526,.582],Vn=20,lo=new D_,zl=new qe;let co=null;const kn=(1+Math.sqrt(5))/2,vi=1/kn,Ol=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,kn,vi),new R(0,kn,-vi),new R(vi,0,kn),new R(-vi,0,kn),new R(kn,vi,0),new R(-kn,vi,0)];class Ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){co=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(co),e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),co=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:_r,format:en,encoding:Qn,depthBuffer:!1},r=Bl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(s)),this._blurMaterial=R_(s,e,t)}return r}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,i,r){const o=new Et(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(zl),u.toneMapping=un,u.autoClear=!1;const m=new Ti({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),x=new At(new Cn,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(zl),p=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):S===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const L=this._cubeSize;qr(r,S*L,v>2?L:0,L,L),u.setRenderTarget(r),p&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bi||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,lo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ol[(r-1)%Ol.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new At(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vn-1),p=s/x,d=isFinite(s)?1+Math.floor(u*p):Vn;d>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Vn}`);const v=[];let S=0;for(let O=0;O<Vn;++O){const M=O/p,E=Math.exp(-M*M/2);v.push(E),O===0?S+=E:O<d&&(S+=2*E)}for(let O=0;O<v.length;O++)v[O]=v[O]/S;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=v,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:L}=this;h.dTheta.value=x,h.mipInt.value=L-i;const T=this._sizeLods[r],w=3*T*(r>L-Ai?r-L+Ai:0),P=4*(this._cubeSize-T);qr(t,w,P,3*T,2*T),l.setRenderTarget(t),l.render(f,lo)}}function P_(n){const e=[],t=[],i=[];let r=n;const s=n-Ai+1+Nl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ai?l=Nl[a-n+Ai-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,p=3,d=2,v=1,S=new Float32Array(p*x*m),L=new Float32Array(d*x*m),T=new Float32Array(v*x*m);for(let P=0;P<m;P++){const O=P%3*2/3-1,M=P>2?0:-1,E=[O,M,0,O+2/3,M,0,O+2/3,M+1,0,O,M,0,O+2/3,M+1,0,O,M+1,0];S.set(E,p*x*P),L.set(h,d*x*P);const F=[P,P,P,P,P,P];T.set(F,v*x*P)}const w=new Vt;w.setAttribute("position",new Lt(S,p)),w.setAttribute("uv",new Lt(L,d)),w.setAttribute("faceIndex",new Lt(T,v)),e.push(w),r>Ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bl(n,e,t){const i=new ei(n,e,t);return i.texture.mapping=ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function R_(n,e,t){const i=new Float32Array(Vn),r=new R(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function kl(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Gl(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function da(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fo||l===No,u=l===Bi||l===ki;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ul(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Ul(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function F_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function N_(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],34962);const m=f.morphAttributes;for(const x in m){const p=m[x];for(let d=0,v=p.length;d<v;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,x=f.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let L=0,T=S.length;L<T;L+=3){const w=S[L+0],P=S[L+1],O=S[L+2];h.push(w,P,P,O,O,w)}}else{const S=x.array;p=x.version;for(let L=0,T=S.length/3-1;L<T;L+=3){const w=L+0,P=L+1,O=L+2;h.push(w,P,P,O,O,w)}}const d=new(gu(h)?bu:yu)(h,1);d.version=p;const v=s.get(f);v&&e.remove(v),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function z_(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,x){if(x===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function O_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function U_(n,e){return n[0]-e[0]}function B_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function uo(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function k_(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new et,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let v=s.get(u);if(v===void 0||v.count!==d){let q=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",q)};var x=q;v!==void 0&&v.texture.dispose();const T=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let F=0;T===!0&&(F=1),w===!0&&(F=2),P===!0&&(F=3);let B=u.attributes.position.count*F,ce=1;B>e.maxTextureSize&&(ce=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const se=new Float32Array(B*ce*4*d),z=new Mu(se,B,ce,d);z.type=qn,z.needsUpdate=!0;const j=F*4;for(let I=0;I<d;I++){const k=O[I],G=M[I],$=E[I],Q=B*ce*4*I;for(let te=0;te<k.count;te++){const oe=te*j;T===!0&&(a.fromBufferAttribute(k,te),k.normalized===!0&&uo(a,k),se[Q+oe+0]=a.x,se[Q+oe+1]=a.y,se[Q+oe+2]=a.z,se[Q+oe+3]=0),w===!0&&(a.fromBufferAttribute(G,te),G.normalized===!0&&uo(a,G),se[Q+oe+4]=a.x,se[Q+oe+5]=a.y,se[Q+oe+6]=a.z,se[Q+oe+7]=0),P===!0&&(a.fromBufferAttribute($,te),$.normalized===!0&&uo(a,$),se[Q+oe+8]=a.x,se[Q+oe+9]=a.y,se[Q+oe+10]=a.z,se[Q+oe+11]=$.itemSize===4?a.w:1)}}v={count:d,texture:z,size:new Xe(B,ce)},s.set(u,v),u.addEventListener("dispose",q)}let S=0;for(let T=0;T<m.length;T++)S+=m[T];const L=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(n,"morphTargetBaseInfluence",L),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const p=m===void 0?0:m.length;let d=i[u.id];if(d===void 0||d.length!==p){d=[];for(let w=0;w<p;w++)d[w]=[w,0];i[u.id]=d}for(let w=0;w<p;w++){const P=d[w];P[0]=w,P[1]=m[w]}d.sort(B_);for(let w=0;w<8;w++)w<p&&d[w][1]?(o[w][0]=d[w][0],o[w][1]=d[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(U_);const v=u.morphAttributes.position,S=u.morphAttributes.normal;let L=0;for(let w=0;w<8;w++){const P=o[w],O=P[0],M=P[1];O!==Number.MAX_SAFE_INTEGER&&M?(v&&u.getAttribute("morphTarget"+w)!==v[O]&&u.setAttribute("morphTarget"+w,v[O]),S&&u.getAttribute("morphNormal"+w)!==S[O]&&u.setAttribute("morphNormal"+w,S[O]),r[w]=M,L+=M):(v&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),S&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const T=u.morphTargetsRelative?1:1-L;h.getUniforms().setValue(n,"morphTargetBaseInfluence",T),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function G_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Au=new Ht,Cu=new Mu,Lu=new Dp,Du=new wu,Hl=[],Vl=[],Wl=new Float32Array(16),ql=new Float32Array(9),Xl=new Float32Array(4);function $i(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Hl[r];if(s===void 0&&(s=new Float32Array(r),Hl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ws(n,e){let t=Vl[e];t===void 0&&(t=new Int32Array(e),Vl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function H_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function V_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function W_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function X_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;Xl.set(i),n.uniformMatrix2fv(this.addr,!1,Xl),dt(t,i)}}function j_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;ql.set(i),n.uniformMatrix3fv(this.addr,!1,ql),dt(t,i)}}function Y_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;Wl.set(i),n.uniformMatrix4fv(this.addr,!1,Wl),dt(t,i)}}function $_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Z_(n,e){const t=this.cache;ht(t,e)||(n.uniform2iv(this.addr,e),dt(t,e))}function K_(n,e){const t=this.cache;ht(t,e)||(n.uniform3iv(this.addr,e),dt(t,e))}function J_(n,e){const t=this.cache;ht(t,e)||(n.uniform4iv(this.addr,e),dt(t,e))}function Q_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function e0(n,e){const t=this.cache;ht(t,e)||(n.uniform2uiv(this.addr,e),dt(t,e))}function t0(n,e){const t=this.cache;ht(t,e)||(n.uniform3uiv(this.addr,e),dt(t,e))}function n0(n,e){const t=this.cache;ht(t,e)||(n.uniform4uiv(this.addr,e),dt(t,e))}function i0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Au,r)}function r0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Lu,r)}function s0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Du,r)}function o0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Cu,r)}function a0(n){switch(n){case 5126:return H_;case 35664:return V_;case 35665:return W_;case 35666:return q_;case 35674:return X_;case 35675:return j_;case 35676:return Y_;case 5124:case 35670:return $_;case 35667:case 35671:return Z_;case 35668:case 35672:return K_;case 35669:case 35673:return J_;case 5125:return Q_;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return o0}}function l0(n,e){n.uniform1fv(this.addr,e)}function c0(n,e){const t=$i(e,this.size,2);n.uniform2fv(this.addr,t)}function u0(n,e){const t=$i(e,this.size,3);n.uniform3fv(this.addr,t)}function f0(n,e){const t=$i(e,this.size,4);n.uniform4fv(this.addr,t)}function h0(n,e){const t=$i(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function d0(n,e){const t=$i(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function p0(n,e){const t=$i(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function m0(n,e){n.uniform1iv(this.addr,e)}function g0(n,e){n.uniform2iv(this.addr,e)}function _0(n,e){n.uniform3iv(this.addr,e)}function x0(n,e){n.uniform4iv(this.addr,e)}function v0(n,e){n.uniform1uiv(this.addr,e)}function M0(n,e){n.uniform2uiv(this.addr,e)}function y0(n,e){n.uniform3uiv(this.addr,e)}function b0(n,e){n.uniform4uiv(this.addr,e)}function S0(n,e,t){const i=e.length,r=ws(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Au,r[s])}function w0(n,e,t){const i=e.length,r=ws(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Lu,r[s])}function E0(n,e,t){const i=e.length,r=ws(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Du,r[s])}function T0(n,e,t){const i=e.length,r=ws(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Cu,r[s])}function A0(n){switch(n){case 5126:return l0;case 35664:return c0;case 35665:return u0;case 35666:return f0;case 35674:return h0;case 35675:return d0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return _0;case 35669:case 35673:return x0;case 5125:return v0;case 36294:return M0;case 36295:return y0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return T0}}class C0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=a0(t.type)}}class L0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=A0(t.type)}}class D0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function jl(n,e){n.seq.push(e),n.map[e.id]=e}function P0(n,e,t){const i=n.name,r=i.length;for(fo.lastIndex=0;;){const s=fo.exec(i),a=fo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){jl(t,c===void 0?new C0(o,n,e):new L0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new D0(o),jl(t,f)),t=f}}}class ts{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);P0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Yl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let R0=0;function I0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function F0(n){switch(n){case Qn:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function $l(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+I0(n.getShaderSource(e),a)}else return r}function N0(n,e){const t=F0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function z0(n,e){let t;switch(e){case kd:t="Linear";break;case Gd:t="Reinhard";break;case Hd:t="OptimizedCineon";break;case Vd:t="ACESFilmic";break;case Wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function O0(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rr).join(`
`)}function U0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function B0(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function rr(n){return n!==""}function Zl(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(n){return n.replace(k0,G0)}function G0(n,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ko(t)}const H0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(n){return n.replace(V0,Pu).replace(H0,W0)}function W0(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Pu(n,e,t,i)}function Pu(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ql(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function X0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bi:case ki:e="ENVMAP_TYPE_CUBE";break;case ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function Y0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case du:e="ENVMAP_BLENDING_MULTIPLY";break;case Ud:e="ENVMAP_BLENDING_MIX";break;case Bd:e="ENVMAP_BLENDING_ADD";break}return e}function $0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Z0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=q0(t),c=X0(t),u=j0(t),f=Y0(t),h=$0(t),m=t.isWebGL2?"":O0(t),x=U0(s),p=r.createProgram();let d,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[x].filter(rr).join(`
`),d.length>0&&(d+=`
`),v=[m,x].filter(rr).join(`
`),v.length>0&&(v+=`
`)):(d=[Ql(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),v=[m,Ql(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Fe.tonemapping_pars_fragment:"",t.toneMapping!==un?z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,N0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=ko(a),a=Zl(a,t),a=Kl(a,t),o=ko(o),o=Zl(o,t),o=Kl(o,t),a=Jl(a),o=Jl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=S+d+a,T=S+v+o,w=Yl(r,35633,L),P=Yl(r,35632,T);if(r.attachShader(p,w),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(p).trim(),F=r.getShaderInfoLog(w).trim(),B=r.getShaderInfoLog(P).trim();let ce=!0,se=!0;if(r.getProgramParameter(p,35714)===!1){ce=!1;const z=$l(r,w,"vertex"),j=$l(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+z+`
`+j)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(F===""||B==="")&&(se=!1);se&&(this.diagnostics={runnable:ce,programLog:E,vertexShader:{log:F,prefix:d},fragmentShader:{log:B,prefix:v}})}r.deleteShader(w),r.deleteShader(P);let O;this.getUniforms=function(){return O===void 0&&(O=new ts(r,p)),O};let M;return this.getAttributes=function(){return M===void 0&&(M=B0(r,p)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=R0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=P,this}let K0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new Q0(e);t.set(e,i)}return t.get(e)}}class Q0{constructor(e){this.id=K0++,this.code=e,this.usedTimes=0}}function ex(n,e,t,i,r,s,a){const o=new ha,l=new J0,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,E,F,B,ce){const se=B.fog,z=ce.geometry,j=M.isMeshStandardMaterial?B.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),I=!!q&&q.mapping===ys?q.image.height:null,k=x[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const G=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$=G!==void 0?G.length:0;let Q=0;z.morphAttributes.position!==void 0&&(Q=1),z.morphAttributes.normal!==void 0&&(Q=2),z.morphAttributes.color!==void 0&&(Q=3);let te,oe,Me,be;if(k){const Oe=Kt[k];te=Oe.vertexShader,oe=Oe.fragmentShader}else te=M.vertexShader,oe=M.fragmentShader,l.update(M),Me=l.getVertexShaderID(M),be=l.getFragmentShaderID(M);const Z=n.getRenderTarget(),We=M.alphaTest>0,Ae=M.clearcoat>0,Te=M.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:M.type,vertexShader:te,fragmentShader:oe,defines:M.defines,customVertexShaderID:Me,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:ce.isInstancedMesh===!0,instancingColor:ce.isInstancedMesh===!0&&ce.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Z===null?n.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:Qn,map:!!M.map,matcap:!!M.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:I,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===up,tangentSpaceNormalMap:M.normalMapType===cp,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===$e,clearcoat:Ae,clearcoatMap:Ae&&!!M.clearcoatMap,clearcoatRoughnessMap:Ae&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:Ae&&!!M.clearcoatNormalMap,iridescence:Te,iridescenceMap:Te&&!!M.iridescenceMap,iridescenceThicknessMap:Te&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Ri,alphaMap:!!M.alphaMap,alphaTest:We,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!z.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!se,useFog:M.fog===!0,fogExp2:se&&se.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ce.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:un,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pn,flipSided:M.side===Gt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)E.push(F),E.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(v(E,M),S(E,M),E.push(n.outputEncoding)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputEncoding),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.combine),M.push(E.vertexUvs),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function S(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),E.fog&&o.enable(33),M.push(o.mask),o.disableAll(),E.useFog&&o.enable(0),E.flatShading&&o.enable(1),E.logarithmicDepthBuffer&&o.enable(2),E.skinning&&o.enable(3),E.morphTargets&&o.enable(4),E.morphNormals&&o.enable(5),E.morphColors&&o.enable(6),E.premultipliedAlpha&&o.enable(7),E.shadowMapEnabled&&o.enable(8),E.physicallyCorrectLights&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.specularIntensityMap&&o.enable(14),E.specularColorMap&&o.enable(15),E.transmission&&o.enable(16),E.transmissionMap&&o.enable(17),E.thicknessMap&&o.enable(18),E.sheen&&o.enable(19),E.sheenColorMap&&o.enable(20),E.sheenRoughnessMap&&o.enable(21),E.decodeVideoTexture&&o.enable(22),E.opaque&&o.enable(23),M.push(o.mask)}function L(M){const E=x[M.type];let F;if(E){const B=Kt[E];F=Gp.clone(B.uniforms)}else F=M.uniforms;return F}function T(M,E){let F;for(let B=0,ce=c.length;B<ce;B++){const se=c[B];if(se.cacheKey===E){F=se,++F.usedTimes;break}}return F===void 0&&(F=new Z0(n,E,M,s),c.push(F)),F}function w(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function P(M){l.remove(M)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:L,acquireProgram:T,releaseProgram:w,releaseShaderCache:P,programs:c,dispose:O}}function tx(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function nx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ec(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,x,p,d){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:p,group:d},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=p,v.group=d),e++,v}function o(f,h,m,x,p,d){const v=a(f,h,m,x,p,d);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):t.push(v)}function l(f,h,m,x,p,d){const v=a(f,h,m,x,p,d);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,h){t.length>1&&t.sort(f||nx),i.length>1&&i.sort(h||ec),r.length>1&&r.sort(h||ec)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function ix(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new tc,n.set(i,[s])):r>=n.get(i).length?(s=new tc,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function rx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new qe};break;case"SpotLight":t={position:new R,direction:new R,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ox=0;function ax(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function lx(n,e){const t=new rx,i=sx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new R);const s=new R,a=new tt,o=new tt;function l(u,f){let h=0,m=0,x=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let p=0,d=0,v=0,S=0,L=0,T=0,w=0,P=0;u.sort(ax);const O=f!==!0?Math.PI:1;for(let E=0,F=u.length;E<F;E++){const B=u[E],ce=B.color,se=B.intensity,z=B.distance,j=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=ce.r*se*O,m+=ce.g*se*O,x+=ce.b*se*O;else if(B.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector(B.sh.coefficients[q],se);else if(B.isDirectionalLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity*O),B.castShadow){const I=B.shadow,k=i.get(B);k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,r.directionalShadow[p]=k,r.directionalShadowMap[p]=j,r.directionalShadowMatrix[p]=B.shadow.matrix,T++}r.directional[p]=q,p++}else if(B.isSpotLight){const q=t.get(B);if(q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(ce).multiplyScalar(se*O),q.distance=z,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,B.castShadow){const I=B.shadow,k=i.get(B);k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,r.spotShadow[v]=k,r.spotShadowMap[v]=j,r.spotShadowMatrix[v]=B.shadow.matrix,P++}r.spot[v]=q,v++}else if(B.isRectAreaLight){const q=t.get(B);q.color.copy(ce).multiplyScalar(se),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=q,S++}else if(B.isPointLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity*O),q.distance=B.distance,q.decay=B.decay,B.castShadow){const I=B.shadow,k=i.get(B);k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,k.shadowCameraNear=I.camera.near,k.shadowCameraFar=I.camera.far,r.pointShadow[d]=k,r.pointShadowMap[d]=j,r.pointShadowMatrix[d]=B.shadow.matrix,w++}r.point[d]=q,d++}else if(B.isHemisphereLight){const q=t.get(B);q.skyColor.copy(B.color).multiplyScalar(se*O),q.groundColor.copy(B.groundColor).multiplyScalar(se*O),r.hemi[L]=q,L++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const M=r.hash;(M.directionalLength!==p||M.pointLength!==d||M.spotLength!==v||M.rectAreaLength!==S||M.hemiLength!==L||M.numDirectionalShadows!==T||M.numPointShadows!==w||M.numSpotShadows!==P)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=S,r.point.length=d,r.hemi.length=L,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=P,M.directionalLength=p,M.pointLength=d,M.spotLength=v,M.rectAreaLength=S,M.hemiLength=L,M.numDirectionalShadows=T,M.numPointShadows=w,M.numSpotShadows=P,r.version=ox++)}function c(u,f){let h=0,m=0,x=0,p=0,d=0;const v=f.matrixWorldInverse;for(let S=0,L=u.length;S<L;S++){const T=u[S];if(T.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),h++}else if(T.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),x++}else if(T.isRectAreaLight){const w=r.rectArea[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(v),o.identity(),a.copy(T.matrixWorld),a.premultiply(v),o.extractRotation(a),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(T.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(v),m++}else if(T.isHemisphereLight){const w=r.hemi[d];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(v),d++}}}return{setup:l,setupView:c,state:r}}function nc(n,e){const t=new lx(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function cx(n,e){let t=new WeakMap;function i(s,a=0){let o;return t.has(s)===!1?(o=new nc(n,e),t.set(s,[o])):a>=t.get(s).length?(o=new nc(n,e),t.get(s).push(o)):o=t.get(s)[a],o}function r(){t=new WeakMap}return{get:i,dispose:r}}class ux extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fx extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function px(n,e,t){let i=new Eu;const r=new Xe,s=new Xe,a=new et,o=new ux({depthPacking:lp}),l=new fx,c={},u=t.maxTextureSize,f={0:Gt,1:gr,2:Pn},h=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:hx,fragmentShader:dx}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Vt;x.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new At(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu,this.render=function(T,w,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;const O=n.getRenderTarget(),M=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),F=n.state;F.setBlending(An),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let B=0,ce=T.length;B<ce;B++){const se=T[B],z=se.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const j=z.getFrameExtents();if(r.multiply(j),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,z.mapSize.y=s.y)),z.map===null){const I=this.type!==ir?{minFilter:mt,magFilter:mt}:{};z.map=new ei(r.x,r.y,I),z.map.texture.name=se.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const q=z.getViewportCount();for(let I=0;I<q;I++){const k=z.getViewport(I);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),F.viewport(a),z.updateMatrices(se,I),i=z.getFrustum(),L(w,P,z.camera,se,this.type)}z.isPointLightShadow!==!0&&this.type===ir&&v(z,P),z.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(O,M,E)};function v(T,w){const P=e.update(p);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ei(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,P,h,p,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,P,m,p,null)}function S(T,w,P,O,M,E){let F=null;const B=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0?F=B:F=P.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const ce=F.uuid,se=w.uuid;let z=c[ce];z===void 0&&(z={},c[ce]=z);let j=z[se];j===void 0&&(j=F.clone(),z[se]=j),F=j}return F.visible=w.visible,F.wireframe=w.wireframe,E===ir?F.side=w.shadowSide!==null?w.shadowSide:w.side:F.side=w.shadowSide!==null?w.shadowSide:f[w.side],F.alphaMap=w.alphaMap,F.alphaTest=w.alphaTest,F.clipShadows=w.clipShadows,F.clippingPlanes=w.clippingPlanes,F.clipIntersection=w.clipIntersection,F.displacementMap=w.displacementMap,F.displacementScale=w.displacementScale,F.displacementBias=w.displacementBias,F.wireframeLinewidth=w.wireframeLinewidth,F.linewidth=w.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(P.matrixWorld),F.nearDistance=O,F.farDistance=M),F}function L(T,w,P,O,M){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ir)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const B=e.update(T),ce=T.material;if(Array.isArray(ce)){const se=B.groups;for(let z=0,j=se.length;z<j;z++){const q=se[z],I=ce[q.materialIndex];if(I&&I.visible){const k=S(T,I,O,P.near,P.far,M);n.renderBufferDirect(P,null,B,k,T,q)}}}else if(ce.visible){const se=S(T,ce,O,P.near,P.far,M);n.renderBufferDirect(P,null,B,se,T,null)}}const F=T.children;for(let B=0,ce=F.length;B<ce;B++)L(F[B],w,P,O,M)}}function mx(n,e,t){const i=t.isWebGL2;function r(){let A=!1;const fe=new et;let he=null;const ye=new et(0,0,0,0);return{setMask:function(me){he!==me&&!A&&(n.colorMask(me,me,me,me),he=me)},setLocked:function(me){A=me},setClear:function(me,Se,ue,Ee,Ge){Ge===!0&&(me*=Ee,Se*=Ee,ue*=Ee),fe.set(me,Se,ue,Ee),ye.equals(fe)===!1&&(n.clearColor(me,Se,ue,Ee),ye.copy(fe))},reset:function(){A=!1,he=null,ye.set(-1,0,0,0)}}}function s(){let A=!1,fe=null,he=null,ye=null;return{setTest:function(me){me?be(2929):Z(2929)},setMask:function(me){fe!==me&&!A&&(n.depthMask(me),fe=me)},setFunc:function(me){if(he!==me){if(me)switch(me){case Pd:n.depthFunc(512);break;case Rd:n.depthFunc(519);break;case Id:n.depthFunc(513);break;case Io:n.depthFunc(515);break;case Fd:n.depthFunc(514);break;case Nd:n.depthFunc(518);break;case zd:n.depthFunc(516);break;case Od:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);he=me}},setLocked:function(me){A=me},setClear:function(me){ye!==me&&(n.clearDepth(me),ye=me)},reset:function(){A=!1,fe=null,he=null,ye=null}}}function a(){let A=!1,fe=null,he=null,ye=null,me=null,Se=null,ue=null,Ee=null,Ge=null;return{setTest:function(He){A||(He?be(2960):Z(2960))},setMask:function(He){fe!==He&&!A&&(n.stencilMask(He),fe=He)},setFunc:function(He,ct,Wt){(he!==He||ye!==ct||me!==Wt)&&(n.stencilFunc(He,ct,Wt),he=He,ye=ct,me=Wt)},setOp:function(He,ct,Wt){(Se!==He||ue!==ct||Ee!==Wt)&&(n.stencilOp(He,ct,Wt),Se=He,ue=ct,Ee=Wt)},setLocked:function(He){A=He},setClear:function(He){Ge!==He&&(n.clearStencil(He),Ge=He)},reset:function(){A=!1,fe=null,he=null,ye=null,me=null,Se=null,ue=null,Ee=null,Ge=null}}}const o=new r,l=new s,c=new a;let u={},f={},h=new WeakMap,m=[],x=null,p=!1,d=null,v=null,S=null,L=null,T=null,w=null,P=null,O=!1,M=null,E=null,F=null,B=null,ce=null;const se=n.getParameter(35661);let z=!1,j=0;const q=n.getParameter(7938);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=j>=2);let I=null,k={};const G=n.getParameter(3088),$=n.getParameter(2978),Q=new et().fromArray(G),te=new et().fromArray($);function oe(A,fe,he){const ye=new Uint8Array(4),me=n.createTexture();n.bindTexture(A,me),n.texParameteri(A,10241,9728),n.texParameteri(A,10240,9728);for(let Se=0;Se<he;Se++)n.texImage2D(fe+Se,0,6408,1,1,0,6408,5121,ye);return me}const Me={};Me[3553]=oe(3553,3553,1),Me[34067]=oe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(2929),l.setFunc(Io),C(!1),V(Xa),be(2884),De(An);function be(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function Z(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function We(A,fe){return f[A]!==fe?(n.bindFramebuffer(A,fe),f[A]=fe,i&&(A===36009&&(f[36160]=fe),A===36160&&(f[36009]=fe)),!0):!1}function Ae(A,fe){let he=m,ye=!1;if(A)if(he=h.get(fe),he===void 0&&(he=[],h.set(fe,he)),A.isWebGLMultipleRenderTargets){const me=A.texture;if(he.length!==me.length||he[0]!==36064){for(let Se=0,ue=me.length;Se<ue;Se++)he[Se]=36064+Se;he.length=me.length,ye=!0}}else he[0]!==36064&&(he[0]=36064,ye=!0);else he[0]!==1029&&(he[0]=1029,ye=!0);ye&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Te(A){return x!==A?(n.useProgram(A),x=A,!0):!1}const ge={[wi]:32774,[Md]:32778,[yd]:32779};if(i)ge[Za]=32775,ge[Ka]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(ge[Za]=A.MIN_EXT,ge[Ka]=A.MAX_EXT)}const Oe={[bd]:0,[Sd]:1,[wd]:768,[fu]:770,[Dd]:776,[Cd]:774,[Td]:772,[Ed]:769,[hu]:771,[Ld]:775,[Ad]:773};function De(A,fe,he,ye,me,Se,ue,Ee){if(A===An){p===!0&&(Z(3042),p=!1);return}if(p===!1&&(be(3042),p=!0),A!==vd){if(A!==d||Ee!==O){if((v!==wi||T!==wi)&&(n.blendEquation(32774),v=wi,T=wi),Ee)switch(A){case Ri:n.blendFuncSeparate(1,771,1,771);break;case ja:n.blendFunc(1,1);break;case Ya:n.blendFuncSeparate(0,769,0,1);break;case $a:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Ri:n.blendFuncSeparate(770,771,1,771);break;case ja:n.blendFunc(770,1);break;case Ya:n.blendFuncSeparate(0,769,0,1);break;case $a:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}S=null,L=null,w=null,P=null,d=A,O=Ee}return}me=me||fe,Se=Se||he,ue=ue||ye,(fe!==v||me!==T)&&(n.blendEquationSeparate(ge[fe],ge[me]),v=fe,T=me),(he!==S||ye!==L||Se!==w||ue!==P)&&(n.blendFuncSeparate(Oe[he],Oe[ye],Oe[Se],Oe[ue]),S=he,L=ye,w=Se,P=ue),d=A,O=null}function b(A,fe){A.side===Pn?Z(2884):be(2884);let he=A.side===Gt;fe&&(he=!he),C(he),A.blending===Ri&&A.transparent===!1?De(An):De(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),o.setMask(A.colorWrite);const ye=A.stencilWrite;c.setTest(ye),ye&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),J(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?be(32926):Z(32926)}function C(A){M!==A&&(A?n.frontFace(2304):n.frontFace(2305),M=A)}function V(A){A!==md?(be(2884),A!==E&&(A===Xa?n.cullFace(1029):A===gd?n.cullFace(1028):n.cullFace(1032))):Z(2884),E=A}function K(A){A!==F&&(z&&n.lineWidth(A),F=A)}function J(A,fe,he){A?(be(32823),(B!==fe||ce!==he)&&(n.polygonOffset(fe,he),B=fe,ce=he)):Z(32823)}function ie(A){A?be(3089):Z(3089)}function re(A){A===void 0&&(A=33984+se-1),I!==A&&(n.activeTexture(A),I=A)}function ae(A,fe){I===null&&re();let he=k[I];he===void 0&&(he={type:void 0,texture:void 0},k[I]=he),(he.type!==A||he.texture!==fe)&&(n.bindTexture(A,fe||Me[A]),he.type=A,he.texture=fe)}function le(){const A=k[I];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function _(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function g(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function D(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function H(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Y(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function N(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function de(A){Q.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),Q.copy(A))}function _e(A){te.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),te.copy(A))}function xe(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},I=null,k={},f={},h=new WeakMap,m=[],x=null,p=!1,d=null,v=null,S=null,L=null,T=null,w=null,P=null,O=!1,M=null,E=null,F=null,B=null,ce=null,Q.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:be,disable:Z,bindFramebuffer:We,drawBuffers:Ae,useProgram:Te,setBlending:De,setMaterial:b,setFlipSided:C,setCullFace:V,setLineWidth:K,setPolygonOffset:J,setScissorTest:ie,activeTexture:re,bindTexture:ae,unbindTexture:le,compressedTexImage2D:_,texImage2D:ve,texImage3D:N,texStorage2D:Y,texStorage3D:ne,texSubImage2D:g,texSubImage3D:D,compressedTexSubImage2D:H,scissor:de,viewport:_e,reset:xe}}function gx(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(_,g){return v?new OffscreenCanvas(_,g):cs("canvas")}function L(_,g,D,H){let Y=1;if((_.width>H||_.height>H)&&(Y=H/Math.max(_.width,_.height)),Y<1||g===!0)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap){const ne=g?ls:Math.floor,ve=ne(Y*_.width),N=ne(Y*_.height);p===void 0&&(p=S(ve,N));const de=D?S(ve,N):p;return de.width=ve,de.height=N,de.getContext("2d").drawImage(_,0,0,ve,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+ve+"x"+N+")."),de}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_;return _}function T(_){return Bo(_.width)&&Bo(_.height)}function w(_){return o?!1:_.wrapS!==Ut||_.wrapT!==Ut||_.minFilter!==mt&&_.minFilter!==wt}function P(_,g){return _.generateMipmaps&&g&&_.minFilter!==mt&&_.minFilter!==wt}function O(_){n.generateMipmap(_)}function M(_,g,D,H,Y=!1){if(o===!1)return g;if(_!==null){if(n[_]!==void 0)return n[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let ne=g;return g===6403&&(D===5126&&(ne=33326),D===5131&&(ne=33325),D===5121&&(ne=33321)),g===33319&&(D===5126&&(ne=33328),D===5131&&(ne=33327),D===5121&&(ne=33323)),g===6408&&(D===5126&&(ne=34836),D===5131&&(ne=34842),D===5121&&(ne=H===$e&&Y===!1?35907:32856),D===32819&&(ne=32854),D===32820&&(ne=32855)),(ne===33325||ne===33326||ne===33327||ne===33328||ne===34842||ne===34836)&&e.get("EXT_color_buffer_float"),ne}function E(_,g,D){return P(_,D)===!0||_.isFramebufferTexture&&_.minFilter!==mt&&_.minFilter!==wt?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function F(_){return _===mt||_===Ja||_===Qa?9728:9729}function B(_){const g=_.target;g.removeEventListener("dispose",B),se(g),g.isVideoTexture&&x.delete(g)}function ce(_){const g=_.target;g.removeEventListener("dispose",ce),j(g)}function se(_){const g=i.get(_);if(g.__webglInit===void 0)return;const D=_.source,H=d.get(D);if(H){const Y=H[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&z(_),Object.keys(H).length===0&&d.delete(D)}i.remove(_)}function z(_){const g=i.get(_);n.deleteTexture(g.__webglTexture);const D=_.source,H=d.get(D);delete H[g.__cacheKey],a.memory.textures--}function j(_){const g=_.texture,D=i.get(_),H=i.get(g);if(H.__webglTexture!==void 0&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++)n.deleteFramebuffer(D.__webglFramebuffer[Y]),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[Y]);else{if(n.deleteFramebuffer(D.__webglFramebuffer),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Y=0;Y<D.__webglColorRenderbuffer.length;Y++)D.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[Y]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(_.isWebGLMultipleRenderTargets)for(let Y=0,ne=g.length;Y<ne;Y++){const ve=i.get(g[Y]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),a.memory.textures--),i.remove(g[Y])}i.remove(g),i.remove(_)}let q=0;function I(){q=0}function k(){const _=q;return _>=l&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+l),q+=1,_}function G(_){const g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.encoding),g.join()}function $(_,g){const D=i.get(_);if(_.isVideoTexture&&ae(_),_.isRenderTargetTexture===!1&&_.version>0&&D.__version!==_.version){const H=_.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(D,_,g);return}}t.activeTexture(33984+g),t.bindTexture(3553,D.__webglTexture)}function Q(_,g){const D=i.get(_);if(_.version>0&&D.__version!==_.version){Ae(D,_,g);return}t.activeTexture(33984+g),t.bindTexture(35866,D.__webglTexture)}function te(_,g){const D=i.get(_);if(_.version>0&&D.__version!==_.version){Ae(D,_,g);return}t.activeTexture(33984+g),t.bindTexture(32879,D.__webglTexture)}function oe(_,g){const D=i.get(_);if(_.version>0&&D.__version!==_.version){Te(D,_,g);return}t.activeTexture(33984+g),t.bindTexture(34067,D.__webglTexture)}const Me={[zo]:10497,[Ut]:33071,[Oo]:33648},be={[mt]:9728,[Ja]:9984,[Qa]:9986,[wt]:9729,[qd]:9985,[bs]:9987};function Z(_,g,D){if(D?(n.texParameteri(_,10242,Me[g.wrapS]),n.texParameteri(_,10243,Me[g.wrapT]),(_===32879||_===35866)&&n.texParameteri(_,32882,Me[g.wrapR]),n.texParameteri(_,10240,be[g.magFilter]),n.texParameteri(_,10241,be[g.minFilter])):(n.texParameteri(_,10242,33071),n.texParameteri(_,10243,33071),(_===32879||_===35866)&&n.texParameteri(_,32882,33071),(g.wrapS!==Ut||g.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(_,10240,F(g.magFilter)),n.texParameteri(_,10241,F(g.minFilter)),g.minFilter!==mt&&g.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");if(g.type===qn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===_r&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(_,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function We(_,g){let D=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",B));const H=g.source;let Y=d.get(H);Y===void 0&&(Y={},d.set(H,Y));const ne=G(g);if(ne!==_.__cacheKey){Y[ne]===void 0&&(Y[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Y[ne].usedTimes++;const ve=Y[_.__cacheKey];ve!==void 0&&(Y[_.__cacheKey].usedTimes--,ve.usedTimes===0&&z(g)),_.__cacheKey=ne,_.__webglTexture=Y[ne].texture}return D}function Ae(_,g,D){let H=3553;g.isDataArrayTexture&&(H=35866),g.isData3DTexture&&(H=32879);const Y=We(_,g),ne=g.source;if(t.activeTexture(33984+D),t.bindTexture(H,_.__webglTexture),ne.version!==ne.__currentVersion||Y===!0){n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const ve=w(g)&&T(g.image)===!1;let N=L(g.image,ve,!1,u);N=le(g,N);const de=T(N)||o,_e=s.convert(g.format,g.encoding);let xe=s.convert(g.type),A=M(g.internalFormat,_e,xe,g.encoding,g.isVideoTexture);Z(H,g,de);let fe;const he=g.mipmaps,ye=o&&g.isVideoTexture!==!0,me=ne.__currentVersion===void 0||Y===!0,Se=E(g,N,de);if(g.isDepthTexture)A=6402,o?g.type===qn?A=36012:g.type===Wn?A=33190:g.type===Ii?A=35056:A=33189:g.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Zn&&A===6402&&g.type!==mu&&g.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Wn,xe=s.convert(g.type)),g.format===Gi&&A===6402&&(A=34041,g.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Ii,xe=s.convert(g.type))),me&&(ye?t.texStorage2D(3553,1,A,N.width,N.height):t.texImage2D(3553,0,A,N.width,N.height,0,_e,xe,null));else if(g.isDataTexture)if(he.length>0&&de){ye&&me&&t.texStorage2D(3553,Se,A,he[0].width,he[0].height);for(let ue=0,Ee=he.length;ue<Ee;ue++)fe=he[ue],ye?t.texSubImage2D(3553,ue,0,0,fe.width,fe.height,_e,xe,fe.data):t.texImage2D(3553,ue,A,fe.width,fe.height,0,_e,xe,fe.data);g.generateMipmaps=!1}else ye?(me&&t.texStorage2D(3553,Se,A,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,_e,xe,N.data)):t.texImage2D(3553,0,A,N.width,N.height,0,_e,xe,N.data);else if(g.isCompressedTexture){ye&&me&&t.texStorage2D(3553,Se,A,he[0].width,he[0].height);for(let ue=0,Ee=he.length;ue<Ee;ue++)fe=he[ue],g.format!==en?_e!==null?ye?t.compressedTexSubImage2D(3553,ue,0,0,fe.width,fe.height,_e,fe.data):t.compressedTexImage2D(3553,ue,A,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage2D(3553,ue,0,0,fe.width,fe.height,_e,xe,fe.data):t.texImage2D(3553,ue,A,fe.width,fe.height,0,_e,xe,fe.data)}else if(g.isDataArrayTexture)ye?(me&&t.texStorage3D(35866,Se,A,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,_e,xe,N.data)):t.texImage3D(35866,0,A,N.width,N.height,N.depth,0,_e,xe,N.data);else if(g.isData3DTexture)ye?(me&&t.texStorage3D(32879,Se,A,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,_e,xe,N.data)):t.texImage3D(32879,0,A,N.width,N.height,N.depth,0,_e,xe,N.data);else if(g.isFramebufferTexture){if(me)if(ye)t.texStorage2D(3553,Se,A,N.width,N.height);else{let ue=N.width,Ee=N.height;for(let Ge=0;Ge<Se;Ge++)t.texImage2D(3553,Ge,A,ue,Ee,0,_e,xe,null),ue>>=1,Ee>>=1}}else if(he.length>0&&de){ye&&me&&t.texStorage2D(3553,Se,A,he[0].width,he[0].height);for(let ue=0,Ee=he.length;ue<Ee;ue++)fe=he[ue],ye?t.texSubImage2D(3553,ue,0,0,_e,xe,fe):t.texImage2D(3553,ue,A,_e,xe,fe);g.generateMipmaps=!1}else ye?(me&&t.texStorage2D(3553,Se,A,N.width,N.height),t.texSubImage2D(3553,0,0,0,_e,xe,N)):t.texImage2D(3553,0,A,_e,xe,N);P(g,de)&&O(H),ne.__currentVersion=ne.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function Te(_,g,D){if(g.image.length!==6)return;const H=We(_,g),Y=g.source;if(t.activeTexture(33984+D),t.bindTexture(34067,_.__webglTexture),Y.version!==Y.__currentVersion||H===!0){n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const ne=g.isCompressedTexture||g.image[0].isCompressedTexture,ve=g.image[0]&&g.image[0].isDataTexture,N=[];for(let ue=0;ue<6;ue++)!ne&&!ve?N[ue]=L(g.image[ue],!1,!0,c):N[ue]=ve?g.image[ue].image:g.image[ue],N[ue]=le(g,N[ue]);const de=N[0],_e=T(de)||o,xe=s.convert(g.format,g.encoding),A=s.convert(g.type),fe=M(g.internalFormat,xe,A,g.encoding),he=o&&g.isVideoTexture!==!0,ye=Y.__currentVersion===void 0||H===!0;let me=E(g,de,_e);Z(34067,g,_e);let Se;if(ne){he&&ye&&t.texStorage2D(34067,me,fe,de.width,de.height);for(let ue=0;ue<6;ue++){Se=N[ue].mipmaps;for(let Ee=0;Ee<Se.length;Ee++){const Ge=Se[Ee];g.format!==en?xe!==null?he?t.compressedTexSubImage2D(34069+ue,Ee,0,0,Ge.width,Ge.height,xe,Ge.data):t.compressedTexImage2D(34069+ue,Ee,fe,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?t.texSubImage2D(34069+ue,Ee,0,0,Ge.width,Ge.height,xe,A,Ge.data):t.texImage2D(34069+ue,Ee,fe,Ge.width,Ge.height,0,xe,A,Ge.data)}}}else{Se=g.mipmaps,he&&ye&&(Se.length>0&&me++,t.texStorage2D(34067,me,fe,N[0].width,N[0].height));for(let ue=0;ue<6;ue++)if(ve){he?t.texSubImage2D(34069+ue,0,0,0,N[ue].width,N[ue].height,xe,A,N[ue].data):t.texImage2D(34069+ue,0,fe,N[ue].width,N[ue].height,0,xe,A,N[ue].data);for(let Ee=0;Ee<Se.length;Ee++){const He=Se[Ee].image[ue].image;he?t.texSubImage2D(34069+ue,Ee+1,0,0,He.width,He.height,xe,A,He.data):t.texImage2D(34069+ue,Ee+1,fe,He.width,He.height,0,xe,A,He.data)}}else{he?t.texSubImage2D(34069+ue,0,0,0,xe,A,N[ue]):t.texImage2D(34069+ue,0,fe,xe,A,N[ue]);for(let Ee=0;Ee<Se.length;Ee++){const Ge=Se[Ee];he?t.texSubImage2D(34069+ue,Ee+1,0,0,xe,A,Ge.image[ue]):t.texImage2D(34069+ue,Ee+1,fe,xe,A,Ge.image[ue])}}}P(g,_e)&&O(34067),Y.__currentVersion=Y.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function ge(_,g,D,H,Y){const ne=s.convert(D.format,D.encoding),ve=s.convert(D.type),N=M(D.internalFormat,ne,ve,D.encoding);i.get(g).__hasExternalTextures||(Y===32879||Y===35866?t.texImage3D(Y,0,N,g.width,g.height,g.depth,0,ne,ve,null):t.texImage2D(Y,0,N,g.width,g.height,0,ne,ve,null)),t.bindFramebuffer(36160,_),re(g)?h.framebufferTexture2DMultisampleEXT(36160,H,Y,i.get(D).__webglTexture,0,ie(g)):n.framebufferTexture2D(36160,H,Y,i.get(D).__webglTexture,0),t.bindFramebuffer(36160,null)}function Oe(_,g,D){if(n.bindRenderbuffer(36161,_),g.depthBuffer&&!g.stencilBuffer){let H=33189;if(D||re(g)){const Y=g.depthTexture;Y&&Y.isDepthTexture&&(Y.type===qn?H=36012:Y.type===Wn&&(H=33190));const ne=ie(g);re(g)?h.renderbufferStorageMultisampleEXT(36161,ne,H,g.width,g.height):n.renderbufferStorageMultisample(36161,ne,H,g.width,g.height)}else n.renderbufferStorage(36161,H,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,_)}else if(g.depthBuffer&&g.stencilBuffer){const H=ie(g);D&&re(g)===!1?n.renderbufferStorageMultisample(36161,H,35056,g.width,g.height):re(g)?h.renderbufferStorageMultisampleEXT(36161,H,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,_)}else{const H=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let Y=0;Y<H.length;Y++){const ne=H[Y],ve=s.convert(ne.format,ne.encoding),N=s.convert(ne.type),de=M(ne.internalFormat,ve,N,ne.encoding),_e=ie(g);D&&re(g)===!1?n.renderbufferStorageMultisample(36161,_e,de,g.width,g.height):re(g)?h.renderbufferStorageMultisampleEXT(36161,_e,de,g.width,g.height):n.renderbufferStorage(36161,de,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function De(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$(g.depthTexture,0);const H=i.get(g.depthTexture).__webglTexture,Y=ie(g);if(g.depthTexture.format===Zn)re(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,H,0,Y):n.framebufferTexture2D(36160,36096,3553,H,0);else if(g.depthTexture.format===Gi)re(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,H,0,Y):n.framebufferTexture2D(36160,33306,3553,H,0);else throw new Error("Unknown depthTexture format")}function b(_){const g=i.get(_),D=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");De(g.__webglFramebuffer,_)}else if(D){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(36160,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]=n.createRenderbuffer(),Oe(g.__webglDepthbuffer[H],_,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Oe(g.__webglDepthbuffer,_,!1);t.bindFramebuffer(36160,null)}function C(_,g,D){const H=i.get(_);g!==void 0&&ge(H.__webglFramebuffer,_,_.texture,36064,3553),D!==void 0&&b(_)}function V(_){const g=_.texture,D=i.get(_),H=i.get(g);_.addEventListener("dispose",ce),_.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=g.version,a.memory.textures++);const Y=_.isWebGLCubeRenderTarget===!0,ne=_.isWebGLMultipleRenderTargets===!0,ve=T(_)||o;if(Y){D.__webglFramebuffer=[];for(let N=0;N<6;N++)D.__webglFramebuffer[N]=n.createFramebuffer()}else{if(D.__webglFramebuffer=n.createFramebuffer(),ne)if(r.drawBuffers){const N=_.texture;for(let de=0,_e=N.length;de<_e;de++){const xe=i.get(N[de]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&_.samples>0&&re(_)===!1){const N=ne?g:[g];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer);for(let de=0;de<N.length;de++){const _e=N[de];D.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(36161,D.__webglColorRenderbuffer[de]);const xe=s.convert(_e.format,_e.encoding),A=s.convert(_e.type),fe=M(_e.internalFormat,xe,A,_e.encoding),he=ie(_);n.renderbufferStorageMultisample(36161,he,fe,_.width,_.height),n.framebufferRenderbuffer(36160,36064+de,36161,D.__webglColorRenderbuffer[de])}n.bindRenderbuffer(36161,null),_.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(D.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(36160,null)}}if(Y){t.bindTexture(34067,H.__webglTexture),Z(34067,g,ve);for(let N=0;N<6;N++)ge(D.__webglFramebuffer[N],_,g,36064,34069+N);P(g,ve)&&O(34067),t.unbindTexture()}else if(ne){const N=_.texture;for(let de=0,_e=N.length;de<_e;de++){const xe=N[de],A=i.get(xe);t.bindTexture(3553,A.__webglTexture),Z(3553,xe,ve),ge(D.__webglFramebuffer,_,xe,36064+de,3553),P(xe,ve)&&O(3553)}t.unbindTexture()}else{let N=3553;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(o?N=_.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,H.__webglTexture),Z(N,g,ve),ge(D.__webglFramebuffer,_,g,36064,N),P(g,ve)&&O(N),t.unbindTexture()}_.depthBuffer&&b(_)}function K(_){const g=T(_)||o,D=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let H=0,Y=D.length;H<Y;H++){const ne=D[H];if(P(ne,g)){const ve=_.isWebGLCubeRenderTarget?34067:3553,N=i.get(ne).__webglTexture;t.bindTexture(ve,N),O(ve),t.unbindTexture()}}}function J(_){if(o&&_.samples>0&&re(_)===!1){const g=_.isWebGLMultipleRenderTargets?_.texture:[_.texture],D=_.width,H=_.height;let Y=16384;const ne=[],ve=_.stencilBuffer?33306:36096,N=i.get(_),de=_.isWebGLMultipleRenderTargets===!0;if(de)for(let _e=0;_e<g.length;_e++)t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,N.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,N.__webglFramebuffer);for(let _e=0;_e<g.length;_e++){ne.push(36064+_e),_.depthBuffer&&ne.push(ve);const xe=N.__ignoreDepthValues!==void 0?N.__ignoreDepthValues:!1;if(xe===!1&&(_.depthBuffer&&(Y|=256),_.stencilBuffer&&(Y|=1024)),de&&n.framebufferRenderbuffer(36008,36064,36161,N.__webglColorRenderbuffer[_e]),xe===!0&&(n.invalidateFramebuffer(36008,[ve]),n.invalidateFramebuffer(36009,[ve])),de){const A=i.get(g[_e]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,A,0)}n.blitFramebuffer(0,0,D,H,0,0,D,H,Y,9728),m&&n.invalidateFramebuffer(36008,ne)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),de)for(let _e=0;_e<g.length;_e++){t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+_e,36161,N.__webglColorRenderbuffer[_e]);const xe=i.get(g[_e]).__webglTexture;t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+_e,3553,xe,0)}t.bindFramebuffer(36009,N.__webglMultisampledFramebuffer)}}function ie(_){return Math.min(f,_.samples)}function re(_){const g=i.get(_);return o&&_.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ae(_){const g=a.render.frame;x.get(_)!==g&&(x.set(_,g),_.update())}function le(_,g){const D=_.encoding,H=_.format,Y=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===Uo||D!==Qn&&(D===$e?o===!1?e.has("EXT_sRGB")===!0&&H===en?(_.format=Uo,_.minFilter=wt,_.generateMipmaps=!1):g=xu.sRGBToLinear(g):(H!==en||Y!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",D)),g}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=te,this.setTextureCube=oe,this.rebindTextures=C,this.setupRenderTarget=V,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=b,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=re}function _x(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===Jn)return 5121;if(s===$d)return 32819;if(s===Zd)return 32820;if(s===Xd)return 5120;if(s===jd)return 5122;if(s===mu)return 5123;if(s===Yd)return 5124;if(s===Wn)return 5125;if(s===qn)return 5126;if(s===_r)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Kd)return 6406;if(s===en)return 6408;if(s===Qd)return 6409;if(s===ep)return 6410;if(s===Zn)return 6402;if(s===Gi)return 34041;if(s===tp)return 6403;if(s===Jd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Uo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===np)return 36244;if(s===ip)return 33319;if(s===rp)return 33320;if(s===sp)return 36249;if(s===zs||s===Os||s===Us||s===Bs)if(a===$e)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===zs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===zs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Os)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Us)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===el||s===tl||s===nl||s===il)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===el)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===il)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===op)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rl||s===sl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===rl)return a===$e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===sl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ol||s===al||s===ll||s===cl||s===ul||s===fl||s===hl||s===dl||s===pl||s===ml||s===gl||s===_l||s===xl||s===vl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ol)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===al)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ll)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ul)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ml)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_l)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ml)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ml)return a===$e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ii?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class xx extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ci extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vx={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const S=new Ci;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[p.jointName]=S,c.add(S)}const v=c.joints[p.jointName];d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Mx extends Ht{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Zn,u!==Zn&&u!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zn&&(i=Wn),i===void 0&&u===Gi&&(i=Ii),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mt,this.minFilter=l!==void 0?l:mt,this.flipY=!1,this.generateMipmaps=!1}}class yx extends ni{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const x=t.getContextAttributes();let p=null,d=null;const v=[],S=[],L=new Et;L.layers.enable(1),L.viewport=new et;const T=new Et;T.layers.enable(2),T.viewport=new et;const w=[L,T],P=new xx;P.layers.enable(1),P.layers.enable(2);let O=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=v[G];return $===void 0&&($=new ho,v[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=v[G];return $===void 0&&($=new ho,v[G]=$),$.getGripSpace()},this.getHand=function(G){let $=v[G];return $===void 0&&($=new ho,v[G]=$),$.getHandSpace()};function E(G){const $=S.indexOf(G.inputSource);if($===-1)return;const Q=v[$];Q!==void 0&&Q.dispatchEvent({type:G.type,data:G.inputSource})}function F(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",B);for(let G=0;G<v.length;G++){const $=S[G];$!==null&&(S[G]=null,v[G].disconnect($))}O=null,M=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,k.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",F),r.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:h}),d=new ei(h.framebufferWidth,h.framebufferHeight,{format:en,type:Jn,encoding:e.outputEncoding})}else{let $=null,Q=null,te=null;x.depth&&(te=x.stencil?35056:33190,$=x.stencil?Gi:Zn,Q=x.stencil?Ii:Wn);const oe={colorFormat:32856,depthFormat:te,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),d=new ei(f.textureWidth,f.textureHeight,{format:en,type:Jn,depthTexture:new Mx(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const Me=e.properties.get(d);Me.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),k.setContext(r),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function B(G){for(let $=0;$<G.removed.length;$++){const Q=G.removed[$],te=S.indexOf(Q);te>=0&&(S[te]=null,v[te].dispatchEvent({type:"disconnected",data:Q}))}for(let $=0;$<G.added.length;$++){const Q=G.added[$];let te=S.indexOf(Q);if(te===-1){for(let Me=0;Me<v.length;Me++)if(Me>=S.length){S.push(Q),te=Me;break}else if(S[Me]===null){S[Me]=Q,te=Me;break}if(te===-1)break}const oe=v[te];oe&&oe.dispatchEvent({type:"connected",data:Q})}}const ce=new R,se=new R;function z(G,$,Q){ce.setFromMatrixPosition($.matrixWorld),se.setFromMatrixPosition(Q.matrixWorld);const te=ce.distanceTo(se),oe=$.projectionMatrix.elements,Me=Q.projectionMatrix.elements,be=oe[14]/(oe[10]-1),Z=oe[14]/(oe[10]+1),We=(oe[9]+1)/oe[5],Ae=(oe[9]-1)/oe[5],Te=(oe[8]-1)/oe[0],ge=(Me[8]+1)/Me[0],Oe=be*Te,De=be*ge,b=te/(-Te+ge),C=b*-Te;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(C),G.translateZ(b),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const V=be+b,K=Z+b,J=Oe-C,ie=De+(te-C),re=We*Z/K*V,ae=Ae*Z/K*V;G.projectionMatrix.makePerspective(J,ie,re,ae,V,K)}function j(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;P.near=T.near=L.near=G.near,P.far=T.far=L.far=G.far,(O!==P.near||M!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),O=P.near,M=P.far);const $=G.parent,Q=P.cameras;j(P,$);for(let oe=0;oe<Q.length;oe++)j(Q[oe],$);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),G.position.copy(P.position),G.quaternion.copy(P.quaternion),G.scale.copy(P.scale),G.matrix.copy(P.matrix),G.matrixWorld.copy(P.matrixWorld);const te=G.children;for(let oe=0,Me=te.length;oe<Me;oe++)te[oe].updateMatrixWorld(!0);Q.length===2?z(P,L,T):P.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(G){f!==null&&(f.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)};let q=null;function I(G,$){if(c=$.getViewerPose(l||a),m=$,c!==null){const Q=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let te=!1;Q.length!==P.cameras.length&&(P.cameras.length=0,te=!0);for(let oe=0;oe<Q.length;oe++){const Me=Q[oe];let be=null;if(h!==null)be=h.getViewport(Me);else{const We=u.getViewSubImage(f,Me);be=We.viewport,oe===0&&(e.setRenderTargetTextures(d,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(d))}let Z=w[oe];Z===void 0&&(Z=new Et,Z.layers.enable(oe),Z.viewport=new et,w[oe]=Z),Z.matrix.fromArray(Me.transform.matrix),Z.projectionMatrix.fromArray(Me.projectionMatrix),Z.viewport.set(be.x,be.y,be.width,be.height),oe===0&&P.matrix.copy(Z.matrix),te===!0&&P.cameras.push(Z)}}for(let Q=0;Q<v.length;Q++){const te=S[Q],oe=v[Q];te!==null&&oe!==void 0&&oe.update(te,$,l||a)}q&&q(G,$),m=null}const k=new Tu;k.setAnimationLoop(I),this.setAnimationLoop=function(G){q=G},this.dispose=function(){}}}function bx(n,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,v,S,L){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,L)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,v,S):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Gt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Gt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const T=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*T}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let L;d.aoMap?L=d.aoMap:d.lightMap&&(L=d.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),p.uv2Transform.value.copy(L.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,v,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let L;d.map?L=d.map:d.alphaMap&&(L=d.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),p.uvTransform.value.copy(L.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Gt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Sx(){const n=cs("canvas");return n.style.display="block",n}function Ru(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:Sx(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Qn,this.physicallyCorrectLights=!1,this.toneMapping=un,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,v=0,S=0,L=null,T=-1,w=null;const P=new et,O=new et;let M=null,E=e.width,F=e.height,B=1,ce=null,se=null;const z=new et(0,0,E,F),j=new et(0,0,E,F);let q=!1;const I=new Eu;let k=!1,G=!1,$=null;const Q=new tt,te=new Xe,oe=new R,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return L===null?B:1}let Z=t;function We(y,U){for(let X=0;X<y.length;X++){const W=y[X],ee=e.getContext(W,U);if(ee!==null)return ee}return null}try{const y={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ca}`),e.addEventListener("webglcontextlost",A,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",he,!1),Z===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),Z=We(U,y),Z===null)throw We(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ae,Te,ge,Oe,De,b,C,V,K,J,ie,re,ae,le,_,g,D,H,Y,ne,ve,N,de;function _e(){Ae=new F_(Z),Te=new A_(Z,Ae,n),Ae.init(Te),N=new _x(Z,Ae,Te),ge=new mx(Z,Ae,Te),Oe=new O_,De=new tx,b=new gx(Z,Ae,ge,De,Te,N,Oe),C=new L_(p),V=new I_(p),K=new Yp(Z,Te),de=new E_(Z,Ae,K,Te),J=new N_(Z,K,Oe,de),ie=new G_(Z,J,K,Oe),Y=new k_(Z,Te,b),g=new C_(De),re=new ex(p,C,V,Ae,Te,de,g),ae=new bx(p,De),le=new ix,_=new cx(Ae,Te),H=new w_(p,C,ge,ie,u,a),D=new px(p,ie,Te),ne=new T_(Z,Ae,Oe,Te),ve=new z_(Z,Ae,Oe,Te),Oe.programs=re.programs,p.capabilities=Te,p.extensions=Ae,p.properties=De,p.renderLists=le,p.shadowMap=D,p.state=ge,p.info=Oe}_e();const xe=new yx(p,Z);this.xr=xe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const y=Ae.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ae.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(y){y!==void 0&&(B=y,this.setSize(E,F,!1))},this.getSize=function(y){return y.set(E,F)},this.setSize=function(y,U,X){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=y,F=U,e.width=Math.floor(y*B),e.height=Math.floor(U*B),X!==!1&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(E*B,F*B).floor()},this.setDrawingBufferSize=function(y,U,X){E=y,F=U,B=X,e.width=Math.floor(y*X),e.height=Math.floor(U*X),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(z)},this.setViewport=function(y,U,X,W){y.isVector4?z.set(y.x,y.y,y.z,y.w):z.set(y,U,X,W),ge.viewport(P.copy(z).multiplyScalar(B).floor())},this.getScissor=function(y){return y.copy(j)},this.setScissor=function(y,U,X,W){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,U,X,W),ge.scissor(O.copy(j).multiplyScalar(B).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(y){ge.setScissorTest(q=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){se=y},this.getClearColor=function(y){return y.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(y=!0,U=!0,X=!0){let W=0;y&&(W|=16384),U&&(W|=256),X&&(W|=1024),Z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",A,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",he,!1),le.dispose(),_.dispose(),De.dispose(),C.dispose(),V.dispose(),ie.dispose(),de.dispose(),re.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Ge),xe.removeEventListener("sessionend",He),$&&($.dispose(),$=null),ct.stop()};function A(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const y=Oe.autoReset,U=D.enabled,X=D.autoUpdate,W=D.needsUpdate,ee=D.type;_e(),Oe.autoReset=y,D.enabled=U,D.autoUpdate=X,D.needsUpdate=W,D.type=ee}function he(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ye(y){const U=y.target;U.removeEventListener("dispose",ye),me(U)}function me(y){Se(y),De.remove(y)}function Se(y){const U=De.get(y).programs;U!==void 0&&(U.forEach(function(X){re.releaseProgram(X)}),y.isShaderMaterial&&re.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,X,W,ee,we){U===null&&(U=Me);const Ce=ee.isMesh&&ee.matrixWorld.determinant()<0,Re=Nu(y,U,X,W,ee);ge.setMaterial(W,Ce);let Pe=X.index;const Ve=X.attributes.position;if(Pe===null){if(Ve===void 0||Ve.count===0)return}else if(Pe.count===0)return;let ze=1;W.wireframe===!0&&(Pe=J.getWireframeAttribute(X),ze=2),de.setup(ee,W,Re,X,Pe);let Ue,Ye=ne;Pe!==null&&(Ue=K.get(Pe),Ye=ve,Ye.setIndex(Ue));const Rn=Pe!==null?Pe.count:Ve.count,ii=X.drawRange.start*ze,ri=X.drawRange.count*ze,qt=we!==null?we.start*ze:0,ke=we!==null?we.count*ze:1/0,si=Math.max(ii,qt),Ze=Math.min(Rn,ii+ri,qt+ke)-1,Xt=Math.max(0,Ze-si+1);if(Xt!==0){if(ee.isMesh)W.wireframe===!0?(ge.setLineWidth(W.wireframeLinewidth*be()),Ye.setMode(1)):Ye.setMode(4);else if(ee.isLine){let dn=W.linewidth;dn===void 0&&(dn=1),ge.setLineWidth(dn*be()),ee.isLineSegments?Ye.setMode(1):ee.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else ee.isPoints?Ye.setMode(0):ee.isSprite&&Ye.setMode(4);if(ee.isInstancedMesh)Ye.renderInstances(si,Xt,ee.count);else if(X.isInstancedBufferGeometry){const dn=Math.min(X.instanceCount,X._maxInstanceCount);Ye.renderInstances(si,Xt,dn)}else Ye.render(si,Xt)}},this.compile=function(y,U){h=_.get(y),h.init(),x.push(h),y.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),h.setupLights(p.physicallyCorrectLights),y.traverse(function(X){const W=X.material;if(W)if(Array.isArray(W))for(let ee=0;ee<W.length;ee++){const we=W[ee];Es(we,y,X)}else Es(W,y,X)}),x.pop(),h=null};let ue=null;function Ee(y){ue&&ue(y)}function Ge(){ct.stop()}function He(){ct.start()}const ct=new Tu;ct.setAnimationLoop(Ee),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(y){ue=y,xe.setAnimationLoop(y),y===null?ct.stop():ct.start()},xe.addEventListener("sessionstart",Ge),xe.addEventListener("sessionend",He),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;y.autoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(U),U=xe.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,U,L),h=_.get(y,x.length),h.init(),x.push(h),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),I.setFromProjectionMatrix(Q),G=this.localClippingEnabled,k=g.init(this.clippingPlanes,G,U),f=le.get(y,m.length),f.init(),m.push(f),Wt(y,U,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ce,se),k===!0&&g.beginShadows();const X=h.state.shadowsArray;if(D.render(X,y,U),k===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(f,y),h.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const W=U.cameras;for(let ee=0,we=W.length;ee<we;ee++){const Ce=W[ee];ma(f,y,Ce,Ce.viewport)}}else ma(f,y,U);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(p,y,U),de.resetDefaultState(),T=-1,w=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Wt(y,U,X,W){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||I.intersectsSprite(y)){W&&oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);const Ce=ie.update(y),Re=y.material;Re.visible&&f.push(y,Ce,Re,X,oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Oe.render.frame&&(y.skeleton.update(),y.skeleton.frame=Oe.render.frame),!y.frustumCulled||I.intersectsObject(y))){W&&oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);const Ce=ie.update(y),Re=y.material;if(Array.isArray(Re)){const Pe=Ce.groups;for(let Ve=0,ze=Pe.length;Ve<ze;Ve++){const Ue=Pe[Ve],Ye=Re[Ue.materialIndex];Ye&&Ye.visible&&f.push(y,Ce,Ye,X,oe.z,Ue)}}else Re.visible&&f.push(y,Ce,Re,X,oe.z,null)}}const we=y.children;for(let Ce=0,Re=we.length;Ce<Re;Ce++)Wt(we[Ce],U,X,W)}function ma(y,U,X,W){const ee=y.opaque,we=y.transmissive,Ce=y.transparent;h.setupLightsView(X),we.length>0&&Iu(ee,U,X),W&&ge.viewport(P.copy(W)),ee.length>0&&Mr(ee,U,X),we.length>0&&Mr(we,U,X),Ce.length>0&&Mr(Ce,U,X),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Iu(y,U,X){const W=Te.isWebGL2;$===null&&($=new ei(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?_r:Jn,minFilter:bs,samples:W&&s===!0?4:0})),p.getDrawingBufferSize(te),W?$.setSize(te.x,te.y):$.setSize(ls(te.x),ls(te.y));const ee=p.getRenderTarget();p.setRenderTarget($),p.clear();const we=p.toneMapping;p.toneMapping=un,Mr(y,U,X),p.toneMapping=we,b.updateMultisampleRenderTarget($),b.updateRenderTargetMipmap($),p.setRenderTarget(ee)}function Mr(y,U,X){const W=U.isScene===!0?U.overrideMaterial:null;for(let ee=0,we=y.length;ee<we;ee++){const Ce=y[ee],Re=Ce.object,Pe=Ce.geometry,Ve=W===null?Ce.material:W,ze=Ce.group;Re.layers.test(X.layers)&&Fu(Re,U,X,Pe,Ve,ze)}}function Fu(y,U,X,W,ee,we){y.onBeforeRender(p,U,X,W,ee,we),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),ee.onBeforeRender(p,U,X,W,y,we),ee.transparent===!0&&ee.side===Pn?(ee.side=Gt,ee.needsUpdate=!0,p.renderBufferDirect(X,U,W,ee,y,we),ee.side=gr,ee.needsUpdate=!0,p.renderBufferDirect(X,U,W,ee,y,we),ee.side=Pn):p.renderBufferDirect(X,U,W,ee,y,we),y.onAfterRender(p,U,X,W,ee,we)}function Es(y,U,X){U.isScene!==!0&&(U=Me);const W=De.get(y),ee=h.state.lights,we=h.state.shadowsArray,Ce=ee.state.version,Re=re.getParameters(y,ee.state,we,U,X),Pe=re.getProgramCacheKey(Re);let Ve=W.programs;W.environment=y.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(y.isMeshStandardMaterial?V:C).get(y.envMap||W.environment),Ve===void 0&&(y.addEventListener("dispose",ye),Ve=new Map,W.programs=Ve);let ze=Ve.get(Pe);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===Ce)return ga(y,Re),ze}else Re.uniforms=re.getUniforms(y),y.onBuild(X,Re,p),y.onBeforeCompile(Re,p),ze=re.acquireProgram(Re,Pe),Ve.set(Pe,ze),W.uniforms=Re.uniforms;const Ue=W.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=g.uniform),ga(y,Re),W.needsLights=Ou(y),W.lightsStateVersion=Ce,W.needsLights&&(Ue.ambientLightColor.value=ee.state.ambient,Ue.lightProbe.value=ee.state.probe,Ue.directionalLights.value=ee.state.directional,Ue.directionalLightShadows.value=ee.state.directionalShadow,Ue.spotLights.value=ee.state.spot,Ue.spotLightShadows.value=ee.state.spotShadow,Ue.rectAreaLights.value=ee.state.rectArea,Ue.ltc_1.value=ee.state.rectAreaLTC1,Ue.ltc_2.value=ee.state.rectAreaLTC2,Ue.pointLights.value=ee.state.point,Ue.pointLightShadows.value=ee.state.pointShadow,Ue.hemisphereLights.value=ee.state.hemi,Ue.directionalShadowMap.value=ee.state.directionalShadowMap,Ue.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ue.spotShadowMap.value=ee.state.spotShadowMap,Ue.spotShadowMatrix.value=ee.state.spotShadowMatrix,Ue.pointShadowMap.value=ee.state.pointShadowMap,Ue.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Ye=ze.getUniforms(),Rn=ts.seqWithValue(Ye.seq,Ue);return W.currentProgram=ze,W.uniformsList=Rn,ze}function ga(y,U){const X=De.get(y);X.outputEncoding=U.outputEncoding,X.instancing=U.instancing,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Nu(y,U,X,W,ee){U.isScene!==!0&&(U=Me),b.resetTextureUnits();const we=U.fog,Ce=W.isMeshStandardMaterial?U.environment:null,Re=L===null?p.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:Qn,Pe=(W.isMeshStandardMaterial?V:C).get(W.envMap||Ce),Ve=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!W.normalMap&&!!X.attributes.tangent,Ue=!!X.morphAttributes.position,Ye=!!X.morphAttributes.normal,Rn=!!X.morphAttributes.color,ii=W.toneMapped?p.toneMapping:un,ri=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,qt=ri!==void 0?ri.length:0,ke=De.get(W),si=h.state.lights;if(k===!0&&(G===!0||y!==w)){const jt=y===w&&W.id===T;g.setState(W,y,jt)}let Ze=!1;W.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==si.state.version||ke.outputEncoding!==Re||ee.isInstancedMesh&&ke.instancing===!1||!ee.isInstancedMesh&&ke.instancing===!0||ee.isSkinnedMesh&&ke.skinning===!1||!ee.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Pe||W.fog===!0&&ke.fog!==we||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==g.numPlanes||ke.numIntersection!==g.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==ze||ke.morphTargets!==Ue||ke.morphNormals!==Ye||ke.morphColors!==Rn||ke.toneMapping!==ii||Te.isWebGL2===!0&&ke.morphTargetsCount!==qt)&&(Ze=!0):(Ze=!0,ke.__version=W.version);let Xt=ke.currentProgram;Ze===!0&&(Xt=Es(W,U,ee));let dn=!1,Zi=!1,Ts=!1;const ut=Xt.getUniforms(),Ki=ke.uniforms;if(ge.useProgram(Xt.program)&&(dn=!0,Zi=!0,Ts=!0),W.id!==T&&(T=W.id,Zi=!0),dn||w!==y){if(ut.setValue(Z,"projectionMatrix",y.projectionMatrix),Te.logarithmicDepthBuffer&&ut.setValue(Z,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),w!==y&&(w=y,Zi=!0,Ts=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const jt=ut.map.cameraPosition;jt!==void 0&&jt.setValue(Z,oe.setFromMatrixPosition(y.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(Z,"isOrthographic",y.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ee.isSkinnedMesh)&&ut.setValue(Z,"viewMatrix",y.matrixWorldInverse)}if(ee.isSkinnedMesh){ut.setOptional(Z,ee,"bindMatrix"),ut.setOptional(Z,ee,"bindMatrixInverse");const jt=ee.skeleton;jt&&(Te.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),ut.setValue(Z,"boneTexture",jt.boneTexture,b),ut.setValue(Z,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const As=X.morphAttributes;return(As.position!==void 0||As.normal!==void 0||As.color!==void 0&&Te.isWebGL2===!0)&&Y.update(ee,X,W,Xt),(Zi||ke.receiveShadow!==ee.receiveShadow)&&(ke.receiveShadow=ee.receiveShadow,ut.setValue(Z,"receiveShadow",ee.receiveShadow)),Zi&&(ut.setValue(Z,"toneMappingExposure",p.toneMappingExposure),ke.needsLights&&zu(Ki,Ts),we&&W.fog===!0&&ae.refreshFogUniforms(Ki,we),ae.refreshMaterialUniforms(Ki,W,B,F,$),ts.upload(Z,ke.uniformsList,Ki,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ts.upload(Z,ke.uniformsList,Ki,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(Z,"center",ee.center),ut.setValue(Z,"modelViewMatrix",ee.modelViewMatrix),ut.setValue(Z,"normalMatrix",ee.normalMatrix),ut.setValue(Z,"modelMatrix",ee.matrixWorld),Xt}function zu(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Ou(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,U,X){De.get(y.texture).__webglTexture=U,De.get(y.depthTexture).__webglTexture=X;const W=De.get(y);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=X===void 0,W.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){const X=De.get(y);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,X=0){L=y,v=U,S=X;let W=!0;if(y){const Pe=De.get(y);Pe.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),W=!1):Pe.__webglFramebuffer===void 0?b.setupRenderTarget(y):Pe.__hasExternalTextures&&b.rebindTextures(y,De.get(y.texture).__webglTexture,De.get(y.depthTexture).__webglTexture)}let ee=null,we=!1,Ce=!1;if(y){const Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture)&&(Ce=!0);const Ve=De.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(ee=Ve[U],we=!0):Te.isWebGL2&&y.samples>0&&b.useMultisampledRTT(y)===!1?ee=De.get(y).__webglMultisampledFramebuffer:ee=Ve,P.copy(y.viewport),O.copy(y.scissor),M=y.scissorTest}else P.copy(z).multiplyScalar(B).floor(),O.copy(j).multiplyScalar(B).floor(),M=q;if(ge.bindFramebuffer(36160,ee)&&Te.drawBuffers&&W&&ge.drawBuffers(y,ee),ge.viewport(P),ge.scissor(O),ge.setScissorTest(M),we){const Pe=De.get(y.texture);Z.framebufferTexture2D(36160,36064,34069+U,Pe.__webglTexture,X)}else if(Ce){const Pe=De.get(y.texture),Ve=U||0;Z.framebufferTextureLayer(36160,36064,Pe.__webglTexture,X||0,Ve)}T=-1},this.readRenderTargetPixels=function(y,U,X,W,ee,we,Ce){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ce!==void 0&&(Re=Re[Ce]),Re){ge.bindFramebuffer(36160,Re);try{const Pe=y.texture,Ve=Pe.format,ze=Pe.type;if(Ve!==en&&N.convert(Ve)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=ze===_r&&(Ae.has("EXT_color_buffer_half_float")||Te.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(ze!==Jn&&N.convert(ze)!==Z.getParameter(35738)&&!(ze===qn&&(Te.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-W&&X>=0&&X<=y.height-ee&&Z.readPixels(U,X,W,ee,N.convert(Ve),N.convert(ze),we)}finally{const Pe=L!==null?De.get(L).__webglFramebuffer:null;ge.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(y,U,X=0){const W=Math.pow(2,-X),ee=Math.floor(U.image.width*W),we=Math.floor(U.image.height*W);b.setTexture2D(U,0),Z.copyTexSubImage2D(3553,X,0,0,y.x,y.y,ee,we),ge.unbindTexture()},this.copyTextureToTexture=function(y,U,X,W=0){const ee=U.image.width,we=U.image.height,Ce=N.convert(X.format),Re=N.convert(X.type);b.setTexture2D(X,0),Z.pixelStorei(37440,X.flipY),Z.pixelStorei(37441,X.premultiplyAlpha),Z.pixelStorei(3317,X.unpackAlignment),U.isDataTexture?Z.texSubImage2D(3553,W,y.x,y.y,ee,we,Ce,Re,U.image.data):U.isCompressedTexture?Z.compressedTexSubImage2D(3553,W,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,Ce,U.mipmaps[0].data):Z.texSubImage2D(3553,W,y.x,y.y,Ce,Re,U.image),W===0&&X.generateMipmaps&&Z.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(y,U,X,W,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=y.max.x-y.min.x+1,Ce=y.max.y-y.min.y+1,Re=y.max.z-y.min.z+1,Pe=N.convert(W.format),Ve=N.convert(W.type);let ze;if(W.isData3DTexture)b.setTexture3D(W,0),ze=32879;else if(W.isDataArrayTexture)b.setTexture2DArray(W,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,W.flipY),Z.pixelStorei(37441,W.premultiplyAlpha),Z.pixelStorei(3317,W.unpackAlignment);const Ue=Z.getParameter(3314),Ye=Z.getParameter(32878),Rn=Z.getParameter(3316),ii=Z.getParameter(3315),ri=Z.getParameter(32877),qt=X.isCompressedTexture?X.mipmaps[0]:X.image;Z.pixelStorei(3314,qt.width),Z.pixelStorei(32878,qt.height),Z.pixelStorei(3316,y.min.x),Z.pixelStorei(3315,y.min.y),Z.pixelStorei(32877,y.min.z),X.isDataTexture||X.isData3DTexture?Z.texSubImage3D(ze,ee,U.x,U.y,U.z,we,Ce,Re,Pe,Ve,qt.data):X.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(ze,ee,U.x,U.y,U.z,we,Ce,Re,Pe,qt.data)):Z.texSubImage3D(ze,ee,U.x,U.y,U.z,we,Ce,Re,Pe,Ve,qt),Z.pixelStorei(3314,Ue),Z.pixelStorei(32878,Ye),Z.pixelStorei(3316,Rn),Z.pixelStorei(3315,ii),Z.pixelStorei(32877,ri),ee===0&&W.generateMipmaps&&Z.generateMipmap(ze),ge.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),ge.unbindTexture()},this.resetState=function(){v=0,S=0,L=null,ge.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class wx extends Ru{}wx.prototype.isWebGL1Renderer=!0;class Ex extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Ni extends vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new R,rc=new R,sc=new tt,po=new fa,Xr=new Ss;class Tx extends Pt{constructor(e=new Vt,t=new Ni){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ic.fromBufferAttribute(t,r-1),rc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ic.distanceTo(rc);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(r),Xr.radius+=s,e.ray.intersectsSphere(Xr)===!1)return;sc.copy(r).invert(),po.copy(e.ray).applyMatrix4(sc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,u=new R,f=new R,h=new R,m=this.isLineSegments?2:1,x=i.index,d=i.attributes.position;if(x!==null){const v=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let L=v,T=S-1;L<T;L+=m){const w=x.getX(L),P=x.getX(L+1);if(c.fromBufferAttribute(d,w),u.fromBufferAttribute(d,P),po.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||t.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,a.start),S=Math.min(d.count,a.start+a.count);for(let L=v,T=S-1;L<T;L+=m){if(c.fromBufferAttribute(d,L),u.fromBufferAttribute(d,L+1),po.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const oc=new R,ac=new R;class cr extends Tx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)oc.fromBufferAttribute(t,r),ac.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+oc.distanceTo(ac);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const jr=new R,Yr=new R,mo=new R,$r=new Jt;class go extends Vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Fi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},m=[];for(let x=0;x<l;x+=3){a?(c[0]=a.getX(x),c[1]=a.getX(x+1),c[2]=a.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:p,b:d,c:v}=$r;if(p.fromBufferAttribute(o,c[0]),d.fromBufferAttribute(o,c[1]),v.fromBufferAttribute(o,c[2]),$r.getNormal(mo),f[0]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,f[1]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,f[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){const L=(S+1)%3,T=f[S],w=f[L],P=$r[u[S]],O=$r[u[L]],M=`${T}_${w}`,E=`${w}_${T}`;E in h&&h[E]?(mo.dot(h[E].normal)<=s&&(m.push(P.x,P.y,P.z),m.push(O.x,O.y,O.z)),h[E]=null):M in h||(h[M]={index0:c[S],index1:c[L],normal:mo.clone()})}}for(const x in h)if(h[x]){const{index0:p,index1:d}=h[x];jr.fromBufferAttribute(o,p),Yr.fromBufferAttribute(o,d),m.push(jr.x,jr.y,jr.z),m.push(Yr.x,Yr.y,Yr.z)}this.setAttribute("position",new Dt(m,3))}}}class Ax{constructor(e,t,i=0,r=1/0){this.ray=new fa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Go(e,this,i,t),i.sort(lc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Go(e[r],this,i,t);return i.sort(lc),i}}function lc(n,e){return n.distance-e.distance}function Go(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Go(r[s],e,t,!0)}}const Zr=new ji;class Cx extends cr{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new Vt;s.setIndex(new Lt(i,1)),s.setAttribute("position",new Lt(r,3)),super(s,new Ni({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Zr.setFromObject(this.object),Zr.isEmpty())return;const t=Zr.min,i=Zr.max,r=this.geometry.attributes.position,s=r.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=t.x,s[4]=i.y,s[5]=i.z,s[6]=t.x,s[7]=t.y,s[8]=i.z,s[9]=i.x,s[10]=t.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=t.z,s[15]=t.x,s[16]=i.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=i.x,s[22]=t.y,s[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}}class Lx extends cr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Vt;r.setAttribute("position",new Dt(t,3)),r.setAttribute("color",new Dt(i,3));const s=new Ni({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new qe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);function cc(n,e){const t=new Lx(e);n.add(t)}const Mi=new Yi(0,0,0,"YXZ"),yi=new R,Dx={type:"change"},Px={type:"lock"},Rx={type:"unlock"},uc=Math.PI/2;class Ix extends ni{constructor(e,t){super(),t===void 0&&(console.warn('THREE.PointerLockControls: The second parameter "domElement" is now mandatory.'),t=document.body),this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1;const i=this;function r(o){if(i.isLocked===!1)return;const l=o.movementX||o.mozMovementX||o.webkitMovementX||0,c=o.movementY||o.mozMovementY||o.webkitMovementY||0;Mi.setFromQuaternion(e.quaternion),Mi.y-=l*.002*i.pointerSpeed,Mi.x-=c*.002*i.pointerSpeed,Mi.x=Math.max(uc-i.maxPolarAngle,Math.min(uc-i.minPolarAngle,Mi.x)),e.quaternion.setFromEuler(Mi),i.dispatchEvent(Dx)}function s(){i.domElement.ownerDocument.pointerLockElement===i.domElement?(i.dispatchEvent(Px),i.isLocked=!0):(i.dispatchEvent(Rx),i.isLocked=!1)}function a(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}this.connect=function(){i.domElement.ownerDocument.addEventListener("mousemove",r),i.domElement.ownerDocument.addEventListener("pointerlockchange",s),i.domElement.ownerDocument.addEventListener("pointerlockerror",a)},this.disconnect=function(){i.domElement.ownerDocument.removeEventListener("mousemove",r),i.domElement.ownerDocument.removeEventListener("pointerlockchange",s),i.domElement.ownerDocument.removeEventListener("pointerlockerror",a)},this.dispose=function(){this.disconnect()},this.getObject=function(){return e},this.getDirection=function(){const o=new R(0,0,-1);return function(l){return l.copy(o).applyQuaternion(e.quaternion)}}(),this.moveForward=function(o){yi.setFromMatrixColumn(e.matrix,0),yi.crossVectors(e.up,yi),e.position.addScaledVector(yi,o)},this.moveRight=function(o){yi.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(yi,o)},this.lock=function(){this.domElement.requestPointerLock()},this.unlock=function(){i.domElement.ownerDocument.exitPointerLock()},this.connect()}}const Fx=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},pa=n=>(Bf("data-v-09491dfb"),n=n(),kf(),n),Nx=pa(()=>vt("div",{class:"container"},null,-1)),zx={class:"step-num",style:{top:"100px"}},Ox=pa(()=>vt("span",{class:"step-num-unit"},"\u6B65",-1)),Ux={class:"step-num"},Bx=Oi("\u8BF7\u5728"),kx={class:"step-num-unit"},Gx=Oi("\u6B65\u5185\u5B8C\u6210"),Hx=pa(()=>vt("div",{id:"blocker"},[vt("div",{id:"instructions"},[vt("button",{style:{"font-size":"36px"},id:"firstPerson"}," \u5F00\u59CB "),vt("p",null,[Oi(" \u524D\u8FDB\uFF1AW"),vt("br"),Oi(" \u540E\u7AEF\uFF1AS "),vt("br")])])],-1)),Vx={__name:"Maze",setup(n){const r=Ta(0);let s=Ta(0),a,o,l,c,u=!1;performance.now();const f=new R;new R,new R,new qe,ra(()=>{h(),m()});function h(){o=new Ex,a=new Et(45,window.innerWidth/window.innerHeight,.1,1e3),q(),a.lookAt(0,0,0),l=new Ru({antialias:!0,alpha:!0}),l.shadowMap.enabled=!0,l.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(l.domElement),c=new Ix(a,document.body);const x=document.getElementById("blocker"),p=document.getElementById("firstPerson");document.getElementById("thirdPerson"),console.log(p,"firstPerson"),p.addEventListener("click",function(){c.lock()}),c.addEventListener("lock",function(){p.style.display="none",x.style.display="none"}),c.addEventListener("unlock",function(){x.style.display="block",p.style.display=""}),o.add(c.getObject());const d=function(I){switch(I.code){case"ArrowUp":case"KeyW":break;case"ArrowLeft":case"KeyA":break;case"ArrowDown":case"KeyS":break;case"ArrowRight":case"KeyD":break;case"Space":u===!0&&(f.y+=350),u=!1;break}},v=function(I){switch(I.code){}};document.addEventListener("keydown",d),document.addEventListener("keyup",v),new Ax(new R,new R(0,-1,0),0,10);let S=new Ci;function L(){new At(new Cn(10,10,10),new Ti({color:16480546}));const I=new go(new Cn(10,10,10)),k=new cr(I,new Ni({color:16636052}));S.add(k),cc(S,20),cc(o,1e3),S.position.x=-(10*10)*.5+10*.5,S.position.z=-(10*10)*.5+10*.5,S.position.y=10*.5,o.add(S)}L();function T(){S.position.x=-(10*10)*.5+10*.5,S.position.z=-(10*10)*.5+10*.5}const w=new At(new jn(120,120),new Ti({transparent:!0,opacity:.1,side:Pn})),P=new go(new jn(120,120)),O=new cr(P,new Ni({color:1552871}));w.rotation.x=Math.PI*-.5,O.rotation.x=Math.PI*-.5,o.add(w),o.add(O);let M,E,F=0;function B(){console.log("\u5237\u65B0\u68CB\u76D8\u5566"),M=Array.from({length:Math.pow(10,2)},()=>Number(Math.random()<.4)),M[0]=0,M[M.length-1]=2,o.remove(E),E=new Ci,M.forEach((I,k)=>{const G=k%10*10+5,$=Math.trunc(k/10)*10+10*.5;if(I===1){const Q=new At(new Cn(10,10,10),new Ti({color:1385780}));Q.position.x=G,Q.position.z=$,Q.position.y=10*.5;const te=new Cx(Q,1552871);E.add(te),E.add(Q)}if(I===0){const Q=new go(new jn(10,10)),te=new cr(Q,new Ni({color:1552871}));te.position.x=G,te.rotation.x=Math.PI*-.5,te.position.z=$,E.add(te)}if(I===2){const Q=new At(new jn(10,10),new Ti({color:16480546,side:Pn}));Q.position.x=G,Q.rotation.x=Math.PI*-.5,Q.position.z=$,E.add(Q)}}),E.position.x=-(10*10)*.5,E.position.z=-(10*10)*.5,ce(),o.add(E)}B();function ce(){console.log("\u521B\u5EFA\u68CB\u76D8\u8DEF\u5F84\u5566");let I=0;const k=[0];let G=!1,$=!1;function Q(){const te=M[I+1]!==1&&I%10!==9,oe=M[I+10]!==1&&Math.trunc(I/10)!==10-1;console.log(I,"one"),console.log(k,"two"),console.log(G,"three"),!$&&te?(k.push(I+1),I=I+1,$=!1,Q()):!G&&oe?(k.push(I+10),I=I+10,$=!1,Q()):I!==10*10-1&&I!==0?(k.pop(),G=I-k[k.length-1]===10,I=k[k.length-1],$=!0,Q()):I===10*10-1?(console.log("\u6709\u8DEF\u5F84\u5566"),s.value=k.length-1):(console.log("\u8BF7\u5237\u65B0\u68CB\u76D8"),F=0,B())}Q()}let se,z=new R(50,0,50),j;window.addEventListener("keydown",I=>{console.log("\u6309\u4E0B\u53BB\u5566"),a.getWorldDirection(z),se=Cp.radToDeg(Math.atan2(z.x,z.z)),se>45&&se<=135?j="right":se>135||se<-135?j="up":se>=-135&&se<-45?j="left":j="down",console.log(se),console.log(j),I.key==="s"&&j==="up"&&(j="down"),I.key==="s"&&j==="down"&&(j="up"),I.key==="s"&&j==="left"&&(j="right"),I.key==="s"&&j==="right"&&(j="left"),j==="up"&&Math.trunc(F/10)!==0&&M[F-10]!==1&&(S.position.z=S.position.z-10,a.position.z=a.position.z-10,console.log(S.position,"moveBoxGroup.position"),console.log(a.position,"camera.position"),F-=10,r.value+=1),j==="down"&&Math.trunc(F/10)!==10-1&&M[F+10]!==1&&(S.position.z=S.position.z+10,a.position.z=a.position.z+10,F+=10,r.value+=1),j==="left"&&!(F%10===0)&&M[F-1]!==1&&(S.position.x=S.position.x-10,a.position.x=a.position.x-10,F-=1,r.value+=1),j==="right"&&!(F%10===9)&&M[F+1]!==1&&(console.log("dd"),S.position.x+=10,a.position.x=a.position.x+10,F+=1,r.value+=1),F===10*10-1&&(s.value===r.value?(alert("\u606D\u559C\u4F60\u901A\u5173, \u6211\u4EEC\u5C06\u5F00\u542F\u4E0B\u4E00\u5173"),F=0,r.value=0,B(),T(),q()):(alert("\u606D\u559C\u4F60\u6CA1\u901A\u5173, \u8BF7\u91CD\u65B0\u5F00\u59CB"),F=0,r.value=0,T(),q())),l.render(o,a)});function q(){console.log("\u91CD\u65B0\u66F4\u6539\u76F8\u673A\u4F4D\u7F6E"),a.position.x=-(10*10)*.5+10*.5,a.position.z=-(10*10)*.5+10*.5,a.position.y=10*.5}}function m(){requestAnimationFrame(m),l.render(o,a)}return(x,p)=>(ru(),Ch(zt,null,[Nx,vt("div",zx,[Oi(_a(r.value)+" ",1),Ox]),vt("div",Ux,[Bx,vt("span",kx,_a(Ic(s)),1),Gx]),Hx],64))}},Wx=Fx(Vx,[["__scopeId","data-v-09491dfb"]]);const qx={__name:"App",setup(n){return(e,t)=>(ru(),Lh(Wx))}};dd(qx).mount("#app");
