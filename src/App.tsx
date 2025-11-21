import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExploreCampaign from "./pages/ExploreCampaign";
import CampaignDesign from "./pages/CampaignDesign";
import AwarenessPosters from "./pages/AwarenessPosters";
import JoinMovement from "./pages/JoinMovement";
import PolicyRecommendations from "./pages/PolicyRecommendations";
import VisibilityCampaign from "./pages/VisibilityCampaign";
import EducationalResources from "./pages/EducationalResources";
import CommunityEngagement from "./pages/CommunityEngagement";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore" element={<ExploreCampaign />} />
          <Route path="/campaign-design" element={<CampaignDesign />} />
          <Route path="/awareness-posters" element={<AwarenessPosters />} />
          <Route path="/join-movement" element={<JoinMovement />} />
          <Route path="/policy-recommendations" element={<PolicyRecommendations />} />
          <Route path="/visibility-campaign" element={<VisibilityCampaign />} />
          <Route path="/educational-resources" element={<EducationalResources />} />
          <Route path="/community-engagement" element={<CommunityEngagement />} />
          <Route path="/quiz" element={<Quiz />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
