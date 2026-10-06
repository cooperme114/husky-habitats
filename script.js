const stems={hyper:"over",hypo:"under",phobia:"fear",pan:"all",mega:"big",pyro:"fire",circum:"around",cred:"believe",ject:"throw",med:"middle"};
const catalog=[
{id:"plant",name:"Potted Plant",icon:"🪴",price:60,cat:"Decor"},
{id:"lamp",name:"Cozy Lamp",icon:"💡",price:80,cat:"Decor"},
{id:"rug",name:"Blue Rug",icon:"🔵",price:100,cat:"Furniture"},
{id:"chair",name:"Comfy Chair",icon:"🪑",price:120,cat:"Furniture"},
{id:"frog",name:"Little Frog",icon:"🐸",price:150,cat:"Pets"},
{id:"cat",name:"Black Cat",icon:"🐈‍⬛",price:180,cat:"Pets"},
{id:"brick",name:"Brick Wallpaper",icon:"🧱",price:100,cat:"Walls"},
{id:"stars",name:"Star Wallpaper",icon:"🌌",price:140,cat:"Walls"},
{id:"darkfloor",name:"Dark Wood Floor",icon:"🟫",price:100,cat:"Floors"},
{id:"checker",name:"Checker Floor",icon:"◼️",price:120,cat:"Floors"}
];
let s={screen:"setup",first:"",initial:"",coins:100,xp:0,streak:0,inventory:[],placed:[],wall:"plain",floor:"plain",q:null,answered:0,loot:null};
const app=document.querySelector("#app");

function render(){
 if(s.screen==="setup")return setup();
 app.innerHTML='<div class="shell"><div class="topbar"><div><b>🐾 Husky Habitats</b><div class="tiny">'+esc(s.first)+' '+esc(s.initial)+'.\'s Room</div></div><div class="stats"><span class="pill">🪙 '+s.coins+'</span><span class="pill">⭐ '+s.xp+' XP</span><span class="pill">🔥 '+s.streak+'</span></div></div><div id="room" class="room '+s.wall+' '+s.floor+'" aria-label="Your room"><div class="window"><div class="sky"></div></div>'+s.placed.map((p,i)=>{let x=catalog.find(a=>a.id===p.id);return '<button class="placed" data-place="'+i+'" style="left:'+p.x+'%;top:'+p.y+'%" aria-label="Move '+x.name+'"><span>'+x.icon+'</span></button>'}).join("")+'<div class="move-hint">Drag your things anywhere in the room ✨</div></div><div class="nav"><button class="primary" data-view="questions">📚 Answer Questions</button><button class="secondary" data-view="shop">🛍️ Shop</button><button class="secondary" data-view="inventory">🎒 Inventory</button></div><div id="panel" class="card panel"></div></div>';
 document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>panel(b.dataset.view));
 enableDragging();
 panel("questions");
}
function setup(){
 app.innerHTML='<div class="shell"><div class="card setup-card"><h1 class="title">🐾 Husky Habitats</h1><p class="sub">Build a room that is completely yours.</p><div class="row"><div class="field"><label>Your first name</label><input id="first" maxlength="18" placeholder="Your real first name"></div><div class="field"><label>Your last initial</label><input id="initial" maxlength="1" placeholder="R"></div></div><p class="tiny">Use your real first name and last initial so your teacher knows which habitat is yours.</p><button id="start" class="primary">Start My Habitat →</button><div id="setupmsg" class="feedback"></div></div></div>';
 document.querySelector("#start").onclick=()=>{let f=document.querySelector("#first").value.trim(),i=document.querySelector("#initial").value.trim();if(!f||!/^[A-Za-z]$/.test(i)){document.querySelector("#setupmsg").textContent="Please enter your real first name and one last initial.";return}s.first=f[0].toUpperCase()+f.slice(1).toLowerCase();s.initial=i.toUpperCase();s.screen="game";render()};
}
function panel(v){
 const p=document.querySelector("#panel");
 if(v==="questions"){if(!s.q)newQ();p.innerHTML='<h2>Earn Coins</h2><p>What does the Greek/Latin stem <b>'+s.q.stem+'</b> mean?</p><div class="answers">'+s.q.opts.map(o=>'<button class="answer" data-a="'+o+'">'+o+'</button>').join("")+'</div><div id="feedback" class="feedback"></div>'+ (s.loot?'<div class="loot">🎁 <b>Loot drop!</b> '+s.loot.icon+' '+s.loot.name+' was added to your inventory!</div>':"");document.querySelectorAll("[data-a]").forEach(b=>b.onclick=()=>answer(b.dataset.a));}
 if(v==="shop"){p.innerHTML='<h2>🛍️ Habitat Shop</h2><p class="tiny">Buy things once and keep them forever.</p><div class="shop-grid">'+catalog.map(x=>'<div class="shop-item"><div class="item-art">'+x.icon+'</div><b>'+x.name+'</b><div class="tiny">'+x.cat+'</div><div class="price">🪙 '+x.price+'</div><button class="secondary" data-buy="'+x.id+'" '+(s.inventory.includes(x.id)?"disabled":"")+'>'+(s.inventory.includes(x.id)?"Owned":"Buy")+'</button></div>').join("")+'</div>';document.querySelectorAll("[data-buy]").forEach(b=>b.onclick=()=>buy(b.dataset.buy));}
 if(v==="inventory"){let owned=catalog.filter(x=>s.inventory.includes(x.id));p.innerHTML='<h2>🎒 Inventory</h2><p class="tiny">Place an item, then drag it where you want it.</p>'+(owned.length?'<div class="shop-grid">'+owned.map(x=>'<div class="shop-item"><div class="item-art">'+x.icon+'</div><b>'+x.name+'</b><div class="tiny">'+x.cat+'</div><button class="secondary" data-use="'+x.id+'">'+useLabel(x)+'</button></div>').join("")+'</div>':'<p>Your inventory is empty. Answer questions and visit the shop!</p>');document.querySelectorAll("[data-use]").forEach(b=>b.onclick=()=>useItem(b.dataset.use));}
}
function enableDragging(){
 const room=document.querySelector("#room"); if(!room)return;
 room.querySelectorAll(".placed").forEach(el=>{
   el.addEventListener("pointerdown",e=>{
     e.preventDefault(); const idx=+el.dataset.place; el.setPointerCapture(e.pointerId); el.classList.add("dragging");
     const move=ev=>{const r=room.getBoundingClientRect();let x=((ev.clientX-r.left)/r.width)*100;let y=((ev.clientY-r.top)/r.height)*100;x=Math.max(3,Math.min(91,x));y=Math.max(4,Math.min(80,y));s.placed[idx].x=x;s.placed[idx].y=y;el.style.left=x+"%";el.style.top=y+"%";};
     const up=()=>{el.classList.remove("dragging");el.removeEventListener("pointermove",move);el.removeEventListener("pointerup",up);el.removeEventListener("pointercancel",up);};
     el.addEventListener("pointermove",move);el.addEventListener("pointerup",up);el.addEventListener("pointercancel",up);
   });
 });
}
function newQ(){let keys=Object.keys(stems),stem=keys[Math.floor(Math.random()*keys.length)],correct=stems[stem],wrong=[...new Set(Object.values(stems).filter(x=>x!==correct))].sort(()=>Math.random()-.5).slice(0,3);s.q={stem,correct,opts:[correct,...wrong].sort(()=>Math.random()-.5)};s.loot=null}
function answer(a){let f=document.querySelector("#feedback");if(a===s.q.correct){s.coins+=20;s.xp+=10;s.streak++;s.answered++;f.textContent="Correct! +20 coins 🪙";if(s.answered%5===0){let pool=catalog.filter(x=>!s.inventory.includes(x.id)&&["Decor","Pets"].includes(x.cat));if(pool.length){let item=pool[Math.floor(Math.random()*pool.length)];s.inventory.push(item.id);s.loot=item}}setTimeout(()=>{newQ();render()},700)}else{s.streak=0;f.textContent="Not quite — try again.";document.querySelector(".pill:last-child").textContent="🔥 0"}}
function buy(id){let x=catalog.find(a=>a.id===id);if(s.coins<x.price){alert("You need "+(x.price-s.coins)+" more coins.");return}s.coins-=x.price;s.inventory.push(id);render();panel("shop")}
function useLabel(x){if(x.cat==="Walls")return "Use Wallpaper";if(x.cat==="Floors")return "Use Flooring";return s.placed.some(p=>p.id===x.id)?"Remove from Room":"Place in Room"}
function useItem(id){let x=catalog.find(a=>a.id===id);if(x.cat==="Walls"){s.wall=id}else if(x.cat==="Floors"){s.floor=id}else{let found=s.placed.findIndex(p=>p.id===id);if(found>=0)s.placed.splice(found,1);else s.placed.push({id,x:42+(s.placed.length*8)%35,y:58-(s.placed.length%3)*10})}render();panel("inventory")}
function esc(x){return x.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
render();