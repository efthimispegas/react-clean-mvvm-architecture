import { GoogleBookVolumeInfo } from "app/domain/entities/Book/GoogleBook"

export const availableImageLink = (googleBookVolumeInfo: GoogleBookVolumeInfo): string | undefined => {
  const link = googleBookVolumeInfo.imageLinks
  if (link != null) {
      if (link.extraLarge) {
          return link.extraLarge.replace(/^http:/, 'https:')
      }
      if (link.large) {
          return link.large.replace(/^http:/, 'https:')
      }
      if (link.medium) {
          return link.medium.replace(/^http:/, 'https:')
      }
      if (link.small) {
          return link.small.replace(/^http:/, 'https:')
      }
      if (link.thumbnail) {
          return link.thumbnail.replace(/^http:/, 'https:')
      }
      if (link.smallThumbnail) {
          return link.smallThumbnail.replace(/^http:/, 'https:')
      }
  }
  return undefined
}
