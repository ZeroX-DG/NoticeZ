(function(window){
  NoticeZ = function() {
    /**
     * Show the notification by appending it to body
     * @param {Node} notification 
     */
    let showNoti = function (notification){
      document.body.appendChild(notification);
    }
    
    /**
     * re-arrange all the notifications when a notification is removed
     */
    let rearrageNotis = function () {
      // get all the notifications that is same position to the removed noti
      let sameTypeNoticeZClass = "NoticeZ " + options.position.split(" ")[0];
      let notis = document.getElementsByClassName(sameTypeNoticeZClass);
      // if the removed notification is not the last one in the list
      if(notis.length > 0){
        let position = options.position.split(" ");
        let notiHeight = parseInt(notis[0].style.height.replace("px", ""));
        let padding = options.padding;
        for(let i = 0; i < notis.length; i++){
          // i + 1 because the first one need index 1
          // so that when * with padding will result = 20px
          // otherwise, it will result 0px (stick to the top)
          notis[i].style[position[0]] = 
            (i * notiHeight) + (padding * (i + 1)) + "px";
        }
      }
    }

    /**
     * Create a new notification div, based on the provided options
     * @param {String} title 
     * @param {String} content 
     * @param {Object} styles 
     * @param {Object} options 
     */
    let makeNoti = function (title, content, styles, options) {
      let noti = document.createElement("div");
      noti.className = "NoticeZ " + options.position;
      for(let key in styles.notification){
        let styleName = key;
        let styleValue = styles.notification[key];
        noti.style[styleName] = styleValue;
      }
      let titleElement = document.createElement("p");
      let contentElement = document.createElement("p");
      // add text to title and content
      titleElement.innerText = title;
      contentElement.innerText = content;
      // apply style to title and content
      for(let key in styles.title){
        let styleName = key;
        let styleValue = styles.title[key];
        titleElement.style[styleName] = styleValue;
      }
      for(let key in styles.content){
        let styleName = key;
        let styleValue = styles.content[key];
        contentElement.style[styleName] = styleValue;
      }
      // add image if specified
      let imageContainer;
      if(options.image){
        let image = document.createElement("img");
        image.src = options.image;
        image.style.width = "100%";
        image.style.height = "auto";
        imageContainer = document.createElement("div");
        imageContainer.style.width = "30%";
        imageContainer.style.height= "100%";
        imageContainer.style.display = "inline-block";
        imageContainer.style.cssFloat = "left";
        imageContainer.style.marginRight = "5%";
        imageContainer.appendChild(image);
        noti.appendChild(imageContainer);
      }
      // add title and content to notification
      let mainContainer = document.createElement("div");
      if(imageContainer){
        mainContainer.style.width = "65%";
        mainContainer.style.height= "100%";
        mainContainer.style.display = "inline-block";
        mainContainer.style.cssFloat = "left";
      }
      mainContainer.appendChild(titleElement);
      mainContainer.appendChild(contentElement);
      noti.appendChild(mainContainer);
      // set the position of the notice to prevent
      // noti overlaping
      let sameTypeNoticeZClass = "NoticeZ " + options.position.split(" ")[0];
      let notis = document.getElementsByClassName(sameTypeNoticeZClass);
      let notiHeight = parseInt(noti.style.height.replace("px", ""));
      // default variables
      let padding = options.padding;
      let possiblePosition = [
        "top left",
        "top right",
        "bottom left",
        "bottom right"
      ];
      if(possiblePosition.indexOf(options.position) != -1){
        // correct postion
        let position = options.position.split(" ");
        // position[0] could be top or bottom
        // notis.length + 1 because the first one need index 1
        // so that when * with padding will result = 20px
        // otherwise, it will result 0px (stick to the top)
        noti.style[position[0]] = 
          (notis.length * notiHeight) + (padding * (notis.length + 1)) + "px";
        // position[1] could be left or right
        noti.style[position[1]] = padding + "px";
        // events
        noti.onmouseover = events.OnMouseOver;
        noti.onmouseleave = events.OnMouseLeave;
        noti.ondisappear = events.OnDisappear;
        noti.onclick = events.OnClick;
      }
      else{
        console.log(
          "[NoticeZ]: Error ! " +
          "Invalid position '" + options.position + "'"
        );
        return;
      }
      // create a close button if noti is close-able
      if(options.closeAble){
        let closeBtn = document.createElement("span");
        closeBtn.style.position = "absolute";
        closeBtn.style.right = "10px";
        closeBtn.style.top = "10px";
        closeBtn.innerHTML = "&#x26CC;";
        closeBtn.style.cursor = "pointer";
        closeBtn.onclick = function(){
          this.parentElement.remove();
          rearrageNotis();
        }
        noti.appendChild(closeBtn);
      }
      return noti;
    }


    /**
     * code for setting options
     */

    let title, content;
    let styles = {
      notification: {
        background: "#3498db",
        width: "350px",
        height: "150px",
        boxSizing: "border-box",
        background: "#3498db",
        padding: "20px",
        color: "white",
        borderRadius: "0px",
        boxShadow: "0px 10px 20px -2px rgba(0, 0, 0, 0.24)",
        transition: "all 0.4s",
        position: "fixed",
        fontFamily: "Tahoma"
      },
      title: {
        fontSize: "1.5rem",
        marginBottom: "20px",
        fontFamily: "Tahoma",
        marginTop: "0px"
      },
      content: {
        fontSize: "1.1rem",
        lineHeight: "1.5rem",
        fontFamily: "Tahoma"
      }
    };
    let options = {
      position: "bottom right",
      time: 3000,
      padding: 10,
      closeAble: false,
      image: ''
    };
    let events = {};
    let setOptions = function (tempOptions) {
      options.position = tempOptions.position || options.position;
      options.time = tempOptions.time || options.time;
      options.closeAble = tempOptions.canClose || options.closeAble;
      options.image = tempOptions.image || options.image;
      // styles
      // background
      styles.notification.background = 
        tempOptions.background || styles.notification.background;
      // width
      styles.notification.width = 
        tempOptions.width ? tempOptions.width + "px" : 
                            styles.notification.width;
      // height
      styles.notification.height = 
        tempOptions.height ? tempOptions.height + "px" : 
                              styles.notification.height;
      // color
      styles.notification.color = 
        tempOptions.textColor || styles.notification.color;
      // corner
      styles.notification.borderRadius = 
        tempOptions.roundness ? tempOptions.roundness + "px" : 
                            styles.notification.borderRadius;
      // font
      styles.notification.fontFamily = 
        tempOptions.font || styles.notification.fontFamily;
      // titleFont
      styles.title.fontFamily = 
        tempOptions.titleFont || styles.title.fontFamily;
      // contentFont
      styles.title.fontFamily = 
        tempOptions.contentFont || styles.title.fontFamily;
    }
    if (arguments.length == 2){
      // show only title and content
      title = arguments[0];
      content = arguments[1];
    }
    else if(arguments.length == 3){
      // title, content and options
      title = arguments[0];
      content = arguments[1];
      let tempOptions = arguments[2];
      // options
      setOptions(tempOptions)
    }
    else if(arguments.length == 4){
      // with events
      title = arguments[0];
      content = arguments[1];
      let tempOptions = arguments[2];
      setOptions(tempOptions);
      events = arguments[3];
    }

    /**
     * Make notification and display it
     */

    if(title && content){
      // if we have title and content
      // then we can show it
      let notification = makeNoti(title, content, styles, options);
      showNoti(notification);
      // then hide it after a period of time
      setTimeout(function(){
        if(notification.ondisappear)
          notification.ondisappear();
        notification.remove();
        // re-arrange notis
        rearrageNotis();
      }, options.time);
      
      return notification;
    }
    else{
      // otherwise, the developer need
      // to specify title and content
      console.log(
        "[NoticeZ]: Error ! " +
        "Please at least provide the title and content"
      );
    }
  }
  if (typeof module === "object" && 
      module && 
      typeof module.exports === "object") {
    module.exports = NoticeZ;
  }
  else{
    window.NoticeZ = NoticeZ;
    if (typeof define === "function" && define.amd) {
      define("noticez", [], function () { return NoticeZ; });
    }
  }
})(this)