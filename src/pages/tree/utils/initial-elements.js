import { Position } from '@vue-flow/core'

const position = { x: 0, y: 0 }

export const initialNodes = [
  {
    id: '1',
    type: 'menu',
    data: { label: 'Папа', toolbarPosition: Position.Top  },
    position,
    draggable: false,
    class: 'light'
  },
  {
    id: '2',
    type: 'menu',
    data: { label: 'Мама', toolbarPosition: Position.Top },
    position,
    draggable: false,
    class: 'light',
  },
  {
    id: '3',
    type: 'menu',
    data: { label: 'Ребенок 3', toolbarPosition: Position.Top},
    position,
    draggable: false,
    class: 'light',
  },
]

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '3', type: 'step', animated: false },
  { id: 'e5-8', source: '2', target: '3', type: 'step', animated: false },
]