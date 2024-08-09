<script
  setup
  lang="ts"
>
import {initialEdges, initialNodes} from '@/pages/tree/utils/initial-elements.js'
import {nextTick, ref} from "vue";
import {ControlButton, Controls} from '@vue-flow/controls'
import {VueFlow, useVueFlow, Position} from '@vue-flow/core'
import {Background} from '@vue-flow/background'

import Icon from './utils/Icon.vue'
import OneItem from "@/pages/tree/components/NodeItem.vue";
import ToolbarItem from "@/pages/tree/components/ToolbarItem.vue";
import { useLayout } from './utils/useLayout'
import { useRunProcess } from './utils/useRunProcess'

const {onInit, onConnect, addEdges, setViewport, toObject, fitView} = useVueFlow()
const { graph, layout } = useLayout()
const cancelOnError = ref(true)
const { run, stop, reset, isRunning } = useRunProcess({ graph, cancelOnError })

const nodes = ref(initialNodes)
const edges = ref(initialEdges)
const dark = ref(false)


onInit((vueFlowInstance) => {
  vueFlowInstance.fitView()
})

onConnect((connection) => {
  console.log('connection:',connection)
  addEdges(connection)
})


function updatePos () {
  nodes.value = nodes.value.map((node) => {
    return {
      ...node,
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
    }
  })
}

function logToObject () {
  console.log(toObject())
}

function resetTransform () {
  setViewport({x: 0, y: 0, zoom: 1})
}

function toggleDarkMode () {
  dark.value = !dark.value
}

function createKinship(current) {
  const currentId = current.id
  const lastNode = nodes.value[nodes.value.length - 1]
  const newId = lastNode.id + 1
  nodes.value.push({
    id: newId,
    type: 'menu',
    data: { label: 'Node 6', toolbarPosition: Position.Bottom },
    position: { x: 0, y: 0 },
    class: 'light',
  })

  const lastEdges = edges.value[edges.value.length - 1]
  const newIdEdge = lastEdges.id + 1
  edges.value.push( {
    id: 'e1-2' + newIdEdge + 1,
    source: currentId,
    type: 'step',
    target: newId,
  },)
}


async function layoutGraph(direction) {
  await stop()

  reset(nodes.value)

  nodes.value = layout(nodes.value, edges.value, direction)

  await nextTick(() => {
    fitView()
  })
}

</script>

<template>
  <VueFlow
    :nodes="nodes"
    :edges="edges"
    :class="{ dark }"
    class="basic-flow"
    :default-viewport="{ zoom: 1.5 }"
    :min-zoom="0.2"
    :max-zoom="4"
    fit-view-on-init
    @nodes-initialized="layoutGraph('TD')"
  >
    <template #node-menu="props">
      <ToolbarItem @create="createKinship" :id="props.id" :data="props.data" />
    </template>

    <Background
      pattern-color="#000000"
      :gap="16"
      bgColor="#d1e8ff"
    />

    <Controls position="top-left">
      <ControlButton
        title="Reset Transform"
        @click="resetTransform"
      >
        <Icon name="reset"/>
      </ControlButton>

      <ControlButton
        title="Shuffle Node Positions"
        @click="updatePos"
      >
        <Icon name="update"/>
      </ControlButton>

      <ControlButton
        title="Toggle Dark Mode"
        @click="toggleDarkMode"
      >
        <Icon
          v-if="dark"
          name="sun"
        />
        <Icon
          v-else
          name="moon"
        />
      </ControlButton>

      <ControlButton
        title="Log `toObject`"
        @click="logToObject"
      >
        <Icon name="log"/>
      </ControlButton>
    </Controls>
  </VueFlow>
</template>

<style scoped>
  .basic-flow {
    width: 100%;
    height: 100vh;
  }
</style>

<style>
  /* import the necessary styles for Vue Flow to work */
  @import '@vue-flow/core/dist/style.css';

  /* import the default theme, this is optional but generally recommended */
  @import '@vue-flow/core/dist/theme-default.css';
  @import '@vue-flow/controls/dist/style.css';

</style>