// posts için gerekli routerları buraya yazın
const express = require('express');
const router = express.Router();
const postsModel = require("./posts-model");



//Task 1 [GET] /api/posts
router.get("/", async (req,res) => {
  try {
    const getData = await postsModel.find();
      res.json(getData)
    
  } catch (error) {
      res.status(500).json({message: "Gönderiler alınamadı"})
  }
})

//Task 2 [GET] /api/posts/:id










module.exports = router;