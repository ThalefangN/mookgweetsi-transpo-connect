import { motion } from "framer-motion";
import { ArrowLeft, Car, FileCheck, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const VehicleRegistration = () => {
  const navigate = useNavigate();

  const registrationServices = [
    {
      title: "New Registration",
      description: "Register your vehicle for the first time",
      icon: Car,
    },
    {
      title: "Transfer of Ownership",
      description: "Transfer vehicle ownership to another person",
      icon: FileCheck,
    },
    {
      title: "Renewal Registration",
      description: "Renew your existing vehicle registration",
      icon: RefreshCw,
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
          <h1 className="text-2xl font-bold">Vehicle Registration</h1>
        </motion.div>

        <div className="bg-[#D3E4FD] rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Required Documents</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Proof of identity (National ID/Passport)</li>
            <li>Proof of residence</li>
            <li>Vehicle inspection certificate</li>
            <li>Insurance documentation</li>
          </ul>
        </div>

        <div className="grid gap-4">
          {registrationServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="cursor-pointer hover:bg-accent transition-colors">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-2 rounded-full bg-[#D3E4FD]">
                    <service.icon className="h-6 w-6 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
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

export default VehicleRegistration;