<template>
  <body ref="bodys">
    <link
      href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
      rel="stylesheet"
    />
    <nav ref="sidebarOpens">
      <div class="nav-bar">
        <i @click="sidebarOpen" class="bx bx-menu sidebarOpen"></i>
        <span class="logo navLogo"><a href="#">Electronic</a></span>

        <div ref="menus" class="menu">
          <div class="logo-toggle">
            <span class="logo"><a href="#">Electronic</a></span>
            <i @click="siderbarClose" class="bx bx-x siderbarClose"></i>
          </div>

          <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div class="darkLight-searchBox">
          <div ref="mode" @click="modeToggle" class="dark-light">
            <i class="bx bx-moon moon"></i>
            <i class="bx bx-sun sun"></i>
          </div>

          <div class="searchBox">
            <div ref="search" @click="searchToggles" class="searchToggle">
              <i class="bx bx-x cancel"></i>
              <i class="bx bx-search search"></i>
            </div>

            <div class="search-field">
              <input type="text" placeholder="Search..." />
              <i class="bx bx-search"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </body>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const search = ref(null);
    const sidebarOpens = ref(null);
    const menus = ref(null);
    const mode = ref(null);
    const bodys = ref(null);
    // const body = document.querySelector("body");
    // nav = document.querySelector("nav"),
    // const mode = document.querySelector(".dark-light");
    // searchToggle = document.querySelector(".searchToggle"),
    // sidebarOpen = document.querySelector(".sidebarOpen");
    // siderbarClose = document.querySelector(".siderbarClose");

    // let getMode = localStorage.getItem("mode");
    // if (getMode && getMode === "dark-mode") {
    //   body.value.classList.add("dark");
    // }

    // js code to toggle dark and light mode
    function modeToggle() {
      mode.value.classList.toggle("active");
      bodys.value.classList.toggle("dark");

      // js code to keep user selected mode even page refresh or file reopen
      if (!bodys.value.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
      } else {
        localStorage.setItem("mode", "dark-mode");
      }
    }

    // js code to toggle search box
    function searchToggles() {
      search.value.classList.toggle("active");
    }

    //   js code to toggle sidebar
    function sidebarOpen() {
      sidebarOpens.value.classList.add("active");
    }

    function siderbarClose() {
      sidebarOpens.value.classList.remove("active");
    }
    // function allscrinclose() {
    //   if (
    //     sidebarOpens.value.classList.contains("sidebarOpen") &&
    //     !menus.value.classList.contains("menu")
    //   ) {
    //     sidebarOpens.value.classList.remove("active");
    //   }
    // }

    return {
      searchToggles,
      search,
      sidebarOpen,
      sidebarOpens,
      bodys,
      mode,
      modeToggle,
      menus,
      siderbarClose,
    };
  },
};
</script>

<style lang="scss">
/* ===== Google Font Import - Poppins ===== */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  transition: all 0.4s ease;
}

/* ===== Colours ===== */
:root {
  --body-color: #e4e9f7;
  --nav-color: #4070f4;
  --side-nav: #010718;
  --text-color: #fff;
  --search-bar: #f2f2f2;
  --search-text: #010718;
}

body {
  //   height: 100vh;
  background-color: var(--body-color);
}

body.dark {
  --body-color: #18191a;
  --nav-color: #242526;
  --side-nav: #242526;
  --text-color: #ccc;
  --search-bar: #242526;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background-color: var(--nav-color);
  z-index: 100;
}

body.dark nav {
  border: 1px solid #393838;
}

nav .nav-bar {
  position: relative;
  height: 100%;
  max-width: 1000px;
  width: 100%;
  background-color: var(--nav-color);
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav .nav-bar .sidebarOpen {
  color: var(--text-color);
  font-size: 25px;
  padding: 5px;
  cursor: pointer;
  display: none;
}

nav .nav-bar .logo a {
  font-size: 25px;
  font-weight: 500;
  color: var(--text-color);
  text-decoration: none;
}

.menu .logo-toggle {
  display: none;
}

.nav-bar .nav-links {
  display: flex;
  align-items: center;
}

.nav-bar .nav-links li {
  margin: 0 5px;
  list-style: none;
}

.nav-links li a {
  position: relative;
  font-size: 17px;
  font-weight: 400;
  color: var(--text-color);
  text-decoration: none;
  padding: 10px;
}

.nav-links li a::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: var(--text-color);
  opacity: 0;
  transition: all 0.3s ease;
}

.nav-links li:hover a::before {
  opacity: 1;
}

.nav-bar .darkLight-searchBox {
  display: flex;
  align-items: center;
}

.darkLight-searchBox .dark-light,
.darkLight-searchBox .searchToggle {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
}

.dark-light i,
.searchToggle i {
  position: absolute;
  color: var(--text-color);
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dark-light i.sun {
  opacity: 0;
  pointer-events: none;
}

.dark-light.active i.sun {
  opacity: 1;
  pointer-events: auto;
}

.dark-light.active i.moon {
  opacity: 0;
  pointer-events: none;
}

.searchToggle i.cancel {
  opacity: 0;
  pointer-events: none;
}

.searchToggle.active i.cancel {
  opacity: 1;
  pointer-events: auto;
}

.searchToggle.active i.search {
  opacity: 0;
  pointer-events: none;
}

.searchBox {
  position: relative;
}

.searchBox .search-field {
  position: absolute;
  bottom: -85px;
  right: 5px;
  height: 50px;
  width: 300px;
  display: flex;
  align-items: center;
  background-color: var(--nav-color);
  padding: 3px;
  border-radius: 6px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

.searchToggle.active ~ .search-field {
  bottom: -74px;
  opacity: 1;
  pointer-events: auto;
}

.search-field::before {
  content: "";
  position: absolute;
  right: 14px;
  top: -4px;
  height: 12px;
  width: 12px;
  background-color: var(--nav-color);
  transform: rotate(-45deg);
  z-index: -1;
}

.search-field input {
  height: 100%;
  width: 100%;
  padding: 0 45px 0 15px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  color: var(--search-text);
  background-color: var(--search-bar);
}

body.dark .search-field input {
  color: var(--text-color);
}

.search-field i {
  position: absolute;
  color: var(--nav-color);
  right: 15px;
  font-size: 22px;
  cursor: pointer;
}

body.dark .search-field i {
  color: var(--text-color);
}

@media (max-width: 790px) {
  nav .nav-bar .sidebarOpen {
    display: block;
  }

  .menu {
    position: fixed;
    height: 100%;
    width: 320px;
    left: -100%;
    top: 0;
    padding: 20px;
    background-color: var(--side-nav);
    z-index: 100;
    transition: all 0.4s ease;
  }

  nav.active .menu {
    left: -0%;
  }

  nav.active .nav-bar .navLogo a {
    opacity: 0;
    transition: all 0.3s ease;
  }

  .menu .logo-toggle {
    display: block;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-toggle .siderbarClose {
    color: var(--text-color);
    font-size: 24px;
    cursor: pointer;
  }

  .nav-bar .nav-links {
    flex-direction: column;
    padding-top: 30px;
  }

  .nav-links li a {
    display: block;
    margin-top: 20px;
  }
}
</style>
