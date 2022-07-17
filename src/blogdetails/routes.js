const { Router } = require('express');
const controller = require('./controller');
const router = Router();


// blogs
router.get('/', controller.getBlogs);
router.post('/', controller.addBlogs);
router.get('/:id', controller.getBlogsById);
router.put('/:id', controller.updateBlog);
router.delete('/:id', controller.removeBlogById);

router.get('/test', controller.getAuthorsAll)


module.exports = router;