import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 text-center"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Mookgweetsi</h1>
          <p className="text-muted-foreground">
            Your one-stop transport services solution in Botswana
          </p>
        </div>
        
        <div className="relative h-64 w-full rounded-2xl overflow-hidden">
          <img
            src="/transport-services.jpg"
            alt="Transport Services"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full" size="lg">
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button asChild variant="outline" className="w-full" size="lg">
            <Link to="/signin">Sign In</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStarted;