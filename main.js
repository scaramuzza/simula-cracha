
const LinksSocialMedia = {
    github: "scaramuzza",
    linkedin: "in/marcosscaramussa",
    instagram: "marcosscaramussa",
    twitter: "scaramuzza_"
}

function changeSocialMediaLinks () {
    for (let li of socialLinks.children) { // filhos do elemento com ID socialLinks; 
    const social = li.getAttribute("class");
    li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}` // posição 0 será o a
    }
};
changeSocialMediaLinks();

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`; // não esquecer da template string com a crase, para poder misturar o texto com uma variável;
    fetch(url) // puxa o JSON do GitHub do usuário scaramuzza e salva em um objeto
    .then(response => response.json()) // fetch é função (comando) que vai bater na url acima e trazer um JSON com meus dados no GitHub; o .then() é uma promessa (um faça, traduzindo), que executa uma arrow function inciando com a variável criada chamada response. Lembrar que fetch pega o JSON e o salva em um objeto;
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
    })    
};
getGitHubProfileInfos();

// userName.textContent = "Olívia"; qdo utilizamos o ID (userName) não precisa chamar utilizando getElementById, getElementByTagName, etc;
// tem que colocar o textContent para ele saber que é uma ID, sentão ele vai buscar uma variável