const App = {
    data() {
        return {
            plaseholderString: 'input text',
            title: 'Title',
            inputValue: ''
        }
    },
    methods: {
        inputChangeHandler() {
            
        }
    }

}

Vue.createApp(App).mount('#app')