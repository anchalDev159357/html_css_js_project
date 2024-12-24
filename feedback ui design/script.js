const sendFeedbackBtn = document.querySelector(".send-feedback");
const feedBackBox = document.querySelector(".feedback-box");
const rateItBox = document.querySelector(".feedback-box2");
const alertMessage = document.querySelector(".alert-feedback");
sendFeedbackBtn.addEventListener("click", () => {
  feedBackBox.classList.add("hidden");
  rateItBox.classList.add("hidden");
  alertMessage.classList.remove("hidden");
});
alertMessage.addEventListener("click", () => {
  feedBackBox.classList.remove("hidden");
  rateItBox.classList.remove("hidden");
  alertMessage.classList.add("hidden");
});
