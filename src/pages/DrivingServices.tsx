import { motion } from "framer-motion";
import { ArrowLeft, Car, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const DrivingServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Learner's License",
      description: "Apply for a new learner's license or book a test",
      icon: FileText,
    },
    {
      title: "Driver's License",
      description: "Apply for, renew, or replace your driver's license",
      icon: Car,
    },
    {
      title: "Test Booking",
      description: "Schedule your driving test at available testing centers",
      icon: Clock,
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
          <h1 className="text-2xl font-bold">Driving License Services</h1>
        </motion.div>

        <div className="bg-[#9b87f5]/10 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Important Information</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Valid identification document required for all services</li>
            <li>Medical certificate needed for new license applications</li>
            <li>Proof of residence not older than 3 months</li>
            <li>Payment methods: Cash, Credit/Debit cards accepted</li>
          </ul>
        </div>

        <div className="grid gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="cursor-pointer hover:bg-accent transition-colors">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-2 rounded-full bg-[#9b87f5]/10">
                    <service.icon className="h-6 w-6 text-[#9b87f5]" />
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

export default DrivingServices;