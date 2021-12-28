function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

const app = new Vue({
    el: '#app',

    data: {
        isGame: false,
        dictionaries: [
            {
                name: 'Словарь ну уж ну уж уж ну ну каких сложных слов',
                desc: 'Термины, сложносоставные и просто редкие слова',
                difficulty: 'Очень сложно',
                words: [
                    'Риелтор',
                    'Бюллетень',
                    'Дуршлаг',
                    'Гастарбайтер',
                    'Винегрет',
                    'Буллинг',
                    'Именитый',
                    'Достопримечательность',
                    'Человеконенавистничество',
                    'Человеколюбие',
                    'Частнопредпринимательский',
                    'Рентгеноэлектрокардиографический',
                    'Вагоностроение',
                    'Верноподданный',
                    'Вероучение',
                    'Веротерпимость',
                    'Иглоукалывание',
                    'Упирающийся',
                    'Даздраперма',
                    'Стиляга',
                    'Эталон',
                    'Борона',
                    'Орач',
                    'Хоругвь',
                    'Ламинария',
                    'Магнитный резонанс',
                    'Корнишон',
                    'Джава-скрипт',
                    'Адронный коллайдер',
                    'Гипербола',
                    'Мародёр',
                    'Обломовщина',
                    'Робинзонада',
                    'Робинзоненада',
                    'Социология',
                    'Профанация',
                    'Корнеплод',
                    'Афикс',
                    'Гамбит',
                    'Субконтрабас',
                    'Вепрь',
                    'Костёл',
                    'Сквернословие',
                    'Сольфеджио',
                    'Зарница',
                    'Баснописец',
                    'Алегория',
                    'Полутон',
                    'Кварто-квинтовый круг ',
                    'Фрейлина',
                    'Фок-гик',
                    'Ахтерпик',
                    'Полиэфир',
                    'Астролябия',
                    'Шизойд',
                    'Филантропия',
                    'Автотроф',
                    'Дегенерация',
                    'Регенерация',
                    'Иудаизм',
                    'Коловрат',
                    'Фюзеляж',
                    'Мимикрия',
                    'Реакреация',
                    'Алгоритмизация',
                    'Суборденация',
                    'Программирование',
                    'Пантеон',
                    'Патент',
                    'Трубочист',
                    'Картофель',
                    'Любовь',
                    'Молекулярная физика',
                    'Лагерь',
                    'Никитазининофобия',
                    'Матвеяклинковофобия',
                    'Мультиинструменталист',
                    'Патлатый',
                    'Растамания',
                    'Теология',
                    'Дешевка',
                    'Симфония',
                    'Зоб',
                    'Ворожба',
                    'Казуар',
                    'Величайший',
                    'Аскетизм',
                    'Гуглофобия',
                    'Смолокурня',
                    'Ария',
                    'Волейбол',
                    'Лох',
                    'Чистовик',
                    'Нацизм',
                    'Базофобия',
                    'Икона',
                    'Хостинг',
                    'База данных',
                    'Профилактика',
                    'Алгебра логики'
                ],
            },
        ],
        // teams: [
        //     {
        //         url: 'https://pngimg.com/uploads/crab/crab_PNG44.png',
        //         name: 'Крабики',
        //     },
        //     {
        //         url: 'http://pngimg.com/uploads/orange/small/orange_PNG803.png',
        //         name: 'Апельсинчики',
        //     },
        //     {
        //         url: '../img/olen.png',
        //         name: 'Рогатые',
        //     }
        // ],

        gameSettings: {
            dictionary: 'Словарь не выбран',
            dictionaryWords: [],
            // teams: [],
            roundTime: 60,
        }
    },

    methods: {
        plusRoundTime () { this.gameSettings.roundTime += 30; },

        minusRoundTime() {
            if (this.gameSettings.roundTime > 30) this.gameSettings.roundTime -= 30;
        },

        chooseDictionary(dictionary) {
            this.gameSettings.dictionary = dictionary;
        },

        // chooseTeam(team) {
        //     this.gameSettings.teams.push({
        //         name: team.name,
        //         url: team.url
        //     });
        // },

        startGame() { 
            let dictionary = this.gameSettings.dictionary;
            let dictionaryWords = [];

            if (dictionary != 'Словарь не выбран') {
                this.isGame = true;

                this.dictionaries.forEach((elem) => {
                    if (elem.name == dictionary)
                        dictionaryWords = elem.words;
                })

                shuffle(dictionaryWords);

                dictionaryWords.forEach((elem) => {
                    swiper.appendSlide(`<div class="swiper-slide">${elem}</div>`)
                })
            }
        }
    }
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
});