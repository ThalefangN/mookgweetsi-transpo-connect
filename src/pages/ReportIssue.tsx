import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle, Camera, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ReportIssue = () => {
  const navigate = useNavigate();

  const reportTypes = [
    {
      title: "Traffic Accident",
      description: "Report a road accident or collision",
      icon: AlertTriangle,
    },
    {
      title: "Road Damage",
      description: "Report potholes or road infrastructure issues",
      icon: Camera,
    },
    {
      title: "Traffic Signal Issues",
      description: "Report malfunctioning traffic lights or signs",
      icon: MapPin,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-4"
        >
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Report an Issue</h1>
        </motion.div>

        <div className="bg-[#8E9196]/10 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Reporting Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Provide accurate location details</li>
            <li>Include photos if possible</li>
            <li>Be specific about the issue</li>
            <li>Emergency? Call 999 immediately</li>
          </ul>
        </div>

        <div className="grid gap-4">
          {reportTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="cursor-pointer hover:bg-accent transition-colors">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-2 rounded-full bg-[#8E9196]/10">
                    <type.icon className="h-6 w-6 text-[#8E9196]" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ReportIssue;