import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OfflineAwareRoute from "./components/OfflineAwareRoute";
import GetStarted from "./pages/GetStarted";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import OTPVerification from "./pages/OTPVerification";
import Home from "./pages/Home";
import DrivingServices from "./pages/DrivingServices";
import Permits from "./pages/Permits";
import VehicleRegistration from "./pages/VehicleRegistration";
import RoadTax from "./pages/RoadTax";
import ReportIssue from "./pages/ReportIssue";
import DigitalID from "./pages/DigitalID";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Services from "./pages/Services";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      networkMode: 'always',
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/get-started" replace />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/signup" element={<GetStarted />} />
          <Route path="/signin" element={<GetStarted />} />
          <Route path="/verify" element={<OTPVerification />} />
          <Route
            path="/home"
            element={
              <OfflineAwareRoute>
                <Home />
              </OfflineAwareRoute>
            }
          />
          <Route
            path="/driving-services"
            element={
              <OfflineAwareRoute>
                <DrivingServices />
              </OfflineAwareRoute>
            }
          />
          <Route
            path="/permits"
            element={
              <OfflineAwareRoute>
                <Permits />
              </OfflineAwareRoute>
            }
          />
          <Route
            path="/vehicle-registration"
            element={
              <OfflineAwareRoute>
                <VehicleRegistration />
              </OfflineAwareRoute>
            }
          />
          <Route
            path="/road-tax"
            element={
              <OfflineAwareRoute>
                <RoadTax />
              </OfflineAwareRoute>
            }
          />
          <Route
            path="/report-issue"
            element={
              <OfflineAwareRoute>
                <ReportIssue />
              </OfflineAwareRoute>
            }
          />
          <Route
            path="/digital-id"
            element={
              <OfflineAwareRoute>
                <DigitalID />
              </OfflineAwareRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <OfflineAwareRoute>
                <Profile />
              </OfflineAwareRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <OfflineAwareRoute>
                <Notifications />
              </OfflineAwareRoute>
            }
          />
          <Route
            path="/services"
            element={
              <OfflineAwareRoute>
                <Services />
              </OfflineAwareRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;