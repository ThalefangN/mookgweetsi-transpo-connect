import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useState } from "react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput = ({ value, onChange }: PhoneInputProps) => {
  const [countryCode, setCountryCode] = useState("+267"); // Botswana

  return (
    <div className="flex space-x-2">
      <Button
        type="button"
        variant="outline"
        className="w-[4.5rem] px-2"
      >
        {countryCode}
      </Button>
      <div className="relative flex-1">
        <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10"
          placeholder="Phone number"
        />
      </div>
    </div>
  );
};

export default PhoneInput;