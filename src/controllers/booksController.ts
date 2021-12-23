import { Request, Response } from "express";
import BookModel, { Book } from "../models/Book";

class BooksController {
  public async index(req: Request, res: Response): Promise<void> {
    const books: Book[] = await BookModel.find();
    res.render("books/index", {
      books
    });
  }

  public renderBookForm(req: Request, res: Response): void {
    res.render("books/add", { title: "Add Book" });
  }

  public async saveBook(req: Request, res: Response): Promise<void> {
    const { title, author, isbn } = req.body;
    try {
      const book: Book = new BookModel({ title, author, isbn });
      await book.save();
      res.redirect("/books");
    } catch (error) {
      res.send(error);
    }
  }
}

export const booksController = new BooksController();
