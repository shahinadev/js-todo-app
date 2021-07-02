const tdoInput = document.getElementById("tdo");
const addBtn = document.getElementById("add_btn");
const containerDiv = document.getElementById("todMain");
function createToDoItem(text) {
  if (text.length > 0) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const div = document.createElement("div");
    const btnRe = document.createElement("button");
    const btnDel = document.createElement("button");
    li.classList.add("todoItem");
    div.classList.add("subThing");
    btnRe.setAttribute("id", "re");
    btnDel.setAttribute("id", "del");
    span.textContent = text;
    li.appendChild(span);
    btnRe.textContent = "Replace";
    btnDel.textContent = "Delete";
    div.appendChild(btnRe);
    div.appendChild(btnDel);
    li.appendChild(div);
    containerDiv.appendChild(li);
    activeList();
    
  } else {
    console.log("some data need");
  }
}
tdoInput.addEventListener("keyup", function (e) {
  e.preventDefault();
  if (e.key === "Enter") {
    if (tdoInput.value == "") {
      tdoInput.style.border = "2px solid red";
      tdoInput.placeholder = "filed is required!!!";
      return false;
    } else {
      createToDoItem(tdoInput.value);
      tdoInput.value = "";
      soundPlay("sound/bell.mp3");
      tdoInput.removeAttribute("style");
      tdoInput.placeholder = "enter something...";
     
    }
  }

 
});

addBtn.addEventListener("click",()=>{
        if (tdoInput.value == "") {
      tdoInput.style.border = "2px solid red";
      tdoInput.placeholder = "filed is required!!!";
      return false;
    } else {
      createToDoItem(tdoInput.value);
      tdoInput.value = "";
      soundPlay("sound/bell.mp3");
      tdoInput.removeAttribute("style");
      tdoInput.placeholder = "enter something..."
    }
})

function soundPlay(src) {
  const audio = new Audio(src);
  audio.currentTime = "";
  audio.play();
  setTimeout(() => {
    audio.pause();
  }, 2500);
}

function activeList() {
  const lists = document.querySelectorAll("li.todoItem");
  lists.forEach((list) => {
    list.addEventListener("click", function () {
      this.style.background = "green";
      this.querySelector("span").style.color = "#ffff";
    });
  });

  (function(){
    lists.forEach((li)=>{
      const dels = li.querySelectorAll("#del")
      dels.forEach(del=>{
        del.addEventListener("click",function(){
          this.parentElement.parentElement.remove()
        })
      })
    })
  }())


    lists.forEach((li)=>{
      const res = li.querySelectorAll("#re")
      res.forEach(re=>{
       let status = false
        re.addEventListener("click",function(){
          const span = this.parentElement.parentElement.querySelector("span")
           if(status === false){
            span.setAttribute("contenteditable","true");
            span.focus()
            span.classList.add("input")
            status = true
           }else if(status === true){
            span.setAttribute("contenteditable","false");
            span.classList.remove("input")
            status = false
           }
          if(span.getAttribute("contenteditable") == "true"){
            span.addEventListener("keypress",function(e){
              if(e.key === "Enter"){
                span.setAttribute("contenteditable","false");
                span.classList.remove("input")
              }
            })
          }
        })
      })
    })

}


//local storage functionality will be added.

function localStorage( ) {
  //code goes here...
}
