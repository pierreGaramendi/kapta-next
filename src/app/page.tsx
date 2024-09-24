import { FaArrowRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";
import { GoZap } from "react-icons/go";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-indigo-500 rounded flex items-center justify-center text-white font-bold text-xl">K</div>
          <span className="text-xl font-bold">Kapta</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link className="hover:text-indigo-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="hover:text-indigo-400 transition-colors" href="#pricing">
            Pricing
          </Link>
          <Link className="hover:text-indigo-400 transition-colors" href="#testimonials">
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline-flex rounded hover:text-indigo-400 transition-colors">Log in</button>
          <button className="bg-indigo-500 rounded hover:bg-indigo-600 text-white transition-colors">Sign up</button>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Streamline Your Team's Workflow</h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto">
            TaskFlow brings Scrum and Kanban methodologies together in one powerful, intuitive platform. Boost your team's
            productivity today.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white transition-colors text-lg px-8 py-3 rounded">
              Get Started Free
            </button>

            <button className="text-indigo-400 border-indigo-400 hover:bg-indigo-400 hover:text-zinc-900 transition-colors text-lg px-8 py-3 rounded">
              <Link href="/w/dashboard">Watch Demo</Link>
            </button>
          </div>
        </section>

        <section id="features" className="bg-zinc-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Powerful Features for Modern Teams</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-700 p-6 rounded">
                <FiLayout className="text-indigo-400 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flexible Boards</h3>
                <p className="text-zinc-400">
                  Customize your workflow with drag-and-drop Kanban boards that adapt to your team's needs.
                </p>
              </div>
              <div className="bg-zinc-700 p-6 rounded">
                <HiUsers className="text-indigo-400 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-zinc-400">
                  Foster seamless communication and cooperation with built-in chat and file sharing.
                </p>
              </div>
              <div className="bg-zinc-700 p-6 rounded">
                <GoZap className="text-indigo-400 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Agile Sprints</h3>
                <p className="text-zinc-400">Plan, track, and manage sprints with ease using our intuitive Scrum tools.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Simple, Transparent Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-800 p-8 rounded border border-zinc-700">
                <h3 className="text-xl font-semibold mb-4">Basic</h3>
                <p className="text-3xl font-bold mb-6">
                  $0<span className="text-xl font-normal text-zinc-400">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 w-5 h-5 mr-2" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 w-5 h-5 mr-2" />
                    <span>Basic Kanban boards</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 w-5 h-5 mr-2" />
                    <span>Limited file storage</span>
                  </li>
                </ul>
                <button className="rounded w-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors">
                  Get Started
                </button>
              </div>
              <div className="bg-zinc-800 p-8 rounded border border-indigo-500">
                <h3 className="text-xl font-semibold mb-4">Pro</h3>
                <p className="text-3xl font-bold mb-6">
                  $12<span className="text-xl font-normal text-zinc-400">/user/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 w-5 h-5 mr-2" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 w-5 h-5 mr-2" />
                    <span>Advanced Scrum & Kanban tools</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 w-5 h-5 mr-2" />
                    <span>Unlimited file storage</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 w-5 h-5 mr-2" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="rounded w-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors">
                  Start Free Trial
                </button>
              </div>
              <div className="bg-zinc-800 p-8 rounded border border-zinc-700">
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <p className="text-3xl font-bold mb-6">Custom</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 w-5 h-5 mr-2" />
                    <span>All Pro features</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 w-5 h-5 mr-2" />
                    <span>Advanced security & compliance</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 w-5 h-5 mr-2" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 w-5 h-5 mr-2" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <button className="rounded w-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-zinc-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-700 p-6 rounded">
                <p className="text-lg mb-4">
                  "TaskFlow has revolutionized our team's productivity. The intuitive interface and powerful features have made
                  project management a breeze."
                </p>
                <div className="flex items-center">
                  <img src="/placeholder.svg?height=50&width=50" alt="Sarah J." className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">Sarah J.</p>
                    <p className="text-sm text-zinc-400">Product Manager, TechCorp</p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-700 p-6 rounded">
                <p className="text-lg mb-4">
                  "We've tried many project management tools, but TaskFlow stands out with its perfect blend of Scrum and Kanban
                  methodologies. It's a game-changer!"
                </p>
                <div className="flex items-center">
                  <img src="/placeholder.svg?height=50&width=50" alt="Mark T." className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">Mark T.</p>
                    <p className="text-sm text-zinc-400">CTO, InnovateCo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Team's Productivity?</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Join thousands of teams already using TaskFlow to streamline their workflows.
            </p>
            <div className="flex justify-center">
              <button className="bg-indigo-500 rounded hover:bg-indigo-600 text-white transition-colors text-lg px-8 py-3 flex flex-row items-center">
                <span>Get Started Free</span>
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-indigo-400 transition-colors">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-700 text-center text-zinc-400">
            <p>&copy;2023 TaskFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
