window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre');
    let songName = document.getElementById('name');
    let author = document.getElementById('author');
    let createdDate = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');
    let counter = Number(document.querySelector('div.likes p').textContent.split(': ')[1]);
    counter = 0;
    let collection = document.getElementsByClassName('all-hits-container');
    addBtn.addEventListener("click", addSongInfo);
    function addSongInfo(e) {
        e.preventDefault();
        if (genre.value !== '' && songName.value !== '' && author.value !== '' && createdDate.value !== '') {
            let songInfo = document.createElement('div');
            songInfo.className = 'hits-info';

            let img = document.createElement('img');
            img.src = './static/img/img.png';
            songInfo.appendChild(img);

            let genreHeading = document.createElement('h2');
            genreHeading.textContent = `Genre: ${genre.value}`;
            songInfo.appendChild(genreHeading);

            let songHeading = document.createElement('h2');
            songHeading.textContent = `Name: ${songName.value}`;
            songInfo.appendChild(songHeading);

            let authorHeading = document.createElement('h2');
            authorHeading.textContent = `Author: ${author.value}`;
            songInfo.appendChild(authorHeading);

            let dateHeading = document.createElement('h3');
            dateHeading.textContent = `Date: ${createdDate.value}`;
            songInfo.appendChild(dateHeading);

            let saveBtn = document.createElement('button');
            saveBtn.className = 'save-btn';
            saveBtn.textContent = 'Save song';
            songInfo.appendChild(saveBtn);
            saveBtn.addEventListener("click", saveSong);

            let likeBtn = document.createElement('button');
            likeBtn.className = 'like-btn';
            likeBtn.textContent = 'Like song';
            songInfo.appendChild(likeBtn);
            likeBtn.addEventListener("click", increaseLikes);

            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            songInfo.appendChild(deleteBtn);
            deleteBtn.addEventListener("click", deleteSong);

            let inputs = Array.from(document.querySelector('form'));
            for (let input of inputs) {
                input.value = '';
            }
            collection[0].appendChild(songInfo);
        }
    }

    let likes = document.querySelector('div.likes p');
    let text = document.querySelector('div.likes p').textContent.split(': ')[0];

    function increaseLikes(e) {
        counter++;
        likes.textContent = `${text}: ${counter}`;
        e.currentTarget.disabled = true;
    }

    function saveSong(e) {
        let songToSave = e.currentTarget.parentNode;
        let savedSongs = document.getElementsByClassName('saved-container')[0];

        savedSongs.appendChild(songToSave);
        let saveBtn = e.currentTarget.parentNode.children[5];
        let likeBtn = e.currentTarget.parentNode.children[6];

        songToSave.removeChild(saveBtn);
        songToSave.removeChild(likeBtn);
    }

    function deleteSong(e) {
        let parentDiv = e.currentTarget.parentNode.parentNode;
        let songToDelete = e.currentTarget.parentNode;
        parentDiv.removeChild(songToDelete);
        // counter--;
        // likes.textContent = `${text}: ${counter}`;
    }
}