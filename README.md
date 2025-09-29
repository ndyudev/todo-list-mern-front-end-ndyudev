<h1 align="center">Todo List - Todo List MERN</h1>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-blue.svg" />
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <a href="https://todo-mern-ndyudev.vercel.app" target="_blank">
    <img alt="Deploy: Vercel" src="https://img.shields.io/badge/deploy-vercel-black" />
  </a>
  <a href="https://github.com/ndyudev/todo-list-mern-front-end-ndyudev" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/badge/GitHub-ndyudev-black?logo=github" />
  </a>
  
</p>

> Ứng dụng quản lý công việc full‑stack MERN, tối ưu trải nghiệm: CRUD mượt, lọc trạng thái/ngày, phân trang (4 mục/trang), UI hiện đại và phản hồi tức thì.

### 🏠 Homepage
- https://todo-mern-ndyudev.vercel.app

### ✨ Demo
- https://todo-mern-ndyudev.vercel.app

---

## Tính năng
- Thêm / sửa / xóa nhiệm vụ, đánh dấu hoàn thành
- Lọc theo trạng thái: tất cả / đang làm / hoàn thành
- Lọc theo thời gian: hôm nay / tuần này / tháng này / tất cả
- Phân trang 4 nhiệm vụ mỗi trang
- Thống kê số nhiệm vụ đang làm / đã hoàn thành
- Thông báo (toast), hiệu ứng mượt, responsive

## Công nghệ
- Frontend: React 18, Vite, Tailwind CSS, Radix UI, React Router, Sonner, Axios
- Backend: Node.js, Express, MongoDB (Mongoose)
- Khác: Lucide Icons, class-variance-authority, tailwind-merge

---

## Cấu trúc dự án
```
/todo-list-mern-front-end-ndyudev
  └─ src/
     ├─ components/
     │  ├─ TaskCard.jsx, TaskList.jsx, TaskListPagination.jsx
     │  ├─ AddTask.jsx, StatsAndFilters.jsx, DateTimeFilter.jsx
     │  └─ ui/ (button, card, input, popover, command, pagination, ...)
     ├─ pages/
     │  ├─ HomePage.jsx
     │  └─ NotFound.jsx
     ├─ lib/ (axios.js, data.js, utils.js)
     ├─ App.jsx, main.jsx, index.css
     └─ assets/

/todo-list-mern-back-end-ndyudev
  └─ src/
     ├─ controllers/
     │  └─ tasksControllers.js
     ├─ routers/
     │  └─ tasksRouters.js
     ├─ model/
     │  └─ Task.js
     ├─ config/
     │  └─ database.js
     └─ server.js
```

---

## Cài đặt

```bash
# Backend
cd todo-list-mern-back-end-ndyudev
npm install

# Frontend
cd ../todo-list-mern-front-end-ndyudev
npm install
```

---

## Biến môi trường

Backend: `todo-list-mern-back-end-ndyudev/.env`
```
PORT_TODO_LIST=6971
MONGODB_CONNECTION=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
CORS_ORIGIN=http://localhost:5173
```

Frontend: `todo-list-mern-front-end-ndyudev/.env`
```
VITE_API_BASE_URL=http://localhost:6971/api
```

Axios frontend (`src/lib/axios.js`) dùng:
```js
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
export default api;
```

---

## Chạy dự án (Dev)

```bash
# Backend
cd todo-list-mern-back-end-ndyudev
npm run dev

# Frontend
cd ../todo-list-mern-front-end-ndyudev
npm run dev
```

---

## Build & Deploy

Frontend:
```bash
npm run build
npm run preview
```
- Deploy tĩnh (Vercel/Netlify). Cấu hình `VITE_API_BASE_URL` trỏ về domain API production.

Backend:
- Deploy lên Render/PM2/VPS/Heroku.
- Cấu hình env: `PORT_TODO_LIST`, `MONGODB_CONNECTION`, `CORS_ORIGIN`.

---

## API

Base: `/api/tasks`

| Method | Endpoint | Query | Body | Mô tả |
|-------|----------|-------|------|-------|
| GET   | /        | `filter=today|week|month|all` | - | Lấy tasks + thống kê |
| POST  | /        | -     | `{ "title": "..." }` | Tạo task |
| PUT   | /:id     | -     | `{ "title"?: "...", "status"?: "active|complete" }` | Cập nhật task (tự set/reset `completedAt`) |
| DELETE| /:id     | -     | - | Xóa task |

Phản hồi GET:
```json
{
  "tasks": [
    { "_id":"...", "title":"...", "status":"active", "createdAt":"...", "completedAt":null }
  ],
  "activeCount": 0,
  "completeCount": 0
}
```

Lọc theo ngày (server):
- today: `[00:00 hôm nay, 00:00 ngày mai)`
- week: `[thứ Hai tuần này, +7 ngày)`
- month: `[ngày 1 tháng này, ngày 1 tháng sau)`

---

## Ghi chú kỹ thuật (FE)
- Phân trang client: 4 mục/trang, cắt mảng trước khi render.
- Reset `page` khi đổi filter/date; clamp `page` bằng `useEffect` khi `totalPages` thay đổi.
- Radix UI: `Button`, `PopoverTrigger/Content/Anchor` đều dùng `forwardRef`.
- Tránh setState trong render.

---

## Tác giả
**Duy Chau Nhat - ndyudev**
- GitHub: https://github.com/ndyudev

## License
MIT © 2025 ndyudev

---
