let e,t,n=!1;const l="undefined"!=typeof window?window:{},o=l.document||{head:{}},s={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.o,u=e=>"object"==(e=typeof e)||"function"===e,f=(e,t,...n)=>{let l=null,o=!1,s=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!u(l))&&(l+=""),o&&s?r[r.length-1].i+=l:r.push(o?$(null,l):l),s=o)};c(n);const i=$(e,null);return i.u=t,r.length>0&&(i.$=r),i},$=(e,t)=>({t:0,m:e,i:t,p:null,$:null}),d={},m=(t,n,l)=>{let s,r,c=n.$[l],i=0;if(null!==c.i)s=c.p=o.createTextNode(c.i);else if(s=c.p=o.createElement(c.m),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),c.$)for(i=0;i<c.$.length;++i)r=m(t,c,i),r&&s.appendChild(r);return s},p=(e,n,l,o,s,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=m(null,l,s),c&&(o[s].p=c,i.insertBefore(c,n)))},y=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.p.remove()},h=(e,t)=>e.m===t.m,w=(e,t)=>{const n=t.p=e.p,l=e.$,o=t.$,s=t.i;null===s?null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,r=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],$=l[u];for(;s<=c&&r<=u;)null==i?i=t[++s]:null==a?a=t[--c]:null==f?f=l[++r]:null==$?$=l[--u]:h(i,f)?(w(i,f),i=t[++s],f=l[++r]):h(a,$)?(w(a,$),a=t[--c],$=l[--u]):h(i,$)?(w(i,$),e.insertBefore(i.p,a.p.nextSibling),i=t[++s],$=l[--u]):h(a,f)?(w(a,f),e.insertBefore(a.p,i.p),a=t[--c],f=l[++r]):(o=m(t&&t[r],n,r),f=l[++r],o&&i.p.parentNode.insertBefore(o,i.p));s>c?p(e,null==l[u+1]?null:l[u+1].p,n,l,r,u):r>u&&y(t,s,c)})(n,l,t,o):null!==o?(null!==e.i&&(n.textContent=""),p(n,null,t,o,0,o.length-1)):null!==l&&y(l,0,l.length-1):e.i!==s&&(n.data=s)},b=(e,t)=>{t&&!e.h&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.h=t)))},g=(e,t)=>{if(e.t|=16,!(4&e.t))return b(e,e.g),B((()=>S(e,t)));e.t|=512},S=(e,t)=>{const n=e.S;return C(void 0,(()=>M(e,n,t)))},M=async(n,l,s)=>{const r=n.M,c=r["s-rc"];s&&(e=>{const t=e.j,n=e.M,l=t.t,s=((e,t)=>{let n=a(t),l=q.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=i.get(e=e.head||e);s||i.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(n);((n,l)=>{const o=n.M,s=n.v||$(null,null),r=(e=>e&&e.m===d)(l)?l:f(null,null,l);t=o.tagName,r.m=null,r.t|=4,n.v=r,r.p=s.p=o.shadowRoot||o,e=o["s-sc"],w(s,r)})(n,j(n,l)),c&&(c.map((e=>e())),r["s-rc"]=void 0);{const e=r["s-p"],t=()=>v(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},j=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(t){R(t,e.M)}return t},v=e=>{const t=e.M,n=e.g;64&e.t||(e.t|=64,O(t),e.k(t),n||k()),e.h&&(e.h(),e.h=void 0),512&e.t&&z((()=>g(e,!1))),e.t&=-517},k=()=>{O(o.documentElement),z((()=>(e=>{const t=s.ce("appload",{detail:{namespace:"default-component"}});return e.dispatchEvent(t),t})(l)))},C=(e,t)=>e&&e.then?e.then(t):t(),O=e=>e.classList.add("hydrated"),P=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),o=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>T(this).O.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=T(e),s=o.O.get(t),r=o.t,c=o.S;n=((e,t)=>null==e||u(e)?e:1&t?e+"":e)(n,l.C[t][0]),8&r&&void 0!==s||n===s||(o.O.set(t,n),c&&2==(18&r)&&g(o,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){s.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},x=(e,t={})=>{const n=[],r=t.exclude||[],i=l.customElements,u=o.head,f=u.querySelector("meta[charset]"),$=o.createElement("style"),d=[];let m,p=!0;Object.assign(s,t),s.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],P:t[3]};l.C=t[2];const o=l.o,u=class extends HTMLElement{constructor(e){super(e),L(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){m&&(clearTimeout(m),m=null),p?d.push(this):s.jmp((()=>(e=>{if(0==(1&s.t)){const t=T(e),n=t.j,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){b(t,t.g=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=W(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(P(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){R(e)}t.t&=-9,e()}if(o.style){let e=o.style;const t=a(n);if(!q.has(t)){const l=()=>{};((e,t,n)=>{let l=q.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,q.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.g,r=()=>g(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){s.jmp((()=>{}))}componentOnReady(){return T(this).T}};l.A=e[0],r.includes(o)||i.get(o)||(n.push(o),i.define(o,P(u,l,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),p=!1,d.length?d.map((e=>e.connectedCallback())):s.jmp((()=>m=setTimeout(k,30)))},E=new WeakMap,T=e=>E.get(e),A=(e,t)=>E.set(t.S=e,t),L=(e,t)=>{const n={t:0,M:e,j:t,O:new Map};return n.T=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],E.set(e,n)},R=(e,t)=>(0,console.error)(e,t),U=new Map,W=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=U.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(U.set(n,e),e[t])),R)},q=new Map,F=[],H=[],N=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&s.t?z(_):s.raf(_))},V=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){R(e)}e.length=0},_=()=>{V(F),V(H),(n=F.length>0)&&s.raf(_)},z=e=>r().then(e),B=N(H,!0);export{x as b,f as h,r as p,A as r}