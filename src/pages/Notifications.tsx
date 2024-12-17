import { motion } from "framer-motion";
import { ArrowLeft, Bell, Info, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      title: "License Renewal Reminder",
      description: "Your driving license will expire in 30 days. Renew now to avoid penalties.",
      icon: Info,
      type: "info",
      date: "2 hours ago"
    },
    {
      title: "Road Tax Due",
      description: "Your road tax payment is due in 5 days. Pay now to avoid late fees.",
      icon: AlertTriangle,
      type: "warning",
      date: "1 day ago"
    },
    {
      title: "Vehicle Registration Complete",
      description: "Your vehicle registration has been successfully renewed.",
      icon: CheckCircle,
      type: "success",
      date: "2 days ago"
    },
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
          <h1 className="text-2xl font-bold">Notifications</h1>
        </motion.div>

        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="cursor-pointer hover:bg-accent transition-colors">
                <CardHeader className="flex flex-row items-start space-x-4">
                  <div className={`p-2 rounded-full ${
                    notification.type === 'info' ? 'bg-blue-100 text-blue-600' :
                    notification.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-lg">{notification.title}</CardTitle>
                    <CardDescription>{notification.description}</CardDescription>
                    <p className="text-sm text-muted-foreground">{notification.date}</p>
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

export default Notifications;