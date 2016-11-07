function modification() {
  img = document.querySelector('.section-first__img');

  function image(a, b) {
    setTimeout(function () {
      img.src = "img/cosmonaut-" + a + ".png";
    }, b)
  };

  image(10, 100);
  image(9, 200);
  image(8, 300);
  image(7, 400);
  image(6, 500);
  image(5, 600);
  image(4, 700);
  image(3, 800);
  image(2, 900);
  image(1, 1000);

  // image(2, 100);
  // image(3, 200);
  // image(4, 300);
  // image(5, 400);
  // image(6, 500);
  // image(7, 600);
  // image(8, 700);
  // image(9, 800);
  // image(10, 900);
  // image(1, 1000);
};

setInterval(modification, 1000);
