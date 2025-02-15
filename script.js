const app = Vue.createApp({
    data() {
        return {
            group: "ИСпВ-22-1",
            developer: "Киселёва Ксения Сергеевна",
            user: {
                name: "",
                login: "",
                email: "",
                password: ""
            },
            todayDate: new Date()
        };
    },
    methods: {
        getDeveloperNameInUpperCase() {
            return this.developer.toUpperCase();
        },
        formatDate(date) {
            const dd = String(date.getDate()).padStart(2, "0");
            const mm = String(date.getMonth() + 1).padStart(2, "0");
            const yyyy = date.getFullYear();
            return `${dd}/${mm}/${yyyy}`;
        },
        getTomorrowDate() {
            const tomorrow = new Date(this.todayDate);
            tomorrow.setDate(tomorrow.getDate() + 1);
            return this.formatDate(tomorrow);
        }
    },
    computed: {
        formattedTodayDate() {
            return this.formatDate(this.todayDate);
        }
    }
});

app.mount("#app");