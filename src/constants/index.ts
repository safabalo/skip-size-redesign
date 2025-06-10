import { Calendar, CheckCircle, CreditCard, MapPin } from "lucide-react";
import type { Step } from "@/types";

 export const defaultSteps: Step[] = [
    { id: 'postcode', label: 'Postcode', icon: MapPin, completed: true },
    { id: 'waste-type', label: 'Waste Type', icon: CheckCircle, completed: true },
    { id: 'select-skip', label: 'Select Skip', icon: CheckCircle, completed: false, active: true },
    { id: 'permit-check', label: 'Permit Check', icon: CheckCircle, completed: false },
    { id: 'choose-date', label: 'Choose Date', icon: Calendar, completed: false },
    { id: 'payment', label: 'Payment', icon: CreditCard, completed: false },
  ];