const data = {
    locations: [],
    get location() {
    return this._location
    },
    set location(value) {
        this._location = value.trim
        location.push(this._location)
    }
}

data.location = 'Ottawa'

console.log(data.location)