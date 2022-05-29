import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div class="container-fluid bg-secondary text-white">
            <div class="row pt-5 mx-5">
                <div class="col-md-3 text-start">
                    <p class="fs-6 fw-bold border-bottom pb-2 mb-2">KHOA - TRUNG TÂM</p>
                    <ul class="list-unstyled">
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Khoa học Máy tính</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Kỹ thuật Máy tính</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Trung tâm Cyber Security</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Trung tâm Đổi mới Sáng tạo</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Trung tâm Máy tính và Thực hành</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Trung tậm Nghiên cứu Quốc tế về Định vị sử dụng vệ tinh (NAVIS)</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Trung tâm Nghiên cứu Quốc tế về Trí tuệ nhân tạo</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Văn Phòng Trường</Link></li>
                    </ul>
                </div>
                <div class="col-md-3 text-start">
                    <p class="fs-6 fw-bold border-bottom pb-2 mb-2">CHƯƠNG TRÌNH ĐẠO TẠO</p>
                    <ul class="list-unstyled">
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Chương trình Việt Nhật (HEDSPI)</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Chương trình Global ICT</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Chương trình Khoa học dữ liệu và trí tuệ nhân tạo</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Chương trình Thạc sỹ Chuyển đổi số</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Các chương trình đại học</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Các chương trình thạc sỹ</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Các chương trình tiến sỹ</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Các chương trình đào tạo ngắn hạn</Link></li>
                    </ul>
                </div>
                <div class="col-md-3 text-start">
                    <p class="fs-6 fw-bold border-bottom pb-2 mb-2">HỆ THỐNG VÀ TÀI NGUYÊN</p>
                    <ul class="list-unstyled">
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Hệ thống Quản lý Đào tạo</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Hệ thống Quản lý Hợp tác Doanh nghiệp</Link></li>
                        <li class="mt-2"><Link to="#" class="text-decoration-none text-white">Các mẫu biểu dành cho sinh viên Viện</Link></li>
                    </ul>
                </div>
                <div class="col-md-3 text-start">
                    <img src={require("../images/logo_footer.png")} />
                    <p class="mt-3"><i class="bi bi-telephone-fill"></i>  (+84) 24 3869 2463</p>
                    <p><i class="bi bi-envelope"></i>  vp@soict.hust.edu.vn</p>
                    <p>P. 505 - Nhà B1 - Đại học Bách khoa Hà Nội</p>
                    <p>Số 1 Đại Cồ Việt - Hai Bà Trưng - Hà Nội</p>
                    <div>
                        <Link to="#" class="bg-primary text-white rounded-pill me-3 p-2"><i class="bi bi-facebook fs-5"></i></Link>
                        <Link to="#" class="bg-danger text-white rounded-pill me-3 p-2"><i class="bi bi-youtube fs-5"></i></Link>
                        <Link to="#" class="bg-info text-white rounded-pill me-3 p-2"><i class="bi bi-geo-alt-fill fs-5"></i></Link>
                    </div>
                </div>
                <hr class="mt-4" />
                <div class="col-md-12 text-start">
                    <p>Copyright © <b>Trường Công nghệ Thông tin và Truyền thông</b></p>
                </div>
            </div>

        </div>
    )
}
export default Footer