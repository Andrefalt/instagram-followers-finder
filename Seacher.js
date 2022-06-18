/*                                                         andrefalt esteve aqui
obs: meus códigos normalmente não são assim, não tem comentários nem é "organizado", só fiz desse jeito aqui porque sei que tem alguém
que vai querer saber como que o programa funciona e como raciocinei para que ele funcionasse.

se você não quer saber como ele funciona beleza, é só copiar e colar no console após abrir a lista de seguidores e procurar por alguém.
*/
console.log("feito pelo seu amigo da vizinhança, andrefalt!\nhttps://www.instagram.com/_kinggrimlock/ \nhttps://www.instagram.com/andrefalt/");
const NOME_PARA_PROCURAR = window.prompt("Nome a ser procurado:");
//variável para verificar o tamanho anterior da lista em relação a iteração atual do loop for.
let externalHeight = 0;
//lista de quem já foi encontrado(eu sei, eu sei, usei arrays, mas estava com pressa na hora aí tive que apelar pras arrays, por favor não me expulsem do conselho dos programadores).
let notified = [];

//a função que vai procurar pelo usuário que tenha o substantivo alocado à variável NOME_PARA_PROCURAR.
function searchFollower(name){
    //menu que tem como descendentes os seguidores.
    let menu = document.querySelector("div[class='_aano']");
    
    //comentário anterior em prova.
    let followers = menu.children[0].children[0].children;
    //for loop rodando a children do menu pra ver se está ali
    for(i=0;i<followers.length;i++){
        //expressão regular para capturar múltiplos perfis com o substantivo, capturar eles com maiúscula ou minúscula e fazer isso em várias linhas
        if(followers[i].innerText.match(new RegExp(name,"gim"))){
            //verifica se já foi alertado o perfil encontrado
            if(notified.toString().match(followers[i].innerText.split("\n")[0])){continue;}
            //se não alertou, vai alertar.
            else{
                console.log(`@ do perfil:\t@${followers[i].innerText.split("\n")[0]}\nNome do perfil:\t${followers[i].innerText.split("\n")[1]}`);
                notified.push("@"+followers[i].innerText.split("\n")[0])
            }
        } else {
            //indo para o final da lista...
            menu.scrollTo(0,menu.scrollHeight);
        }
    }
    /*até agora espero que esteja tudo tranquilo para você, leitor, porque aqui já é bem complicado.
    o if vê se o tamanho da lista da iteração atual bate com o da anterior. 
    se tem o mesmo tamanho ele prossegue no if e vê se a lista está carregando.
    caso não esteja ele alerta todos os que foram encontrados e finda o script.*/
    if(externalHeight==menu.scrollHeight && document.querySelector("li[class='wo9IH QN7kB ']")==null){
        console.log("scrollHeight anterior equivale ao scrollHeight atual. Assumo que chegamos no fim da lista de seguidores.\nObs: isso pode dar muito ruim caso o usuário tenha uma conexão lenta, vou bolar outra estratégia de verificar se já estamos no fim.\n\nUpdate: Se o <\li> que aparece quando a lista de seguidores está atualizando não existir, ele (supostamente) vai encerrar o intervalo, por isso aquele querySelector com um li e uma classe bizarra no if junto com a verificação do tamanho da lista.");
        notified.length==0?alert("Não foi encontrado ninguém com esse nome/tag!!"):alert(`Esses seguintes perfis contém o substantivo "${NOME_PARA_PROCURAR}":\n${notified.join("\n")}`);
        clearInterval(main);
    } //caso a lista ainda esteja carregando e/ou o tamanho da lista atual não bata com o tamanho da anterior, ele atribui o valor da atual à anterior, findando a função para que o intervalo recomeçe tudo.
    else {
        externalHeight = menu.scrollHeight;
    }
};
//intervalo(preferi usar intervalo a usar loops porque ainda não aprendi totalmente programação assíncrona(ex: await), fora que acho mais prático)
let main = setInterval(searchFollower,1560,NOME_PARA_PROCURAR);
