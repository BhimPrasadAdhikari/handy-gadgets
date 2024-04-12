
'use client';
// import { AlertModel } from '@/components/models/alert-model';
import Button from '@/components/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
// import { Checkbox } from "@/components/ui/checkbox"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { TrashIcon } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import * as z from 'zod'
const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().min(10),
  address: z.string().min(3),
});
type ProductFormValues = z.infer<typeof formSchema>;
export const ShippingForm: React.FC = () => {
  const params = useParams();
  const router = useRouter();


  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      firstName: '',
      lastName: '',
      phone: '',
      address: ''
    },
  });
  const onSubmit = async ({phone,address}: ProductFormValues) => {
    try {
      setLoading(true);
        await axios.post(`/api/${params.storeId}/orders`, {phone,address});
      router.refresh();
      window.location.assign(`/${params.storeId}/products`);
      toast.success("success");
    } catch (error) {
      toast.error('something went wrong');
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Shipping Details" description="fill up deliver  details" />
             </div>
      <hr />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="first name"
                    value={field.value}
                    onChange={(name) => field.onChange(name)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name </FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Last Name"
                    value={field.value}
                    onChange={(name) => field.onChange(name)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number </FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder=" "
                    value={field.value}
                    onChange={(name) => field.onChange(name)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name </FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="as butwal, milanchauk"
                    value={field.value}
                    onChange={(name) => field.onChange(name)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit">Next</Button>
        </form>
      </Form>
      <hr className="mt-2" />
    </>
  );
};
