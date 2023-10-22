gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function createSmoothScroll() {
  if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
      wrapper: ".wrapper",
      content: ".content",
      smooth: 1.5,
      effects: true,
    });

    changeHeroMove();
    changeGalleryMove("left", -500);
    changeGalleryMove("right", 500);
  }
}

function changeHeroMove() {
  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );
}
function changeGalleryMove(column, moveValue) {
  let items = gsap.utils.toArray(`.gallery__${column} .gallery__item`);

  items.forEach((item) => {
    gsap.fromTo(
      item,
      { x: moveValue, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
}

createSmoothScroll();
