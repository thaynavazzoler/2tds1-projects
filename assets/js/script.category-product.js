//Cada categorias possuei vários produtos
//Cada produto é pertencente a uma Categoria

class Category{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product{
    constructor(id, name, price, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService{
    constructor(){
        this.categories = [];
        this.nextCategoryId = 1;
    }
    //CRUD => Create, Read, Update, Delete
    //C => create
    addCategory(name){
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id,name);
        this.categories.push(category);

        
    }
    //R =>Read
    getCategoryById(id) {
        return this.categories.find((category)=> category.id === id);
    }

    //U => Update
    updateCategory(id, name){
        const category = this.getCategoryById(id);
        category.name = name;
    }

    deleteCategory(id){
        const category = this.getCategoryById(id);
        const index = this.categories.indexOf(category);

        this.categories.splice(index, 1);
    }
    
}




class ProductService{
    constructor(){
        this.products = [];
        this.nextProductId = 1;
    }
    addProduct(name, price, category) {
        const id = this.nextProductId;
        this.nextProductId ++;

        const product = new Product(id, name, price, category);

        this.products.push(product);
        category.products.push(product);


    }
    //R => Read
    getProductById(id){
        return this.products.find((product)=>product.id == id);

    }
}

const categoriesList = new CategoryService();
const productsList = new ProductService();

function createCategory(){
    const categoryName1 = "Candies";
    const categoryName2 = "Shoes";
    const categoryName3 = "Books";
  
    categoriesList.addCategory(categoryName1);
    categoriesList.addCategory(categoryName2);
    categoriesList.addCategory(categoryName3);

    //console.log(categoriesList.categories);
 

}

function createProduct(){
    const productName = "Choco";
    const productPrice = 0.50;
    const productCategory = categoriesList.categories[0];

    productsList.addProduct(productName,productPrice, productCategory);

    console.log(productsList.products);
}

function findCategory(id){
    const category = categoriesList.getCategoryById(id);

    console.log(category.name);

}

function editCategory(id, name){
    categoriesList.updateCategory(id, name);

    console.log(categoriesList.categories);
}

function deleteCategory(id){
    categoriesList.deleteCategory(id);

    console.log(categoriesList.categories);
}