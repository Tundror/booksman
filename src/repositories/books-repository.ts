import { Book, CreateBook } from "../protocols/book";
import { Review } from "../protocols/review";

import prisma from "../database";

export async function getBooks() {
  const result = await prisma.books.findMany() 
  return result;
}

export async function getBook(id: number) {
  const book = await prisma.books.findFirst({
    where:{
      id
    }
  })
  return book
}

export async function createBook(book: CreateBook) {

  const result = await prisma.books.create({
    data: book
  })

  return result
}

export async function reviewBook(bookReview: Review) {
  
  const result = await prisma.books.update({
    data: bookReview,
    where: {
      id: bookReview.id
    }
  })

  return result
}