const stems={hyper:"over",hypo:"under",phobia:"fear",pan:"all",mega:"big",pyro:"fire",circum:"around",cred:"believe",ject:"throw",med:"middle"};
const catalog=[
{id:"bed-white",name:"Basic White Bed",img:"images/items/Bed-basic-white-001.png",price:120,cat:"Furniture"},
{id:"bed-angel-cream",name:"Angel Cream Bed",img:"images/items/Bed-angel-cream-001.png",price:190,cat:"Furniture"},
{id:"chair-angel-cream",name:"Angel Cream Chair",img:"images/items/Chair-angel-cream-001.png",price:120,cat:"Furniture",turnable:true},
{id:"chair-basic-red",name:"Red Chair",img:"images/items/Chair-basic-red-001.png",price:90,cat:"Furniture",turnable:true},
{id:"chair-basic-yellow",name:"Yellow Chair",img:"images/items/Chair-basic-yellow-001.png",price:90,cat:"Furniture",turnable:true},
{id:"chair-deco-green",name:"Deco Green Chair",img:"images/items/Chair-deco-green-001.png",price:130,cat:"Furniture",turnable:true},
{id:"chair-deco-red",name:"Deco Red Chair",img:"images/items/Chair-deco-red-001.png",price:130,cat:"Furniture",turnable:true},
{id:"chair-geode-purple",name:"Purple Geode Chair",img:"images/items/Chair-geode-purple-001.png",price:150,cat:"Furniture",turnable:true},
{id:"chair-goth-black",name:"Black Goth Chair",img:"images/items/Chair-goth-black-001.png",price:150,cat:"Furniture",turnable:true},
{id:"chair-goth-purple",name:"Purple Goth Chair",img:"images/items/Chair-goth-purple-001.png",price:150,cat:"Furniture",turnable:true},
{id:"candles-sunset",name:"Sunset Candles",img:"images/items/Decor-candles-sunset-001.png",price:100,cat:"Decor"},
{id:"floral-vines",name:"Hanging Floral Vines",img:"images/items/Decor-floral-hanging-vines-001.png",price:120,cat:"Decor"},
{id:"floral-terrarium",name:"Floral Terrarium",img:"images/items/Decor-floral-terrarium-001.png",price:110,cat:"Decor"},
{id:"geode-purple",name:"Purple Geode",img:"images/items/Decor-geode-purple-001.png",price:120,cat:"Decor"},
{id:"endtable-geode",name:"Geode End Table",img:"images/items/EndTable-geode-001.png",price:140,cat:"Furniture"},
{id:"parrot",name:"Parrot",img:"images/items/Pet-parrot-001.png",price:180,cat:"Pets"},
{id:"table-geode-blue",name:"Blue Geode Table",img:"images/items/Table-geode-blue-001.png",price:160,cat:"Furniture"},
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
{id:"wall-blue-stripe",name:"Blue Stripe Wallpaper",img:"images/items/Wallpaper-blue-stripe-001.png",price:100,cat:"Walls"},
{id:"wall-green-stripe",name:"Green Stripe Wallpaper",img:"images/items/Wallpaper-green-stripe-001.png",price:100,cat:"Walls"},
{id:"wall-notebook",name:"Notebook Wallpaper",img:"images/items/Wallpaper-notebook-001.png",price:120,cat:"Walls"},
{id:"wall-orange-stripe",name:"Orange Stripe Wallpaper",img:"images/items/Wallpaper-orange-stripe-001.png",price:100,cat:"Walls"},
{id:"wall-purple-stripe",name:"Purple Stripe Wallpaper",img:"images/items/Wallpaper-purple-stripe-001.png",price:100,cat:"Walls"},
{id:"wall-red-stripe",name:"Red Stripe Wallpaper",img:"images/items/Wallpaper-red-stripe-001.png",price:100,cat:"Walls"},
{id:"wall-starry-night",name:"Starry Night Wallpaper",img:"images/items/Wallpaper-starry-night-001.png",price:140,cat:"Walls"},
{id:"wall-yellow-stripe",name:"Yellow Stripe Wallpaper",img:"images/items/Wallpaper-yellow-stripe-001.png",price:100,cat:"Walls"},
{id:"floor-carpet-red",name:"Red Carpet",img:"images/items/Floor-carpet-red-001.png",price:100,cat:"Floors"},
{id:"floor-marble-tiles",name:"Marble Tile Floor",img:"images/items/Floor-marble-tiles-001.png",price:140,cat:"Floors"},
{id:"floor-stone-tiles",name:"Stone Tile Floor",img:"images/items/Floor-stone-tiles-001.png",price:130,cat:"Floors"},
{id:"floor-tiles-blue",name:"Blue Tile Floor",img:"images/items/Floor-tiles-blue-001.png",price:100,cat:"Floors"},
{id:"floor-tiles-green",name:"Green Tile Floor",img:"images/items/Floor-tiles-green-001.png",price:100,cat:"Floors"},
{id:"floor-tiles-orange",name:"Orange Tile Floor",img:"images/items/Floor-tiles-orange-001.png",price:100,cat:"Floors"},
{id:"floor-tiles-pink",name:"Pink Tile Floor",img:"images/items/Floor-tiles-pink-001.png",price:100,cat:"Floors"},
{id:"floor-tiles-primary",name:"Primary Tile Floor",img:"images/items/Floor-tiles-primary-001.png",price:110,cat:"Floors"},
{id:"floor-tiles-purple",name:"Purple Tile Floor",img:"images/items/Floor-tiles-purple-001.png",price:100,cat:"Floors"},
{id:"floor-tiles-purple-pink",name:"Purple & Pink Tile Floor",img:"images/items/Floor-tiles-purple-pink-001.png",price:110,cat:"Floors"},
{id:"floor-tiles-red",name:"Red Tile Floor",img:"images/items/Floor-tiles-red-001.png",price:100,cat:"Floors"},
{id:"floor-tiles-white",name:"White Tile Floor",img:"images/items/Floor-tiles-white-001.png",price:100,cat:"Floors"},
{id:"floor-tiles-yellow",name:"Yellow Tile Floor",img:"images/items/Floor-tiles-yellow-001.png",price:100,cat:"Floors"}
];

const collections=[
{name:"Basic Collection",emoji:"🛋️",items:["bed-white","chair-basic-red","chair-basic-yellow","couch-blue","couch-basic-brown","couch-green","couch-red","couch-yellow","dresser-basic-cream","dresser-basic-dark-brown"]},
{name:"Angel Collection",emoji:"☁️",items:["bed-angel-cream","chair-angel-cream","couch-angel-cream","dresser-angel-cream","table-angel-cream"]},
{name:"Goth Collection",emoji:"🖤",items:["chair-goth-black","chair-goth-purple","couch-goth-purple","table-goth-purple"]},
{name:"Geode Collection",emoji:"💎",items:["chair-geode-purple","geode-purple","endtable-geode","table-geode-blue"]},
{name:"Floral Collection",emoji:"🌸",items:["floral-vines","floral-terrarium","dresser-floral-white"]},
{name:"Deco Collection",emoji:"✨",items:["chair-deco-green","chair-deco-red"]},
{name:"Antique Collection",emoji:"🕰️",items:["couch-antique-cream"]}
];
let s={screen:"setup",first:"",initial:"",coins:100,xp:0,streak:0,inventory:[],placed:[],wall:"plain",floor:"plain",q:null,answered:0,loot:null};
const app=document.querySelector("#app");
const SAVE_KEY="huskyHabitatsSaveV1";
function saveGame(){
  try{
    localStorage.setItem(SAVE_KEY,JSON.stringify(s));
    showSaveStatus("Saved! 💾");
  }catch(e){
    showSaveStatus("Could not save on this browser.");
  }
}
function loadGame(){
  try{
    const raw=localStorage.getItem(SAVE_KEY);
    if(!raw)return false;
    const saved=JSON.parse(raw);
    s={...s,...saved,screen:"game"};
    render();
    showSaveStatus("Loaded saved habitat.");
    return true;
  }catch(e){return false}
}
function showSaveStatus(msg){
  let el=document.querySelector("#saveStatus");
  if(!el)return;
  el.textContent=msg;
  clearTimeout(showSaveStatus.t);
  showSaveStatus.t=setTimeout(()=>{if(el)el.textContent=""},1800);
}

function render(){
 if(s.screen==="setup")return setup();
 let wallItem=catalog.find(x=>x.id===s.wall),floorItem=catalog.find(x=>x.id===s.floor);
 app.innerHTML='<div class="shell"><div class="topbar"><div><b>🐾 Husky Habitats</b><div class="tiny">'+esc(s.first)+' '+esc(s.initial)+'.\'s Room</div></div><div class="stats"><span class="pill">🪙 '+s.coins+'</span><span class="pill">⭐ '+s.xp+' XP</span><span class="pill">🔥 '+s.streak+'</span><button id="saveBtn" class="save-btn">💾 Save</button><span id="saveStatus" class="save-status" aria-live="polite"></span></div></div><div id="room" class="room" aria-label="Your room"><div class="wall-surface"></div><div class="floor-surface"></div><div class="baseboard"></div>'+s.placed.map((p,i)=>{let x=catalog.find(a=>a.id===p.id);let flip=p.dir==="right"?" flipped":"";return '<button class="placed'+(x.turnable?' turnable':'')+'" data-place="'+i+'" style="left:'+p.x+'%;top:'+p.y+'%" aria-label="Move '+x.name+(x.turnable?'. Double-click to turn.':'')+'">'+itemVisual(x,"room",flip)+'</button>'}).join("")+'<div class="move-hint">Drag your things anywhere in the room ✨</div></div><div class="nav"><button class="primary" data-view="questions">📚 Answer Questions</button><button class="secondary" data-view="shop">🛍️ Shop</button><button class="secondary" data-view="inventory">🎒 Inventory</button><button class="secondary" data-view="collections">📖 Collections</button></div><div id="panel" class="card panel"></div></div>';
 document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>panel(b.dataset.view));
 const saveBtn=document.querySelector("#saveBtn"); if(saveBtn)saveBtn.onclick=saveGame;
 const wallSurface=document.querySelector(".wall-surface");
 const floorSurface=document.querySelector(".floor-surface");
 if(wallSurface) wallSurface.style.backgroundImage=wallItem&&wallItem.img?'url("'+wallItem.img+'")':"none";
 if(floorSurface) floorSurface.style.backgroundImage=floorItem&&floorItem.img?'url("'+floorItem.img+'")':"none";
 enableDragging();
 document.querySelectorAll(".placed.turnable").forEach(b=>b.addEventListener("dblclick",e=>{e.preventDefault();e.stopPropagation();turnItem(+b.dataset.place)}));
 panel("questions");
}
function setup(){
 app.innerHTML='<div class="shell"><div class="card setup-card"><h1 class="title">🐾 Husky Habitats</h1><p class="sub">Build a room that is completely yours.</p><div class="row"><div class="field"><label>Your first name</label><input id="first" maxlength="18" placeholder="Your real first name"></div><div class="field"><label>Your last initial</label><input id="initial" maxlength="1" placeholder="R"></div></div><p class="tiny">Use your real first name and last initial so your teacher knows which habitat is yours.</p><div class="setup-actions"><button id="start" class="primary">Start My Habitat →</button><button id="continueSave" class="secondary" style="display:none">💾 Continue Saved Habitat</button></div><div id="setupmsg" class="feedback"></div></div></div>';
 const savedButton=document.querySelector("#continueSave");
 try{if(localStorage.getItem(SAVE_KEY))savedButton.style.display=""}catch(e){}
 savedButton.onclick=()=>loadGame();
 document.querySelector("#start").onclick=()=>{let f=document.querySelector("#first").value.trim(),i=document.querySelector("#initial").value.trim();if(!f||!/^[A-Za-z]$/.test(i)){document.querySelector("#setupmsg").textContent="Please enter your real first name and one last initial.";return}s.first=f[0].toUpperCase()+f.slice(1).toLowerCase();s.initial=i.toUpperCase();s.screen="game";render()};
}
function ownedCount(id){return s.inventory.filter(x=>x===id).length}
function placedCount(id){return s.placed.filter(x=>x.id===id).length}
function panel(v){
 const p=document.querySelector("#panel");
 if(v==="questions"){if(!s.q)newQ();p.innerHTML='<h2>Earn Coins</h2><p>What does the Greek/Latin stem <b>'+s.q.stem+'</b> mean?</p><div class="answers">'+s.q.opts.map(o=>'<button class="answer" data-a="'+o+'">'+o+'</button>').join("")+'</div><div id="feedback" class="feedback"></div>'+ (s.loot?'<div class="loot">🎁 <b>Loot drop!</b> '+itemVisual(s.loot,"loot")+' <span>'+s.loot.name+' was added to your inventory!</span></div>':"");document.querySelectorAll("[data-a]").forEach(b=>b.onclick=()=>answer(b.dataset.a));}
 if(v==="shop"){shopPanel(p,"All");}
 if(v==="collections"){collectionsPanel(p);}
 if(v==="inventory"){let owned=catalog.filter(x=>ownedCount(x.id)>0);p.innerHTML='<h2>🎒 Inventory</h2><p class="tiny">Place as many copies as you own, then drag them where you want them.</p>'+(owned.length?'<div class="shop-grid">'+owned.map(x=>'<div class="shop-item"><div class="item-art">'+itemVisual(x,"shop")+'</div><b>'+x.name+'</b><div class="tiny">'+x.cat+' • Owned: '+ownedCount(x.id)+'</div><div class="inventory-actions"><button class="secondary" data-use="'+x.id+'" '+(((!["Walls","Floors"].includes(x.cat)&&placedCount(x.id)>=ownedCount(x.id))||(x.cat==="Walls"&&s.wall===x.id)||(x.cat==="Floors"&&s.floor===x.id))?"disabled":"")+'>'+useLabel(x)+'</button>'+((!["Walls","Floors"].includes(x.cat)&&placedCount(x.id)>0)?'<button class="secondary" data-remove="'+x.id+'">Remove One</button>':"")+'</div></div>').join("")+'</div>':'<p>Your inventory is empty. Answer questions and visit the shop!</p>');document.querySelectorAll("[data-use]").forEach(b=>b.onclick=()=>useItem(b.dataset.use));document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>removeOne(b.dataset.remove));}
}
function collectionsPanel(p){
 p.innerHTML='<h2>📖 Collections</h2><p class="tiny">Own at least one item to check it off. Mix and match however you want in your room.</p><div class="collections-grid">'+collections.map(col=>{let found=col.items.filter(id=>ownedCount(id)>0).length;return '<section class="collection-card"><div class="collection-head"><div><span class="collection-emoji">'+col.emoji+'</span><b>'+col.name+'</b></div><span class="collection-progress">'+found+'/'+col.items.length+' owned</span></div><div class="collection-items">'+col.items.map(id=>{let x=catalog.find(a=>a.id===id);if(!x)return "";let owned=ownedCount(id)>0;return '<div class="collection-item '+(owned?'owned':'')+'"><div class="collection-check">'+(owned?'✓':'○')+'</div><div class="collection-thumb">'+itemVisual(x,"shop")+'</div><div class="collection-name">'+x.name+'</div></div>'}).join("")+'</div></section>'}).join("")+'</div>';
}
function shopPanel(p,active){
 const cats=["All","Furniture","Decor","Pets","Windows","Walls","Floors"];
 const items=active==="All"?catalog:catalog.filter(x=>x.cat===active);
 p.innerHTML='<h2>🛍️ Habitat Shop</h2><p class="tiny">Furniture, decor, pets, and windows can be bought more than once.</p><div class="shop-tabs">'+cats.map(c=>'<button class="shop-tab '+(c===active?'active':'')+'" data-cat="'+c+'">'+c+'</button>').join("")+'</div><div class="shop-grid">'+items.map(x=>{let count=ownedCount(x.id),oneOnly=["Walls","Floors"].includes(x.cat);return '<div class="shop-item"><div class="item-art">'+itemVisual(x,"shop")+'</div><b>'+x.name+'</b><div class="tiny">'+x.cat+(count?' • Owned: '+count:'')+'</div><div class="price">🪙 '+x.price+'</div><button class="secondary" data-buy="'+x.id+'" '+(oneOnly&&count?"disabled":"")+'>'+(oneOnly&&count?"Owned":count?"Buy Another":"Buy")+'</button></div>'}).join("")+'</div>';
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
function itemVisual(x,where,extra=""){
 if(x.img){
   const cls=where==="room"?"room-item-image":"item-image";
   return '<img class="'+cls+(where==="room"&&x.cat==="Pets"?" pet-animated":"")+extra+'" src="'+x.img+'" alt="">';
 }
 return '<span class="fallback-icon">'+(x.icon||"")+'</span>';
}
function newQ(){let keys=Object.keys(stems),stem=keys[Math.floor(Math.random()*keys.length)],correct=stems[stem],wrong=[...new Set(Object.values(stems).filter(x=>x!==correct))].sort(()=>Math.random()-.5).slice(0,3);s.q={stem,correct,opts:[correct,...wrong].sort(()=>Math.random()-.5)};s.loot=null}
function answer(a){let f=document.querySelector("#feedback");document.querySelectorAll("[data-a]").forEach(b=>b.disabled=true);if(a===s.q.correct){s.coins+=20;s.xp+=10;s.streak++;s.answered++;f.textContent="Correct! +20 coins 🪙";if(s.streak>0&&s.streak%25===0){let pool=catalog.filter(x=>!s.inventory.includes(x.id)&&!["Walls","Floors"].includes(x.cat));if(pool.length){let item=pool[Math.floor(Math.random()*pool.length)];s.inventory.push(item.id);s.loot=item;f.textContent="🔥 "+s.streak+"-answer streak! You earned "+item.name+"!"}}setTimeout(()=>{newQ();render()},1100)}else{s.streak=0;s.answered++;f.textContent="Not quite. "+s.q.stem+" means "+s.q.correct+".";document.querySelector(".pill:last-child").textContent="🔥 0";setTimeout(()=>{newQ();render()},1400)}}
function buy(id){let x=catalog.find(a=>a.id===id);if(s.coins<x.price){alert("You need "+(x.price-s.coins)+" more coins.");return}s.coins-=x.price;s.inventory.push(id);render();panel("shop")}
function useLabel(x){if(x.cat==="Walls")return s.wall===x.id?"In Use":"Use Wallpaper";if(x.cat==="Floors")return s.floor===x.id?"In Use":"Use Flooring";let available=ownedCount(x.id)-placedCount(x.id);return available>0?(placedCount(x.id)>0?"Place Another":"Place in Room"):"All Placed"}
function useItem(id){let x=catalog.find(a=>a.id===id);if(x.cat==="Walls"){s.wall=id}else if(x.cat==="Floors"){s.floor=id}else if(placedCount(id)<ownedCount(id)){s.placed.push({id,x:42+(s.placed.length*8)%35,y:58-(s.placed.length%3)*10,dir:"left"})}render();panel("inventory")}
function removeOne(id){let found=s.placed.map(p=>p.id).lastIndexOf(id);if(found>=0)s.placed.splice(found,1);render();panel("inventory")}
function turnItem(index){if(!s.placed[index])return;s.placed[index].dir=s.placed[index].dir==="right"?"left":"right";render();}
function esc(x){return x.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
render();