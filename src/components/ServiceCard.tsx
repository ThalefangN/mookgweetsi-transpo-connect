import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useOfflineDetection } from "@/hooks/useOfflineDetection";
import { useToast } from "@/hooks/use-toast";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const ServiceCard = ({ title, description, icon: Icon, onClick }: ServiceCardProps) => {
  const isOffline = useOfflineDetection();
  const { toast } = useToast();

  const handleClick = () => {
    console.log('Service card clicked, offline status:', isOffline);
    
    if (isOffline) {
      toast({
        title: "No Internet Connection",
        description: "Please connect to the internet to access this service.",
        variant: "destructive",
      });
      return;
    }

    onClick?.();
  };

  return (
    <Card 
      className={`transition-colors ${
        isOffline 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:bg-accent cursor-pointer'
      }`}
      onClick={handleClick}
    >
      <CardHeader>
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ServiceCard;