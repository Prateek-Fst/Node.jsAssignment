import express from "express";
import { findBook,createBook, deleteBook, updateBook, searchBook } from "../controllers/bookController.mjs";
const router= express.Router();
router.post('/books/add',createBook);
router.post('/books/find/:id',findBook);
router.delete('/books/delete/:id',deleteBook);
router.put('/books/update/:id',updateBook);
router.get('/books/search',searchBook);
export default router;