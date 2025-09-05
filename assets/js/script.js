var mobileMenu = document.querySelector(".mobileMenu");
var menu = document.querySelector(".menu");
mobileMenu.onclick = function () {
  mobileMenu.classList.toggle("active");
  menu.classList.toggle("small");
};

function affiche(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgText");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}


const frontend_html = 81;
const frontend_javascript = 55;
const frondent_bootstrap = 87;
const frontend_react = 40;

const backend_java = 67;
const backend_php = 69;
const backend_sql = 52;

const cms_wordpress = 46;
const cms_canvas = 92;

const progress_python = 21;
const progress_c = 51;

const progress_autre_marketing = 61;
const progress_autre_maintenannce = 76;
const progress_autre_alibaba = 75;

const progress_mobile_kotline = 64;
const progress_mobile_flutter = 5;
const progress_mobile_swift = 5;

const progress_uml = 61;
const progress_projet = 33;

const progress_reseaux_administration = 81;
const progress_reseaux_instalation = 79;
const progress_reseaux_securite = 41;

const progress_adobe_xd = 89;
const progress_photoshop = 75;
const progress_illustrator = 41;

//let list = [frontend_bar, frontend_html, frontend_javascript, frondent_bootstrap, frontend_react, backend_bar, backend_java, backend_php, backend_sql, cms_bar, cms_wordpress, cms_canvas, progress_script, progress_python, progress_c, progress_autre, progress_autre_marketing, progress_autre_maintenannce, progress_autre_alibaba, progress_mobile, progress_mobile_kotline, progress_mobile_flutter, progress_mobile_swift, progress_modelisation, progress_uml, progress_projet, progress_reseaux, progress_reseaux_administration, progress_reseaux_instalation, progress_reseaux_securite, progress_adobe_xd, progress_photoshop, progress_graphisme, progress_illustrator];

function chargeGrandBar(bar, ...elements){
    let somme =  0
    let nombre =  0
    let moyenne = 0
    let hoverClass = "hover_vert";
    
    elements.forEach(element => {
        if(element>20){
            nombre++
            somme+=element
            

        }
        
    });

    moyenne=(somme/nombre)  || 0

    bar.style.width = moyenne+"%";
    if (moyenne < 40) {
        hoverClass = "hover_rouge";
      } else if (moyenne >= 40 && moyenne < 50) {
        hoverClass = "hover_orange";
      }
      bar.classList.add(hoverClass);

}

function addEffect(element, progressElement,valeur) {
let hoverClass = "hover_vert";
progressElement.style.width = valeur+"%";
let span = element.querySelector("h3 span");
if (span) {
  span.textContent = valeur+'%'; // Change le texte du pourcentage
}
if (valeur < 40) {
  hoverClass = "hover_rouge";
} else if (valeur >= 40 && valeur < 50) {
  hoverClass = "hover_orange";
}

progressElement.classList.add(hoverClass);
}

function charge() {

addEffect(document.getElementById("adobe_xd"), document.getElementById("progress_adobe_xd"),progress_adobe_xd);
addEffect(document.getElementById("photoshop"), document.getElementById("progress_photoshop"),progress_photoshop);
addEffect(document.getElementById("illustrator"), document.getElementById("progress_illustrator"),progress_illustrator);
chargeGrandBar(document.getElementById("progress_graphisme"),progress_adobe_xd,progress_photoshop,progress_illustrator);

addEffect(document.getElementById("admi_system"), document.getElementById("progress_reseaux_administration"),progress_reseaux_administration);
addEffect(document.getElementById("securite_card"), document.getElementById("progress_reseaux_securite"),progress_reseaux_securite);
addEffect(document.getElementById("instalation_card"), document.getElementById("progress_reseaux_instalation"),progress_reseaux_instalation);
chargeGrandBar(document.getElementById("progress_reseaux"),progress_reseaux_administration,progress_reseaux_securite,progress_reseaux_instalation);

addEffect(document.getElementById("uml_card"), document.getElementById("progress_uml"),progress_uml);
addEffect(document.getElementById("projet_card"), document.getElementById("progress_projet"),progress_projet);
chargeGrandBar(document.getElementById("progress_modelisation"),progress_uml,progress_projet);

addEffect(document.getElementById("kotline_card"), document.getElementById("progress_mobile_kotline"),progress_mobile_kotline);
addEffect(document.getElementById("flutter_card"), document.getElementById("progress_mobile_flutter"),progress_mobile_flutter);
addEffect(document.getElementById("swift_card"), document.getElementById("progress_mobile_swift"),progress_mobile_swift);
chargeGrandBar(document.getElementById("progress_mobile"),progress_mobile_kotline,progress_mobile_swift,progress_mobile_flutter);

addEffect(document.getElementById("frontend_html_card"), document.getElementById("frontend_html"),frontend_html);
addEffect(document.getElementById("frondent_bootstrap_card"), document.getElementById("frondent_bootstrap"),frondent_bootstrap);
addEffect(document.getElementById("frontend_javascript_card"), document.getElementById("frontend_javascript"),frontend_javascript);
addEffect(document.getElementById("frontend_react_card"), document.getElementById("frontend_react"),frontend_react);
chargeGrandBar(document.getElementById("frontend_bar"),frontend_html,frondent_bootstrap,frontend_javascript,frontend_react);

addEffect(document.getElementById("backend_java_card"), document.getElementById("backend_java"),backend_java);
addEffect(document.getElementById("backend_php_card"), document.getElementById("backend_php"),backend_php);
addEffect(document.getElementById("backend_sql_card"), document.getElementById("backend_sql"),backend_sql);
chargeGrandBar(document.getElementById("backend_bar"),backend_java,backend_php,backend_sql);

addEffect(document.getElementById("cms_wordpress_card"), document.getElementById("cms_wordpress"),cms_wordpress);
addEffect(document.getElementById("cms_canvas_card"), document.getElementById("cms_canvas"),cms_canvas);
chargeGrandBar(document.getElementById("cms_bar"),cms_wordpress,cms_canvas);

addEffect(document.getElementById("progress_python_card"), document.getElementById("progress_python"),progress_python);
addEffect(document.getElementById("progress_c_card"), document.getElementById("progress_c"),progress_c);
chargeGrandBar(document.getElementById("progress_script"),progress_python,progress_c);

addEffect(document.getElementById("progress_autre_maintenannce_card"), document.getElementById("progress_autre_maintenannce"),progress_autre_maintenannce);
addEffect(document.getElementById("progress_autre_marketing_card"), document.getElementById("progress_autre_marketing"),progress_autre_marketing);
addEffect(document.getElementById("progress_autre_alibaba_card"), document.getElementById("progress_autre_alibaba"),progress_autre_alibaba);
chargeGrandBar(document.getElementById("progress_autre"),progress_autre_maintenannce,progress_autre_marketing,progress_autre_alibaba);

  window.addEventListener('load', positionnerImages);
  window.addEventListener('resize', positionnerImages);

};
// Appliquer l'effet de survol à .competences_card avec la classe hover-effect
//addHoverEffect(".competences_card", "hover-effect");


// animation

document.addEventListener("DOMContentLoaded", charge);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.slide-left,.reveal, .slide-right, .slide-in').forEach(el => {
  observer.observe(el);
});

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const progress = entry.target;

    if (entry.isIntersecting) {

      charge();
    } else {
     
      progress.style.width = '0'; // Repart à zéro si on sort du viewport
    }
  });
}, {
  threshold: 0.5
});

// Appliquer à tous les éléments .progress
document.querySelectorAll('.progress').forEach(el => {
  observer1.observe(el);
});





function positionnerImages() {
  const cards = document.querySelectorAll('.niveau_container-card');
  const section = document.querySelector('.section-niveau-contener');

  if (!section) {
    console.error('Section .section-niveau-contener introuvable.');
    return;
  }

  const sectionRect = section.getBoundingClientRect();
  const sectionCenter = sectionRect.left + sectionRect.width / 2;

  cards.forEach(card => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;

    const imageContainer = card.querySelector('.niveau-contenaire-cart-img');

    if (!imageContainer) {
      console.warn('Pas de .niveau-contenaire-cart-img dans cette carte:', card);
      return;
    }

    imageContainer.classList.remove('hover-left', 'hover-right');

    if (cardCenter < sectionCenter) {
      imageContainer.classList.add('hover-right');
    } else {
      imageContainer.classList.add('hover-left');
    }
  });
}


