// Creating a router as a module and requiring express and the required models for the below routes.

const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


router.get('/', async (req, res) => {
  // route to find all tags
  try {
    const tagData = await Tag.findAll({
      include: {
        model: Product,
        through: ProductTag,
      },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  }
);

 // route to find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: {
      model: Product,
       through: ProductTag,
  }});
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  }
);
 

 // route to create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);  
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
 
});

 // route toupdate a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }});
         res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
}});

// route to delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy( {
      where: {
        id: req.params.id,
      },
    });
   
    res.status(200).json(tagData);

  } catch (err) {
      res.status(500).json(err);
  }
});
  

// exporting router

module.exports = router;
