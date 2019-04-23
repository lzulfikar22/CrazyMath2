const app = new Vue({
    el: "#app",
    data: {
        min: 1,
        max: 10,
        number: 1,
        number2: 1
    },
    methods: {

        // Untuk tombol random
        getInput: function () {
            this.getRandomNumber()
        },

        // Bila di aktif, maka di random
        getRandomNumber: function () {
            this.number = this.generateNumber()
            this.number2 = this.generateNumber()
        },
        // Fungsi untuk random
        generateNumber: function () {
            return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        }
    }
})