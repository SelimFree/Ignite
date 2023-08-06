const baseUrl = "https://api.rawg.io/api/";


const getCurrentDay = () => {
    const day = new Date().getDay()
    if (day < 10) {
        return `0${day}`
    }
    return day
}

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (day < 10) {
        return `0${month}`
    }
    return month
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const previousDate = `${currentYear-1}-${currentMonth}-${currentDay}`
const nextDate = `${currentYear+1}-${currentMonth}-${currentDay}`

//API endpoints
const popularGames = `games/?dates=${previousDate},${currentDate}&ordering=-rating&page_size=10`


//API URL's
const popularGamesUrl = `${baseUrl}${popularGames}&key=${process.env.REACT_API_KEY}`