# NoticeZ

[![NoticeZ](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/ZeroX-DG/NoticeZ)

NoticeZ is a library for creating web push notification, which means it will creates a html notification using JS then append it to the website body.

## Installation:
You can install it via npm
```
npm install noticez
```
This library can be use for both browser and nodeJs web app.

<br>

```javascript
// for nodejs
let NoticeZ = require('noticez');
NoticeZ('hello', 'this is a notification');

// for browser
<script src='path/to/NoticeZ.js'></script>
<script>
	NoticeZ('hello', 'this is a notification')
</script>
```

## How to use ?

Checkout the documment at:
https://zerox-dg.github.io/NoticeZ/

### Syntax

This is how you call the library

```javascript
NoticeZ( <title> , <content> , <options> )
```

In there:

- title (string) (required) : Indicate the title of the notification
- content (string) (required) : This is the content of the notification
- options (object) (optional) : This is the config for the notification

### Basic notification

To create a basic notification, you will only need to specify the title and content of the notification then let the library do the rest.

```javascript
NoticeZ ("Success", "A task has been successfully executed !")
```

### Custom time and position notification

To customize "time until disappear" of a notification, you can specify the time property in the options.

```javascript
let options = {
  time: 3000 //3secs
}
NoticeZ ( 'Hello' , 'Good bye in 3 secs' , options )
```

To change the position of the notification, the position property has been provided. 
There are 4 different types of position:

- top left
- top right
- bottom left
- bottom right

```javascript
let options = {
  position: 'top right' ,
  time: 5000 // 5 secs
}
NoticeZ ( 'Hello' , 'Good bye in 5 secs' , options )
```

## Contact
viethungax@gmail.com

