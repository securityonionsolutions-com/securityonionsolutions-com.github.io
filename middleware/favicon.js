export default function (context) {
  if (process.client) {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    try {
      darkMediaQuery.addEventListener('change', () => setFavicon())
    } catch (e) {
      try {
        darkMediaQuery.addListener(() => setFavicon())
      } catch (e) {}
    }

    setFavicon()
  }
}

function setFavicon () {
  const colorSchemeString = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? '-dark'
    : ''

  const svgFavicon = document.querySelector('.so-favicon[type="image/svg+xml"]')
  const pngFavicon = document.querySelector('.so-favicon[type="image/png"]')

  if (pngFavicon && svgFavicon) {
    const svgExt = '.svg'
    const darkTagExt = '-dark.svg'
    const darkTagIndex = svgFavicon.href.indexOf(darkTagExt)
    const svgIndex = svgFavicon.href.indexOf(svgExt)
    const baseText = svgFavicon.href.substring(0, darkTagIndex !== -1 ? darkTagIndex : svgIndex)

    pngFavicon.href = `${baseText}${colorSchemeString}.png`
    svgFavicon.href = `${baseText}${colorSchemeString}.svg`
  }
}
