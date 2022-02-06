/*
Let's do some simple two-way binding.

Please create a function model(state, element), to bind state.value to the HTMLInputElement element.

const input = document.createElement('input')
const state = { value: 'BFE' }
model(state, input)

console.log(input.value) // 'BFE'
state.value = 'dev'
console.log(input.value) // 'dev'
input.value = 'BFE.dev'
input.dispatchEvent(new Event('change'))
console.log(state.value) // 'BFE.dev'
*/

function model(state, element) {
  // assign element value to state value
  element.value = state.value;

  // state --> element
  Object.defineProperty(state, 'value', {
    get() {
      return element.value;
    },
    set(val) {
      element.value = val;
    }
  })

  // element --> state
  element.addEventListener('change', () => {
    state.value = element.value;
  })
}
