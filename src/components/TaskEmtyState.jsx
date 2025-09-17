import React from "react";
import { Card } from "./ui/card";
import { Circle } from "lucide-react";

const TaskEmtyState = ({ filter }) => {
  return (
    <div>
      <Card className="p-8 text-center border-0 bg-gradient-card shadow-custom-md">
        <div className="space-y-3">
          <Circle className="size-12 mx-auto text-muted-foreground" />
          <div>
            <h3 className="font-medium text-foreground">
              {filter === "active"
                ? "Không có nhiệm vụ nào đang làm."
                : filter === "complete"
                ? "Chưa có nhiệm vụ nào hoàn thành."
                : "Chưa có nhiệm vụ."}
            </h3>
            <p className="text-sm text-muted-foreground">
              {filter === "all"
                ? "Thêm nhiệm vụ đầu tiên vào để bắt đầu!"
                : `Chuyển sang "tất cả" để thấy những nhiệm vụ ${
                    filter === "active" ? "đã hoàn thành." : "đang làm."
                  }`}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TaskEmtyState;
