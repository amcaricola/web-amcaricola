const ToastifyPOP = {
  text: "",
  className: "info",
  style: {
    background: "#266dd3",
    // border: "solid black 1px",
    fontWeight: "bold",
  },
};

export function ShowNotification(value = "Hey!") {
  let notification = ToastifyPOP;
  notification.text = value;
  Toastify(notification).showToast();
}
