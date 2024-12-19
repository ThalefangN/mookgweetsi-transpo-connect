import { motion } from "framer-motion";
import { ArrowLeft, FileText, CreditCard, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Permits = () => {
  const navigate = useNavigate();

  const permitTypes = [
    {
      title: "Commercial Permits",
      description: "Apply for business transportation permits",
      icon: FileText,
    },
    {
      title: "Special Permits",
      description: "Abnormal load and special event permits",
      icon: CreditCard,
    },
    {
      title: "Temporary Permits",
      description: "Short-term and visitor permits",
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
          <h1 className="text-2xl font-bold">Permit & License Payments</h1>
        </motion.div>

        <div className="bg-[#7E69AB]/10 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Payment Information</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Online payments available 24/7</li>
            <li>Multiple payment methods accepted</li>
            <li>Instant digital receipt provided</li>
            <li>Secure payment processing</li>
          </ul>
        </div>

        <div className="grid gap-4">
          {permitTypes.map((permit, index) => (
            <motion.div
              key={permit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="cursor-pointer hover:bg-accent transition-colors">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-2 rounded-full bg-[#7E69AB]/10">
                    <permit.icon className="h-6 w-6 text-[#7E69AB]" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{permit.title}</CardTitle>
                    <CardDescription>{permit.description}</CardDescription>
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

export default Permits;