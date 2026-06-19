async function sendMessage(){

const input=document.getElementById("user-input");
const chat=document.getElementById("chat-box");

const message=input.value.trim();

if(!message) return;

chat.innerHTML += `
<div class="message user">
${message}
</div>
`;

input.value="";

chat.scrollTop=chat.scrollHeight;

chat.innerHTML += `
<div class="message ai" id="typing">
<div class="typing">
<span></span>
<span></span>
<span></span>
</div>
</div>
`;

chat.scrollTop=chat.scrollHeight;

const response=await fetch('/chat',{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify({
message:message
})
});

const data=await response.json();

document.getElementById("typing").remove();

chat.innerHTML += `
<div class="message ai">
${data.reply}
</div>
`;

chat.scrollTop=chat.scrollHeight;
}

document
.getElementById("user-input")
.addEventListener("keypress",function(e){

if(e.key==="Enter"){
sendMessage();
}
});
