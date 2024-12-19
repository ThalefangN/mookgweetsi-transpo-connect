import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useOfflineDetection } from "@/hooks/useOfflineDetection";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Wifi, WifiOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GetStarted = () => {
  const isOffline = useOfflineDetection();
  const { toast } = useToast();

  const handleAuthClick = (e: React.MouseEvent) => {
    if (isOffline) {
      e.preventDefault();
      toast({
        title: "No Internet Connection",
        description: "Please connect to the internet to sign in or create an account.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 text-center"
      >
        {isOffline && (
          <Alert variant="destructive" className="mb-4">
            <WifiOff className="h-4 w-4" />
            <AlertDescription>
              You are currently offline. Some features may be limited.
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Mookgweetsi</h1>
          <p className="text-muted-foreground">
            Your one-stop transport services solution in Botswana
          </p>
        </div>
        
        <div className="relative h-64 w-full rounded-2xl overflow-hidden">
          <img
            src="/lovable-uploads/b1fdcda0-68c0-4b78-9a71-bbebb1ab0560.png"
            alt="Botswana Flag"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4">
          <Button 
            asChild 
            className="w-full" 
            size="lg"
            onClick={handleAuthClick}
          >
            <Link to="/signup">
              Sign Up {isOffline && <WifiOff className="ml-2 h-4 w-4" />}
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="w-full" 
            size="lg"
            onClick={handleAuthClick}
          >
            <Link to="/signin">
              Sign In {isOffline && <WifiOff className="ml-2 h-4 w-4" />}
            </Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>

        {isOffline && (
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <WifiOff className="h-4 w-4 mr-2" />
            Offline Mode
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default GetStarted;