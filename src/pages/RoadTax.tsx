import { motion } from "framer-motion";
import { ArrowLeft, Calculator, Calendar, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const RoadTax = () => {
  const navigate = useNavigate();

  const taxServices = [
    {
      title: "Calculate Road Tax",
      description: "Calculate your vehicle's road tax amount",
      icon: Calculator,
    },
    {
      title: "Pay Road Tax",
      description: "Make your road tax payment online",
      icon: Receipt,
    },
    {
      title: "Tax History",
      description: "View your past road tax payments",
      icon: Calendar,
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
          <h1 className="text-2xl font-bold">Road Tax Payments</h1>
        </motion.div>

        <div className="bg-[#1EAEDB]/10 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Tax Payment Guide</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Tax rates vary by vehicle type and weight</li>
            <li>Annual or quarterly payment options</li>
            <li>Late payment penalties apply</li>
            <li>Keep proof of payment for verification</li>
          </ul>
        </div>

        <div className="grid gap-4">
          {taxServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="cursor-pointer hover:bg-accent transition-colors">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-2 rounded-full bg-[#1EAEDB]/10">
                    <service.icon className="h-6 w-6 text-[#1EAEDB]" />
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

export default RoadTax;