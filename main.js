MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
// Selectionne le noeud dont les mutations seront observées
const targetNode = document.getElementById('facebook');
// Options de l'observateur (quelles sont les mutations à observer)
const options = {
    subtree: true,
    childList: true
};
// tout les texts "sponsorisé" en plusieurs langues
const sponsoredTexts = [
    "Sponsored",
    "مُموَّل", // Arabic
    "赞助内容", // Chinese (Simplified)
    "贊助", // Chinese (Traditional)
    "Sponzorováno", // Czech
    "Gesponsord", // Dutch
    "May Sponsor", // Filipino
    "Sponsorisé .", // French
    "Gesponsert", // German
    "ממומן", // Hebrew
    "प्रायोजित", // Hindi
    "Bersponsor", // Indonesian
    "Sponsorizzato", // Italian
    "Sponsorowane", // Polish
    "Patrocinado", // Portuguese (Brazil)
    "Реклама", // Russian
    "Sponzorované", // Slovak
    "Publicidad", // Spanish
    "ได้รับการสนับสนุน", // Thai
    "Sponsorlu", // Turkish
    "Được tài trợ" // Vietnamese
];
// Regex avec la liste des mots
const sponsRegx = /\bsponsorisé|\bsponsored/gmi;

// Fonction callback à éxécuter quand une mutation est observée
function callback(mutationsList, observer) {
    for(var mutation of mutationsList) {
        var spans = mutation.target.getElementsByTagName("span");
        for( span of spans){
            if(sponsRegx.exec(span.innerText)){
                hideAd(span);
            }
        }
    }
};

function hideAd(element) {
    //go back in tree to the parent of article
    var p = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    //p.style.filter = 'blur(1em)';
    p.innerHTML = '<div style="text-align: center; margin:30px; color:red">Here rest an AD ⚰️ 😈</div>'//{{p.innerHTML}}</div>'
    //p.style.display = 'none';
}
// Créé une instance de l'observateur lié à la fonction de callback
const observer = new MutationObserver(callback);
// Commence à observer le noeud cible pour les mutations précédemment configurées
observer.observe(targetNode, options);
