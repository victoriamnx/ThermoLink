const dropdownBtns = document.querySelectorAll(".menu-btn");
let lastOpened = null;

dropdownBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    const menuContent = this.nextElementSibling;
    const iconPlus = this.querySelector(".iconPlus");

    if (lastOpened !== null && lastOpened !== menuContent) {
      // Fechar o dropdown previamente aberto
      lastOpened.classList.remove("show");
      const lastIcon = lastOpened.previousElementSibling.querySelector(".iconPlus");
      lastIcon.src = "./assets/images/icon-plus.svg";
      lastOpened.previousElementSibling.style.fontWeight = "normal";
      lastOpened.previousElementSibling.style.color = ""; // Resetar a cor
    }

    menuContent.classList.toggle("show");

    if (menuContent.classList.contains("show")) {
      this.style.fontWeight = "bold";
      this.style.color = "#1E1F36";

      // Alterar a imagem ao abrir o dropdown
      iconPlus.src = "./assets/images/icon-minus.svg";
    } else {
      this.style.fontWeight = "normal";
      this.style.color = ""; // Resetar a cor
      iconPlus.src = "./assets/images/icon-plus.svg";
    }

    // Atualizar o último dropdown aberto
    lastOpened = menuContent.classList.contains("show") ? menuContent : null;
  })
);
