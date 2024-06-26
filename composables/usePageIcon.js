// usePageIcon.js
import { useHead } from 'nuxt/app'

export function usePageIcon(iconPath) {
  useHead({
    link: [
      { rel: 'icon', type: 'image/x-icon', href: iconPath },
    ],
  })
}
