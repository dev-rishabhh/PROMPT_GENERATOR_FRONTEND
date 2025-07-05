import { Brain, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI Summarizer</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Transform lengthy text into intelligent summaries with our advanced AI technology. Save time and extract key insights effortlessly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">API Access</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; 2025 AI Prompt Generator. All rights reserved. Powered by advanced artificial intelligence.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-500 text-sm">Terms of Service</span>
              <span className="text-gray-500 text-sm">Privacy Policy</span>
              <span className="text-gray-500 text-sm">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;