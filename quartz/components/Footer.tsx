import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { pathToRoot } from "../util/path"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, fileData }: QuartzComponentProps) => {
    const baseDir = pathToRoot(fileData.slug!)
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="footer-content">
          <div class="license-container">
            <div class="license">
              <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                <img 
                  alt="Creative Commons License" 
                  style="border-width:0" 
                  src="https://i.creativecommons.org/l/by/4.0/88x31.png" 
                />
              </a>
              <p>
                This work is licensed under a{" "}
                <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                  Creative Commons Attribution 4.0 International License
                </a>
              </p>
            </div>
            <div class="footer-links">
              <a href={baseDir + "terms"}>Terms of Use</a>
            </div>
          </div>
          <p class="copyright">Copyright © 2025 Louis Santoro</p>
        </div>
      </footer>
    )
  }

  Footer.css = style + `
    footer {
      padding: 2rem 0;
      color: var(--darkgray);
    }
    
    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      text-align: center;
      max-width: 100%;
      margin: 0 auto;
    }

    .license-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .license {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .license p {
      margin: 0;
    }

    .license img {
      height: 31px;
    }

    .license a {
      color: var(--secondary);
      text-decoration: none;
    }

    .license a:hover {
      text-decoration: underline;
    }

    .footer-links {
      margin-top: 0.5rem;
    }

    .footer-links a {
      color: var(--secondary);
      text-decoration: none;
    }

    .footer-links a:hover {
      text-decoration: underline;
    }

    .copyright {
      margin: 0;
      font-size: 0.875rem;
    }

    @media (max-width: 600px) {
      .license {
        flex-direction: column;
        text-align: center;
      }
    }
  `
  return Footer
}) satisfies QuartzComponentConstructor
