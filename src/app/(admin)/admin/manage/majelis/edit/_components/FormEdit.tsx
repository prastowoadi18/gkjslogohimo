"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { X } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Editor } from "@/components/Editor";
import { FileUpload } from "@/components/FileUpload";
import Image from "@/components/Image";
import { Label } from "@/components/ui/label";
import LoadingButton from "@/components/LoadingButton";

import { EditMajelisValues, editMajelisSchema } from "@/lib/validation";

import { editMajelis, deleteMajelis } from "../../actions";

import { Majelis } from "@prisma/client";
import Select from "@/components/ui/select";
import { IMG_MAJELIS, WILAYAH } from "@/configs";

interface FormEditProps {
  majelis: Majelis;
}
export default function FormEdit({ majelis }: FormEditProps) {
  const form = useForm<EditMajelisValues>({
    resolver: zodResolver(editMajelisSchema),
    defaultValues: {
      id: majelis.id,
      nama: majelis.nama,
      bidang: majelis.bidang,
      imageUrl: majelis.imageUrl!,
      wilayah: majelis.wilayah,
    },
  });

  const {
    handleSubmit,
    watch,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: EditMajelisValues) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      await editMajelis(formData);
      toast.success("Berhasil edit majelis");
    } catch (error) {
      alert("Something went wrong, please try again.");
    }
  }

  async function onDeleteFile(value: string) {
    try {
      const data = await deleteMajelis(value);
      if (data) {
        toast.success("Berhasil delete image");
        setValue("imageUrl", "", { shouldValidate: true });
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.");
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
                  <Input disabled={isSubmitting} {...field} />
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
            name="wilayah"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wilayah</FormLabel>
                <FormControl>
                  <Select {...field} defaultValue="">
                    <option value="" hidden>
                      Select an option
                    </option>
                    {WILAYAH.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </Select>
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
                  <Select {...field}>
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
