document.addEventListener("DOMContentLoaded",function(e){const t=document.getElementById("alphabet"),o=document.getElementById("word"),n=document.getElementById("messages"),a=document.getElementById("winsTally");let s,l;const u=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];let r=[];for(let e=0;e<u.length;e++)r.push(`<div class="alphaBtn" id="${u[e]}">${u[e]}</div>`);t.innerHTML=r.join("");const d=["pantaloons","knickers","bottoms","slacks","jeans","culottes","overalls","shorts","leggings","jeggings","cargo","britches","trousers","burmudas","bloomers","underpants","chaps","longjohns","corduroys","denims","drawers","dungarees","jodhpurs","boxers","capri","smarty pants","sassy pants"],i=["Really? You're battling me again?","It's cute when you try.","You're the reason the stick-figure population has plummeted."],c=["Confident enough to try again?","You were lucky.","Whoo hoo hoo. Don't you think you're special?"],y=["Noice.","Got lucky.","Ooh, aren't you a clever one?","I was going to suggest that.","Are you cheating?","Whoo hoo!","Read my mind!","You deserve a cookie!"],m=["Really?","Not that letter.","Wrong!","Nerp","Aaaah. No.","No way!","I'll never hang!"];let g,h,p,f=[],x=[],b=0,k=0;function B(){wordBank=d;const e=C(wordBank);h=e.split(""),function(e){const t=e.split("");p=t.map(e=>!1===/^[a-z]+$/i.test(e)?e:"_"),o.textContent=p.join(" ")}(e),n.textContent="Type a letter."}function C(e){return e[Math.floor(Math.random()*e.length)]}function I(e){x=[],f=[],k=0,n.textContent=C(e),a.textContent=b,setTimeout(()=>{for(let e=0;e<7;e++)(s=document.getElementById(`body-${e+1}`)).style.opacity="0";for(let e=0;e<u.length;e++)(l=document.getElementById(`${u[e]}`)).style.color="rgba(234, 230, 229, 1)";B()},2e3)}document.onkeyup=function(e){B(),document.onkeyup=function(e){g=e.key.toLowerCase(),!1===/^[a-z]+$/i.test(g)?n.textContent="That is not a letter. Please choose a letter.":f.indexOf(g)>-1||x.indexOf(g)>-1?n.textContent="You've guessed that letter already. Try again.":-1===h.indexOf(g)?function(e){document.querySelector('audio[data-name="doooh"]').play(),f.push(e);for(let e=0;e<f.length;e++)(s=document.getElementById(`body-${e+1}`)).style.opacity="1",(l=document.getElementById(`${f[e]}`)).style.color="rgba(236, 11, 67, 1)";n.textContent=C(m),k+=1,function(){if(k>=6){const e=document.getElementById("body-7");e.style.opacity="1",n.textContent="Toodle-loos. You lose",setTimeout(()=>{I(i)},1500)}}()}(g):function(e){document.querySelector('audio[data-name="teehee"]').play(),x.push(e),h.forEach((e,t)=>{g===e&&(p[t]=` ${e} `,o.innerHTML=p.join(""),-1===p.indexOf(" _ ")&&(n.textContent=`You won, hun bun. (${b} times)`,b++,setTimeout(()=>{I(c)},1500)))}),n.textContent=C(y);for(let e=0;e<x.length;e++)(l=document.getElementById(`${x[e]}`)).style.color="rgba(234, 230, 229, 0.2)"}(g)}}});