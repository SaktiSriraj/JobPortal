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
import { Input } from "./ui/input";

const ApplyJobDrawer = ({ user, job, applied = false, fetchJob }) => {
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
                <form className="flex flex-col gap-5 p-4 pb-0">
                    <Input
                        type="number"
                        placeholder="Years of Experience"
                        className="flex-1"
                    />

                    <Input
                        type="text"
                        placeholder="Skills (comma separated)"
                        className="flex-1"
                    />

                    <RadioGroup defaultValue="option-one">
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

                    <Input
                        type="file"
                        accept=".pdf, .doc, .docx"
                        className="flex-1 file:text-gray-600"
                    />

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
