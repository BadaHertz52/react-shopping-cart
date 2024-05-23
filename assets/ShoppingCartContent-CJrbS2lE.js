import{r as l,j as e,C as v,D,R as x,c as g,a as L,s as A,b as k,f as R,d as p,e as F,u as G,g as O,W as b,A as E,o as U,h as _,t as N,O as f,i as T,k as j,l as W,m as y,n as Q,p as $,q,E as H,P as M,v as J,I as K,w as V,x as z}from"./index-D0FLc11B.js";const X=t=>l.createElement("svg",{width:14,height:3,viewBox:"0 0 14 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M1.11572 1.5C5.80201 1.5 8.42943 1.5 13.1157 1.5",stroke:"#363636",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Y=t=>l.createElement("svg",{width:14,height:15,viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M1.11572 7.50004H13.1157M7.11572 13.5V1.50004",stroke:"#363636",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Z={minus:e.jsx(X,{}),plus:e.jsx(Y,{})},S=({sign:t,...s})=>e.jsx(v,{...s,children:Z[t]}),tt=({children:t,...s})=>e.jsx(D,{...s,children:t}),B=()=>{const t=x(g),[s,n]=L(A),a=u=>s.some(o=>o===u),r=s.length===t.length;return{isChecked:a,isAllChecked:r,onCheckCartItem:(u,o)=>{const d=u?[...s,o]:s.filter(I=>I!==o);n(d)},onCheckAllCartItems:u=>{const o=u?t.map(d=>d.id):[];n(o)}}},et=t=>{const s=k(g),n=k(A),[a,r]=l.useState(null),C=()=>{s(o=>o.filter(d=>d.id!==t))},h=()=>{n(o=>o.filter(d=>d!==t))};return{fetchError:a,updateCartItems:C,updateSelectedCartItemIds:h,onDeleteItem:async()=>{try{await R(t),C(),h()}catch(o){if(o instanceof Error)return r(o);r(new Error("상품 삭제 fetch 오류"))}}}},st=({id:t,quantity:s})=>{const n=k(g),[a,r]=l.useState(""),[C,h]=l.useState(null),u=c=>s+p[c],o=(c,i)=>c===p.max&&i==="plus",d=(c,i)=>c===p.min&&i==="minus",I=(c,i)=>o(c,i)?(r(p.message.max),!1):d(c,i)?(r(p.message.min),!1):(r(""),!0),w=c=>{n(i=>i.map(m=>m.id===t?{...m,quantity:c}:{...m}))};return{errorMessage:a,fetchError:C,updateCartItems:w,getNewQuantity:u,validateQuantity:I,onUpdateCartItemCount:async c=>{if(!I(s,c))return;const i=u(c);try{await F(t,i),w(i),h(null)}catch(m){if(m instanceof Error)return h(m);h(new Error("수량 변경 fetch 오류"))}}}};function P(t){l.useEffect(()=>{if(t)throw t},[t])}const nt=({errorMessage:t})=>{const[s,n]=l.useState(t!=="");return l.useEffect(()=>{n(t!=="")},[t]),{openModal:s,setOpenModal:n}},rt=t=>{const{modalTargetEl:s}=G(),{openModal:n,setOpenModal:a}=nt({errorMessage:t.errorMessage});return O({targetEl:document.body,isPreventScroll:n}),e.jsx(e.Fragment,{children:s&&e.jsx(b,{openModal:n,setOpenModal:a,contents:e.jsx(E.Contents,{message:t.errorMessage}),buttonContainerJustifyContent:"center",button:e.jsx(E.ConfirmButton,{text:"확인"}),modalTargetEl:s})})},ot=()=>{const t=x(U),s=x(_),n=x(N);return e.jsxs(f,{children:[e.jsx(f.Row,{title:"주문 금액",price:t}),e.jsx(f.Row,{title:"배송비",price:s}),e.jsx(f.Row,{title:"총 결제 금액",price:n})]})},at=({cartItem:t})=>{const{quantity:s}=t,{onUpdateCartItemCount:n,errorMessage:a,fetchError:r}=st(t);return P(r),e.jsxs(T,{children:[e.jsx(S,{onClick:()=>n("minus"),sign:"minus"}),e.jsx("span",{children:s}),e.jsx(S,{onClick:()=>n("plus"),sign:"plus"}),e.jsx(rt,{errorMessage:a})]})},ct=({cartItem:t})=>e.jsxs(j.Description,{children:[e.jsx(j.Name,{cartItem:t}),e.jsx(j.Price,{cartItem:t}),e.jsx(at,{cartItem:t})]}),it=()=>{const{isAllChecked:t,onCheckAllCartItems:s}=B(),n=x(g),a=()=>{s(!t)};return e.jsxs("div",{children:[e.jsxs(W,{children:[e.jsx(y,{checked:t,onClick:a}),e.jsx("span",{className:"label",children:"전체 선택"})]}),e.jsx(Q,{children:n.map(r=>e.jsx(lt,{cartItem:r},r.id))})]})},lt=({cartItem:t})=>{const{onDeleteItem:s,fetchError:n}=et(t.id),{isChecked:a,onCheckCartItem:r}=B();return P(n),e.jsxs($,{children:[e.jsxs(q,{children:[e.jsx(y,{checked:a(t.id),onChange:C=>r(C.target.checked,t.id)}),e.jsx(tt,{onClick:s,children:"삭제"})]}),e.jsxs(j.DetailContainer,{children:[e.jsx(j.Img,{cartItem:t}),e.jsx(ct,{cartItem:t})]})]})},Ct=()=>{const t=x(g);return e.jsx(e.Fragment,{children:t.length===0?e.jsx(H,{children:"장바구니에 담은 상품이 없습니다."}):e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsxs(M.Row,{children:["현재 ",t.length,"종류의 상품이 담겨 있습니다."]})}),e.jsx(J,{children:e.jsx(it,{cartItems:t})}),e.jsxs(K,{children:["총 주문 금액이 ",V(z.freeShippingMinAmount)," 이상일 경우 무료 배송됩니다."]}),e.jsx(ot,{})]})})};export{Ct as default};
