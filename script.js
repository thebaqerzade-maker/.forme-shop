const products=[
{name:"Forma Lounge Chair",price:2450,desc:"A generous, sculptural seat designed for unhurried moments.",image:"https://images.unsplash.com/photo-1567534-3a6b6c7c0a2c?auto=format&fit=crop&w=1200&q=85"},
{name:"Arc Dining Table",price:4800,desc:"A quiet centrepiece, crafted in solid American walnut.",image:"https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1200&q=85"},
{name:"Still Sofa",price:6900,desc:"A soft architectural silhouette made for gathering.",image:"https://images.unsplash.com/photo-1598300053653-4b6f6b3f6f1d?auto=format&fit=crop&w=1200&q=85"},
{name:"Sol Table Light",price:890,desc:"A warm, diffused glow in a timeless material pairing.",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85"},
{name:"Monolith Side Table",price:1250,desc:"A grounded form carved from softly honed travertine.",image:"https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=85"},
{name:"Curve Dining Chair",price:1180,desc:"An expressive everyday chair with a considered profile.",image:"https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=85"}];
let cart=[],selected=0,finish="Natural oak";
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
function openOverlay(){ $("#overlay").classList.add("open"); }
function closeAll(){ $("#overlay").classList.remove("open");$("#cartDrawer").classList.remove("open");$("#productModal").classList.remove("open"); }
$("#bagBtn").onclick=()=>{openOverlay();$("#cartDrawer").classList.add("open")};
$("#closeCart").onclick=closeAll;$("#overlay").onclick=closeAll;
$("#menuBtn").onclick=()=>$("#nav").classList.toggle("show");
$("#searchBtn").onclick=()=>{location.hash="#collection";$("#collection").scrollIntoView({behavior:"smooth"});};
$$(".filter").forEach(b=>b.onclick=()=>{$$(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");$$(".product").forEach(p=>p.style.display=b.dataset.filter==="all"||p.dataset.category===b.dataset.filter?"":"none")});
$$("[data-product]").forEach(a=>a.onclick=e=>{e.preventDefault();selected=+a.dataset.product;const p=products[selected];$("#modalImage").src=p.image;$("#modalImage").alt=p.name;$("#modalName").textContent=p.name;$("#modalDesc").textContent=p.desc;$("#modalPrice").textContent="$"+p.price.toLocaleString("en-US");$("#productModal").classList.add("open");openOverlay()});
$("#closeModal").onclick=closeAll;
$$(".swatch").forEach(b=>b.onclick=()=>{$$(".swatch").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");finish=b.dataset.finish});
$("#addToBag").onclick=()=>{cart.push({...products[selected],finish});renderCart();closeAll();$("#bagBtn").animate([{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}],{duration:300})};
function renderCart(){let count=cart.length;$("#bagCount").textContent=count;$("#drawerCount").textContent="("+count+")";$("#subtotal").textContent="$"+cart.reduce((s,p)=>s+p.price,0).toLocaleString("en-US");$("#cartItems").innerHTML=count?cart.map((p,i)=>`<div class="cart-row"><span>${p.name}<br><small>${p.finish}</small></span><span>$${p.price.toLocaleString("en-US")} <button aria-label="Remove" data-remove="${i}" style="border:0;background:none;margin-left:8px">×</button></span></div>`).join(""):'<p class="empty">Your bag is waiting for something special.</p>';$$("[data-remove]").forEach(b=>b.onclick=()=>{cart.splice(+b.dataset.remove,1);renderCart()})}
$("#checkout").onclick=()=>alert("This is a design preview. Online checkout will be connected in the next stage.");
