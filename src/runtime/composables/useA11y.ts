import * as axe from 'axe-core'
import { Result } from 'axe-core';
import { ref, onMounted } from 'vue'

export const useA11y = () => {
  const violations = ref<Result[]>([]);

  onMounted(() => {
    axe.run().then(results => violations.value = results.violations)
  })

  return violations
}
