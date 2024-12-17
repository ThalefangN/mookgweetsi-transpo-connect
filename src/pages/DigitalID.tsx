import { motion } from "framer-motion";
import { ArrowLeft, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DigitalID = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-4"
        >
          <Button variant="ghost" size="icon" onClick={() => navigate("/services")}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Digital Identity</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Your Digital ID QR Code</CardTitle>
              <CardDescription>
                Scan this QR code to verify your identity and access your documents
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-white rounded-lg">
                <QrCode className="h-48 w-48 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                ID: 123456789<br />
                Valid until: December 31, 2024
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Available Documents</CardTitle>
              <CardDescription>Your digital transport-related documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                <span>Driver's License</span>
                <Button variant="ghost" size="sm">View</Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                <span>Vehicle Registration</span>
                <Button variant="ghost" size="sm">View</Button>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                <span>Insurance Documents</span>
                <Button variant="ghost" size="sm">View</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <BottomNav />
    </div>
  );
};

export default DigitalID;