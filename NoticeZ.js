"use strict";
/*Basic animation*/
function animateOut(el,animation){
	el.className += " animated " + animation;
}

function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}

function createContent(title,body,font,state,id)
{
	var icon = {
		"success" : "<i class='fa fa-check'></i>",
		"warning"   : "<i class='fa fa-times'></i>",
		"info"    : "<i class='fa fa-info'></i>",
		"default" : ""
	};
	var theme = {
		"success" : 'background-color: #2ecc71; color: white;',
		"warning"   : 'background-color: #e74c3c; color: white;',
		"info"    : 'background-color: #3498db; color: white;',
		"default" : 'background-color: #bdc3c7; color: white;'
	};
	var size = {
		"success" : "30%",
		"warning"   : "30%",
		"info"    : "30%",
		"default" : "0%"
	};
	var html = ""; 
	html += "<div class='noticeBox' id='" + id + "' style='" + theme[state] + ";font-family: "+ font + "'>";
	html += "   <div class='left' style='width: " + size[state] + "'>";
	html +=         icon[state];
	html += "   </div>";
	html += "   <div class='right'>";
	html += "       <span class='Ztitle'>";
	html +=              title;
	html += "       </span><br>";
	html += "       <span class='Zbody'>";
	html +=              body;
	html += "       </span>";
	html += "   </div>"
	html += "</div>";
	return html;
}
function noticeZ(opt)
{
	var title = opt.title;
	var body  = opt.body;
	var position = opt.position != undefined ? opt.position : "topRight";
	var timeout = opt.time != undefined ? opt.time : 3000;
	var state   = opt.state != undefined ? opt.state : "default";
	var id      = "" + document.getElementsByClassName("noticeBox").length;
	var animate = opt.animate != undefined ? opt.animate : "fadeOut";
	var font    = opt.font != undefined ? opt.font : "Arial";
	var content = createContent(title,body,font,state,id);
	content = htmlToElements(content);
	if(document.getElementsByClassName(position).length == 0)
	{
		var CDiv = document.createElement("div");
		CDiv.className = "nContent " + position;
		CDiv.appendChild(content[0]);
		document.body.appendChild(CDiv);
	}
	else
	{
		document.getElementsByClassName(position)[0].appendChild(content[0]);
	}

	setTimeout(function(){
		animateOut(document.getElementById(id),animate);
		setTimeout(function(){
			document.getElementsByClassName(position)[0].removeChild(document.getElementById(id));
		},1010);
	},timeout);
}