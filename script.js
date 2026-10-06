const stems={hyper:"over",hypo:"under",phobia:"fear",pan:"all",mega:"big",pyro:"fire",circum:"around",cred:"believe",ject:"throw",med:"middle"};
const catalog=[
{id:"bed-white",name:"Basic White Bed",img:"images/items/Bed-basic-white-001.png",price:120,cat:"Furniture"},
{id:"couch-angel-cream",name:"Angel Cream Couch",img:"images/items/Couch-angel-cream-001.png",price:180,cat:"Furniture"},
{id:"couch-antique-cream",name:"Antique Cream Couch",img:"images/items/Couch-antique-cream-001.png",price:180,cat:"Furniture"},
{id:"couch-basic-brown",name:"Brown Couch",img:"images/items/Couch-basic-brown-001.png",price:140,cat:"Furniture"},
{id:"couch-goth-purple",name:"Goth Purple Couch",img:"images/items/Couch-goth-purple-001.png",price:180,cat:"Furniture"},
{id:"cow-skull",name:"Cow Skull",img:"images/items/Decor-cow-skull-001.png",price:100,cat:"Decor"},
{id:"crystal-ball",name:"Crystal Ball",img:"images/items/Decor-crystalball-001.png",price:110,cat:"Decor"},
{id:"dresser-angel-cream",name:"Angel Cream Dresser",img:"images/items/Dresser-angel-cream-001.png",price:160,cat:"Furniture"},
{id:"dresser-basic-cream",name:"Cream Dresser",img:"images/items/Dresser-basic-cream-001.png",price:130,cat:"Furniture"},
{id:"dresser-basic-dark-brown",name:"Dark Brown Dresser",img:"images/items/Dresser-basic-dark-brown-001.png",price:130,cat:"Furniture"},
{id:"dresser-floral-white",name:"Floral White Dresser",img:"images/items/Dresser-floral-white-001.png",price:160,cat:"Furniture"},
{id:"table-angel-cream",name:"Angel Cream Table",img:"images/items/Table-angel-cream-001.png",price:140,cat:"Furniture"},
{id:"table-goth-purple",name:"Goth Purple Table",img:"images/items/Table-goth-purple-001.png",price:140,cat:"Furniture"},
{id:"couch-blue",name:"Blue Couch",img:"images/items/Couch-basic-blue-001.png",price:140,cat:"Furniture"},
{id:"couch-green",name:"Green Couch",img:"images/items/Couch-basic-green-001.png",price:140,cat:"Furniture"},
{id:"couch-red",name:"Red Couch",img:"images/items/Couch-basic-red-001.png",price:140,cat:"Furniture"},
{id:"couch-yellow",name:"Yellow Couch",img:"images/items/Couch-basic-yellow-001.png",price:140,cat:"Furniture"},
{id:"jackolantern",name:"Jack-o'-Lantern",img:"images/items/Decor-jackolantern-001.png",price:90,cat:"Decor"},
{id:"moon-stars",name:"Moon & Stars",img:"images/items/Decor-moon-and-stars-001.png",price:100,cat:"Decor"},
{id:"string-lights",name:"String Lights",img:"images/items/Lights-string-001.png",price:110,cat:"Decor"},
{id:"squirrel",name:"Squirrel",img:"images/items/Pet-squirrel-001.png",price:170,cat:"Pets"},
{id:"window-stars",name:"Star Porthole Window",img:"images/items/Window-porthole-stars-001.png",price:150,cat:"Windows"},
{id:"window-sun",name:"Sunny Window",img:"images/items/Window-sun-001.png",price:150,cat:"Windows"},
{id:"brick",name:"Brick Wallpaper",icon:"🧱",price:100,cat:"Walls"},
{id:"stars",name:"Star Wallpaper",icon:"🌌",price:140,cat:"Walls"},
{id:"darkfloor",name:"Dark Wood Floor",icon:"🟫",price:100,cat:"Floors"},
{id:"checker",name:"Checker Floor",icon:"◼️",price:120,cat:"Floors"}
];
let s={screen:"setup",first:"",initial:"",coins:100,xp:0,streak:0,inventory:[],placed:[],wall:"plain",floor:"plain",q:null,answered:0,loot:null};
const app=document.querySelector("#app");

function render(){
 if(s.screen==="setup")return setup();
 app.innerHTML='<div class="shell"><div class="topbar"><div><b>🐾 Husky Habitats</b><div class="tiny">'+esc(s.first)+' '+esc(s.initial)+'.\'s Room</div></div><div class="stats"><span class="pill">🪙 '+s.coins+'</span><span class="pill">⭐ '+s.xp+' XP</span><span class="pill">🔥 '+s.streak+'</span></div></div><div id="room" class="room '+s.wall+' '+s.floor+'" aria-label="Your room">'+s.placed.map((p,i)=>{let x=catalog.find(a=>a.id===p.id);return '<button class="placed" data-place="'+i+'" style="left:'+p.x+'%;top:'+p.y+'%" aria-label="Move '+x.name+'">'+itemVisual(x,"room")+'</button>'}).join("")+'<div class="move-hint">Drag your things anywhere in the room ✨</div></div><div class="nav"><button class="primary" data-view="questions">📚 Answer Questions</button><button class="secondary" data-view="shop">🛍️ Shop</button><button class="secondary" data-view="inventory">🎒 Inventory</button></div><div id="panel" class="card panel"></div></div>';
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
 if(v==="questions"){if(!s.q)newQ();p.innerHTML='<h2>Earn Coins</h2><p>What does the Greek/Latin stem <b>'+s.q.stem+'</b> mean?</p><div class="answers">'+s.q.opts.map(o=>'<button class="answer" data-a="'+o+'">'+o+'</button>').join("")+'</div><div id="feedback" class="feedback"></div>'+ (s.loot?'<div class="loot">🎁 <b>Loot drop!</b> '+itemVisual(s.loot,"loot")+' <span>'+s.loot.name+' was added to your inventory!</span></div>':"");document.querySelectorAll("[data-a]").forEach(b=>b.onclick=()=>answer(b.dataset.a));}
 if(v==="shop"){shopPanel(p,"All");}
 if(v==="inventory"){let owned=catalog.filter(x=>s.inventory.includes(x.id));p.innerHTML='<h2>🎒 Inventory</h2><p class="tiny">Place an item, then drag it where you want it.</p>'+(owned.length?'<div class="shop-grid">'+owned.map(x=>'<div class="shop-item"><div class="item-art">'+itemVisual(x,"shop")+'</div><b>'+x.name+'</b><div class="tiny">'+x.cat+'</div><button class="secondary" data-use="'+x.id+'">'+useLabel(x)+'</button></div>').join("")+'</div>':'<p>Your inventory is empty. Answer questions and visit the shop!</p>');document.querySelectorAll("[data-use]").forEach(b=>b.onclick=()=>useItem(b.dataset.use));}
}
function shopPanel(p,active){
 const cats=["All","Furniture","Decor","Pets","Windows","Walls","Floors"];
 const items=active==="All"?catalog:catalog.filter(x=>x.cat===active);
 p.innerHTML='<h2>🛍️ Habitat Shop</h2><p class="tiny">Buy things once and keep them forever.</p><div class="shop-tabs">'+cats.map(c=>'<button class="shop-tab '+(c===active?'active':'')+'" data-cat="'+c+'">'+c+'</button>').join("")+'</div><div class="shop-grid">'+items.map(x=>'<div class="shop-item"><div class="item-art">'+itemVisual(x,"shop")+'</div><b>'+x.name+'</b><div class="tiny">'+x.cat+'</div><div class="price">🪙 '+x.price+'</div><button class="secondary" data-buy="'+x.id+'" '+(s.inventory.includes(x.id)?"disabled":"")+'>'+(s.inventory.includes(x.id)?"Owned":"Buy")+'</button></div>').join("")+'</div>';
 p.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>shopPanel(p,b.dataset.cat));
 p.querySelectorAll("[data-buy]").forEach(b=>b.onclick=()=>buy(b.dataset.buy));
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
function itemVisual(x,where){
 if(x.img){
   const cls=where==="room"?"room-item-image":"item-image";
   return '<img class="'+cls+(where==="room"&&x.cat==="Pets"?" pet-animated":"")+'" src="'+x.img+'" alt="">';
 }
 return '<span class="fallback-icon">'+(x.icon||"")+'</span>';
}
function newQ(){let keys=Object.keys(stems),stem=keys[Math.floor(Math.random()*keys.length)],correct=stems[stem],wrong=[...new Set(Object.values(stems).filter(x=>x!==correct))].sort(()=>Math.random()-.5).slice(0,3);s.q={stem,correct,opts:[correct,...wrong].sort(()=>Math.random()-.5)};s.loot=null}
function answer(a){let f=document.querySelector("#feedback");document.querySelectorAll("[data-a]").forEach(b=>b.disabled=true);if(a===s.q.correct){s.coins+=20;s.xp+=10;s.streak++;s.answered++;f.textContent="Correct! +20 coins 🪙";const streakRewards=[10,25,50,75,100];if(streakRewards.includes(s.streak)){let pool=catalog.filter(x=>!s.inventory.includes(x.id)&&!["Walls","Floors"].includes(x.cat));if(pool.length){let item=pool[Math.floor(Math.random()*pool.length)];s.inventory.push(item.id);s.loot=item;f.textContent="🔥 "+s.streak+"-answer streak! You earned "+item.name+"!"}}setTimeout(()=>{newQ();render()},1100)}else{s.streak=0;s.answered++;f.textContent="Not quite. "+s.q.stem+" means "+s.q.correct+".";document.querySelector(".pill:last-child").textContent="🔥 0";setTimeout(()=>{newQ();render()},1400)}}
function buy(id){let x=catalog.find(a=>a.id===id);if(s.coins<x.price){alert("You need "+(x.price-s.coins)+" more coins.");return}s.coins-=x.price;s.inventory.push(id);render();panel("shop")}
function useLabel(x){if(x.cat==="Walls")return "Use Wallpaper";if(x.cat==="Floors")return "Use Flooring";return s.placed.some(p=>p.id===x.id)?"Remove from Room":"Place in Room"}
function useItem(id){let x=catalog.find(a=>a.id===id);if(x.cat==="Walls"){s.wall=id}else if(x.cat==="Floors"){s.floor=id}else{let found=s.placed.findIndex(p=>p.id===id);if(found>=0)s.placed.splice(found,1);else s.placed.push({id,x:42+(s.placed.length*8)%35,y:58-(s.placed.length%3)*10})}render();panel("inventory")}
function esc(x){return x.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
render();