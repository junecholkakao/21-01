import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 3, name: 'My first book', description: 'The first book I ever wrote'},
  { id: 'p2', price: 5, name: 'My second book', description: 'The second book I wrote'},
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product=>(
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
          />))}
        <ProductItem
          key='t1' id='t1'
          title='Test'
          price={2}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
