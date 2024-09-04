import { applyToJob } from "@/api/apiApplications";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useFetch from "@/hooks/use-fetch";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { BarLoader } from "react-spinners";
import * as z from "zod";
import { Input } from "./ui/input";


const schema = z.object({
    experience: z.number().min(0, { message: "Experience must be a Non Negative value" }).int(),
    skills: z.string().min(1, { message: "Give atleast 1 relevant skill" }),
    education: z.enum(["Under Graduate", "Graduate", "Post Graduate"], { message: "Education is a required field" }),
    resume: z.any().refine(file => file[0] && (file[0].type === "application/pdf" || file[0].type === "application/msword"),
        { message: "Only pdf/doc type documents are allowed" }
    )
})

const ApplyJobDrawer = ({ user, job, applied = false, fetchJob }) => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm({ resolver: zodResolver(schema) });

    const {
        loading: loadingApply,
        error: errorApply,
        fn: fnApply,
      } = useFetch(applyToJob);
    
    const onSubmit = (data) => {
        fnApply({
            ...data,
            job_id: job.id,
            candidate_id: user.id,
            name: user.fullName,
            status: "applied",
            resume: data.resume[0],
        }).then(() => {
            fetchJob();
            reset();
        });
    };

    return (
        <Drawer open={applied ? false : undefined}>
            <DrawerTrigger asChild>
                <Button
                    size="lg"
                    variant={job?.isOpen && !applied ? "blue" : "red"}
                    disabled={!job?.isOpen || applied}
                >
                    {job?.isOpen ? (applied ? "Applied" : "Apply") : "Not Hirirng Anymore"}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>
                        Apply for {job?.title} at {job?.company?.name}
                    </DrawerTitle>
                    <DrawerDescription>
                        Fill the form below
                    </DrawerDescription>
                </DrawerHeader>

                {/* Application Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-4 pb-0">
                    <Input
                        type="number"
                        placeholder="Years of Experience"
                        className="flex-1"
                        {...register("experience", {
                            valueAsNumber: true,
                        })}
                    />
                    {errors.experience && (
                        <p className="text-red-500">{errors.experience.message}</p>
                    )}

                    <Input
                        type="text"
                        placeholder="Skills (comma separated)"
                        className="flex-1"
                        {...register("skills")}
                    />
                    {errors.skills && (
                        <p className="text-red-500">{errors.skills.message}</p>
                    )}

                    <Controller name='education' control={control} render={({ field }) => (
                        <RadioGroup onValueChange={field.onChange} {...field}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Under Graduate" id="under-graduate" />
                                <Label htmlFor="under-graduate">Under Graduate</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Graduate" id="graduate" />
                                <Label htmlFor="graduate">Graduate</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Post Graduate" id="post-graduate" />
                                <Label htmlFor="post-graduate">Post Graduate</Label>
                            </div>
                        </RadioGroup>
                    )} />
                    {errors.education && (
                        <p className="text-red-500">{errors.education.message}</p>
                    )}

                    <Input
                        type="file"
                        accept=".pdf, .doc, .docx"
                        className="flex-1 file:text-gray-600"
                        {...register("resume")}
                    />
                    {errors.resume && (
                        <p className="text-red-500">{errors.resume.message}</p>
                    )}
                    {errorApply?.message && (
                        <p className="text-red-500">{errorApply?.message}</p>
                    )}

                    {loadingApply && <BarLoader width={"100%"} color="#36d7b7" />}

                    <Button type="sumbit" variant="blue" size="lg">
                        Apply
                    </Button>

                </form>

                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default ApplyJobDrawer
