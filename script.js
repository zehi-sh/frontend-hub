//class
class iusuu {
    constructor(make, enteshar, selling, off) {
        this.make = make,
            this.enteshar = enteshar,
            this.selling = selling,
            this.off = off;
    }
    calcutPrice(info) {
        let price;
        let base = 200000;
        let make = info.make
        switch (make) {
            case '1':
                price = base * 1.4
                break;
            case '2':
                price = base * 1.5
                break;

            case '3':
                price = base * 1.02
                break;
            case '4':
                price = base * 1.07
                break;

        }
        let enteshar = info.enteshar;
        if (enteshar == 'fatemi') {
            price = price * 3
        } else if (enteshar == 'agah') {
            price = price * 12
        } else {
            price = price * 2
        }


        let selling = info.selling;
        if (selling == 'sell') {
            price = price * (3 / 4)
        } else {
            price = price * 1;
        }
        return price

    }
}

class show{ 
showprice(price,info){
    let result=document.querySelector('#result')
let make=info.make;
switch (make) {
    case '1':
        make='روانشناسی'
        break;
    case '2':
        make='علمی'
        break;

    case '3':
        make='رمان'
        break;
    case '4':
        make='انگیزشی'
        break;

}
let enteshar=info.enteshar
        if (enteshar == 'fatemi') {
            enteshar='فاطمی'
        } else if (enteshar == 'agah') {
            enteshar='اگاه'
        } else {
           enteshar='اریاناقلم'
        }

        let selling = info.selling;
        if (selling == 'sell') {
          selling='شما حق چاپ خود را فروخته اید!'
        } 
        else{
            selling='حق چاپ کتاب فقط باخودشماست:)'
        }

        let off = info.off;
        switch (off) {
            case '1':
              off='شما در چاپ بعدی کتاب خود 10% تخفیف دارین'
                break;
            case '2':
                off='شما در چاپ بعدی کتاب خود 20% تخفیف دارین'
                break;
            case '3':
                off='شما در چاپ بعدی کتاب خود 30% تخفیف دارین'
                break;
            case '4':
                off='شما در چاپ بعدی کتاب خود 40% تخفیف دارین'
                break;

        }

result.innerHTML=`
<p>موضوع کتاب شما : ${make}</p>
<p>انتشارات : ${enteshar}</p>
<p>${selling}</p>
<p>${off}</p>
<p>قیمت نهایی:4${price}</p>
`
 
}

   
}

//variable
let form = document.querySelector('form');


//eventlistener
eventlistener()

function eventlistener() {
    document.addEventListener('DOMContentLoaded', function () {
        form.addEventListener('submit', function (e) {
            e.preventDefault()
            let make = document.querySelector('#make').value;
            let enteshar = document.querySelector('input[name="smile"]:checked').value;
            let selling = document.querySelector('input[name="holo"]:checked').value;
            let off = document.querySelector('#off').value;
            let iusuus = new iusuu(make, enteshar, selling, off);
            let price=iusuus.calcutPrice(iusuus);
            let im=document.querySelector('#im')
            im.style.display='block';
            setTimeout(() => {
            im.style.display='none';
            result.style.display='block'
           }, 3000); 
           let shows=new show()
            shows.showprice(price,iusuus)
            result.style.display='none'
            
        })
    })
}