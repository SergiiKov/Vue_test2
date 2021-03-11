const App = {
    data() {
        return {
            plaseholderString: 'input text',
            title: 'Title',
            inputValue: '',
            notes: ['123']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNote() {
            this.notes.push(this.inputValue)
        }
    }

}

Vue.createApp(App).mount('#app')