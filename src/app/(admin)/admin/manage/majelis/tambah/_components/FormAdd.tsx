"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import LoadingButton from "@/components/LoadingButton";

import { CreateMajelisValues, createMajelisSchema } from "@/lib/validation";

import { createMajelis } from "../../actions";
import Select from "@/components/ui/select";
import { IMG_MAJELIS } from "@/configs";

export default function FormAdd() {
  const form = useForm<CreateMajelisValues>({
    resolver: zodResolver(createMajelisSchema),
    defaultValues: {
      nama: "",
      bidang: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: CreateMajelisValues) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      await createMajelis(formData);
      toast.success("Berhasil tambah majelis");
    } catch (error) {
      alert("Something went wrong, please try again.");
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="e.g. 'Budi Sujiadmoko"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bidang"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bidang</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="e.g. 'Diaken"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Select {...field} defaultValue="">
                    <option value="" hidden>
                      Select an option
                    </option>
                    {IMG_MAJELIS.map((img) => (
                      <option value={img} key={img}>
                        {img}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-5 flex items-center gap-x-2">
            <LoadingButton type="submit" loading={isSubmitting}>
              Simpan
            </LoadingButton>
          </div>
        </form>
      </Form>
    </div>
  );
}
