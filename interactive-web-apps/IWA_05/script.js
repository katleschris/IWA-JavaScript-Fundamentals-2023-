FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

let location = 'RSA'
let currency = 'R'
let shipping = 400
let customers = 1

function calcShipping(){
    if (location === 'RSA') { shipping = 400 && currency === 'R' }
    if (location === 'NAM'){ shipping = 600 && currency==='$'}
else {shipping = 800 && currency==='$'}
console.log(currency, shipping)
}

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * 'NONE_SELECTED'
batteries = 35 * 2
pens = 5 * 'NONE_SELECTED' 

usersCost = shoes + toys + shirts + batteries + pens

// free shipping
function freeShipping(){
    if(location == 'RSA' || location == 'NAM' && usersCost >= 1000){
        shipping = 0
    }
    if (shipping = 0 && customers !== 1) { console.log(FREE_WARNING) }

}
calcShipping(location)
freeShipping(usersCost)

// location ='NK' ? console.log(BANNED_WARNING) : console.log('price', currency, usersCost + shipping)

