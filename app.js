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
            this.notes.push(this.inputValue);
            this.inputValue='';
        },
        remove(idx) {
            this.notes.splice(idx, 1)

        }
    }

}

Vue.createApp(App).mount('#app')