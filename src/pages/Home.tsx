import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Home = () => {
  const featuredProducts = products.filter(p => p.featured);
  const electronics = featuredProducts.filter(p => p.category === 'electronics');
  const cosmetics = featuredProducts.filter(p => p.category === 'cosmetics');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Discover Premium Tech & Beauty
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Experience the perfect blend of cutting-edge electronics and luxurious cosmetics. 
              Quality products delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/products">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Electronics Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-3xl font-bold text-foreground">Electronics</h2>
              <p className="text-muted-foreground">Latest tech gadgets and accessories</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {electronics.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/products?category=electronics">
                View All Electronics <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cosmetics Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-secondary" />
            <div>
              <h2 className="text-3xl font-bold text-foreground">Cosmetics</h2>
              <p className="text-muted-foreground">Premium beauty and skincare products</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cosmetics.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/products?category=cosmetics">
                View All Cosmetics <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Shop?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Browse our full collection and find your perfect products
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/products">
                Explore All Products <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
