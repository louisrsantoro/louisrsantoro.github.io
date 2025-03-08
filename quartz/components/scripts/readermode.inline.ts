export default `
document.addEventListener("nav", () => {
  const button = document.getElementById('reader-mode-button')
  if (!button) return
  
  const toggleReaderMode = () => {
    const isReaderMode = document.body.classList.toggle('reader-mode')
    localStorage.setItem('reader-mode', isReaderMode ? 'true' : 'false')
  }
  
  // Restore reader mode state on navigation
  const savedReaderMode = localStorage.getItem('reader-mode') === 'true'
  if (savedReaderMode) {
    document.body.classList.add('reader-mode')
  }
  
  button.addEventListener('click', toggleReaderMode)
  window.addCleanup(() => button.removeEventListener('click', toggleReaderMode))
})` 