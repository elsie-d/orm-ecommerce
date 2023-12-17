const router = require('express').Router();
const { json } = require('sequelize');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      
      include: [
        { model: Product, through: ProductTag, as: 'tagsOf_product'},  //PRODUCTS NOT DISPLAYING
      ]   
    })
    res.json(tags)
  }catch(err) {
  res.status(500).json(err)}
  
});


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagID = await Tag.findByPk(req.params.id, {
       include: [
        { model: Product, through: ProductTag, as: 'tagsOf_product'},  //PRODUCTS NOT DISPLAYING
      ]   
    })
    res.json(tagID)
  }catch(err) {
    res.status(500).json(err)}



});

router.post('/', async (req, res) => { 
  // create a new tag

  try{
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  }catch(err){res.status(500).json(err)}
});



router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try{
    const tagID = req.params.id;
    const updatedTag = await Tag.update(req.body, {where: {id: tagID}}) 
    res.status(200).json(updatedTag);
  }catch(err){res.status(500).json(err)}
});



router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.destroy({
      where: { id: req.params.id}
    });
  
    if (!tag){
      res.status(404),json({
        message: 'Tag ID does not exist'
      });
      return;
    }
    res.status(200).json({ message: 'Tag was successfully deleted'})
   }
   catch(err){
    res.status(500).json(err);
   }

});

module.exports = router;
