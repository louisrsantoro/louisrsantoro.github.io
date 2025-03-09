import { QuartzComponent, QuartzComponentConstructor } from "./types"

const SocialLinks: QuartzComponent = () => {
  return (
    <div class="social-links">
      <div class="links-container">
        <a href="https://x.com/dikaiosvne" target="_blank" rel="noopener noreferrer" title="X/Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
          </svg>
        </a>
        <a href="https://www.threads.net/@dikaiosvne" target="_blank" rel="noopener noreferrer" title="Threads">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
          </svg>
        </a>
        <a href="https://github.com/louisrsantoro" target="_blank" rel="noopener noreferrer" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

SocialLinks.css = `
.social-links {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.1rem 0;
}

.links-container {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding-left: 1rem;
}

.links-container a {
  color: var(--darkgray);
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
}

.links-container a:hover {
  color: var(--secondary);
}

.links-container svg {
  width: 30px;
  height: 30px;
}
`

export default (() => SocialLinks) satisfies QuartzComponentConstructor 