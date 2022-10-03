const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include: {
        model: Product,
        attributes: ['product_name','price','stock','category_id'],
      },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  }
);

 // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk({
      model: Product,
        attributes: ['product_name','price','stock','category_id'],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  }
);
 


router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create({
      tag_id: req.body.tag_id,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    }); if (!tagData) {
      res.status(404).json({message: 'No tag with this id!'});
      return;
};
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
}});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    // if (!tagData) {
    //   res.status(404).json({ message: 'No tag found with that id!'});
    // }
    res.status(200).json(tagData);

  } catch (err) {
      res.status(500).json(err);
  }
});
  // delete on tag by its `id` value


module.exports = router;
