export { fetchGame, fetchGames, fetchPlatforms, fetchGenres, addGame, updateGame, deleteGame };

const API_PATH    = '/api/';
const END_GAMES   = 'games.php';
const END_SYSTEMS = 'platforms.php';
const END_GENRES  = 'genres.php';

const fetchData = async (endpoint, id = null) => {
    let data = null;
    try {
        const res   = await fetch(API_PATH + endpoint + (id ? `?id=${id}` : ''));
        data  = await res.json();
    }catch(err){
        console.error('Error loading data:', err);
    }
    finally {
        return data;
    }
}

const postData = async (endpoint, data) => {
    let res = null;
    try {
        res = await fetch(API_PATH + endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    }catch(err){
        console.error('Error posting data:', err);
    }
    finally {
        return res;
    }
}

const putData = async (endpoint, id, data) => {
    let res = null;
    try {
        res = await fetch(API_PATH + endpoint + '?id=' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    }catch(err){
        console.error('Error putting data:', err);
    }
    finally {
        return res;
    }
}

const deleteData = async (endpoint, id) => {
    let res = null;
    try {
        res = await fetch(API_PATH + endpoint + '?id=' + id, {
            method: 'DELETE',
        });
    }catch(err){
        console.error('Error deleting data:', err);
    }
    finally {
        return res;
    }
}

const fetchGame      = async (id)       => await fetchData(END_GAMES, id);
const fetchGames     = async ()         => await fetchData(END_GAMES);
const fetchPlatforms = async ()         => await fetchData(END_SYSTEMS);
const fetchGenres    = async ()         => await fetchData(END_GENRES);
const addGame        = async (data)     => await postData(END_GAMES, data);
const updateGame     = async (id, data) => await putData(END_GAMES, id, data);
const deleteGame     = async (id)       => await deleteData(END_GAMES, id);




    




