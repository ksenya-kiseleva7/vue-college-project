const app = Vue.createApp({
    data() {
        return {
            arr: [1, 2, 3, 4, 5],  // Пример массива для первого задания
            counter: 0,            // Счетчик для второго задания
            newMessage: '',        // Входное сообщение для третьего задания
            sentMessage: ''        // Отправляемое сообщение для отображения
        };
    },
    computed: {
        sumOfArray() {
            return this.arr.reduce((sum, num) => sum + num, 0); // Сумма элементов массива
        }
    },
    methods: {
        increaseCounter() {
            this.counter++; // Увеличить счетчик
        },
        decreaseCounter() {
            this.counter--; // Уменьшить счетчик
        },
        sendMessage() {
            this.sentMessage = this.newMessage; // Установить отправленное сообщение
            this.newMessage = ''; // Очистить поле ввода
        }
    }
});

app.mount('#app');