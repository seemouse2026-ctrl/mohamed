import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="bg-background-soft min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white border-b py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-main tracking-tight">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-text-muted">
              Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl soft-shadow space-y-8">
              <h3 className="text-2xl font-bold text-text-main">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-text-main">Email Us</p>
                    <p className="text-text-muted">support@cajaaibgude.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-xl bg-purple-50 text-secondary flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-text-main">Call Us</p>
                    <p className="text-text-muted">+1 (555) 000-0000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-xl bg-cyan-50 text-accent flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-text-main">Our Office</p>
                    <p className="text-text-muted">123 Learning Way, Digital City, 10101</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t">
                <p className="font-bold text-text-main mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                    <div key={social} className="h-10 w-10 rounded-full bg-background-alt flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all cursor-pointer">
                      <MessageSquare size={18} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white shadow-xl">
              <h4 className="text-xl font-bold mb-4">Join Our Community</h4>
              <p className="text-white/80 mb-6">Connect with thousands of other students and share your learning journey.</p>
              <Button variant="secondary" className="w-full rounded-xl bg-white text-primary hover:bg-white/90">
                Join Discord
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-3xl soft-shadow"
            >
              <h3 className="text-2xl font-bold text-text-main mb-8">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" className="h-12 rounded-xl bg-background-soft border-none focus-visible:ring-2 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" className="h-12 rounded-xl bg-background-soft border-none focus-visible:ring-2 focus-visible:ring-primary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl bg-background-soft border-none focus-visible:ring-2 focus-visible:ring-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" className="h-12 rounded-xl bg-background-soft border-none focus-visible:ring-2 focus-visible:ring-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    placeholder="Tell us more about your inquiry..."
                    className="w-full rounded-xl bg-background-soft border-none p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                  ></textarea>
                </div>

                <Button className="w-full md:w-auto gradient-btn rounded-xl px-12 py-6 text-lg font-bold shadow-lg">
                  Send Message <Send className="ml-2" size={20} />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
