import { Request, Response } from "express";

class BooksController {
  public index(req: Request, res: Response): void {
    res.render("books/index", {
      title: "Books",
    });
  }

  public renderBookForm(req: Request, res: Response): void {
    res.render("books/add", { title: "Add Book" });
  }
}

export const booksController = new BooksController();
