<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const editor = ref<HTMLElement | null>(null)
const activeFormats = ref<string[]>([])

const applyFormat = (format: string, event?: Event) => {
  if (event) {
    event.preventDefault()
    event.stopPropagation()
  }
  
  if (!editor.value) return
  
  editor.value.focus()
  
  switch(format) {
    case 'bold':
      document.execCommand('bold', false)
      break
    case 'italic':
      document.execCommand('italic', false)
      break
    case 'underline':
      document.execCommand('underline', false)
      break
    case 'indent':
      document.execCommand('indent', false)
      break
    case 'outdent':
      document.execCommand('outdent', false)
      break
    case 'undo':
      document.execCommand('undo', false)
      break
    case 'redo':
      document.execCommand('redo', false)
      break
  }
  
  updateActiveFormats()
}

const updateActiveFormats = () => {
  const formats = []
  if (document.queryCommandState('bold')) formats.push('bold')
  if (document.queryCommandState('italic')) formats.push('italic')
  if (document.queryCommandState('underline')) formats.push('underline')
  activeFormats.value = formats
}

const handleInput = (e: Event) => {
  const target = e.target as HTMLElement
  emit('update:modelValue', target.innerHTML)
}

onMounted(() => {
  if (editor.value) {
    editor.value.innerHTML = props.modelValue
  }
})
</script>

<template>
  <div class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
    <!-- Toolbar -->
    <div class="bg-gray-50 dark:bg-[#0f1011] border-b border-gray-200 dark:border-gray-700 p-2">
      <div class="flex items-center gap-1">
        <button 
          @mousedown.prevent="applyFormat('undo')"
          type="button"
          class="p-2 hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-800 rounded transition-colors"
          title="Undo">
          <Icon name="lucide:undo" class="size-4" />
        </button>
        <button 
          @mousedown.prevent="applyFormat('redo')"
          type="button"
          class="p-2 hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-800 rounded transition-colors"
          title="Redo">
          <Icon name="lucide:redo" class="size-4" />
        </button>
        
        <div class="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>
        
        <ToggleGroup v-model="activeFormats" type="multiple" class="gap-1">
          <ToggleGroupItem 
            value="bold" 
            @mousedown.prevent="applyFormat('bold')"
            class="p-2"
            title="Bold">
            <Icon name="lucide:bold" class="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="italic" 
            @mousedown.prevent="applyFormat('italic')"
            class="p-2"
            title="Italic">
            <Icon name="lucide:italic" class="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="underline" 
            @mousedown.prevent="applyFormat('underline')"
            class="p-2"
            title="Underline">
            <Icon name="lucide:underline" class="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        
        <div class="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>
        
        <button 
          @mousedown.prevent="applyFormat('outdent')"
          type="button"
          class="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer rounded transition-colors"
          title="Decrease Indent">
          <Icon name="lucide:indent-decrease" class="size-4" />
        </button>
        <button 
          @mousedown.prevent="applyFormat('indent')"
          type="button"
          class="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer rounded transition-colors"
          title="Increase Indent">
          <Icon name="lucide:indent-increase" class="size-4" />
        </button>
      </div>
    </div>
    
    <!-- Editor Area -->
    <div
      ref="editor"
      contenteditable="true"
      @input="handleInput"
      @mouseup="updateActiveFormats"
      @keyup="updateActiveFormats"
      class="w-full px-4 py-3 min-h-30 max-h-75 overflow-y-auto focus:outline-none dark:bg-[#1a1b1e] text-gray-900 dark:text-gray-100">
    </div>
    

  </div>
</template>