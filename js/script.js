const {createApp} = Vue;

createApp({
  data() {
    return {
      elements: [
        {
          src: 'img/01.webp',
          title: 'Marvel\'s Spiderman Miles Morale',
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
      }, {
          src: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
      }, {
          src: 'img/03.webp',
          title: 'Fortnite',
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
      }, {
          src: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
      }, {
          src: 'img/05.webp',
          title: "Marvel's Avengers",
          text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
      }
      ],
      viewImage: 0,
      autoplay: true
    }
  },
  methods: {
    nextOrPrev(isNext){
      isNext ? this.viewImage++ : this.viewImage--;

      if (this.viewImage === this.elements.length){
        this.viewImage = 0;
      }else if(this.viewImage < 0){
        this.viewImage = this.elements.length - 1;
      }
    }
    
  },
  mounted() {
    console.log("Montato");
    setInterval(() => {
      this.autoplay ? this.nextOrPrev(true) : ""
    }, 3000);
  },

}).mount("#app")