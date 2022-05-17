let NOME_PARA_PROCURAR = window.prompt("Nome a ser procurado:");
let externalHeight = 0;
let notified = [];
function searchFollower(name){
    let menu = document.querySelector("div[class='isgrP']");
    let followers = menu.children[0].children[0].children;
    //for loop rodando a children do menu pra ver se está ali
    for(i=0;i<followers.length;i++){
        
        if(followers[i].innerText.match(new RegExp(name,"gim"))){
            if(notified.toString().match(followers[i].innerText.split("\n")[0])){continue;} else {console.log(`@ do perfil:\t@${followers[i].innerText.split("\n")[0]}\nNome do perfil:\t${followers[i].innerText.split("\n")[1]}`);notified.push("@"+followers[i].innerText.split("\n")[0])}
            
        } else {
            menu.scrollTo(0,menu.scrollHeight);
        }
    }
    if(externalHeight==menu.scrollHeight){
        console.log("scrollHeight anterior equivale ao scrollHeight atual. Assumo que chegamos no fim da lista de seguidores.\nObs: isso pode dar muito ruim caso o usuário tenha uma conexão lenta, vou bolar outra estratégia de verificar se já estamos no fim.");
        notified.length==0?alert("Não foi encontrado ninguém com esse nome/tag!!"):alert(`Esses seguintes perfis contém o substantivo "${NOME_PARA_PROCURAR}":\n${notified.join("\n")}`);
        clearInterval(main);
    } else {
        externalHeight = menu.scrollHeight;
    }
};
let main = setInterval(searchFollower,1560,NOME_PARA_PROCURAR);
