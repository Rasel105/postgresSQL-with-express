CREATE DATABASE todo_database;

--\c into todo database

CREATE TABLE blogspot(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    author_id serial NOT NULL,
    slug_url VARCHAR(255) NOT NULL,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP
);

CREATE TABLE blogauthors(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(50) NOT NULL,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP
);

CREATE TABLE blogcomments(
    id SERIAL PRIMARY KEY,
    blog_id serial NOT NULL,
    commenter_name VARCHAR(255),
    comment VARCHAR(500),
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP
);
