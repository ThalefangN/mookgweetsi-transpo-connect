import { ReactNode } from "react";
import { useOfflineDetection } from "@/hooks/useOfflineDetection";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { WifiOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OfflineAwareRouteProps {
  children: ReactNode;
}

const OfflineAwareRoute = ({ children }: OfflineAwareRouteProps) => {
  const isOffline = useOfflineDetection();
  const { toast } = useToast();

  const handleInternetRequiredAction = () => {
    if (isOffline) {
      toast({
        title: "Internet Connection Required",
        description: "Please connect to the internet to perform this action.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  return (
    <>
      {isOffline && (
        <Alert variant="destructive" className="m-4">
          <WifiOff className="h-4 w-4" />
          <AlertDescription>
            You are currently offline. Some features may be limited.
          </AlertDescription>
        </Alert>
      )}
      {children}
    </>
  );
};

export default OfflineAwareRoute;