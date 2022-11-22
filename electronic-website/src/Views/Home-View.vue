<template>
  <div id="all">
    <div id="imageUrl">
      <H1 id="electronic">دوکانی ئەلکترۆنی</H1>
      <h5 id="text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda sed
        voluptas beatae exercitationem, aliquam molestiae iusto.
      </h5>
    </div>
    <h2
      style="
        text-align: start;
        margin-top: 30px;
        margin-left: 30px;
        color: #111;
      "
    >
      بەرهەمە داشکاوەکان
    </h2>
    <vue-horizontal
      style="margin-left: 25px; padding-left: 30px; margin-right: 26px"
    >
      <div id="cardcaver">
        <div id="iconpercent">
          <p style="color: red; margin: 2px">
            <font-awesome-icon icon="fa-solid fa-percent" />10
          </p>
        </div>
        <img id="prodoct" src="../assets/photo1.png" alt="headePhone" />
        <p id="titleprodoct">هێدفۆن</p>
        <p id="titleprodoct">$250</p>
      </div>
      <div id="cardcaver">
        <div id="iconpercent">
          <p style="color: red; margin: 2px">
            <font-awesome-icon icon="fa-solid fa-percent" />10
          </p>
        </div>
        <img id="prodoct" src="../assets/photo1.png" alt="headePhone" />
        <p id="titleprodoct">هێدفۆن</p>
        <p id="titleprodoct">$250</p>
      </div>
      <div id="cardcaver">
        <div id="iconpercent">
          <p style="color: red; margin: 2px">
            <font-awesome-icon icon="fa-solid fa-percent" />15
          </p>
        </div>
        <img id="prodoct" src="../assets/key1.png" alt="headePhone" />
        <p id="titleprodoct">کیبۆرد</p>
        <p id="titleprodoct">$25</p>
      </div>
      <div id="cardcaver">
        <div id="iconpercent">
          <p style="color: red; margin: 2px">
            <font-awesome-icon icon="fa-solid fa-percent" />9
          </p>
        </div>
        <img id="prodoct" src="../assets/key2.jpg" alt="headePhone" />
        <p id="titleprodoct">کیبۆرد</p>
        <p id="titleprodoct">$300</p>
      </div>
      <div id="cardcaver">
        <div id="iconpercent">
          <p style="color: red; margin: 2px">
            <font-awesome-icon icon="fa-solid fa-percent" />20
          </p>
        </div>
        <img id="prodoct" src="../assets/maws2.png" alt="headePhone" />
        <p id="titleprodoct">Heade Phone</p>
        <p id="titleprodoct">$100</p>
      </div>
      <div id="cardcaver">
        <div id="iconpercent">
          <p style="color: red; margin: 2px">
            <font-awesome-icon icon="fa-solid fa-percent" />25
          </p>
        </div>
        <img id="prodoct" src="../assets/maws1.jpg" alt="headePhone" />
        <p id="titleprodoct">Heade Phone</p>
        <p id="titleprodoct">$74</p>
      </div>
      <div id="cardcaver">
        <div id="iconpercent">
          <p style="color: red; margin: 2px">
            <font-awesome-icon icon="fa-solid fa-percent" />50
          </p>
        </div>
        <img id="prodoct" src="../assets/tv.png" alt="headePhone" />
        <p id="titleprodoct">Heade Phone</p>
        <p id="titleprodoct">$10</p>
      </div>
    </vue-horizontal>
    <h2
      style="text-align: start; margin-top: 0px; margin-left: 30px; color: #111"
    >
      بەرهەمەکان
    </h2>
    <div id="cardcaver1">
      <img id="prodoct1" src="../assets/tv1.jpg" alt="headePhone" />
      <p id="titleprodoct1">Heade Phone</p>
      <p id="titleprodoct1">$250</p>
    </div>
    <div id="cardcaver1">
      <img id="prodoct1" src="../assets/tv2.png" alt="headePhone" />
      <p id="titleprodoct1">Heade Phone</p>
      <p id="titleprodoct1">$220</p>
    </div>
    <div id="cardcaver1">
      <img id="prodoct1" src="../assets/maws1.jpg" alt="headePhone" />
      <p id="titleprodoct1">Heade Phone</p>
      <p id="titleprodoct1">$330</p>
    </div>
    <div id="cardcaver1">
      <img id="prodoct1" src="../assets/maws2.png" alt="headePhone" />
      <p id="titleprodoct1">Heade Phone</p>
      <p id="titleprodoct1">$10</p>
    </div>
    <div id="cardcaver1">
      <img id="prodoct1" src="../assets/tv.png" alt="headePhone" />
      <p id="titleprodoct1">Heade Phone</p>
      <p id="titleprodoct1">$40</p>
    </div>
    <div id="cardcaver1">
      <img id="prodoct1" src="../assets/key1.png" alt="headePhone" />
      <p id="titleprodoct1">Heade Phone</p>
      <p id="titleprodoct1">$450</p>
    </div>
    <div id="cardcaver1">
      <img id="prodoct1" src="../assets/key2.jpg" alt="headePhone" />
      <p id="titleprodoct1">Heade Phone for mane</p>
      <p id="titleprodoct1">$60</p>
    </div>
    <div id="cardcaver1">
      <img id="prodoct1" src="../assets/photo1.png" alt="headePhone" />
      <p id="titleprodoct1">Heade Phone</p>
      <p id="titleprodoct1">$90</p>
    </div>
    <div id="cardcaver1">
      <img id="prodoct1" src="../assets/photo2.jpg" alt="headePhone" />
      <p id="titleprodoct1">Heade Phone</p>
      <p id="titleprodoct1">$130</p>
    </div>
    <!-- the footer -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
    />
  </div>
</template>

<script>
import VueHorizontal from "vue-horizontal";
export default {
  components: { VueHorizontal },
};
</script>

<style scoped lang="scss">
#all {
  position: inherit;
  width: 100%;
  background-color: whitesmoke;
}
#imageUrl {
  background-image: url("../assets/images5.jpg");
  width: -webkit-fill-available;
  height: 400px;
  box-shadow: 0px 0px 5px black;
}
#electronic {
  position: relative;
  top: 160px;
  color: black;
  text-shadow: 0px 13px 24px black;
}
#text {
  position: relative;
  top: 205px;
  color: maroon;
  width: 59%;
  left: 50%;
  text-shadow: 0px 0px 26px black;
  transform: translate(-50%);
}

#cardcaver {
  display: flow-root;
  position: relative;
  width: 160px;
  height: auto;
  background: snow;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px black;
}
#cardcaver:hover {
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px blueviolet;
}
#prodoct {
  width: -webkit-fill-available;
  height: 160px;
  border-radius: 5px 5px 0px 0px;
}
#titleprodoct {
  color: black;
  margin-bottom: 5px;
  text-align: center;
  font-size: 11.5px;
}
#iconpercent {
  position: absolute;
  // background: #90bdff;
  border-radius: inherit;
  font-size: 20px;
}
/////////////////@at-root
#cardcaver1 {
  display: inline-table;
  width: 200px;
  height: auto;
  background: snow;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 0px black;
}
#cardcaver1:hover {
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px blue;
}
#prodoct1 {
  width: 200px;
  height: 160px;
  border-radius: 5px 5px 0px 0px;
}
#titleprodoct1 {
  color: black;
  margin-bottom: 5px;
  text-align: center;
  font-size: 11.5px;
}
#iconpercent1 {
  position: absolute;
  background: #90bdff;
  border-radius: inherit;
  font-size: 20px;
}

@media (max-width: 500px) {
  #cardcaver1 {
    display: inline-table;
    width: 150px;
    height: auto;
    background: snow;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px black;
  }
  #cardcaver1:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px blue;
  }
  #prodoct1 {
    width: 150px;
    height: 160px;
    border-radius: 5px 5px 0px 0px;
  }
  #titleprodoct1 {
    color: black;
    margin-bottom: 5px;
    text-align: center;
    font-size: 11.5px;
  }
  #iconpercent1 {
    position: absolute;
    background: #90bdff;
    border-radius: inherit;
    font-size: 20px;
  }
}
</style>
