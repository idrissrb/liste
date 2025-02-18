function couleurAleatoire() {
    const lettres = "0123456789ABCDEF";
    let couleur = "#";
    for (let i = 0; i < 6; i++) {
        couleur += lettres[Math.floor(Math.random() * 16)];
    }
    return couleur;
}
document.querySelectorAll("#liste li").forEach(li => {
    li.addEventListener("click", function(){
        this.style.backgroundColor = couleurAleatoire();   
    }
    );
});