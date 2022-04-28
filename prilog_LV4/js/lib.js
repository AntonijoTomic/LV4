function lib(Parametar) {
    this.parametar = Parametar;
    this.el = document.querySelectorAll(this.Parametar);
    lib.prototype.ubaciElement = function (naziv, css, identifikator, tekst)
    {
   
        if(naziv == null || naziv =="")
        {return}
        else
        {
            var dokument = document.createElement(naziv);
            dokument.setAttribute("class", css);
            dokument.setAttribute("id", identifikator);
            dokument.innerHTML=tekst;
        } 
       // var oNaslov = document.getElementById('naslov');
       // oNaslov.appendChild(dokument);
        var oDolje = document.getElementById('idd');
        oDolje.appendChild(dokument);
        
    }
    lib.prototype.DodajKlasu = function (klasa)
    {
        this.el.forEach(element => element.setAttribute("class", klasa));
    }
    lib.prototype.DodajAtribut = function (naziv, vrijednost)
    {
        this.el.forEach(element => element.setAttribute(naziv, vrijednost));
    }
    lib.prototype.Sakrij = function ()
    {
        this.el.forEach(element => element.style.visibility = "hidden");
    }
    lib.prototype.Prikazi = function ()
    {
        this.el.forEach(element => element.style.visibility = "visible");
    }
 
}