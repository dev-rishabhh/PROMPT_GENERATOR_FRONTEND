
import { Icon } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3 mb-3">
        <div className="bg-blue-100 p-2 rounded-lg">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;