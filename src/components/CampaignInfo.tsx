import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface CampaignInfoProps {
  name: string;
  description: string;
  budget: {
    min: number;
    max: number;
  };
  category: string;
  socialPlatforms: string[];
  owner: string;
  type: string;
}

export const CampaignInfo = ({
  name,
  description,
  budget,
  category,
  socialPlatforms,
  owner,
  type,
}: CampaignInfoProps) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "youtube":
        return "Youtube";
      case "instagram":
        return "Instagram";
      case "tiktok":
        return "Music";
      case "twitter":
        return "Twitter";
      case "facebook":
        return "Facebook";
      case "twitch":
        return "Tv";
      default:
        return "Globe";
    }
  };

  return (
    <div className="w-full mb-8 animate-fade-in">
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-shadow duration-300">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {name}
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <span className="font-medium">{owner}</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-500">{category}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-1.5 text-sm font-medium"
              >
                {type}
              </Badge>
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">Budget</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ${budget.min.toLocaleString()} - ${budget.max.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-purple-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Icon name="Sparkles" size={16} className="text-purple-500" />
              <span className="font-medium">Platforms:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {socialPlatforms.map((platform) => (
                <div
                  key={platform}
                  className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 border border-purple-200 hover:border-purple-300 transition-colors hover-scale"
                >
                  <Icon
                    name={getPlatformIcon(platform)}
                    size={16}
                    className="text-purple-600"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {platform}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
