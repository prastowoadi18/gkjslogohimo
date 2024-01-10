"use client";

import * as z from "zod";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Editor } from "@/components/Editor";
import { FileUpload } from "@/components/FileUpload";
import { DatePicker } from "@/components/DatePicker";

const formSchema = z.object({
  nama: z.string().min(1, {
    message: "Nama harus diisi!!!",
  }),
  date: z.date(),
  konten: z.string().min(1, {
    message: "Konten harus diisi!!!",
  }),
  imageUrl: z.string().min(1, {
    message: "Image harus diisi!!!",
  }),
});

export const FormAdd = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: "",
      konten: "",
      imageUrl: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;
  const { watch } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      toast.success("Data Berhasil Ditambahkan.");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="e.g. 'Budi Sjuiadmoko"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="konten"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Konten</FormLabel>
                <FormControl>
                  <Editor
                    value={field.value}
                    onChange={(e) => field.onChange(e)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <DatePicker onChange={(e: Date) => field.onChange(e)} />
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
                  <FileUpload
                    endpoint="beritaImage"
                    onChange={(url) => {
                      if (url) {
                        field.onChange(url);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-x-2">
            <Button disabled={!isValid || isSubmitting}>Simpan</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
