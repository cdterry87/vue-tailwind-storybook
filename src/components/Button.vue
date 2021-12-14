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
        "bg-indigo-500 text-white border border-indigo-600 shadow-indigo-500/50 ":
          props.secondary,
        "bg-cyan-500 text-white border border-cyan-600 shadow-cyan-500/50":
          props.tertiary,
        "bg-blue-500 text-white border border-blue-600 shadow-blue-500/50":
          !props.secondary && !props.tertiary, // primary
      })),
    };
  },
};
</script>
