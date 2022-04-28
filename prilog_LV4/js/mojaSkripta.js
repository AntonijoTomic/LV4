console.log("dobar dan");
var oLib = new lib("div");
console.log(oLib);
//oLib.ubaciElement("h1", "h1" , "h1", "tekst");
var oLib2 = new lib("p");
//oLib.DodajKlasu("novaklasa");
oLib.DodajAtribut("id","noviId");
//oLib2.Sakrij();
//oLib2.Prikazi();

 localStorage.setItem("Racunarstvo","http://racunarstvo.vuv.hr");
 localStorage.setItem("loomen","http://loomen.vsmti.hr");
 localStorage.setItem("imagine","http://e5.onthehub.com/d.ashx?s=ui4qkso06k");
 localStorage.setItem("studentski_dom","http://studom.vsmti.hr");
 localStorage.setItem("office365","https://outlook.office365.com/owa/?realm=vsmti.hr#path=/mail");

 var olibb = new lib("footer-navigation");


 for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)));
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var link = document.createElement('a');
    var razmak = document.createElement('p');
    ul.appendChild(li);
    li.appendChild(link);
    link.innerHTML = localStorage.key(i);
    link.setAttribute('href', localStorage.getItem(localStorage.key(i)));
    document.getElementsByClassName(olibb.parametar)[0].appendChild(link);
 }