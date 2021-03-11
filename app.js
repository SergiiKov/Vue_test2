const App = {
    data() {
        return {
            plaseholderString: 'input text',
            title: 'Title',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },
        addNote() {
           if(this.inputValue !== '') {
            this.notes.push(this.inputValue);
            this.inputValue='';
           } 
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        remove(idx) {
            this.notes.splice(idx, 1)

        }
    },
    computed: {
        doblecount() {
          return this.notes.length *2  
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
            console.log('input Value change', value)

        } 
    }

}

Vue.createApp(App).mount('#app')