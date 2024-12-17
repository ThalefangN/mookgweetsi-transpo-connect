import { motion } from "framer-motion";
import { ArrowLeft, Car, CreditCard, Truck, AlertTriangle, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Driving License Services",
      description: "Learn more about driving license exam bookings and payments",
      icon: Car,
      path: "/driving-services"
    },
    {
      title: "Permit & License Payments",
      description: "Pay for driving licenses and permits with ease",
      icon: CreditCard,
      path: "/permits"
    },
    {
      title: "Vehicle Registration",
      description: "Register or renew your vehicle in a few simple steps",
      icon: Truck,
      path: "/vehicle-registration"
    },
    {
      title: "Report an Issue",
      description: "Report issues like road accidents, traffic violations, etc",
      icon: AlertTriangle,
      path: "/report-issue"
    },
    {
      title: "Digital Identity / QR Code",
      description: "Access your transport-related documents and digital ID",
      icon: QrCode,
      path: "/digital-id"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-4"
        >
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Services</h1>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(service.path)}
            >
              <Card className="cursor-pointer hover:bg-accent transition-colors">
                <CardHeader className="flex flex-row items-start space-x-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>{service.title}</CardTitle>
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

export default Services;