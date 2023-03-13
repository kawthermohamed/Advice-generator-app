let dicebtn = document.querySelector(".ad-img");
console.log(dicebtn);
let AdviceId = document.querySelector(".adv-id");
let AdviceContent = document.querySelector(".advice-content");

getAdvice();
function getAdvice() {
  let Request = new XMLHttpRequest();
  Request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let apiAdvice = JSON.parse(this.responseText);

      AdviceId.innerHTML = apiAdvice.slip.id;
      AdviceContent.innerHTML = apiAdvice.slip.advice;
      dicebtn.onclick = function () {
        getAdvice();
      };
    }
  };
  Request.open("Get", "https://api.adviceslip.com/advice", true);
  Request.send();
}
