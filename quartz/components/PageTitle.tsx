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
}
.page-title h2 {
  font-size: 1.75rem;
  margin: 0;
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
