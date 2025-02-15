const app = Vue.createApp({
    data() {
        return {
            // Задание 1
            arr: [1, 2, 3],
            // Задание 2
            counter: 0,
            // Задание 3
            newMessage: "",
            sentMessage: "",
        };
    },
    computed: {
        // Сумма элементов массива (задача 1)
        sumOfArray() {
            return this.arr.reduce((sum, num) => sum + num, 0);
        },
    },
    methods: {
        // Увеличение и уменьшение счетчика (задача 2)
        increaseCounter() {
            this.counter += 3;
        },
        decreaseCounter() {
            this.counter -= 4;
        },

        // Отправка сообщения (задача 3)
        sendMessage() {
            this.sentMessage = this.newMessage;
            this.newMessage = ""; // Очистка после отправки
        },
    },
});

app.mount("#app");