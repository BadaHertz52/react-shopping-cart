import{r as d,j as e,C as D,D as L,R as C,c as f,a as R,s as B,b as E,f as O,d as g,e as F,o as G,g as $,t as U,O as w,u as _,h as H,W as N,A as y,p as l,i as j,S as k,k as A,l as T,P as S,I as W,m as Q,n as z}from"./index-BcnpI6n8.js";const J=t=>d.createElement("svg",{width:14,height:3,viewBox:"0 0 14 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},d.createElement("path",{d:"M1.11572 1.5C5.80201 1.5 8.42943 1.5 13.1157 1.5",stroke:"#363636",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),K=t=>d.createElement("svg",{width:14,height:15,viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},d.createElement("path",{d:"M1.11572 7.50004H13.1157M7.11572 13.5V1.50004",stroke:"#363636",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),V={minus:e.jsx(J,{}),plus:e.jsx(K,{})},M=({sign:t,...n})=>e.jsx(D,{...n,children:V[t]}),Z=({children:t,...n})=>e.jsx(L,{...n,children:t}),q=({errorMessage:t})=>{const[n,s]=d.useState(t!=="");return d.useEffect(()=>{s(t!=="")},[t]),{openModal:n,setOpenModal:s}},b=()=>{const t=C(f),[n,s]=R(B),i=u=>n.some(o=>o===u),r=n.length===t.length;return{isChecked:i,isAllChecked:r,onCheckCartItem:(u,o)=>{const p=u?[...n,o]:n.filter(I=>I!==o);s(p)},onCheckAllCartItems:u=>{const o=u?t.map(p=>p.id):[];s(o)}}},X=t=>{const n=E(f),s=E(B),[i,r]=d.useState(null),h=()=>{n(o=>o.filter(p=>p.id!==t))},x=()=>{s(o=>o.filter(p=>p!==t))};return{fetchError:i,updateCartItems:h,updateSelectedCartItemIds:x,onDeleteItem:async()=>{try{await O(t),h(),x()}catch(o){if(o instanceof Error)return r(o);r(new Error("상품 삭제 fetch 오류"))}}}},Y=({id:t,quantity:n})=>{const s=E(f),[i,r]=d.useState(""),[h,x]=d.useState(null),u=a=>n+g[a],o=(a,c)=>a===g.max&&c==="plus",p=(a,c)=>a===g.min&&c==="minus",I=(a,c)=>o(a,c)?(r(g.message.max),!1):p(a,c)?(r(g.message.min),!1):(r(""),!0),v=a=>{s(c=>c.map(m=>m.id===t?{...m,quantity:a}:{...m}))};return{errorMessage:i,fetchError:h,updateCartItems:v,getNewQuantity:u,validateQuantity:I,onUpdateCartItemCount:async a=>{if(!I(n,a))return;const c=u(a);try{await F(t,c),v(c),x(null)}catch(m){if(m instanceof Error)return x(m);x(new Error("수량 변경 fetch 오류"))}}}};function P(t){d.useEffect(()=>{if(t)throw t},[t])}const tt=()=>{const t=C(G),n=C($),s=C(U);return e.jsxs(w,{children:[e.jsx(w.Row,{title:"주문 금액",price:t}),e.jsx(w.Row,{title:"배송비",price:n}),e.jsx(w.Row,{title:"총 결제 금액",price:s})]})},et=t=>{const{modalTargetEl:n}=_(),{openModal:s,setOpenModal:i}=q({errorMessage:t.errorMessage});return H({targetEl:document.body,isPreventScroll:s}),e.jsx(e.Fragment,{children:n&&e.jsx(N,{openModal:s,setOpenModal:i,contents:e.jsx(y.Contents,{message:t.errorMessage}),buttonContainerJustifyContent:"center",button:e.jsx(y.ConfirmButton,{text:"확인"}),modalTargetEl:n})})},nt=l.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`,st=({cartItem:t})=>{const{quantity:n}=t,{onUpdateCartItemCount:s,errorMessage:i,fetchError:r}=Y(t);return P(r),e.jsxs(nt,{children:[e.jsx(M,{onClick:()=>s("minus"),sign:"minus"}),n,e.jsx(M,{onClick:()=>s("plus"),sign:"plus"}),e.jsx(et,{errorMessage:i})]})},rt=({cartItem:t})=>e.jsxs(j.Description,{children:[e.jsx(j.Name,{cartItem:t}),e.jsx(j.Price,{cartItem:t}),e.jsx(st,{cartItem:t})]});l.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;const ot=l.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  gap: 4px;
`,it=l.section`
  margin-top: 20px;
  width: 100%;
  max-height: calc(100vh - ${k.navigationHeight} - ${k.bottomButtonHeight} - 200px - 290px);
  overflow-y: auto;
`;l.li`
  padding-top: 12px;
`;l.div`
  width: 112px;
  height: 112px;
  border-radius: 8px;
`;l.div`
  display: flex;
  gap: 24px;
  margin-top: 12px;
`;const at=()=>{const t=C(f),{isAllChecked:n,onCheckAllCartItems:s}=b(),i=()=>{s(!n)};return e.jsxs("div",{children:[e.jsxs(ot,{children:[e.jsx(A,{checked:n,onClick:i}),e.jsx("span",{className:"label",children:"전체 선택"})]}),e.jsx(it,{children:t.map(r=>e.jsx(dt,{cartItem:r},r.id))})]})},ct=l.li`
  border-top: 1px solid ${T.borderColor};
  padding-top: 12px;
  padding-right: 10px;
  margin-top: 12px;
`,lt=l.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,dt=({cartItem:t})=>{const{onDeleteItem:n,fetchError:s}=X(t.id),{isChecked:i,onCheckCartItem:r}=b();return P(s),e.jsxs(ct,{children:[e.jsxs(lt,{children:[e.jsx(A,{checked:i(t.id),onChange:h=>r(h.target.checked,t.id)}),e.jsx(Z,{onClick:n,children:"삭제"})]}),e.jsxs(j.DetailContainer,{children:[e.jsx(j.Img,{cartItem:t}),e.jsx(rt,{cartItem:t})]})]})},ut=l.section`
  margin-top: 20px;
  width: 100%;
`,pt=l.div`
  width: 100%;
  height: calc(100vh - ${k.bottomButtonHeight} - ${k.navigationHeight}*2 - 24px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`,mt=()=>{const t=C(f);return e.jsx(e.Fragment,{children:t.length===0?e.jsx(pt,{children:"장바구니에 담은 상품이 없습니다."}):e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsxs(S.Row,{children:["현재 ",t.length,"종류의 상품이 담겨 있습니다."]})}),e.jsx(ut,{children:e.jsx(at,{cartItems:t})}),e.jsxs(W,{children:["총 주문 금액이 ",Q(z.freeShippingMinAmount)," 이상일 경우 무료 배송됩니다."]}),e.jsx(tt,{})]})})};export{mt as default};
