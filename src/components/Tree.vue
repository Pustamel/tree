<script
  setup
  lang="ts"
>
import {initialEdges, initialNodes} from '@/components/initial-elements.js'
import {ref} from "vue";
import {ControlButton, Controls} from '@vue-flow/controls'
import {VueFlow, useVueFlow, Position} from '@vue-flow/core'
import {Background} from '@vue-flow/background'

import Icon from './Icon.vue'
import OneItem from "@/components/NodeItem.vue";
import ToolbarItem from "@/components/ToolbarItem.vue";

const {onInit, onNodeDragStop, onConnect, addEdges, setViewport, toObject} = useVueFlow()

const nodes = ref(initialNodes)

const edges = ref(initialEdges)

// our dark mode toggle flag
const dark = ref(false)

onInit((vueFlowInstance) => {
  vueFlowInstance.fitView()
})

onNodeDragStop(({event, nodes, node}) => {
  console.log('Node Drag Stop', {event, nodes, node})
})

onConnect((connection) => {
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

/**
 * toObject transforms your current graph data to an easily persist-able object
 */
function logToObject () {
  console.log(toObject())
}

/**
 * Resets the current viewport transformation (zoom & pan)
 */
function resetTransform () {
  setViewport({x: 0, y: 0, zoom: 1})
}

function toggleDarkMode () {
  dark.value = !dark.value
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
  >
    <template #node-menu="props">
      <ToolbarItem :id="props.id" :data="props.data" />
    </template>

    <template #node-input>
      <OneItem />
    </template>
    <template #node-default>
      <OneItem />
    </template>
    <template #node-output>
      <OneItem />
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