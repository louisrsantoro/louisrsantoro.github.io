import { QuartzComponent, QuartzComponentConstructor } from "./types"
import darkmodeScript from "./scripts/darkmode.inline"

const ReaderMode: QuartzComponent = ({ cfg }) => {
  return (
    <div id="reader-mode-container">
      <button id="reader-mode-button" title="Toggle Reader Mode">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      </button>
      <button class="darkmode" id="darkmode" title="Toggle Dark Mode">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="dayIcon"
          x="0px"
          y="0px"
          viewBox="0 0 35 35"
          style="enable-background:new 0 0 35 35"
          xmlSpace="preserve"
        >
          <title>Light Mode</title>
          <path d="M6,17.5C6,16.672,5.328,16,4.5,16h-3C0.672,16,0,16.672,0,17.5    S0.672,19,1.5,19h3C5.328,19,6,18.328,6,17.5z M7.5,26c-0.414,0-0.789,0.168-1.061,0.439l-2,2C4.168,28.711,4,29.086,4,29.5    C4,30.328,4.671,31,5.5,31c0.414,0,0.789-0.168,1.06-0.44l2-2C8.832,28.289,9,27.914,9,27.5C9,26.672,8.329,26,7.5,26z M17.5,6    C18.329,6,19,5.328,19,4.5v-3C19,0.672,18.329,0,17.5,0S16,0.672,16,1.5v3C16,5.328,16.671,6,17.5,6z M27.5,9    c0.414,0,0.789-0.168,1.06-0.439l2-2C30.832,6.289,31,5.914,31,5.5C31,4.672,30.329,4,29.5,4c-0.414,0-0.789,0.168-1.061,0.44    l-2,2C26.168,6.711,26,7.086,26,7.5C26,8.328,26.671,9,27.5,9z M6.439,8.561C6.711,8.832,7.086,9,7.5,9C8.328,9,9,8.328,9,7.5    c0-0.414-0.168-0.789-0.439-1.061l-2-2C6.289,4.168,5.914,4,5.5,4C4.672,4,4,4.672,4,5.5c0,0.414,0.168,0.789,0.439,1.06    L6.439,8.561z M33.5,16h-3c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5h3c0.828,0,1.5-0.672,1.5-1.5S34.328,16,33.5,16z     M28.561,26.439C28.289,26.168,27.914,26,27.5,26c-0.828,0-1.5,0.672-1.5,1.5c0,0.414,0.168,0.789,0.439,1.06l2,2    C28.711,30.832,29.086,31,29.5,31c0.828,0,1.5-0.672,1.5-1.5c0-0.414-0.168-0.789-0.439-1.061L28.561,26.439z M17.5,29    c-0.829,0-1.5,0.672-1.5,1.5v3c0,0.828,0.671,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-3C19,29.672,18.329,29,17.5,29z M17.5,7    C11.71,7,7,11.71,7,17.5S11.71,28,17.5,28S28,23.29,28,17.5S23.29,7,17.5,7z M17.5,25c-4.136,0-7.5-3.364-7.5-7.5    c0-4.136,3.364-7.5,7.5-7.5c4.136,0,7.5,3.364,7.5,7.5C25,21.636,21.636,25,17.5,25z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="nightIcon"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          style="enable-background:new 0 0 100 100"
          xmlSpace="preserve"
        >
          <title>Dark Mode</title>
          <path d="M96.76,66.458c-0.853-0.852-2.15-1.064-3.23-0.534c-6.063,2.991-12.858,4.571-19.655,4.571  C62.022,70.495,50.88,65.88,42.5,57.5C29.043,44.043,25.658,23.536,34.076,6.47c0.532-1.08,0.318-2.379-0.534-3.23  c-0.851-0.852-2.15-1.064-3.23-0.534c-4.918,2.427-9.375,5.619-13.246,9.491c-9.447,9.447-14.65,22.008-14.65,35.369  c0,13.36,5.203,25.921,14.65,35.368s22.008,14.65,35.368,14.65c13.361,0,25.921-5.203,35.369-14.65  c3.872-3.871,7.064-8.328,9.491-13.246C97.826,68.608,97.611,67.309,96.76,66.458z"></path>
        </svg>
      </button>
    </div>
  )
}

ReaderMode.css = `
#reader-mode-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0 2rem 0;
}

#reader-mode-button {
  width: 60px;
  height: 60px;
  padding: 0.5rem;
  border: 2px solid var(--lightgray);
  border-radius: 8px;
  background: var(--light);
  cursor: pointer;
  color: var(--darkgray);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

#reader-mode-button svg {
  width: 45px;
  height: 45px;
}

#reader-mode-button:hover {
  color: var(--secondary);
  border-color: var(--secondary);
  transform: scale(1.1);
}

.darkmode {
  width: 60px !important;
  height: 60px !important;
  padding: 0.5rem !important;
  border: 2px solid var(--lightgray) !important;
  border-radius: 8px !important;
  background: var(--light) !important;
  cursor: pointer;
  color: var(--darkgray);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 !important;
}

.darkmode:hover {
  color: var(--secondary);
  border-color: var(--secondary);
  transform: scale(1.1);
}

.darkmode svg {
  position: relative !important;
  width: 45px !important;
  height: 45px !important;
  top: unset !important;
  fill: currentColor !important;
}

body.reader-mode {
  .sidebar,
  .right.sidebar,
  .page-footer,
  footer {
    display: none !important;
  }
  
  .page-title {
    margin-bottom: 2rem !important;
  }
  
  #quartz-root.page {
    max-width: 800px !important;
    margin: 0 auto !important;
    padding: 2rem !important;
  }

  #quartz-body {
    display: block !important;
  }

  .center {
    grid-area: unset !important;
    max-width: 100% !important;
  }

  #reader-mode-button {
    background: var(--light) !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
    opacity: 0.8;
  }

  #reader-mode-button:hover {
    opacity: 1;
  }

  #reader-mode-button svg {
    transform: rotateY(180deg);
  }
}
`

ReaderMode.afterDOMLoaded = darkmodeScript + `
  document.addEventListener("nav", () => {
    const button = document.getElementById('reader-mode-button')
    if (!button) return
    
    const toggleReaderMode = () => {
      console.log('Reader mode toggled')
      document.body.classList.toggle('reader-mode')
    }
    
    button.addEventListener('click', toggleReaderMode)
    window.addCleanup(() => button.removeEventListener('click', toggleReaderMode))
  })
`

export default (() => ReaderMode) satisfies QuartzComponentConstructor 