FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0

location = 'RSA'
currency = 'R'
shipping = 0
customers = 1

//selecting the number of items
shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED 
usersCost = shoes + toys + shirts + batteries + pens

// shipping cost

if (location == 'RSA' && usersCost < 1000) { 
    shipping = 400 
    currency = 'R'
} 
else if (location === 'NAM' && usersCost < 60){ 
    shipping = 600 
    currency ='$'}
else {
    shipping = 800 
    currency ='$'}

// free shipping
if(location === 'RSA' && usersCost >= 1000){
        shipping = 0
}else if (location === 'NAM' && usersCost >= 60){
    shipping = 0
}

if (shipping == 0 && customers !== 1) { console.log(FREE_WARNING) }

// total cost

totalCost = usersCost + shipping

location ==='NK' ? console.log(BANNED_WARNING) : console.log('price:', currency+totalCost)

