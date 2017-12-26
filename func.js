var ns = (navigator.appName == 'Netscape');
var gen3 = (parseInt(navigator.appVersion) >= 3 && parseInt(navigator.appVersion) < 4);
var ns4 = (ns && parseInt(navigator.appVersion) >= 4 && parseInt(navigator.appVersion) < 5);
var ie = (navigator.appName == 'Microsoft Internet Explorer');
var ie3 = (ie && navigator.appVersion < 4);
var ie4 = (ie && parseInt(navigator.appVersion) >= 4);
var docom = (document.getElementById);
var win2k = (navigator.userAgent.indexOf('Windows NT 5.0') != -1);
var ie4mac = (ie && !docom && navigator.userAgent.indexOf('Macintosh') != -1);
var dhtmlBrowser = (ie4 || ns4 || docom);
var win31 = (navigator.appVersion.indexOf("Win16") != -1)
var SHOW, HIDE;

if (ie4 || docom) {
  SHOW = "visible";
  HIDE = "hidden";
} else if (ns4) {
  SHOW = "show";
  HIDE = "hide";
}

function mailAddressIsValid(mailAddress)
{
  var atPresent=false;
  var dotPresent=false;
  for(var i=0; i < mailAddress.length; i++)  {
    var c = mailAddress.substring(i,i+1);
    if(c == '@') 
      atPresent=true;
    if(c == '.')
      dotPresent=true;
  }
  if(atPresent == true && dotPresent == true)
    return true;
  else 
    return false;
}

DW=(ns)?14:20
DH=(ns)?16:24

function showpic(p, w, h)
{
 w += DW;
 h += DH;
 winname = w + h;
 PicWin = window.open(p, winname, 'width=' + w + ', height=' + h + ', resizable=0, dependent=1');
 PicWin.focus();
}

function nw(w,h,name,id)
{  
//  str = "toolbar=no,directories=no,location=no,menubar=no,status=no,toolbar=no,scrollbars=yes";
  str = "toolbar=no,directories=no,location=no,menubar=no,status=no,toolbar=no,scrollbars=no";
  str += ",width=" + (w+35) + ",height=" + (h+120);
  newW = window.open(name,"NewWindow"+id,str);
  newW.focus();
}

function cli(f)
{
    img = new Image();
    img.src = '/altai/click.php?f=' + f;
}

function cli_b(b)
{
    img = new Image();
    img.src = '/altai/click_b.php?b=' + b;
}
function cli_b2(rek_page_id)
{
    img = new Image();
    img.src = '/altai/click_b2.php?rek_page_id=' + rek_page_id;
//    alert("rek_page_id=" + rek_page_id + " " + img.src);
}
