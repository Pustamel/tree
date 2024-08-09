<script setup>
import { Handle, Position, useVueFlow } from '@vue-flow/core'
import { NodeToolbar } from '@vue-flow/node-toolbar'
import NodeItem from '@/pages/tree/components/NodeItem.vue'
import { ref } from 'vue'

const props = defineProps(['id', 'data'])
const addModal = ref(false)
const emit = defineEmits(['create'])

const { updateNodeData } = useVueFlow()

function toggleAdd () {
  addModal.value = !addModal.value
}

function createKinship() {
  emit('create', props)
}

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
        @click="toggleAdd"
      />
      <q-btn
        size="xs"
        round
        flat
        icon="edit"
      />
    </div>
    <q-dialog v-model="addModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Добавить родство</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn @click="createKinship" flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </NodeToolbar>

  <NodeItem :data="data" :id="id"/>

  <Handle
    type="target"
    :position="Position.Top"
  />
  <Handle
    type="source"
    :position="Position.Bottom"
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