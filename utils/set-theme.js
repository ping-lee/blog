import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
  MODE_COLORS,
} from './constants'

function setColorsByTheme() {
  // Don't use backticks around emojis. Breaks replacement in boundFn below.
  // eslint-disable-next-line quotes
  const [colors, colorModeKey, colorModeCssProp] = ['🌈', '🔑', '⚡️']
  // Default value if the user never used DarkToggle is to use the OS color mode.
  let colorMode = `auto`

  // Only try to parse value from localStorage if there seems to be one.
  const persistedPreference =
    localStorage[colorModeKey] && JSON.parse(localStorage[colorModeKey])
  if ([`light`, `dark`, `auto`].includes(persistedPreference))
    colorMode = persistedPreference

  document.body.style.setProperty(colorModeCssProp, colorMode)

  // Here we set the actual colors for the page after SSR.
  // colorByMode only supports `dark` or `light`. So if colorMode
  // is `auto` we pick either of those depending on prefersDarkFromMQ.
  if (colorMode === `auto`) {
    const mq = window.matchMedia(`(prefers-color-scheme: dark)`)
    const prefersDarkFromMQ = mq.matches
    colorMode = prefersDarkFromMQ ? `dark` : `light`
  }

  for (const [name, colorByMode] of Object.entries(colors))
    document.body.style.setProperty(`--color-${name}`, colorByMode[colorMode])
}

export function RssSetColorsByTheme() {
  const boundFn = String(setColorsByTheme)
    .replace(`'🌈'`, JSON.stringify(MODE_COLORS))
    .replace(`🔑`, COLOR_MODE_KEY)
    .replace(`⚡️`, INITIAL_COLOR_MODE_CSS_PROP)

  // Turn boundFn into an IIFE so it runs asap. Also avoids polluting global namespace.
  return <script dangerouslySetInnerHTML={{ __html: `(${boundFn})()` }} />
}

export function FallbackStyles({ cssColors = `` }) {
    // Create a string holding each CSS variable:
    // `--color-text: black;\n--color-background: white;\n...`
  
    for (const [name, colorByMode] of Object.entries(MODE_COLORS))
      cssColors += `--color-${name}: ${colorByMode.light};\n`
  
    for (const [name, variants] of Object.entries(COLORS))
      for (const [variant, value] of Object.entries(variants))
        cssColors += `--color-${name}-${variant}: ${value};\n`
  
    const wrappedInSelector = `html { ${cssColors} }`
  
    return <style>{wrappedInSelector}</style>
  }