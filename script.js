const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('сколько фильмов ужу посмотрели', '');
    
        while (personalMovieDB == '' || personalMovieDB == null || isNaN(personalMovieDB)) {
            personalMovieDB = +prompt('сколько фильмов ужу посмотрели', ''); 
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('один из фильмов'),
                  b = prompt('на сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length > 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("просмотрено довольно мало фильмов")
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель")
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман")
        } else {
            console.log("произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hideen) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <=3; i++) {
             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

             if (genre === '' || genre == null) {
                 console.log('Вы ввели некоректные данные или не ввели их вовсе');
                 i--;
             } else {
                personalMovieDB.genres[i - 1] = genre;
             }

             
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};



