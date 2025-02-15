// Экземпляр Vue для автора
const authorApp = Vue.createApp({
    data() {
        return {
            author: {
                name: "Александр Сергеевич Пушкин",
                age: 37,
            },
        };
    },
});

authorApp.mount("#author-app");

// Экземпляр Vue для книг
const booksApp = Vue.createApp({
    data() {
        return {
            books: [
                { id: 1, title: "Евгений Онегин" },
                { id: 2, title: "Дубровский" },
                { id: 3, title: "Руслан и Людмила" },
            ],
        };
    },
});

booksApp.mount("#books-app");

// Экземпляр Vue с хуками жизненного цикла
const hooksApp = Vue.createApp({
    data() {
        return { message: "Работа с хуками жизненного цикла" };
    },
    beforeCreate() {
        console.log("beforeCreate: Vue экземпляр инициализируется.");
    },
    created() {
        console.log("created: Данные и методы инициализированы.");
    },
    beforeMount() {
        console.log("beforeMount: Готовимся к монтированию DOM.");
    },
    mounted() {
        console.log("mounted: DOM смонтирован.");
    },
    beforeUpdate() {
        console.log("beforeUpdate: Обновление данных.");
    },
    updated() {
        console.log("updated: Данные обновлены в DOM.");
    },
});

hooksApp.mount("#hooks-app");

// Внешние данные
const dataUser = {
    name: "Иван Иванов",
    age: 30,
};

const dataOrder = [
    { id: 101 },
    { id: 102 },
    { id: 103 },
];

// Экземпляр Vue для внешнего объекта dataUser
const userApp = Vue.createApp({
    data() {
        return {
            user: dataUser,
        };
    },
});

userApp.mount("#external-data-user");

// Экземпляр Vue для внешнего массива dataOrder
const orderApp = Vue.createApp({
    data() {
        return {
            orders: dataOrder,
        };
    },
});

orderApp.mount("#external-data-order");