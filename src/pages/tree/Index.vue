<script
  setup
  lang="ts"
>
// @ts-ignore
import {initialEdges, initialNodes} from '@/pages/tree/utils/initial-elements.js'
import {nextTick, ref} from "vue";
import {ControlButton, Controls} from '@vue-flow/controls'
import {VueFlow, useVueFlow, Position} from '@vue-flow/core'
import {Background} from '@vue-flow/background'
import Icon from '@/pages/tree/utils/Icon.vue'
import ToolbarItem from "@/pages/tree/components/ToolbarItem.vue";
// @ts-ignore
import {useLayout} from '@/pages/tree/utils/useLayout.js'
// @ts-ignore
import {useRunProcess} from '@/pages/tree/utils/useRunProcess.js'
import Header from "@/pages/tree/components/Header.vue";
import type { Kinship as KinshipType} from "@/pages/tree/utils/types";

const {onInit, onConnect, addEdges, toObject, fitView} = useVueFlow()
const {graph, layout} = useLayout()
const cancelOnError = ref(true)
const {stop, reset} = useRunProcess({graph, cancelOnError})

const nodes = ref(initialNodes.slice())
const edges = ref(initialEdges.slice())
const dark = ref(false)


onInit((vueFlowInstance) => {
  vueFlowInstance.fitView()
})

onConnect((connection) => {
  console.log('connection:', connection)
  addEdges(connection)
})

function logToObject () {
  console.log(toObject())
}

function createKinship (current: KinshipType & {id: unknown, data: { label: string, toolbarPosition: string } }):void {
  const role = current.role
  const currentId = current.id

  const newId = Date.now().toString()

  nodes.value.push({
    id: newId,
    type: 'menu',
    data: {label: current.title, toolbarPosition: Position.Bottom},
    position: {x: 0, y: 0},
    class: 'light',
    draggable: false,
  })

  if (role === 'child') {
    const newIdEdge = newId
    edges.value.push({
      id: 'e1-2' + newIdEdge,
      source: currentId,
      type: 'step',
      target: newId,
    })
  } else {
    edges.value.push({
      id: 'e1-2' + newId + 1,
      source: newId,
      type: 'step',
      target: currentId,
      animated: false
    },)
  }
}


async function layoutGraph (direction: string) {
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
    <Header/>
    <template #node-menu="props">
      <ToolbarItem
        @create="createKinship"
        :id="props.id"
        :data="props.data"
      />
    </template>

    <Background
      pattern-color="#000000"
      :gap="16"
      bgColor="#d1e8ff"
    />

    <Controls
      class="controls"
      position="top-left"

    >
      <ControlButton
        title="Log `toObject`"
        @click="logToObject"
      >
        <Icon name="log"/>
      </ControlButton>
    </Controls>
  </VueFlow>
</template>

<style
  scoped
  lang="scss"
>
  .basic-flow {
    width: 100%;
    height: 100vh;
  }
</style>

<style lang="scss">
  /* import the necessary styles for Vue Flow to work */
  @import '@vue-flow/core/dist/style.css';

  /* import the default theme, this is optional but generally recommended */
  @import '@vue-flow/core/dist/theme-default.css';
  @import '@vue-flow/controls/dist/style.css';

  .controls > .vue-flow__controls-button {
    width: 40px;
    height: 25px;

    & > svg {
      max-width: 15px;
      max-height: 15px;
    }
  }
</style>