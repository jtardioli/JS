let restaurant = {
    name: 'black squirel',
    guestCapacity: 75,
    guestCount: 0,
    checkAaliability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        if(this.checkAaliability(partySize)) {
            this.guestCount += partySize
            console.log(this.guestCount)
        } else{console.log('Failed')}
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize
        console.log(this.guestCount)
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAaliability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAaliability(4))


