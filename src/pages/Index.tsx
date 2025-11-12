import { CampaignInfo } from "@/components/CampaignInfo";

const Index = () => {
  const campaignData = {
    name: "Tblondi Gaming Frenzy",
    description:
      "Gaming campaign looking for authentic creators to showcase gaming content. We're seeking passionate gamers who can create engaging content around gaming experiences.",
    budget: {
      min: 500,
      max: 2000,
    },
    category: "Gaming & Esports",
    socialPlatforms: ["YouTube", "Instagram", "TikTok", "Twitch"],
    owner: "Anastasia Kryuchkova",
    type: "CPA (Cost Per Action)",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find Creators for Campaign
          </h1>
          <p className="text-gray-600">
            Find the perfect creator for your campaign. Filter by categories,
            location, social media presence, and more.
          </p>
        </div>

        <CampaignInfo {...campaignData} />

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">Creator search interface coming soon...</p>
            <p className="text-sm mt-2">
              This section will contain filters and creator cards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
