# Instruction

Giao diện cho trang web xem phim trực tuyến demo cho khóa học Java

## Cài đặt

```
git clone https://github.com/banx9x/techmaster-cinema.git
cd techmaster-cinema
yarn install
```

## Chạy máy chủ Development

```
yarn dev
```

## Build Production

```
yarn build
yarn serve
```

## Cấu trúc thư mục code

Toàn bộ source code nằm trong thư mục `src`:

-   `assets`: chứa các file tĩnh dùng cho chung cho trang như fonts, images, ...
-   `components`: chứa các components nhỏ dùng chung cho toàn bộ project
-   `routers`: chứa cấu hình đường dẫn cho website
-   `utils`: chứa mã js dùng chung cho toàn bộ dự án

## Style

Sử dụng thư viện `react-bootstrap` và `styled-components`

## Thêm route

Khai báo route trong `routers/routes.js`, và cấu hình trong `routeConfig.js` với component/page cụ thể
