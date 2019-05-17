const app = new Vue({
    el: "#app",
    data: {
        min: 1,
        max: 100,
        number: 1,
        number2: 1,
        number3: 1,
        score: 0,
        random: 1,
        hp: 5,
        frontpage:true,
        game:false,
        losepage:false,
    },
    watch: {
        hp : "mati"
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
        mati:function(){
            if (this.hp == 0) {
                this.losepage = true
                this.game = false
                this.score = 0
            }
        },
        kembali:function(){
            this.losepage = false
            this.frontpage = true
        },
        start:function(){
            this.frontpage = false
            this.game = true
            this.getInput()
        },
        benar: function () {
            this.score = this.score + 10
            this.getInput()
        },
        salah: function () {
            this.score = this.score - 5
            this.hp = this.hp - 1
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
