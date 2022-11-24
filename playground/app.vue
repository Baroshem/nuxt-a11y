<template>
  <div>
    <h1>Nuxt module playground!</h1>
    <ul>
      <li
        v-for="violation in violations"
        :key="violation.id"
      >
        <ul>
          <li
            v-for="issue, key in violation"
            :key="key"
          >
            <p><b>{{ key }}</b> - {{ issue }}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const violations = useA11y()
</script>
