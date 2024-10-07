const buttons = document.querySelectorAll("button");
const toastBox = document.querySelector(".toastBox");

let successMsg = "Successfully submitted!";
let errorMsg = "Error! Please try again";
let invalidMsg = "Invalid Message!";

function getToast(msg, iconClass, color, type) {
  const toast = document.createElement("div");
  toast.classList.add("toast", type);

  // Create an icon element
  const icon = document.createElement("i");
  icon.classList.add("fas", iconClass);
  icon.style.color = color;

  // Add the icon and message to the toast
  toast.appendChild(icon);
  toast.innerHTML += msg;

  toastBox.appendChild(toast);

  // Auto-remove toast after 5 seconds
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let msg, iconClass, color, type;

    if (e.target.classList.contains("success")) {
      msg = successMsg;
      iconClass = "fa-check-circle";
    //   color = "green";
      type = "success";
    } else if (e.target.classList.contains("error")) {
      msg = errorMsg;
      iconClass = "fa-exclamation-circle";
      color = "red";
      type = "error";
    } else if (e.target.classList.contains("invalid")) {
      msg = invalidMsg;
      iconClass = "fa-times-circle";
      color = "orange";
      type = "invalid";
    }

    if (msg) {
      getToast(msg, iconClass, color, type);
    }
  });
});
