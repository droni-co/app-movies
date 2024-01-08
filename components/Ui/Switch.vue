<template>
  <label class="relative inline-flex items-center cursor-pointer text-gray-900" :class="{'text-red-500': error.length > 0}">
    <input
      :placeholder="placeholder"
      :required="required"
      type="checkbox"
      v-model="localValue"
      @change="updateVal"
      class="sr-only peer">
    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
    <span class="ms-3 text-sm dark:text-gray-300">{{ label }}</span>
  </label>
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: [Boolean, Number],
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:modelValue']);
const localValue = ref(Boolean(props.modelValue));
const updateVal = (e: any) => {
  const val = e.target.checked;
  typeof props.modelValue === 'number' ? emits('update:modelValue', val ? 1 : 0) : emits('update:modelValue', val);
}
</script>