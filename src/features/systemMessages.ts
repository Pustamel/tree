import {Notify} from "quasar";
import {useSystemMessagesStore} from "@/stores/systemMessagesStore";
import {computed, watch} from "vue";
import {errorSound, successSound} from "@/shared/helpers/sound";

export function useMessages () {
  const messagesStore = useSystemMessagesStore()
  const messages = computed(() => messagesStore.$state.messages);

  let dismiss

  watch(messages.value, () => {
    dismiss = null
    dismiss = messages.value.map((item) => {
      const timeMessage = 5000 // the same in Quasar

      if (item.typeMessage === 'negative') {
        errorSound.play().catch()
      } else {
        successSound.play().catch()
      }

      setTimeout(() => {
        messagesStore.hideMessage(item.title)
      }, timeMessage)

      const actions = [
        {label: 'закрыть', color: 'white', handler: () => messagesStore.hideMessage(item.title)}
      ]
      return Notify.create({message: item.title, position: 'bottom-right', type: item.typeMessage, actions})
    })
  })

  return {
    messages,
  };
}
