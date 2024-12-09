import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPInput from "@/components/OTPInput";

const OTPVerification = () => {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    // Handle verification logic here
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 text-center"
      >
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Verify Your Account</h1>
          <p className="text-muted-foreground">
            We've sent a verification code to your phone
          </p>
        </div>

        <OTPInput value={otp} onChange={setOTP} />

        <div className="space-y-4">
          <Button onClick={handleVerify} className="w-full" size="lg">
            Verify
          </Button>
          <p className="text-sm text-muted-foreground">
            Didn't receive the code?{" "}
            <button className="font-medium text-primary hover:underline">
              Resend
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default OTPVerification;