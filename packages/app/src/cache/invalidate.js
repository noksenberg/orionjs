export default function(store) {
  return async function(key) {
    return await store.invalidate(key)
  }
}
