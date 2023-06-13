// const express = require('express');
// const router = express.Router();
// const postsModel = require("../posts/posts-model");


//  //Task 6 [GET] /api/posts/:id/comments

//  router.get("/comments", async (req,res)=>{
//   try {
//     const { id } = req.params
//     const getPostComment = await postsModel.findCommentById(id);
    
//     getPostComment ? res.json(getPostComment) : res
//     .status(404)
//     .json({ message: "Girilen ID'li gönderi bulunamadı." });

//   } catch (error) {
//     req.status(500).json({ message: "Yorumlar bilgisi getirilemedi" })
//   }
// })



// module.exports = router;