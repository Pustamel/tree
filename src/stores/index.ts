import type { App } from 'vue';
import {createPinia} from 'pinia';
import {userTreeStore} from "@/stores/tree";

const pinia = createPinia()

export function setupStore (app: App<Element>) {
  app.use(pinia);

  // глобальная переменная для стора. Доступ к переменным будет таким: $treeStore.tree
  app.config.globalProperties.$treeStore = userTreeStore()
}

export default pinia