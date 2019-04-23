const app = new Vue({
    el: "#app",
    data: {
        min: 1,
        max: 10,
        number: 1,
        number2: 1,
        jumlah: 0,
        score: 0,
        isi: 0,
        jadul : 0,
        jawaban : 0,
    },
    watch: {
        isi: "ketik"
    },
    methods: {
        ketik: function () {
            this.jawaban = this.isi
        },
        // Untuk tombol random
        getInput: function () {
            this.jumlah = this.number + this.number2
            if (this.jadul == this.jumlah){
                this.score = this.score + 5
            } else {
                this.score = this.score
            }
            this.jadul = this.jawaban
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
        },
    }
})