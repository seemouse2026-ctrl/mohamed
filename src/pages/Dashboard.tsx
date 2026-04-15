import { COURSES } from '@/constants';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  PlayCircle,
  Settings,
  LogOut,
  Bell
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  const enrolledCourses = COURSES.slice(0, 2).map((course, i) => ({
    ...course,
    progress: i === 0 ? 75 : 30,
    lastAccessed: '2 hours ago'
  }));

  return (
    <div className="bg-background-soft min-h-screen pb-24">
      {/* Dashboard Header */}
      <section className="bg-white border-b border-[#E2E8F0] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img 
                  src="https://i.pravatar.cc/150?u=john" 
                  alt="John Doe" 
                  className="h-20 w-20 rounded-[12px] object-cover border-4 border-background-alt"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-[#10B981] rounded-full border-4 border-white flex items-center justify-center shadow-sm">
                  <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-[800] text-text-main tracking-tight">Welcome back, John!</h1>
                <p className="text-text-muted">You've completed 75% of your weekly goal. Keep it up!</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="icon" className="rounded-[8px] h-12 w-12 border-none bg-background-alt text-text-muted hover:text-primary transition-all">
                <Bell size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-[8px] h-12 w-12 border-none bg-background-alt text-text-muted hover:text-primary transition-all">
                <Settings size={20} />
              </Button>
              <Button variant="outline" className="rounded-[8px] h-12 border-none bg-red-50 text-red-600 hover:bg-red-100 font-bold transition-all">
                <LogOut size={20} className="mr-2" /> Log Out
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Overview */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: BookOpen, label: 'Enrolled', value: '4', color: 'blue' },
                { icon: Clock, label: 'Hours Spent', value: '24h', color: 'purple' },
                { icon: Award, label: 'Certificates', value: '2', color: 'cyan' },
              ].map((stat, i) => (
                <Card key={i} className="border border-black/5 soft-shadow rounded-[20px] overflow-hidden">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className={`h-12 w-12 rounded-[12px] bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center`}>
                      <stat.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-muted uppercase tracking-wider">{stat.label}</p>
                      <p className="text-2xl font-bold text-text-main">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enrolled Courses */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-text-main">Continue Learning</h2>
                <Button variant="link" className="text-primary font-bold">View All</Button>
              </div>

              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="border border-black/5 soft-shadow rounded-[20px] overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="h-24 w-40 rounded-[12px] overflow-hidden shrink-0">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-grow space-y-4 w-full">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-text-main text-lg leading-tight">{course.title}</h3>
                              <p className="text-sm text-text-muted">Last accessed {course.lastAccessed}</p>
                            </div>
                            <Button size="icon" className="rounded-full h-12 w-12 gradient-btn shadow-lg">
                              <PlayCircle size={24} />
                            </Button>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-bold text-text-main">{course.progress}% Complete</span>
                              <span className="text-text-muted">12/16 Lessons</span>
                            </div>
                            <div className="h-2 w-full bg-background-alt rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${course.progress}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Weekly Activity */}
            <Card className="border border-black/5 soft-shadow rounded-[20px] overflow-hidden">
              <CardHeader className="p-6 pb-0">
                <h3 className="text-xl font-bold text-text-main flex items-center gap-2">
                  <TrendingUp size={20} className="text-primary" /> Weekly Activity
                </h3>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-end justify-between h-32 gap-2">
                  {[40, 70, 45, 90, 65, 30, 50].map((height, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 flex-grow">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`w-full rounded-t-lg ${i === 3 ? 'bg-primary' : 'bg-background-alt'}`}
                      />
                      <span className="text-[10px] font-bold text-text-muted uppercase">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommended for You */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text-main">Recommended</h3>
              <div className="space-y-4">
                {COURSES.slice(2, 4).map((course) => (
                  <Card key={course.id} className="border border-black/5 soft-shadow rounded-[20px] overflow-hidden bg-white">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="h-16 w-16 rounded-[12px] object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0">
                          <h4 className="font-bold text-text-main text-sm truncate">{course.title}</h4>
                          <p className="text-xs text-text-muted">{course.instructor}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-[10px] px-2 py-0 h-5 bg-blue-50 text-blue-600 border-none">
                              {course.category}
                            </Badge>
                            <span className="text-xs font-bold text-primary">${course.price}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full rounded-[8px] border-primary text-primary hover:bg-primary hover:text-white font-bold transition-all">
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
