import { MarkerType } from '@vue-flow/core'
import { Position } from '@vue-flow/core'

const position = { x: 0, y: 0 }

export const initialNodes = [
  {
    id: '1',
    type: 'menu',
    data: { label: 'Node 1', toolbarPosition: Position.Top  },
    position,
    draggable: false,
    class: 'light'
  },
  {
    id: '2',
    type: 'menu',
    data: { label: 'Node 2', toolbarPosition: Position.Top },
    position,
    draggable: false,
    class: 'light',
  },
  {
    id: '3',
    type: 'menu',
    data: { label: 'Node 3', toolbarPosition: Position.Top},
    position,
    draggable: false,
    class: 'light',
  },
  {
    id: '4',
    type: 'menu',
    data: { label: 'Node 4', toolbarPosition: Position.Top },
    position,
    draggable: false,
    class: 'light',
  },
  {
    id: '5',
    type: 'menu',
    data: { label: 'Node 5', toolbarPosition: Position.Top },
    position,
    draggable: false,
    class: 'light',
  },
]

export const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    type: 'step',
    target: '2',
  },
  {
    id: 'e1-3',
    source: '1',
    type: 'step',
    target: '3',
    markerEnd: MarkerType.ArrowClosed,
  },
  {
    id: 'e4-5',
    type: 'step',
    source: '4',
    target: '5',
    style: { stroke: 'orange' },
    labelBgStyle: { fill: 'orange' },
  },
  {
    id: 'e3-4',
    type: 'smoothstep',
    source: '3',
    target: '4',
  },
]
