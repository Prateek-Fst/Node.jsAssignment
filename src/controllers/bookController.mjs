import bookModel from "../models/bookModel.mjs";
const findBook = async (req, res) => {
  // const students= await studentModel.find();
  const books = await bookModel.findOne();
  res.status(200).send({ status: true, message: books });
};
const createBook = async (req, res) => {
    try {
    const data = req.body;
    const {title,author}=req.body;
    const checkBook=await bookModel.findOne({title:title,author:author});
     if(checkBook){
        return res.status(200).send({status:"failed",message:"book already exits"});
     }
    const createdBook = await bookModel.create(data);
    //    const createdStudent= await studentModel.insertMany([data,data,data]);
    return res.status(201).send({ status: true, message: BookStudent });
    } catch (error) {
        return res.status(500).send({status:"failed",message:error.message})
    }
        
  
};
const deleteBook = async (req, res) => {
  // const data= await studentModel.deleteMany({name:'tiwari'});
  try {
    const data = await bookModel.deleteOne({"title":"book1"});
    return res.status(200).send({ status: true, message: data });
  } catch (error) {
    return res.status(500).send({status:'failed',message:error.message})
  }
};
const updateBook = async (req, res) => {
  const newBook = await bookModel.updateOne(
    { title: "book2" },
    { $set: { title: "new title" } }
  );
  return res.status(200).send({ status: true, message: newBook });
};
const searchBook=async (req,res)=>{
  try {
    const {title,maxage,semester}=req.query;
    // and operation works when all condition are true and it's also default
    // const result= await studentModel.find({$and:[{age:{$gte:minage,$lte:maxage}},{semester:semester}]});
    // or operator works when any of the condition is true
    // const result= await studentModel.find({$or:[{age:{$gte:minage,$lte:maxage}},{semester:semester}]});
    // it's works for all the values which are not mached with condition
    // const result= await studentModel.find({$nor:[{age:{$gte:minage,$lte:maxage}},{semester:semester}]});
    // const result= await studentModel.find({age:{$not:{$gt:minage}}});
    const result=await studentModel.where('age').equals(minage);
    return res.status(200).send({status:"successful",message:result});
  } catch (error) {
    return res.status(500).send({status:"failed",message:error.message})
  }
}
export { findBook, createBook, deleteBook, updateBook,searchBook};
