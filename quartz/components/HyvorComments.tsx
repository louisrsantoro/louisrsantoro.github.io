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
    
    // Create the HTML for comments container and button
    const commentsHtml = `
      <div id="hyvor-talk-view" data-page-id="${pageId}">
        <!-- Comments will be inserted here when button is clicked -->
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
        dangerouslySetInnerHTML={{ __html: commentsHtml }}
      ></div>
    )
  }

  // Add the script to load the Hyvor Talk web component only once
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

  // Handle button click to load comments
  HyvorComments.afterDOMLoaded = `
    // Function to handle button click
    function handleLoadCommentsClick() {
      const button = document.getElementById('load-comments-button');
      const commentView = document.getElementById('hyvor-talk-view');
      
      if (!button || !commentView) return;
      
      button.textContent = 'Loading...';
      button.disabled = true;
      
      // Get the current page ID
      const pageId = commentView.getAttribute('data-page-id') || 
                    (window.location.pathname === '/' ? 'index' : 
                    window.location.pathname.replace(/^\\//g, '').replace(/\\/$/, ''));
      
      // Clear any existing content
      commentView.innerHTML = '';
      
      // Create the comments element following the docs exactly
      const commentsElement = document.createElement('hyvor-talk-comments');
      commentsElement.setAttribute('website-id', '${opts.websiteId}');
      commentsElement.setAttribute('page-id', pageId);
      commentsElement.setAttribute('colors', '${opts.displayDarkMode ? "dark" : "light"}');
      
      // Insert it into the DOM
      commentView.appendChild(commentsElement);
      
      // Update button
      button.textContent = 'Refresh Comments';
      button.disabled = false;
    }
    
    // Set up the click handler for the button
    function setupButton() {
      const button = document.getElementById('load-comments-button');
      if (!button) return;
      
      // Clone button to remove any existing listeners
      const newButton = button.cloneNode(true);
      if (button.parentNode) {
        button.parentNode.replaceChild(newButton, button);
      }
      
      // Add click handler
      newButton.addEventListener('click', handleLoadCommentsClick);
      
      // Register for cleanup
      if (window.addCleanup) {
        window.addCleanup(() => {
          newButton.removeEventListener('click', handleLoadCommentsClick);
        });
      }
    }
    
    // Initial setup
    setupButton();
    
    // Handle SPA navigation
    document.addEventListener('nav', () => {
      // Update the data-page-id attribute on navigation
      const commentView = document.getElementById('hyvor-talk-view');
      if (commentView) {
        const pageId = window.location.pathname === '/' ? 'index' : 
                      window.location.pathname.replace(/^\\//g, '').replace(/\\/$/, '');
        commentView.setAttribute('data-page-id', pageId);
        commentView.innerHTML = ''; // Clear existing comments
      }
      
      // Reset button
      const button = document.getElementById('load-comments-button');
      if (button) {
        button.textContent = 'Load Comments';
        button.disabled = false;
      }
      
      // Re-setup button
      setupButton();
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
    
    .load-comments-button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    html[data-theme="dark"] .load-comments-button {
      background-color: var(--darkgray);
      border-color: var(--gray);
    }
  `

  return HyvorComments
}) satisfies QuartzComponentConstructor<Options> 