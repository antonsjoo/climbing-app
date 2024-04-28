import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create new route</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new route</DialogTitle>
          <DialogDescription>
            Create a new route to be added to the gym.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input id="name" />
            <Label htmlFor="name" className="text-left">
              Grade
            </Label>
            <Input id="name" />
            <Label htmlFor="name" className="text-left">
              Color
            </Label>
            <Input id="name" />
            <Label htmlFor="name" className="text-left">
              Notes
            </Label>
            <Input id="name" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
