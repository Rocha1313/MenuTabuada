const title = document.getElementById("tit");
const links = document.getElementsByTagName("a");

for(let i = 0; i < links.length; i++){
  console.log(links[i].innerHTML, title.innerHTML);
  if(links[i].innerHTML === title.innerHTML){
    links[i].style.backgroundColor = "red";
    links[i].style.color = "green";
  }
}