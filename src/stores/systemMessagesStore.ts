import {defineStore} from "pinia";
import {reactive} from "vue";

type Message = {
  title: string,
  typeMessage: 'negative' | 'warning' | 'info' | 'positive'
}

export const useSystemMessagesStore = defineStore('systemMessages', {
  state: () => ({
    messages: reactive([]),
  }),
  actions: {
    addMessage (message: Message) {
      this.messages.push(message)
    },
    hideMessage (title: string) {
      const itemIndex = this.messages.findIndex((item) => item.title === title)
      this.messages.splice(itemIndex, 1)
    }
  },
  getters: {
    getMessages: state => state.messages
  }
})