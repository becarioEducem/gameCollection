import { fetchGame, fetchGames, fetchPlatforms, fetchGenres,
         addGame, updateGame, deleteGame } from '/assets/js/api.js';

document.addEventListener('DOMContentLoaded', async () => {
    //DOM ELEMENTS
    const gameForm    = document.querySelector('#game-form');
    const gamesList   = document.querySelector('#game-list');
    const gamesFilter = document.querySelector('#game-search');
    const dialog      = document.querySelector('#game-dialog');
    const dialogTitle = document.querySelector('#game-dialog-title');
    const formCancel  = document.querySelector('#form-cancel');
    const btnAddGame  = document.querySelector('#game-add');
    var gamesDataList = null;
    var editingId     = null;

    //FETCH DATA FUNCTIONS
    const loadSelectData = async (selectId, fetchFunction) => {
        const select = document.getElementById(selectId);
        const selectData = await fetchFunction();
        select.innerHTML = selectData.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
    }    
    const loadPlatforms = async () => loadSelectData('platform-select', fetchPlatforms);
    const loadGenres    = async () => loadSelectData('genre-select', fetchGenres);
    const loadGames     = async () => gamesDataList = await fetchGames();
    const renderGames   = ()       => {
        const filterValue   = gamesFilter.value.toLowerCase();
        gamesList.innerHTML = '';
        gamesDataList
            .filter(game =>
                game.title.toLowerCase().includes(filterValue) ||
                game.genre.toLowerCase().includes(filterValue) ||
                game.platform.toLowerCase().includes(filterValue)
            )
            .forEach(game => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${game.title}</h3>
                    <img src="${game.cover_url}" alt="${game.title}">
                    <p><strong>Platform:</strong> ${game.platform}</p>
                    <p><strong>Genre:</strong> ${game.genre}</p>
                    <p><strong>Year:</strong> ${game.year}</p>
                    <p><strong>Rating:</strong> ${game.rating}</p>
                    <button data-action="edit" data-id="${game.id}">Edit</button>
                    <button data-action="delete" data-id="${game.id}">Remove</button>
                `;
                gamesList.appendChild(card);
            });
    }

    //EVENT LISTENERS
    //Botó cancel
    formCancel.addEventListener('click', () => dialog.close());
    //Events butons (edit, delete)
    gamesList.addEventListener('click', async (e) => {
        const button = e.target.closest('button');
        if (!button) return;

        const id     = button.dataset.id;
        const action = button.dataset.action;

        if(action === 'edit'){
            bEditGame(id);
        }else if(action === 'delete'){
            bRemoveGame(id);
        }
    });
    //Form submit
    gameForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(gameForm).entries());
        formData.title    = formData.title.trim();
        formData.platform = formData.platform.trim();
        formData.genre    = formData.genre.trim();
        formData.cover    = formData.cover.trim();
        formData.year     = parseInt(formData.year);
        formData.rating   = parseInt(formData.rating);

        if(editingId){
            await updateGame(editingId, formData);
        }
        else{
            await addGame(formData);
        }
        await loadGames();
        renderGames();
        gameForm.reset();
        dialog.close();
        editingId = null;
    });
    //Botó afegir
    btnAddGame.addEventListener('click', async () => {
        editingId = null;
        dialogTitle.textContent = 'New Game';
        gameForm.reset();
        gameForm.platform.value = '';
        gameForm.genre.value    = '';
        dialog.showModal();
    });
    //Entrada de dades al filtre de cerca
    gamesFilter.addEventListener('input', renderGames);
    //Event Botó esborrar
    const bRemoveGame = async (id) => {
        if (!confirm('Are you sure you want to delete this game?')) return;
        await deleteGame(id);
        await loadGames();
        renderGames();
    }
    //Event Botó editar
    const bEditGame = async (id) => {
        const game = await fetchGame(id);
        if (!game) {
            alert('Game not found');
            return;
        }
        gameForm.reset();
        gameForm.platform.value = game.platform_id;
        gameForm.genre.value    = game.genre_id;
        gameForm.title.value    = game.title;
        gameForm.year.value     = game.year;
        gameForm.cover.value    = game.cover_url;
        gameForm.rating.value   = game.rating;
        editingId = game.id;
        dialogTitle.textContent = 'Edit Game';
        dialog.showModal();
    }
    //Expose functions to global scope
    window.bEditGame   = bEditGame;
    window.bRemoveGame = bRemoveGame;

    loadGenres();
    loadPlatforms();
    await loadGames();
    renderGames();

});