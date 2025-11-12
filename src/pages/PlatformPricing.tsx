import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

const PlatformPricing = () => {
  const [guaranteedPayment, setGuaranteedPayment] = useState("34234");
  const [trackingLink, setTrackingLink] = useState(
    "http://localhost:3000/v1/search/advanced/connect/jn7b8yrpqat0a6xz826iktcxn97v91c2/ks75xy1styesskffhxxsrzzhwn7f70se"
  );

  const steps = [
    { id: 1, label: "Campaign Details", icon: "FileText", completed: true },
    { id: 2, label: "Target Audience", icon: "Users", completed: true },
    { id: 3, label: "Platform & Pricing", icon: "Settings", active: true },
    { id: 4, label: "Review", icon: "CheckCircle", completed: false },
    { id: 5, label: "Launch", icon: "Rocket", completed: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-blue-50/30">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {/* Connection Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 -z-10" />
            <div
              className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 -z-10 transition-all duration-500"
              style={{ width: "50%" }}
            />

            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center gap-2">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step.completed
                      ? "bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg"
                      : step.active
                      ? "bg-white border-4 border-purple-500 text-purple-600 shadow-lg scale-110"
                      : "bg-white border-2 border-gray-300 text-gray-400"
                  }`}
                >
                  <Icon
                    name={step.icon}
                    size={20}
                    className={step.completed || step.active ? "" : "opacity-50"}
                  />
                </div>
                <span
                  className={`text-xs font-medium text-center max-w-[80px] ${
                    step.active
                      ? "text-purple-600"
                      : step.completed
                      ? "text-gray-700"
                      : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Platform & Pricing
          </h1>
          <p className="text-gray-600 text-lg">
            Set fixed budget and tracking link for your performance-based CPA
            campaign
          </p>
        </div>

        {/* CPA Info Card */}
        <Card className="mb-8 overflow-hidden border-0 shadow-lg">
          <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon name="TrendingUp" size={20} />
              </div>
              <h2 className="text-2xl font-bold">CPA (Cost Per Action)</h2>
            </div>
            <p className="text-purple-100 ml-13">
              Guaranteed payment + performance bonuses
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6">
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-purple-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="DollarSign" size={20} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  How it works for you:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You'll pay a minimum guaranteed amount upfront. Then,
                  additional payments will be made based on the creator's
                  performance metrics (clicks, conversions, engagement).
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Payment Form */}
        <div className="space-y-6">
          {/* Guaranteed Payment */}
          <Card className="p-6 shadow-md border-purple-100">
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <Label
                  htmlFor="payment"
                  className="text-base font-semibold text-gray-900"
                >
                  Guaranteed Minimum Payment
                </Label>
                <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                  Required upfront payment
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                This amount will be paid regardless of performance
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">
                $
              </div>
              <Input
                id="payment"
                type="number"
                value={guaranteedPayment}
                onChange={(e) => setGuaranteedPayment(e.target.value)}
                className="pl-10 h-14 text-lg font-semibold border-2 border-gray-200 focus:border-purple-500 rounded-xl"
                placeholder="Enter amount"
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-green-600 bg-green-50 rounded-lg p-3">
              <Icon name="CheckCircle" size={18} />
              <span className="font-medium">
                This amount will be paid regardless of performance
              </span>
            </div>
          </Card>

          {/* Performance Bonuses */}
          <Card className="p-6 shadow-md border-purple-100 bg-gradient-to-br from-white to-purple-50/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Icon name="TrendingUp" size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  + Performance Bonuses
                </h3>
                <p className="text-sm text-gray-600">
                  Additional payments based on actual results (tracked via
                  analytics)
                </p>
              </div>
            </div>
          </Card>

          {/* Tracking Link */}
          <Card className="p-6 shadow-md border-purple-100">
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <Label
                  htmlFor="tracking"
                  className="text-base font-semibold text-gray-900"
                >
                  Performance Tracking Link
                </Label>
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  Optional
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Add a tracking URL to monitor performance (UTM parameters,
                referral codes, etc.)
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Icon name="Link" size={20} />
              </div>
              <Input
                id="tracking"
                type="url"
                value={trackingLink}
                onChange={(e) => setTrackingLink(e.target.value)}
                className="pl-12 h-14 border-2 border-gray-200 focus:border-blue-500 rounded-xl font-mono text-sm"
                placeholder="https://your-website.com/campaign-link"
              />
            </div>

            <div className="mt-4 flex items-start gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
              <Icon name="Info" size={18} className="flex-shrink-0 mt-0.5" />
              <span>
                This link will be used to track clicks, conversions, and other
                performance metrics
              </span>
            </div>
          </Card>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 px-6 hover:bg-gray-50"
          >
            <Icon name="ChevronLeft" size={20} />
            Previous
          </Button>

          <Button
            size="lg"
            className="gap-2 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
          >
            Next
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlatformPricing;
