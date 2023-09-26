<!-- Dropdown.vue -->
<template>
    <div class="dropdown">
      <button @click="toggleDropdown">{{ isOpen ? 'Close' : 'Open' }} Dropdown</button>
      <ul v-if="isOpen" class="dropdown-menu">
        <slot></slot>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your dropdown styles here */
  </style>
  