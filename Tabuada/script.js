const lines = document.getElementsByTagName("tr");

for(let i = 0; i < lines.length; i++){
    if(i % 2 === 0){
        lines[i].style.backgroundColor = "#212529";
        continue;
    }
    lines[i].style.backgroundColor = "#495057";
}