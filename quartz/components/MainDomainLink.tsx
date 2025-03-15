import { QuartzComponent, QuartzComponentConstructor } from "./types"

// Component to add a link to the main domain
const MainDomainLink: QuartzComponent = () => {
  return (
    <div class="main-domain-link">
      <a href="https://louissantoro.com" target="_blank" rel="noopener noreferrer" title="Visit Louis Santoro's main website">
        louissantoro.com
      </a>
    </div>
  )
}

// Add styles for the component
MainDomainLink.css = `
.main-domain-link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: -.5rem;
  margin-bottom: 0.25rem;
}

.main-domain-link a {
  font-size: 1rem;
  color: var(--darkgray);
  text-decoration: none;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.main-domain-link a:hover {
  color: var(--secondary);
  text-decoration: underline;
}

/* Responsive styles */
@media all and (max-width: 600px) {
  .main-domain-link {
    margin-top: -0.25rem;
    margin-bottom: 0.5rem;
  }
}
`

export default (() => MainDomainLink) satisfies QuartzComponentConstructor 