import Annonces from '../../Datas/Annonces.json'
import '../../Styles/App.css'
    
    function Carrousel() {
    //Création du carrousel
    const carousel = document.getElementById('carousel');
    const slidesContainer = document.querySelector('.slides-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideWidth = carousel.clientWidth;
    let slideIndex = 0;
    prevBtn.addEventListener('click', () => {
        slideIndex = Math.max(slideIndex - 1, 0);
        updateSlidePosition();
      });
      
      nextBtn.addEventListener('click', () => {
        slideIndex = Math.min(slideIndex + 1, slidesContainer.childElementCount - 1);
        updateSlidePosition();
      });
      
      // Récupérer les données JSON avec les URL des images
      fetch(Annonces)
        .then(response => response.json())
        .then(data => {
          data.forEach(imageUrl => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.style.backgroundImage = `url(${imageUrl})`;
            slidesContainer.appendChild(slide);
          });
      
          updateSlidePosition();
        });
      
      function updateSlidePosition() {
        slidesContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
      }
      return (
        <div id="carousel" class="carousel">
            <div class="slides-container"></div>
            <button id="prevBtn" class="carousel-btn prev-btn">Précédent</button>
            <button id="nextBtn" class="carousel-btn next-btn">Suivant</button>
        </div>
      )
    }

    export default Carrousel