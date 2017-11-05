let $ = require('jquery');
document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  changeNoti(0);
});

function changeNoti(index){
  let content = $(".header .notification .content");
  let notification = $(".header .notification");
  let message = [
    "comes in all sizes",
    "can also changes color",
    "corners are also adjustable",
  ];
  let effects = [
    (notification) => {
      notification.css({
        width: "500px",
        height: "200px",
        backgroundColor: "#3498db",
        borderRadius: "8px"
      });
    },
    (notification) => {
      notification.css({
        backgroundColor: "#34495e",
        width: "350px",
        height: "150px"
      });
    },
    (notification) => {
      notification.css({
        backgroundColor: "#34495e",
        borderRadius: "40px"
      });
    }
  ]
  // change content
  content.text(message[index]);
  // apply effects
  effects[index](notification);
  // repeat after 3sec
  setTimeout(() => {
    changeNoti((index + 1) % message.length);
  }, 3000);
}