class TravelServiceApi {
    static getUser() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign({}, {
                    email : "anhthuc@gmail.com",
                }))
            },1500)
        })
    }

    static getDeparture(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign({}, {
                    userID : user.email,
                    flightID : "AR1973",
                    date : "10/27/2016 16:00PM"
                }))
            },2000)
        })
    }

    static getFlight(flightID) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign({}, {
                    id: flightID,
                    pilot: "Jhonny Bravo",
                    plane: {
                        make: "Boeing 747 RC",
                        model: "TA-889"
                    },
                    state: "onTime"
                }))
            },2500)
        })
    }

    static getForecast(date) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign({}, {
                    date: date,
                    forecast: "rain"
                }))
            },3000)
        })
    }
}

export default TravelServiceApi;