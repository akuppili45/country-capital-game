export const CHANGE_GAME_MODE = "CHANGE_GAME_MODE";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const REQUEST_COUNTRY_DATA = "REQUEST_COUNTRY_DATA";
export const RECEIVE_COUNTRY_DATA = "RECEIVE_COUNTRY_DATA";
export const SCORE = "SCORE";
export const GAME_MODE = {
    START: "START",
    COUNTRY_TO_CAPITAL: "COUNTRY_TO_CAPITAL"
};
export const SELECT_ANSWER = "SELECT_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const GO_TO_NEXT_QUESTION = "GO_TO_NEXT_QUESTION";
export const requestCountries = gameMode => ({type: REQUEST_COUNTRY_DATA, gameMode});

export const receiveCountries = (gameMode, json) => ({
    type: RECEIVE_COUNTRY_DATA,
    gameMode,
    countries: json
});



export const fetchCountries = gameMode => dispatch => {
    //loading sign: dispatch(requestCountries(gameMode));
    
    return fetch('https://restcountries.eu/rest/v2/all').then(results => results.json())
        .then(data => dispatch(receiveCountries(gameMode, data))); //data is array of countries
}
export const goToNextQuestion = number => ({type: GO_TO_NEXT_QUESTION, number});
export const changeGameMode = gameMode => ({type: CHANGE_GAME_MODE, gameMode});
export const showScore = score => ({type: SCORE, score});


