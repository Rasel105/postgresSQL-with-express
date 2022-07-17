const pool = require('../../db');
const queries = require('./queries');


// all blogs 
const getBlogs = (req, res) => {
    pool.query(queries.getblogs, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    });
};

const getBlogsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getBlogsById, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    });
};

const addBlogs = (req, res) => {
    const { title, description, slug_url, created_date, updated_date } = req.body;
    pool.query(queries.addBlogs, [title, description, slug_url, created_date, updated_date], (error, result) => {
        if (error) throw error;
        res.status(201).send("Blog added successfully");
        console.log("Blog created");
    });
};

const removeBlogById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getBlogsById, [id], (error, result) => {
        const noBlogExist = !result.rows.length;
        if (noBlogExist) {
            res.send("Blog not exits in the database couldn't remove.");
        }
        pool.query(queries.removeBlogById, [id], (error, result) => {
            if (error) throw error;
            res.status(200).send("Blog Delete successfully");
        });
    });
};

const updateBlog = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;

    pool.query(queries.getBlogsById, [id], (error, result) => {
        const noBlogExist = !result.rows.length;
        if (noBlogExist) {
            res.send("Blog not exits in the database couldn't update.");
        }
        pool.query(queries.updateBlog, [title, description, id], (error, result) => {
            if (error) throw error;
            res.status(200).send("Blog updated successfully");
        });
    });
};

// all blogs end

// authors 

const getAuthorsAll = (req, res) => {
    pool.query("SELECT * FROM blogauthors", (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    });
};

module.exports = {
    getBlogs,
    getBlogsById,
    addBlogs,
    removeBlogById,
    updateBlog,
    getAuthorsAll,
}