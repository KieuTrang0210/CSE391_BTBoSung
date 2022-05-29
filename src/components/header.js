import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div class="container-fluid px-0">
            <div class="row my-1">
                <div class="col-md-1"></div>
                <div class="col-md-2">
                    <Link to="/">
                        <img class="w-100" src={require("../images/logo-soict-hust-1.png")} />
                    </Link>
                </div>
                <div class="col-md-6">
                    <h5 class="text-start my-4 fw-bold">ĐẠI HỌC BÁCH KHOA HÀ NỘI <br />TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</h5>

                </div>
                <div class="col-md-2">
                    <div class="language d-flex justify-content-center">
                        <Link class="m-2" to="#">
                            <img src={require("../images/vn.png")} />
                        </Link>
                        <Link class="m-2" to="#">
                            <img src={require("../images/gb.png")} />
                        </Link>
                    </div>
                    <form class="d-flex" role="search">
                        <input class="form-control rounded-pill" type="search" placeholder="Search..." aria-label="Search" />
                        <button class="bg-light border-0 ms-2" type="submit"><i class="bi bi-search"></i></button>
                    </form>
                </div>
                <div class="col-md-1"></div>
            </div>
            <nav class="navbar navbar-expand-lg bg-dark border-top border-danger border-5">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li class="nav-item dropdown">
                                <Link class="nav-link active dropdown-toggle text-white border-start border-end border-secondary border-2" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Giới thiệu
                                </Link>
                                <ul class="dropdown-menu bg-dark mt-2 py-0 lh-lg border-0" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Thông tin chung</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Triết lý giáo dục</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Cơ cấu tổ chức</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Đảng ủy-Hội đồng Trường</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Ban Lãnh đạo Trường</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Các Tổ chức Đoàn thể</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Văn phòng Trường</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Danh sách Cán bộ</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active dropdown-toggle text-white border-end border-secondary border-2" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Khoa-Trung tâm
                                </Link>
                                <ul class="dropdown-menu bg-dark mt-2 py-0 border-0" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item text-white py-0 lh-lg bg-danger" to="#">Khoa</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Khoa học máy tính</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Kỹ thuật Máy tính</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg bg-danger" to="#">Trung tâm</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Trung tâm Máy tính và Thực hành</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Trung tâm Đổi mới sáng tạo (Innovation)</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Trung tâm Nghiên cứu Quốc tế về Trí tuệ nhân tạo (BKAI)</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Trung tâm An toàn-An ninh thông tin (BKCS)</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Trung tâm Nghiên cứu Quốc tế về Định vị sử dụng vệ tinh (NAVIS)</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active dropdown-toggle text-white border-end border-secondary border-2" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Đào tạo
                                </Link>
                                <ul class="dropdown-menu bg-dark mt-2 py-0 lh-lg border-0" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Giới thiệu chung</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Hệ Đại học</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Hệ Thạc sỹ</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Hệ Tiến sỹ</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Đạo tạo Chứng chỉ</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active dropdown-toggle text-white border-end border-secondary border-2" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Nghiên cứu
                                </Link>
                                <ul class="dropdown-menu bg-dark mt-2 py-0 lh-lg border-0" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Giới thiệu chung</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Các Phòng Thí nghiệm</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Các Đề tài-Dự án</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Công bố Khoa học</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Tìm chuyên gia?</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active dropdown-toggle text-white border-end border-secondary border-2" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tuyển sinh
                                </Link>
                                <ul class="dropdown-menu bg-dark mt-2 py-0 lh-lg border-0" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Kiến tạo Tương lai với SoICT</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Tuyển sinh 2022!</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Điểm chuẩn tham khảo</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Tuyển sinh Đào tạo Ngắn hạn</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Hỏi đáp về tuyển sinh</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active dropdown-toggle text-white border-end border-secondary border-2" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sinh viên
                                </Link>
                                <ul class="dropdown-menu bg-dark mt-2 py-0 lh-lg border-0" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Biểu mẫu và quy định dành cho sinh viên</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Cố vấn học tập</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Hoạt động sinh viên nghiên cứu khoa học</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active dropdown-toggle text-white border-end border-secondary border-2" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hợp tác Đối ngoại
                                </Link>
                                <ul class="dropdown-menu bg-dark mt-2 py-0 lh-lg border-0" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Giới thiệu chung</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Hợp tác với Khối Hàn lâm</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Hợp tác với Khối Doanh nghiệp</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active dropdown-toggle text-white border-end border-secondary border-2" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cựu Sinh viên
                                </Link>
                                <ul class="dropdown-menu bg-dark mt-2 py-0 lh-lg border-0" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Giới thiệu chung</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Tấm gương Cựu Sinh viên</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active dropdown-toggle text-white border-end border-secondary border-2" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tin tức-Sự kiện
                                </Link>
                                <ul class="dropdown-menu bg-dark mt-2 py-0 lh-lg border-0" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item text-white py-0 lh-lg bg-danger" to="/news">Tin tức</Link></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Thông báo</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Tin bài</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">SoICT Talks</Link></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg bg-danger" to="/news">Sự kiện</Link></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Sự kiện sắp diễn ra</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Sự kiện đã diễn ra</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link active dropdown-toggle text-white border-end border-secondary border-2" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tuyển dụng
                                </Link>
                                <ul class="dropdown-menu bg-dark mt-2 py-0 lh-lg border-0" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Việc làm tại SoICT</Link></li>
                                    <li><hr class="dropdown-divider bg-secondary my-0" /></li>
                                    <li><Link class="dropdown-item text-white py-0 lh-lg" to="#">Việc làm cho Sinh viên</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        </div>



    )
}
export default Header