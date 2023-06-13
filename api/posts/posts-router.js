// posts için gerekli routerları buraya yazın
const express = require('express');
const router = express.Router();
//const commentRouter = require("../comments/comments-router")
const postsModel = require("./posts-model");

//Inherited Route
//router.use("/:id",commentRouter)



//Task 1 [GET] /api/posts
router.get("/", async (req,res) => {
  try {
    const getAllData = await postsModel.find();
      res.json(getAllData)
    
  } catch (error) {
      res.status(500).json({message: "Gönderiler alınamadı"})
  }
})

//Task 2 [GET] /api/posts/:id

router.get("/:id", async (req,res)=>{
  try {
    const { id } = req.params
    const getPost = await postsModel.findById(id);
    
    getPost ? res.json(getPost) : res
    .status(404)
    .json({ message: "Belirtilen ID'li kullanıcı bulunamadı" });

  } catch (error) {
    req.status(500).json({ message: "Gönderi bilgisi alınamadı" })
  }
})

//Task 3 [POST] /api/posts
  router.post("/", async (req,res)=>{
    try {
      const {title, contents} = req.body;
      if(!title||!contents) {
        res.status(400).json({ message: "Lütfen gönderi için bir title ve contents sağlayın" })
      }else {
        const insertedPostID = await postsModel.insert({title:title, contents:contents})  // only id returns when insert function works
        const insertedPost = await postsModel.findById(insertedPostID.id);
        res.status(201).json(insertedPost)
      }
      
    } catch (error) {
      req.status(500).json({ message: "Veritabanına kaydedilirken bir hata oluştu" }) 

    }
  })

  //Task 4 [PUT] /api/posts/:id

  router.put("/:id", async (req,res)=>{
    try {
      const { id } = req.params;
      const {title, contents} = req.body;
      const postAvailabilityCheck = await postsModel.findById(id);
      if(!postAvailabilityCheck){ res.status(404).json({message:"Belirtilen ID'li gönderi bulunamadı"})}
      else if (!title||!contents) {
        res.status(400).json({ message: "Lütfen gönderi için bir title ve contents sağlayın" })}
      else {
         await postsModel.update(id,{title:title, contents:contents})
         const updatedPost = await postsModel.findById(id);


        res.json(updatedPost)
      }
    } catch (error) {
      req.status(500).json({ message: "Gönderi bilgileri güncellenemedi" })   
    }
  })

  //Task 5 [DELETE] /api/posts/:id

  router.delete("/:id", async (req,res)=>{
    try {
      const { id } = req.params
      const getDeletedPost = await postsModel.findById(id);
      const deletedPost = await postsModel.remove(id);
      
      deletedPost ? res.json(getDeletedPost) : res
      .status(404)
      .json({ message: "Belirtilen ID'li kullanıcı bulunamadı" });
  
    } catch (error) {
      req.status(500).json({ message:  "Gönderi silinemedi" })
    }
  })

  //Task 6 [GET] /api/posts/:id/comments

  router.get("/:id/comments", async (req,res)=>{
    try {
      const { id } = req.params
      const getPost = await postsModel.findById(id);
      const getPostComment = await postsModel.findPostComments(id);
      
      getPost ? res.json(getPostComment) : res
      .status(404)
      .json({ message: "Girilen ID'li gönderi bulunamadı." });
  
    } catch (error) {
      req.status(500).json({ message: "Yorumlar bilgisi getirilemedi" })
    }
  })













module.exports = router;