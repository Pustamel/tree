import { defineStore } from 'pinia'

export const userTreeStore = defineStore('tree',  {
  state: () => {
    return {
      treeList: []
    }
  },
  getters: {
    tree: state => state.treeList
  }
})
