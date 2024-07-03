# E-Commerce Back End

## Description
This project is a back end for an e-commerce website. It provides a functional Express.js API that interacts with a PostgreSQL database using Sequelize. The API supports CRUD operations for products, categories, and tags, allowing for the creation, retrieval, updating, and deletion of data.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Models](#models)
- [Routes](#routes)
- [Seeding](#seeding)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ecommerce-backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ecommerce-backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage
1. Create a `.env` file in the root directory and add your database credentials:
    ```
    DB_NAME='ecommerce_db'
    DB_USER='your_database_username'
    DB_PASSWORD='your_database_password'
    ```

2. Create the database by running the schema script:
    ```bash
    psql -U your_database_username -f db/schema.sql
    ```

3. Seed the database with initial data:
    ```bash
    npm run seed
    ```

4. Start the server:
    ```bash
    npm start
    ```

5. The server will start on `http://localhost:3001` by default.

## Models
The database contains the following four models:

### Category
- **id**: Integer, primary key, auto-increment, not null
- **category_name**: String, not null

### Product
- **id**: Integer, primary key, auto-increment, not null
- **product_name**: String, not null
- **price**: Decimal, not null, validates that the value is a decimal
- **stock**: Integer, not null, default value 10, validates that the value is numeric
- **category_id**: Integer, references the category model's id

### Tag
- **id**: Integer, primary key, auto-increment, not null
- **tag_name**: String

### ProductTag
- **id**: Integer, primary key, auto-increment, not null
- **product_id**: Integer, references the product model's id
- **tag_id**: Integer, references the tag model's id

## Routes
The following routes are available:

### Categories
- `GET /api/categories`: Get all categories with their associated products.
- `GET /api/categories/:id`: Get a single category by its id with its associated products.
- `POST /api/categories`: Create a new category.
- `PUT /api/categories/:id`: Update a category by its id.
- `DELETE /api/categories/:id`: Delete a category by its id.

### Products
- `GET /api/products`: Get all products with their associated categories and tags.
- `GET /api/products/:id`: Get a single product by its id with its associated categories and tags.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update a product by its id.
- `DELETE /api/products/:id`: Delete a product by its id.

### Tags
- `GET /api/tags`: Get all tags with their associated products.
- `GET /api/tags/:id`: Get a single tag by its id with its associated products.
- `POST /api/tags`: Create a new tag.
- `PUT /api/tags/:id`: Update a tag by its id.
- `DELETE /api/tags/:id`: Delete a tag by its id.

## Seeding
The database can be seeded with initial data using the following command:
```bash
npm run seed
