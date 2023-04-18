const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

//book1
const book1 = document.getElementById('book1')
const status1 = book1.querySelector('.status')
const reserve1 = book1.querySelector('.reserve')
const checkout1 = book1.querySelector('.checkout')
const checkin1 = book1.querySelector('.checkin')

//book2
const book2 = document.getElementById('book2')
const status2 = book2.querySelector('.status')
const reserve2 = book2.querySelector('.reserve')
const checkout2 = book2.querySelector('.checkout')
const checkin2 = book2.querySelector('.checkin')

//book3
const book3 = document.getElementById('book3')
const status3 = book3.querySelector('.status')
const reserve3 = book3.querySelector('.reserve')
const checkout3 = book3.querySelector('.checkout')
const checkin3 = book3.querySelector('.checkin')

//change buttons in accordance to status
checkin1.style.color = '';
status1.style.color = STATUS_MAP[status1.textContent].color;
reserve1.disabled = !STATUS_MAP[status1.textContent].canReserve;
checkout1.disabled = !STATUS_MAP[status1.textContent].canCheckout;
checkin1.disabled = !STATUS_MAP[status1.textContent].canCheckIn;

checkin2.style.color = '';
status2.style.color = STATUS_MAP[status2.textContent].color;
reserve2.disabled = !STATUS_MAP[status2.textContent].canReserve;
checkout2.disabled = !STATUS_MAP[status2.textContent].canCheckout;
checkin2.disabled = !STATUS_MAP[status2.textContent].canCheckIn;

checkin3.style.color = '';
status3.style.color = STATUS_MAP[status3.textContent].color;
reserve3.disabled = !STATUS_MAP[status3.textContent].canReserve;
checkout3.disabled = !STATUS_MAP[status3.textContent].canCheckout;
checkin3.disabled = !STATUS_MAP[status3.textContent].canCheckIn;
