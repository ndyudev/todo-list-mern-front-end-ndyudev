import React from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const AddTask = () => {
  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="Cần phải làm gì?"
          className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20"
        />
        <Button variant="gradient" size="xl" className="px-6 sm:ml-3">
          <Plus className="size-5"/>
          Thêm
        </Button>
      </div>
    </Card>
  );
};

export default AddTask;
