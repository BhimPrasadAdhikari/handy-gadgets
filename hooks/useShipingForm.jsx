import { create } from "zustand";

interface ShipingFormStore{
    isOpen:boolean;
    onOpen:()=>void;
     onClose:()=>void;
}
const useShipingForm=create<ShipingFormStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}));

export default useShipingForm;
