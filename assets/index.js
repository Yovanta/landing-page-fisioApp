function functionDropdown() {
  //menampilkan dropdown-menu
    document.getElementById("dropdown-menu").classList.toggle("show");
  }

    window.onclick = function(event) {
      //menghilangkan dropdown ketika mengklik diluar button dropdown
      if (!event.target.matches('.dropbtn')) {
        let dropdownMenu = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdownMenu.length; i++) {
          let tutupDropdown = dropdownMenu[i];
          if (tutupDropdown.classList.contains('show')) {
            tutupDropdown.classList.remove('show');
          }
        }
      }
    }