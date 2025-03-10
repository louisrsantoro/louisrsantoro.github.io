import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const subtitle = cfg?.subtitle ?? ""
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title")}>
      <div class="logo-container">
        <img src="/static/logo-light.png" alt="Logo" class="logo light-logo" />
        <img src="/static/logo-dark.png" alt="Logo" class="logo dark-logo" />
      </div>
      <h2><a href={baseDir}>{title}</a></h2>
      {subtitle && (
        <div class="subtitle">
          {subtitle.split("<br>").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  padding: 0;
}
.logo-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: -.25rem;
  padding: 0;
  line-height: 0;
}
.logo {
  height: 3.5rem;
  width: auto;
  display: none;
  margin: 0;
  padding: 0;
}
.light-logo {
  display: block;
}
.dark-logo {
  display: none;
}
:root[saved-theme="dark"] .light-logo {
  display: none;
}
:root[saved-theme="dark"] .dark-logo {
  display: block;
}
.page-title h2 {
  font-size: 1.75rem;
  margin: 0;
  line-height: 1.3;
}
.page-title h2 a {
  color: var(--secondary);
  text-decoration: none;
}
.page-title h2 a:hover {
  color: var(--tertiary);
}
.subtitle {
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  color: var(--darkgray);
}
.subtitle p {
  margin: 0;
  line-height: 1.5;
  hyphens: none;
  white-space: pre-wrap;
  word-break: normal;
  word-wrap: normal;
}
.subtitle p:first-child {
  font-style: italic;
}
`
export default (() => PageTitle) satisfies QuartzComponentConstructor
