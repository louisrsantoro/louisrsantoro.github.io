import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

/**
 * Options for the HyvorComments component
 */
interface Options {
  websiteId: number
  displayDarkMode?: boolean
}

export default ((opts: Options) => {
  /**
   * Component to add Hyvor Talk comments to a page
   */
  const HyvorComments: QuartzComponent = ({ displayClass, fileData, cfg }: QuartzComponentProps) => {
    // Check if comments should be disabled based on frontmatter
    const disableComment: boolean =
      typeof fileData.frontmatter?.comments !== "undefined" &&
      (!fileData.frontmatter?.comments || fileData.frontmatter?.comments === "false")
    
    if (disableComment) {
      return <></>
    }

    // Get the page ID for this specific page
    const pageId = fileData.slug || 'index'
    
    // Create the HTML for Hyvor Talk comments with a unique container ID
    const commentsHtml = `
      <div id="hyvor-talk-container">
        <hyvor-talk-comments
          website-id="${opts.websiteId}"
          page-id="${pageId}"
          colors="${opts.displayDarkMode ? "dark" : "light"}"
          loading="manual"
        ></hyvor-talk-comments>
      </div>
      
      <button 
        id="load-comments-button" 
        class="load-comments-button"
      >
        Load Comments
      </button>
    `
    
    // Return the component markup using dangerouslySetInnerHTML to avoid TypeScript errors
    return (
      <div 
        class={`comments-container ${displayClass ?? ""}`}
        data-current-page-id="${pageId}"
        dangerouslySetInnerHTML={{ __html: commentsHtml }}
      ></div>
    )
  }

  // Add the script to load the Hyvor Talk web component
  HyvorComments.beforeDOMLoaded = `
    // Only add the script if it's not already in the document
    if (!document.getElementById('hyvor-talk-script')) {
      const script = document.createElement('script');
      script.id = 'hyvor-talk-script';
      script.src = 'https://talk.hyvor.com/embed/embed.js';
      script.type = 'module';
      script.async = true;
      document.head.appendChild(script);
    }
  `

  // Handle button click and navigation events
  HyvorComments.afterDOMLoaded = `
    // Function to completely reset and set up Hyvor comments
    function setupHyvorComments() {
      // Find the button and comments container
      const button = document.getElementById('load-comments-button');
      const commentsContainer = document.querySelector('.comments-container');
      if (!button || !commentsContainer) return;
      
      // Get current path for page ID
      const path = window.location.pathname;
      const currentPageId = path === '/' ? 'index' : path.replace(/^\\//g, '').replace(/\\/$/, '');
      
      // Compare the data attribute to see if we've navigated to a new page
      const storedPageId = commentsContainer.getAttribute('data-current-page-id');
      
      // If this is a new page or the comments section needs reset
      if (storedPageId !== currentPageId) {
        // Update the data attribute
        commentsContainer.setAttribute('data-current-page-id', currentPageId);
        
        // Recreate the Hyvor Talk container completely - this is key to prevent persistence
        const talkContainer = document.getElementById('hyvor-talk-container');
        if (talkContainer) {
          // Create a fresh container with updated page-id
          const newContainer = document.createElement('div');
          newContainer.id = 'hyvor-talk-container';
          newContainer.innerHTML = \`
            <hyvor-talk-comments
              website-id="${opts.websiteId}"
              page-id="\${currentPageId}"
              colors="${opts.displayDarkMode ? "dark" : "light"}"
              loading="manual"
            ></hyvor-talk-comments>
          \`;
          
          // Replace the old container
          talkContainer.parentNode.replaceChild(newContainer, talkContainer);
          
          // Reset button text
          button.textContent = 'Load Comments';
        }
      }
      
      // Remove any existing event listener to prevent duplicates
      const newButton = button.cloneNode(true);
      if (button.parentNode) {
        button.parentNode.replaceChild(newButton, button);
      }
      
      // Add click handler to the button
      newButton.addEventListener('click', function() {
        const commentsEl = document.querySelector('hyvor-talk-comments');
        if (commentsEl) {
          // Ensure the page-id is current
          const currentPageId = commentsContainer.getAttribute('data-current-page-id');
          commentsEl.setAttribute('page-id', currentPageId);
          
          // Load the comments
          if (typeof commentsEl.load === 'function') {
            commentsEl.load();
            newButton.textContent = 'Refresh Comments';
          } else {
            // Wait for the component to be defined if needed
            customElements.whenDefined('hyvor-talk-comments').then(() => {
              if (commentsEl && typeof commentsEl.load === 'function') {
                commentsEl.load();
                newButton.textContent = 'Refresh Comments';
              }
            });
          }
        }
      });
      
      // Register for cleanup on navigation
      if (window.addCleanup) {
        window.addCleanup(() => {
          newButton.removeEventListener('click', newButton.onclick);
        });
      }
    }
    
    // Set up on initial page load
    setupHyvorComments();
    
    // Handle SPA navigation as per Quartz docs
    document.addEventListener('nav', () => {
      // Run setup again after navigation with a slight delay to ensure DOM is updated
      setTimeout(setupHyvorComments, 100);
    });
  `

  // Add styles for the comments section
  HyvorComments.css = `
    .comments-container {
      margin-top: 2rem;
    }
    
    .load-comments-button {
      display: inline-flex;
      align-items: center;
      padding: 8px 16px;
      margin: 1rem 0;
      background-color: var(--lightgray);
      border: 1px solid var(--gray);
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    
    .load-comments-button:hover {
      background-color: var(--gray);
    }
    
    html[data-theme="dark"] .load-comments-button {
      background-color: var(--darkgray);
      border-color: var(--gray);
    }
  `

  return HyvorComments
}) satisfies QuartzComponentConstructor<Options> 