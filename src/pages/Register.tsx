import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen, Github, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Register() {
  return (
    <div className="min-h-screen bg-background-soft flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-white p-8 md:p-12 rounded-[20px] soft-shadow space-y-8 border border-black/5">
          <div className="text-center space-y-2">
            <Link to="/" className="inline-flex items-center space-x-2 mb-4">
              <span className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                CajaaibGude
              </span>
            </Link>
            <h1 className="text-3xl font-[800] text-text-main">Create Account</h1>
            <p className="text-text-muted">Join our community and start learning</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <div className="relative">
                  <Input id="full-name" placeholder="John Doe" className="h-12 pl-12 rounded-[8px] bg-background-soft border border-[#E2E8F0] focus-visible:ring-2 focus-visible:ring-primary" />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Input id="email" type="email" placeholder="name@example.com" className="h-12 pl-12 rounded-[8px] bg-background-soft border border-[#E2E8F0] focus-visible:ring-2 focus-visible:ring-primary" />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input id="password" type="password" placeholder="••••••••" className="h-12 pl-12 rounded-[8px] bg-background-soft border border-[#E2E8F0] focus-visible:ring-2 focus-visible:ring-primary" />
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="terms" className="mt-1 rounded border-background-alt text-primary focus:ring-primary" />
              <label htmlFor="terms" className="text-xs text-text-muted leading-relaxed">
                I agree to the <a href="#" className="text-primary font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-bold hover:underline">Privacy Policy</a>.
              </label>
            </div>

            <Link to="/dashboard">
              <Button className="w-full gradient-btn h-14 rounded-[8px] text-lg font-bold shadow-xl">
                Create Account <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-background-alt"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-text-muted font-bold tracking-wider">Or sign up with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-12 rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-background-alt transition-all">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
              Google
            </Button>
            <Button variant="outline" className="h-12 rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-background-alt transition-all">
              <Github size={20} className="mr-2" />
              GitHub
            </Button>
          </div>

          <p className="text-center text-sm text-text-muted">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
