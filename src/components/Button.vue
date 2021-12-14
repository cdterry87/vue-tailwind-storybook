<template>
  <button
    class="
      shadow-lg
      px-4
      py-2
      hover:opacity-80
      transition
      duration-200
      ease-in-out
    "
    :class="classes"
  >
    {{ label }}
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "Button",
  props: {
    label: {
      type: String,
      required: true,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    tertiary: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "rounded-full": props.rounded,
        rounded: !props.rounded,
        "bg-purple-700 text-white border border-purple-800": props.secondary,
        "bg-gray-200 text-gray-600 border border-gray-300": props.tertiary,
        "bg-blue-500 text-white border border-blue-600":
          !props.secondary && !props.tertiary, // primary
      })),
    };
  },
};
</script>
