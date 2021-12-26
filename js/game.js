function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

const app = new Vue({
    el: '#app',

    data: {
        isGame: false,
        dictionaries: [
            {
                name: 'Словарь ну ебать уж каких сложных слов',
                desc: 'Термины, сложносоставные и просто редкие слова',
                difficulty: 'Очень сложно',
                words: [
                    'Легитимность',
                    'Риелтор',
                    'Бюллетень',
                    'Дуршлаг',
                    'Гастарбайтер',
                    'Винегрет',
                    'Буллинг',
                ],
            },
            {
                name: 'Простые слова',
                desc: 'Словарь для детей и школьников младших классов',
                difficulty: 'kids',
                words: [],
            }
        ],
        teams: [
            {
                url: 'https://pngimg.com/uploads/crab/crab_PNG44.png',
                name: 'Крабики',
            },
            {
                url: 'http://pngimg.com/uploads/orange/small/orange_PNG803.png',
                name: 'Апельсинчики',
            },
            {
                url: '../img/olen.png',
                name: 'Рогатые',
            }
        ],

        gameSettings: {
            dictionary: 'Словарь не выбран',
            dictionaryWords: [],
            teams: [],
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

        chooseTeam(team) {
            this.gameSettings.teams.push({
                name: team.name,
                url: team.url
            });
        },

        startGame() { 
            let dictionary = this.gameSettings.dictionary;
            let dictionaryWords = [];

            if (dictionary != 'Словарь не выбран' && this.teams.length != 0) {
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