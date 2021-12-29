<template>
  <div>
    <h1>Mentions<br><span>Légales</span></h1>
    <p>Cette page décrit les mentions légales qui s'appliquent à tout internaute visitant ce site. En le consultant,
      vous vous engagez sans réserve à les respecter. Les mentions légales pouvant être modifiées à tout moment et sans
      préavis, nous vous engageons à les consulter régulièrement.</p>
    <div>
      <h2>Responsable éditorial et responsable légal</h2>
      <p>Département des Métiers du Multimédia et de l’Internet <br>
        Représenté(e) par : Alain Lamboux Durand<br>
        E-mail : alain.lamboux-durand@edu.univ-fcomte.fr
      </p>
    </div>
    <div>
      <h2>Éditeur du site</h2>
      <p>Département des Métiers du Multimédia et de l’Internet, Formation BUT MMI
        <br>Représenté(e) par les étudiants : </p>
      <p> <span>Nathan Van Bignoot :</span> Chef de projet et Développeur web
        <br><span>Elora Perrin :</span> Responsable de la Communication
        <br><span>Tania André :</span> Responsable du Design
        <br><span>Eva Bourquin :</span> Responsable du Design
        <br>4 Place Tharradin, 25200 Montbéliard
        <br>mmi@univ-fcomte.fr
        <br>Tuteur légal des étudiants : Xavier Senente
      </p>
    </div>
    <div>
      <h2>Hébergeur</h2>
      <p>Centre de Ressources Informatiques (CRI), Université de Franche-Comte
        <br>Représenté(e) par : Claude Girard (IUT Belfort-Montbéliard - site Montbéliard)
        <br>Tél : 03 81 99 46 08
        <br>E-mail : claude.girard@univ-fcomte.fr
      </p>
    </div>
    <div>
      <h2>Conditions d'utilisation</h2>
      <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès et de rectification aux données vous concernant par simple demande mail, écrite ou téléphonique. Le département MMI et les élèves en charge du projet ne peuvent être tenus responsables du contenu du site. Ce site est exploité par le département MMI de Montbéliard. La présentation et chacun des éléments, y compris les marques, logos et noms de domaine, apparaissant sur le site https://mmimontbeliard.com sont protégés par les lois en vigueur sur la propriété intellectuelle, et appartiennent à l’IUT de Belfort-Montbéliard, ou font l'objet d'une autorisation d'utilisation. Aucun élément composant le site ne peut être copié, reproduit, modifié, réédité, chargé, dénaturé, transmis ou distribué de quelque manière que ce soit, sous quelque support que ce soit, de façon partielle ou intégrale, sans l'autorisation écrite et préalable du département MMI à l'exception d'une stricte utilisation pour les besoins de la presse et sous réserve du respect des droits de propriété intellectuelle et de tout autre droit de propriété dont il est fait mention. Seule la copie à usage privé est autorisée pour votre usage personnel, privé et non-commercial, sur votre ordinateur personnel. Toute utilisation autorisée des éléments composant ou figurant dans le site doit se faire sans dénaturation, modification ou altération de quelque manière que ce soit. Le département MMI se réserve le droit de poursuivre tout acte de contrefaçon de ses droits de propriété intellectuelle. Le présent Contrat est soumis au droit Français. Le présent Contrat s'applique dans le monde entier, et seule sa version en langue française fait foi en vue de son interprétation.
      </p>
    </div>
    <div>
      <h2>Graphisme, photos et illustrations</h2>
      <p>Le graphisme (incluant le webdesign et le logo) a été réalisé par Nathan Van Bignoot, Tania André et Eva Bourquin.
        <br>Les photographies et la vidéo ont été réalisées par Nathan Van Bignoot et Elora Perrin. Les illustrations et visuels ont téléchargés sur les banques d’images libres de droits Freepik, Pixabay, Unsplash, Flaticon etc.
      </p>
    </div>
    <div>
      <h2>Directeur de publication</h2>
      <p>Alain Lamboux Durand, chef du département, sous l’autorité de David Markezic, directeur de <strong>l’IUT de Belfort-Montbéliard</strong>, et de Macha Woronoff, présidente de <strong>l’Université de Franche-Comté</strong>.
      </p>
    </div>
    <div>
      <h2>Droits d'auteurs</h2>
      <h3>Loi n°78-17</h3>
      <p>Conformément à l’article 34 de la loi informatique et Libertés du 6 janvier 1978, vous disposez d’un droit d’accès aux informations vous concernant. Vous pouvez également modifier ou supprimer ces informations. Il vous suffit de nous contacter à l’adresse suivante : mmi@univ-fcomte.fr.

        <br>Les fichiers résultants ne sont jamais transmis à des tiers. En particulier, nous ne commercialisons aucun fichier d’adresses ou d’emails.
      </p>
      <h3>Droits d'auteurs et Copyright</h3>
      <p>L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu’il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MentionsLegales",
  data() {
    return {
      msg: 'Page sur les mentions legales'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 3.2rem;
  font-weight: 400;
  color: black;
  text-transform: uppercase;
  padding: 40px;
  background-color: #F1F1F1;
  width: 100%;
}

h1 > span {
  font-size: 6.4rem;
  font-weight: 600;
  background: -webkit-linear-gradient(0deg, rgba(85, 242, 214, 1) 16%, rgba(227, 137, 229, 1) 78%);
  -webkit-background-clip: text;
  color: transparent;
  text-transform: initial;}

div {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
}
p{
  font-family: Lato, sans-serif;
  font-size: 1.8rem;
  margin-top: 10px;
  line-height: 150%;
}
p > span {
  color: gray;
  font-weight: bold;
}

h2{
  font-family: Poppins, sans-serif;
  font-weight: bolder;
  font-size: 2.2rem;
  color: #8D92FF;
}
h3{
  font-family: Lato, sans-serif;
  font-weight: bold;
  font-size: 1.8rem;
  text-decoration: underline black;
}

</style>