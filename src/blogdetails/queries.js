// blogspot table 
const getblogs = 'SELECT * FROM blogspot';
const getBlogsById = 'SELECT * FROM blogspot WHERE id = $1';
const addBlogs = 'INSERT INTO blogspot (title, description, slug_url, created_date, updated_date) VALUES ($1, $2, $3, $4, $5)';
const removeBlogById = 'DELETE FROM blogspot WHERE id = $1';
const updateBlog = 'UPDATE blogspot SET (title, description) = ($1, $2) WHERE id = $3';

//blogauthors

const getAuthors = 'SELECT * FROM blogauthors';


module.exports = {
    getblogs,
    getBlogsById,
    addBlogs,
    removeBlogById,
    updateBlog,
    getAuthors,
};