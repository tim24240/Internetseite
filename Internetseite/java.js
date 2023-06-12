sehenswuerdigkeiten = document.getElementsByClassName('sehenswuerdigkeit');

Array.from(sehenswuerdigkeiten).forEach(sehenswuerdigkeit => {
  const id = sehenswuerdigkeit.id;
  const image = document.createElement('img');
  image.src = `images2/${id}.jpg`;

  sehenswuerdigkeit.addEventListener('mouseover', function() {
    removeActiveClass();
    this.classList.add('active');
  });

  sehenswuerdigkeit.addEventListener('mouseout', function() {
    removeActiveClass();
  });

  sehenswuerdigkeit.appendChild(image);
});

function removeActiveClass() {
  Array.from(sehenswuerdigkeiten).forEach(sehenswuerdigkeit => {
    sehenswuerdigkeit.classList.remove('active');
  });
}