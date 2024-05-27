// PMC Home Page JavaScript Document

////////// Carousel Script Starts
//DW code start
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_setTextOfLayer(objName,x,newText) { //v4.01
  if ((obj=MM_findObj(objName))!=null) with (obj)
    if (document.layers) {document.write(unescape(newText)); document.close();}
    else innerHTML = unescape(newText);
}
// DW Code end 
var lay_arr= new Array();
lay_arr[0]="Layer1";
lay_arr[1]="Layer2";
lay_arr[2]="Layer3";
lay_arr[3]="Layer4";
lay_arr[4]="Layer5";
lay_arr[5]="Layer6";

var getprop_current;
var getprop_next;
var currentlayer=0;
var nextlayer;
var changer;
var restarts;
var imgtxt;
var imgcounter=1;

function restart_show()
{
restarts=setTimeout("changelayer()",10000);
}


function changelayer()
{
changer=setInterval("dochange()",30000);
}

function dochange(){

getprop_current=document.getElementById(lay_arr[currentlayer]).style
getprop_current.visibility='Hidden';
nextlayer=currentlayer+1;
////////////// counting text updater Starts
if(imgcounter>=6)
{
imgcounter=1;
}
else
{
imgcounter++;
}

imgtxt="Showing image "+imgcounter+" of 6";
MM_setTextOfLayer('imgcount','',imgtxt)
////////////// counting text updater end 
if(nextlayer>=6)
{
nextlayer=0;
getprop_next=document.getElementById(lay_arr[nextlayer]).style
getprop_next.visibility='visible';
currentlayer=nextlayer;
}
else
{
getprop_next=document.getElementById(lay_arr[nextlayer]).style
getprop_next.visibility='visible';
currentlayer=nextlayer;
}

}

function nexts()
{
clearInterval(changer);
clearTimeout(restarts);
getprop_current=document.getElementById(lay_arr[currentlayer]).style
getprop_current.visibility='Hidden';

nextlayer=currentlayer+1;

////////////// counting text updater Starts
if(imgcounter>=6)
{
imgcounter=1;
}
else
{
imgcounter++;
}

imgtxt="Showing image "+imgcounter+" of 6";
MM_setTextOfLayer('imgcount','',imgtxt)
////////////// counting text updater end 

if(nextlayer>=6)
{
nextlayer=0;
getprop_next=document.getElementById(lay_arr[nextlayer]).style
getprop_next.visibility='visible';
currentlayer=nextlayer;
}
else
{
getprop_next=document.getElementById(lay_arr[nextlayer]).style
getprop_next.visibility='visible';
currentlayer=nextlayer;
}
}

function prevs()
{
clearInterval(changer);
clearTimeout(restarts);
getprop_current=document.getElementById(lay_arr[currentlayer]).style
getprop_current.visibility='Hidden';
nextlayer=currentlayer-1;

////////////// counting text updater Starts
if(imgcounter<=1)
{
imgcounter=6;
}
else
{
imgcounter--;
}

imgtxt="Showing image "+imgcounter+" of 6";
MM_setTextOfLayer('imgcount','',imgtxt)
////////////// counting text updater end 

if(nextlayer=="-1")
{
nextlayer=5;
getprop_next=document.getElementById(lay_arr[nextlayer]).style
getprop_next.visibility='visible';
currentlayer=nextlayer;
}
else
{
getprop_next=document.getElementById(lay_arr[nextlayer]).style
getprop_next.visibility='visible';
currentlayer=nextlayer;
}
}
////////// Carousel Script Ends 

////////// About PMC Script Starts //////////

var expandit;
var contractit;
var getprop;
var set_height=0;
var clicked=false;
var countheight;

function expand_tab()
{
var userAgent=navigator.userAgent;
//document.write("User agent is "+ userAgent);
version = parseFloat(userAgent.substring(userAgent.indexOf('Firefox')+8,userAgent.length));
if(version=='1' || version=='2')
{
if(clicked)
{
	getprop=document.getElementById('links_aboutpmc').style
	getprop.height='1px';
	clicked=false;
	document.getElementById('head_aboutpmc').style.backgroundImage = 'url(images/close_aboutpmc_bg.jpg)'; 
}
else
{
	getprop=document.getElementById('links_aboutpmc').style
	getprop.height='420px';
	clicked=true;
	document.getElementById('head_aboutpmc').style.backgroundImage = 'url(images/open_aboutpmc_bg.jpg)'; 
}
}
else if(clicked)
{
clearInterval(expandit);
contractit=setInterval("startclose()",1);
clicked=false;//return false;
document.getElementById('head_aboutpmc').style.backgroundImage = 'url(images/open_aboutpmc_bg.jpg)';
}
else
{
clearInterval(contractit);
expandit=setInterval("startopen()",1);
clicked=true;
document.getElementById('head_aboutpmc').style.backgroundImage = 'url(images/close_aboutpmc_bg.jpg)';
//document.getElementById('head_aboutpmc').style.visibility="visible"
}
}

function startopen()
{

set_height=set_height+10;
getprop=document.getElementById('links_aboutpmc').style
countheight=parseInt(getprop.height)
if(countheight>=420)
{
clearInterval(expandit);
}
else{
getprop.height=set_height;
}


}

function startclose()
{
set_height=set_height-10;
getprop=document.getElementById('links_aboutpmc').style
countheight=parseInt(getprop.height)
if(countheight<=1)
{
clearInterval(contractit);
}
else{
getprop.height=set_height;
}

}


////////// About PMC Script Ends //////////
