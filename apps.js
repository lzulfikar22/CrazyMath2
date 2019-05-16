const app = new Vue({
    el: "#app",
    data: {
        min: 1,
        max: 10,
        number: 1,
        number2: 1,
        number3: 1,
        score: 0,
        random: 1,
    },
    watch: {
        isi: "ketik"
    },

    computed: {
        jumlah: function () {
            return this.number + this.number2
        },

        pengecoh: function () {
            return this.jumlah - this.number3
        }
    },
    methods: {

        benar: function () {
            this.score = this.score + 10
            this.getInput()
        },
        salah: function () {
            this.score = this.score - 5
            this.getInput()
        },
        // Untuk tombol random
        getInput: function () {
            this.getRandomNumber()
        },

        // Bila di aktif, maka di random
        getRandomNumber: function () {
            this.number = this.generateNumber()
            this.number2 = this.generateNumber()
            this.number3 = this.generateNumber()
            this.random = this.leftRight()
        },
        // Fungsi untuk random
        generateNumber: function () {
            return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        },
        leftRight: function () {
            return Math.floor(Math.random() * (2 - 1 + 1) + 1);
        },
    }
})