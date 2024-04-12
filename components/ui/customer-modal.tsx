"use client";
import {ShippingForm} from "@/components/customer-detail“;
import useShipingForm from "@/hooks/useShipingForm";
import Modal from "@/components/ui/modal";


const ShippingModal = () => {
  const shipingModal = useShippingForm();

  return ( 
    <Modal 
      open={shipingModal.isOpen} 
      onClose={shipingModal.onClose}
    >
      <ShippingForm />
    </Modal>
  );
}
 
export default ShippingModal;
