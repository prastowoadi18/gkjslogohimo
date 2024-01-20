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

import { CreateBeritaValues, createBeritaSchema } from "@/lib/validation";

import { createBerita, deleteImageBerita } from "../actions";

export default function FormAdd() {
  const form = useForm<CreateBeritaValues>({
    resolver: zodResolver(createBeritaSchema),
  });

  const {
    handleSubmit,
    watch,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: CreateBeritaValues) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      await createBerita(formData);
      toast.success("Berhasil tambah berita");
    } catch (error) {
      alert("Something went wrong, please try again.");
    }
  }

  async function onDeleteFile(value: string) {
    try {
      const data = await deleteImageBerita(value);
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
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="e.g. 'Berita 1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <Label onClick={() => setFocus("description")}>
                  Description
                </Label>
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
          {watch("imageUrl") !== undefined && watch("imageUrl") !== "" ? (
            <div className="relative h-2/3 w-2/3 rounded-md bg-black/20 md:w-1/4 lg:h-1/4">
              <Image
                src={watch("imageUrl")}
                alt="img-berita"
                width={500}
                height={500}
                className="rounded-md"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  onDeleteFile(watch("imageUrl"));
                }}
                className="absolute right-2 top-2 opacity-80"
              >
                <X size={16} className="mr-2" />
                Remove
              </Button>
            </div>
          ) : (
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
          )}

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
