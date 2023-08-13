const baseUrl = "https://api.rawg.io/api/";

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  }
  return day;
};

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  }
  return month;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const previousDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//API endpoints
const popularGames = `games?dates=${previousDate},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?dates=${currentDate},${nextDate}&ordering=-added&page_size=10`;
const newGames = `games?dates=${previousDate},${currentDate}&ordering=-released&page_size=10`;


//API URL's
export const popularGamesUrl = `${baseUrl}${popularGames}&key=${
  import.meta.env.VITE_APP_API_KEY
}`;
export const upcomingGamesUrl = `${baseUrl}${upcomingGames}&key=${
  import.meta.env.VITE_APP_API_KEY
}`;
export const newGamesUrl = `${baseUrl}${newGames}&key=${
  import.meta.env.VITE_APP_API_KEY
}`;
export const gameUrl = (id) => `${baseUrl}games/${id}?key=${
  import.meta.env.VITE_APP_API_KEY
}`;
export const gameScreenshotsUrl = (id) => `${baseUrl}games/${id}/screenshots?key=${
  import.meta.env.VITE_APP_API_KEY
}`;
export const gameSearchedUrl = (game_name) => `${baseUrl}games?search=${game_name}&key=${
  import.meta.env.VITE_APP_API_KEY
}`;
