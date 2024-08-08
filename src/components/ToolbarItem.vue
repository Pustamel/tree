<script setup>
import { Handle, Position, useVueFlow } from '@vue-flow/core'
import { NodeToolbar } from '@vue-flow/node-toolbar'
import NodeItem from '@/components/NodeItem.vue'

const props = defineProps(['id', 'data'])

const { updateNodeData } = useVueFlow()
</script>

<template>
  <NodeToolbar
    class="toolbar"
    offset="1"
    :is-visible="data.toolbarVisible"
    :position="data.toolbarPosition"
  >
    <div>
      <q-btn
        size="xs"
        round
        flat
        icon="add"
      />
      <q-btn
        size="xs"
        round
        flat
        icon="edit"
      />
    </div>
  </NodeToolbar>

  <NodeItem/>

  <Handle
    type="target"
    :position="Position.Left"
  />
  <Handle
    type="source"
    :position="Position.Right"
  />
</template>

<style>
  .vue-flow__node-toolbar {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: #ffffff;
    padding: 8px;
    border-radius: 8px;
    /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);*/
  }
  .vue-flow__node-menu {
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .vue-flow__node-menu.selected {
    box-shadow: 0 0 0 2px #2563eb;
  }
</style>

<style>
  .vue-flow__node-menu {
    padding: 0 !important;
  }
</style>