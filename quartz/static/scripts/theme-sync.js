/**
 * Theme Sync for Quartz
 * 
 * This script handles theme synchronization between domains.
 */

(function() {
    'use strict';
    
    // The main domain to link back to
    const mainDomain = 'louissantoro.com';
    
    // Check URL parameters for theme preference
    function checkUrlThemeParam() {
        const urlParams = new URLSearchParams(window.location.search);
        const themeParam = urlParams.get('theme');
        
        if (themeParam === 'light' || themeParam === 'dark') {
            // Save the theme from URL param and return it
            localStorage.setItem('theme', themeParam);
            return themeParam;
        }
        
        return null;
    }
    
    // Apply theme based on URL parameter or saved preference
    function initThemeSync() {
        // First check URL parameter
        const themeFromUrl = checkUrlThemeParam();
        
        if (themeFromUrl) {
            // If we have a theme parameter, use it
            document.documentElement.setAttribute('data-theme', themeFromUrl);
            
            // Clean up the URL (remove the theme parameter without refreshing)
            const url = new URL(window.location);
            url.searchParams.delete('theme');
            window.history.replaceState({}, '', url);
        }
        
        // Add theme parameter to links back to main site
        updateExternalLinks();
    }
    
    // Add current theme to links going back to main site
    function updateExternalLinks() {
        // Get current theme (from HTML attribute or localStorage)
        let currentTheme = document.documentElement.getAttribute('data-theme') || 
                           localStorage.getItem('theme') || 
                           'light';
        
        // Update links to main domain
        document.querySelectorAll(`a[href*="${mainDomain}"]`).forEach(link => {
            const url = new URL(link.href);
            url.searchParams.set('theme', currentTheme);
            link.href = url.toString();
        });
        
        // Listen for theme changes to update links
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === 'data-theme') {
                    const newTheme = document.documentElement.getAttribute('data-theme');
                    updateLinksWithTheme(newTheme);
                }
            });
        });
        
        observer.observe(document.documentElement, { attributes: true });
    }
    
    // Update all links with the new theme
    function updateLinksWithTheme(theme) {
        document.querySelectorAll(`a[href*="${mainDomain}"]`).forEach(link => {
            const url = new URL(link.href);
            url.searchParams.set('theme', theme);
            link.href = url.toString();
        });
    }
    
    // Initialize when the DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeSync);
    } else {
        initThemeSync();
    }
})(); 