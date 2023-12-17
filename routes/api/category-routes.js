const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      
      include: [
        { model: Product, required: true},
      ]
    })
    res.json(categories)
  }catch(err) {
  res.status(500).json(err)}
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const catID = await Category.findByPk(req.params.id, {
      include: [
        { model: Product, required: true},
      ]
    })
    res.json(catID)
  }catch(err) {
    res.status(500).json(err)}


});

router.post('/', async (req, res) => {
  // create a new category
try{
  const newCat = await Category.create(req.body);
  res.status(200).json(newCat);
}catch(err){res.status(500).json(err)}


});

/* router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const newCat = await Category.update(req.body);
    res.status(200).json(newCat);
  }catch(err){res.status(500).json(err)}
}); */

 router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
 try {
  const category = await Category.destroy({
    where: { id: req.params.id}
  });

  if (!category){
    res.status(404),json({
      message: 'Category ID does not exist'
    });
    return;
  }
 }
 catch(err){
  res.status(500).json(err);
 }

}); 

module.exports = router;
