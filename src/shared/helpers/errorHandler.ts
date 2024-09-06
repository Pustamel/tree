import {useSystemMessagesStore} from "@/stores/systemMessagesStore";

export default function errorHandler (errors) {
  const messagesStore = useSystemMessagesStore()
  for (let error in errors) {
    messagesStore.addMessage({title: errors[error], typeMessage: 'negative'})
  }
}