import { Urls } from "../constants";
//import your action creators used by dispatchers to alter your global state.
import { fetchData, fetchDataFulfilled, fetchDataRejected } from "./Actions";

export const getData = () => {
    //IN order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
        //Then perform your asynchronous operations.
        try {
            //Have it first fetch data from our starwars url.
            const starWarsPromise = await fetch(Urls.BaseUrl+'/list');
            dispatch(fetchData(true));
            //Then use the json method to get json data from api/
            const data = await starWarsPromise.json();
            console.log('Data:', data);
            //Now when the data is retrieved dispatch an action altering redux state.
            dispatch(fetchDataFulfilled(data))
          } catch(error) {
            console.log('Getting data Error:', error);
            dispatch(fetchDataRejected(error))
          }
    }
}