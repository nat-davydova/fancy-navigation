(function () {
  //*** PATH
  const PATH = {
    closeToggler: ".toggler-close",
    expandableNav: ".main-nav__expandable",
    openToggler: ".toggler-open"
  };

  // *** EVENT LISTENERS
  document.body.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest(PATH.openToggler)) {
      const nav = document.querySelector(PATH.expandableNav);
      nav.classList.add("js-open");
    }

    if (target.closest(PATH.closeToggler)) {
      const nav = document.querySelector(PATH.expandableNav);
      nav.classList.remove("js-open");
    }
  });
})();