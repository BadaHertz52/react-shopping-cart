import{r as d,j as e,C as L,D as R,R as C,c as I,a as D,s as A,b as E,f as O,d as j,e as $,o as F,g as G,t as _,O as k,u as U,h as H,W as N,A as y,p as l,i as f,S as g,k as P,l as T,P as S,I as W,m as Q,n as z}from"./index-DaWpRVsF.js";const J=t=>d.createElement("svg",{width:14,height:3,viewBox:"0 0 14 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},d.createElement("path",{d:"M1.11572 1.5C5.80201 1.5 8.42943 1.5 13.1157 1.5",stroke:"#363636",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),K=t=>d.createElement("svg",{width:14,height:15,viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},d.createElement("path",{d:"M1.11572 7.50004H13.1157M7.11572 13.5V1.50004",stroke:"#363636",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),V={minus:e.jsx(J,{}),plus:e.jsx(K,{})},X={minus:"수량 감소",plus:"수량 증가"},M=({sign:t,...n})=>e.jsx(L,{...n,"aria-label":X[t],children:V[t]}),Z=({children:t,...n})=>e.jsx(R,{...n,children:t}),q=({errorMessage:t})=>{const[n,s]=d.useState(t!=="");return d.useEffect(()=>{s(t!=="")},[t]),{openModal:n,setOpenModal:s}},B=()=>{const t=C(I),[n,s]=D(A),i=u=>n.some(o=>o===u),r=n.length===t.length;return{isChecked:i,isAllChecked:r,onCheckCartItem:(u,o)=>{const h=u?[...n,o]:n.filter(w=>w!==o);s(h)},onCheckAllCartItems:u=>{const o=u?t.map(h=>h.id):[];s(o)}}},Y=t=>{const n=E(I),s=E(A),[i,r]=d.useState(null),p=()=>{n(o=>o.filter(h=>h.id!==t))},x=()=>{s(o=>o.filter(h=>h!==t))};return{fetchError:i,updateCartItems:p,updateSelectedCartItemIds:x,onDeleteItem:async()=>{try{await O(t),p(),x()}catch(o){if(o instanceof Error)return r(o);r(new Error("상품 삭제 fetch 오류"))}}}},tt=({id:t,quantity:n})=>{const s=E(I),[i,r]=d.useState(""),[p,x]=d.useState(null),u=a=>n+j[a],o=(a,c)=>a===j.max&&c==="plus",h=(a,c)=>a===j.min&&c==="minus",w=(a,c)=>o(a,c)?(r(j.message.max),!1):h(a,c)?(r(j.message.min),!1):(r(""),!0),v=a=>{s(c=>c.map(m=>m.id===t?{...m,quantity:a}:{...m}))};return{errorMessage:i,fetchError:p,updateCartItems:v,getNewQuantity:u,validateQuantity:w,onUpdateCartItemCount:async a=>{if(!w(n,a))return;const c=u(a);try{await $(t,c),v(c),x(null)}catch(m){if(m instanceof Error)return x(m);x(new Error("수량 변경 fetch 오류"))}}}};function b(t){d.useEffect(()=>{if(t)throw t},[t])}const et=()=>{const t=C(F),n=C(G),s=C(_);return e.jsxs(k,{children:[e.jsx(k.Row,{title:"주문 금액",price:t}),e.jsx(k.Row,{title:"배송비",price:n}),e.jsx(k.Row,{title:"총 결제 금액",price:s})]})},nt=t=>{const{modalTargetEl:n}=U(),{openModal:s,setOpenModal:i}=q({errorMessage:t.errorMessage});return H({targetEl:document.body,isPreventScroll:s}),e.jsx(e.Fragment,{children:n&&e.jsx(N,{openModal:s,setOpenModal:i,contents:e.jsx(y.Contents,{message:t.errorMessage}),buttonContainerJustifyContent:"center",button:e.jsx(y.ConfirmButton,{text:"확인"}),modalTargetEl:n,contentsPadding:window.innerWidth<=435?"10px":void 0})})},st=l.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`,rt=({cartItem:t})=>{const{quantity:n}=t,{onUpdateCartItemCount:s,errorMessage:i,fetchError:r}=tt(t);return b(r),e.jsxs(st,{children:[e.jsx(M,{onClick:()=>s("minus"),sign:"minus"}),n,e.jsx(M,{onClick:()=>s("plus"),sign:"plus"}),e.jsx(nt,{errorMessage:i})]})},ot=({cartItem:t})=>e.jsxs(f.Description,{children:[e.jsx(f.Name,{cartItem:t}),e.jsx(f.Price,{cartItem:t}),e.jsx(rt,{cartItem:t})]});l.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;const it=l.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  gap: 4px;
`,at=l.section`
  margin-top: 20px;
  width: 100%;
  // 200px : navigation애서 CartItemContainer 까지의 거리;
  // 161PX: 금액 관련 height
  // 81px : 배송 관련 배너 height
  max-height: calc(
    100vh - ${g.navigationHeight} - ${g.bottomButtonHeight} - ${g.layoutPadding} - 200px - 161px - 81px
  );
  min-height: 163px;
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
`;const ct=()=>{const t=C(I),{isAllChecked:n,onCheckAllCartItems:s}=B(),i=()=>{s(!n)};return e.jsxs("div",{children:[e.jsxs(it,{children:[e.jsx(P,{checked:n,onClick:i}),e.jsx("span",{className:"label",children:"전체 선택"})]}),e.jsx(at,{children:t.map(r=>e.jsx(ut,{cartItem:r},r.id))})]})},lt=l.li`
  border-top: 1px solid ${T.borderColor};
  padding-top: 12px;
  padding-right: 10px;
  margin-top: 12px;
`,dt=l.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ut=({cartItem:t})=>{const{onDeleteItem:n,fetchError:s}=Y(t.id),{isChecked:i,onCheckCartItem:r}=B();return b(s),e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(P,{checked:i(t.id),onChange:p=>r(p.target.checked,t.id)}),e.jsx(Z,{onClick:n,children:"삭제"})]}),e.jsxs(f.DetailContainer,{children:[e.jsx(f.Img,{cartItem:t}),e.jsx(ot,{cartItem:t})]})]})},ht=l.section`
  margin-top: 20px;
  width: 100%;
`,pt=l.div`
  width: 100%;
  height: calc(100vh - ${g.bottomButtonHeight} - ${g.navigationHeight}*2 - ${g.layoutPadding});
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`,Ct=()=>{const t=C(I);return e.jsx(e.Fragment,{children:t.length===0?e.jsx(pt,{children:"장바구니에 담은 상품이 없습니다."}):e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsxs(S.Row,{children:["현재 ",t.length,"종류의 상품이 담겨 있습니다."]})}),e.jsx(ht,{children:e.jsx(ct,{cartItems:t})}),e.jsxs(W,{children:["총 주문 금액이 ",Q(z.freeShippingMinAmount)," 이상일 경우 무료 배송됩니다."]}),e.jsx(et,{})]})})};export{Ct as default};
