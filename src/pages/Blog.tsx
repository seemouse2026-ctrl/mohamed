import { BLOG_POSTS } from '@/constants';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Blog() {
  return (
    <div className="bg-background-soft min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white border-b py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-main tracking-tight">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-text-muted">
              Insights, news, and tips from the CajaaibGude team and community.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {BLOG_POSTS.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="overflow-hidden border-none soft-shadow bg-white rounded-3xl group">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-primary text-white hover:bg-primary border-none shadow-lg px-4 py-1">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="p-8 pb-4">
                    <div className="flex items-center space-x-6 text-sm text-text-muted mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} /> {post.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <User size={16} /> {post.author}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-text-main group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </CardHeader>

                  <CardContent className="p-8 pt-0">
                    <p className="text-text-muted text-lg leading-relaxed mb-8">
                      {post.excerpt}
                    </p>
                    <Button variant="ghost" className="text-primary font-bold p-0 hover:bg-transparent group/btn">
                      Read Full Article <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-2" size={20} />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-12">
            {/* Search */}
            <div className="bg-white p-8 rounded-3xl soft-shadow space-y-6">
              <h3 className="text-xl font-bold text-text-main">Search Blog</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-background-soft border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-8 rounded-3xl soft-shadow space-y-6">
              <h3 className="text-xl font-bold text-text-main">Categories</h3>
              <div className="space-y-3">
                {['Technology', 'Education', 'Career', 'Design', 'Marketing'].map((cat) => (
                  <div key={cat} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-text-muted group-hover:text-primary transition-colors">{cat}</span>
                    <span className="h-6 w-6 rounded-full bg-background-alt text-xs flex items-center justify-center font-bold text-text-muted group-hover:bg-primary group-hover:text-white transition-all">12</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Subscribe to our Blog</h3>
              <p className="text-white/80 mb-6">Get the latest articles and news delivered directly to your inbox.</p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white outline-none"
                />
                <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-xl font-bold">
                  Subscribe
                </Button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
