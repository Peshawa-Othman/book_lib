<template>
  <div style="height: 400px; width: 100%">
    <img id="shoplogo" src="../assets/shoplogo1.jpg" alt="" />
    <img
      style="
        width: 150px;
        height: 150px;
        border-radius: 100px;
        object-fit: cover;
        position: absolute;
        left: 50%;
        top: 285px;
        transform: translate(-50%);
        border: 2px solid cornflowerblue;
      "
      src="../assets/shoplogo.webp"
      alt=""
    />
  </div>
  <div>
    <h1>Electronic Shop</h1>
    <table>
      <div id="textBio">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto porro
        pariatur inventore atque ipsa a sapiente maiores voluptates, quisquam
        culpa, ut dolorem asperiores distinctio id nemo molestiae facilis
        repudiandae. Sit!
      </div>
      <div
        style="
          text-align: left;
          width: fit-content;
          margin: 10px;
          position: relative;
          left: 50%;
          transform: translate(-50%);
        "
      >
        <div>Location:- Sulemany</div>
        <div>Phone Number:- 07501989963</div>
        <div>Email:- Peshawa.1914215@gmail.com</div>
        <div>Work time:- 24-hours</div>
      </div>
    </table>
  </div>
  <div>
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
    />
    <div class="container">
      <header>Prodoct Data</header>

      <form action="#">
        <div class="form first">
          <div class="details personal">
            <div class="fields">
              <div class="input-field">
                <label>Prodoct Name</label>
                <input
                  id="nameprodoct"
                  type="text"
                  placeholder="Prodoct Name"
                  required
                />
              </div>
              <div class="input-field">
                <label>Image Prodoct</label>
                <input
                  id="imageprodoct"
                  style="padding-top: 9px"
                  type="file"
                  placeholder="Image Prodoct"
                  required
                />
              </div>

              <div class="input-field">
                <label>Praice Prodoct</label>
                <input
                  id="praiceprodoct"
                  type="number"
                  placeholder="Praice Prodoct"
                  required
                />
              </div>
            </div>
          </div>

          <button @click="nextbtn" class="nextBtn">
            <span class="btnText">Next</span>
            <i class="uil uil-navigator"></i>
          </button>
          <!-- </div> -->
        </div>

        <div class="form second">
          <div class="details address">
            <span class="title">Address Details</span>

            <div class="fields">
              <div class="input-field">
                <label>Address Type</label>
                <input
                  type="text"
                  placeholder="Permanent or Temporary"
                  required
                />
              </div>

              <div class="input-field">
                <label>Nationality</label>
                <input type="text" placeholder="Enter nationality" required />
              </div>

              <div class="input-field">
                <label>State</label>
                <input type="text" placeholder="Enter your state" required />
              </div>

              <div class="input-field">
                <label>District</label>
                <input type="text" placeholder="Enter your district" required />
              </div>

              <div class="input-field">
                <label>Block Number</label>
                <input
                  type="number"
                  placeholder="Enter block number"
                  required
                />
              </div>

              <div class="input-field">
                <label>Ward Number</label>
                <input type="number" placeholder="Enter ward number" required />
              </div>
            </div>
          </div>

          <div class="details family">
            <span class="title">Family Details</span>

            <div class="fields">
              <div class="input-field">
                <label>Father Name</label>
                <input type="text" placeholder="Enter father name" required />
              </div>

              <div class="input-field">
                <label>Mother Name</label>
                <input type="text" placeholder="Enter mother name" required />
              </div>

              <div class="input-field">
                <label>Grandfather</label>
                <input
                  type="text"
                  placeholder="Enter grandfther name"
                  required
                />
              </div>

              <div class="input-field">
                <label>Spouse Name</label>
                <input type="text" placeholder="Enter spouse name" required />
              </div>

              <div class="input-field">
                <label>Father in Law</label>
                <input type="text" placeholder="Father in law name" required />
              </div>

              <div class="input-field">
                <label>Mother in Law</label>
                <input type="text" placeholder="Mother in law name" required />
              </div>
            </div>

            <div class="buttons">
              <div @click="backbtn" class="backBtn">
                <i class="uil uil-navigator"></i>
                <span class="btnText">Back</span>
              </div>

              <button class="sumbit">
                <span class="btnText">Submit</span>
                <i class="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    function nextbtn() {
      if (document.getElementById("nameprodoct").value !== "") {
        if (document.getElementById("imageprodoct").files.length !== 0) {
          if (document.getElementById("imageprodoct").value !== 0) {
            document.querySelector(".form.second").style.transform =
              "translateX(0%)";
            document.querySelector(".form.second").style.pointerEvents = "auto";
            document.querySelector(".form.second").style.opacity = "1";
          }
        }
      }
    }

    function backbtn() {
      document.querySelector(".form.second").style.transform =
        "translateX(100%)";
      document.querySelector(".form.second").style.pointerEvents = "none";
      document.querySelector(".form.second").style.opacity = "0";
    }
    return { backbtn, nextbtn };
  },
};
</script>

<style scoped lang="scss">
#shoplogo {
  object-fit: fill;
  width: -webkit-fill-available;
  height: 300px;
}
#textBio {
  width: fit-content;
  position: relative;
  text-align: left;
  left: 50%;
  margin-bottom: 15px;
  margin-top: 15px;
  padding-left: 40px;
  transform: translate(-50%);
}

/* ===== Google Font Import - Poppins ===== */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4070f4;
}
.container {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  max-width: 900px;
  width: 100%;
  border-radius: 6px;
  padding: 30px;
  // margin: 0 15px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.container header {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}
.container header::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 3px;
  width: 27px;
  border-radius: 8px;
  background-color: #4070f4;
}
.container form {
  position: relative;
  margin-top: 16px;
  min-height: 490px;
  background-color: #fff;
  overflow: hidden;
}
.container form .form {
  position: absolute;
  background-color: #fff;
  transition: 0.3s ease;
}
.container form .form.second {
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
}
form.secActive .form.second {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(0);
}
form.secActive .form.first {
  opacity: 0;
  pointer-events: none;
  transform: translateX(-100%);
}
.container form .title {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  margin: 6px 0;
  color: #333;
}
.container form .fields {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
form .fields .input-field {
  display: flex;
  width: calc(100% / 3 - 15px);
  flex-direction: column;
  margin: 4px 0;
}
.input-field label {
  font-size: 12px;
  font-weight: 500;
  color: #2e2e2e;
}
.input-field input,
select {
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  border-radius: 5px;
  border: 1px solid #aaa;
  padding: 0 15px;
  height: 42px;
  margin: 8px 0;
}
.input-field input :focus,
.input-field select:focus {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
}
.input-field select,
.input-field input[type="date"] {
  color: #707070;
}
.input-field input[type="date"]:valid {
  color: #333;
}
.container form button,
.backBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  max-width: 200px;
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  margin: 25px 0;
  background-color: #4070f4;
  transition: all 0.3s linear;
  cursor: pointer;
}
.container form .btnText {
  font-size: 14px;
  font-weight: 400;
}
form button:hover {
  background-color: #265df2;
}
form button i,
form .backBtn i {
  margin: 0 6px;
}
form .backBtn i {
  transform: rotate(180deg);
}
form .buttons {
  display: flex;
  align-items: center;
}
form .buttons button,
.backBtn {
  margin-right: 14px;
}

@media (max-width: 750px) {
  .container form {
    overflow-y: scroll;
  }
  .container form::-webkit-scrollbar {
    display: none;
  }
  form .fields .input-field {
    width: calc(100% / 2 - 15px);
  }
}

@media (max-width: 550px) {
  form .fields .input-field {
    width: 100%;
  }
}
</style>
