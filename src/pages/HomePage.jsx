import AddTask from "@/components/ui/AddTask";
import DateTimeFilter from "@/components/ui/DateTimeFilter";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import StatsAndFilters from "@/components/ui/StatsAndFilters";
import TaskList from "@/components/ui/TaskList";
import TaskListPagination from "@/components/ui/TaskListPagination";
import React from "react";

const HomePage = () => {
  return (
    <div className="container pt-8 mx-auto">
      <div className="w-full max-w-2xl -6 mx-auto space-y-6"></div>
      {/* Đầu trang */}
      <Header />

      {/* Tạo nhiệm vụ */}
      <AddTask/>

      {/* Thống kê và Bộ Lọc*/}
      <StatsAndFilters/>

      {/* Danh sách nhiệm vụ */}
      <TaskList/>

      {/* Phân trang và lọc theo ngày */}

      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <TaskListPagination/>
        <DateTimeFilter/>
      </div>

      {/* Chân trang */}

      <Footer/>
    </div>
  );
};

export default HomePage;
