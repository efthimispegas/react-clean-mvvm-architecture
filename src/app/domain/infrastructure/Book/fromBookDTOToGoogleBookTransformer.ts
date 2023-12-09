import { availableImageLink } from "helpers/BookHelpers";
import { BookItemDTO, BooksDTO, GoogleBook } from "../../entities/Book/GoogleBook";

export const fromAPIEntityToDomain = (api: BooksDTO): GoogleBook[] => {
  return api.items.map((item) => (fromAPIEntityToDomainItem(item)))
}

export const fromAPIEntityToDomainItem = (
  {
      id, volumeInfo
  }: BookItemDTO): GoogleBook => ({
  id: id,
  description: volumeInfo.description,
  title: volumeInfo.title,
  subtitle: volumeInfo.subtitle,
  authors: volumeInfo.authors,
  publisher: volumeInfo.publisher,
  imageLink: availableImageLink(volumeInfo),
  pageCount: volumeInfo.pageCount
});
