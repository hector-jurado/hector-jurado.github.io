const elements = document.querySelectorAll(".fade-in")
    window.addEventListener("scroll", () => {
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight /1.3;

      if(position < screenPosition){
        el.classList.add("visible");
      }
    });
    });
