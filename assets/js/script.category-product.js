//Cada categorias possuei vários produtos
//Cada produto é pertencente a uma Categoria

class Category{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class products{
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
    addCategory(name){
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id,name);
        this.categories.push(category);
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

        const product = new product(id, name, price, category);

        this.products.push(product);


    }
}

const categoriesList = new CategoryService();
function createCategory(){
    const categoryName = "Candies";
    categoriesList.addCategory(categoryName);
    console.log(categoriesList.categories);
}