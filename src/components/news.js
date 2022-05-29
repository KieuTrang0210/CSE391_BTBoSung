import React from "react";
import { Link } from "react-router-dom";
import "./news.css"
function News() {
    return (
        <div class="container news">
            <div class="text-start ms-5 my-3">
                <span>
                    <Link to="/" class="text-decoration-none text-dark">Trang chủ</Link>
                </span>
                <i class="bi bi-chevron-double-right"></i>
                <span class="breadcrumb-last text-primary" aria-current="page">
                    Tin tức
                </span>
            </div>
            <div class="row text-start ms-4 mb-5">
                <div class="col-md-3">
                    <h3>Tin tức - Sự kiện</h3>
                    <ul class="list-unstyled">
                        <li class="my-2"><Link to="/news" class="text-decoration-none text-dark">Tin tức</Link></li>
                        <hr class="bg-secondary my-0" />
                        <li class="my-2"><Link to="#" class="text-decoration-none text-dark">- Thông báo</Link></li>
                        <hr class="bg-secondary my-0" />
                        <li class="my-2"><Link to="#" class="text-decoration-none text-dark">- Tin bài</Link></li>
                        <hr class="bg-secondary my-0" />
                        <li class="my-2"><Link to="/news" class="text-decoration-none text-dark">Sự kiện</Link></li>
                        <hr class="bg-secondary my-0" />
                        <li class="my-2"><Link to="#" class="text-decoration-none text-dark">- Sự kiện sắp diễn ra</Link></li>
                        <hr class="bg-secondary my-0" />
                        <li class="my-2"><Link to="#" class="text-decoration-none text-dark">- Sự kiện đã diễn ra</Link></li>
                        <hr class="bg-secondary my-0" />
                        <li class="my-2"><Link to="#" class="text-decoration-none text-dark">SoICT Talks</Link></li>
                    </ul>
                </div>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-12">
                            <img src={require("../images/bander.jpg")} class="w-100 mt-4" />
                        </div>
                        <div class="col-md-9 mt-4">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card border-0 mb-4">
                                        <Link to="#"> <img src={require("../images/news1.jpg")} class="w-100" /></Link>
                                        <div class="card-body px-0">
                                            <Link to="#" class="text-dark text-decoration-none">
                                                <h6 class="card-title fw-bolder">SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền</h6>
                                            </Link>
                                            <p class="text-secondary mb-0">23 Tháng Năm, 2022</p>
                                            <p class="card-text"> Nguyễn Văn Quyền là một sinh viên lớp KHMT04 K65 thuộc Trường CNTT&TT, Đại học...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card border-0 mb-4">
                                        <Link to="#"> <img src={require("../images/news2.jpg")} class="w-100" /></Link>
                                        <div class="card-body px-0">
                                            <Link to="#" class="text-dark text-decoration-none">
                                                <h6 class="card-title fw-bolder">TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG - NHIỆM KỲ 2022-2024</h6>
                                            </Link>
                                            <p class="text-secondary mb-0">19 Tháng Năm, 2022</p>
                                            <p class="card-text">Vào hồi 14h ngày 07/05/2022 tại Hội trường dốc tòa nhà B1, được sự đồng...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card border-0 mb-4">
                                        <Link to="#"> <img src={require("../images/news3.jpg")} class="w-100" /></Link>
                                        <div class="card-body px-0">
                                            <Link to="#" class="text-dark text-decoration-none">
                                                <h6 class="card-title fw-bolder">Hội thảo: Giới thiệu Chương trình Đào tạo Kỹ sư AI Vingroup Cơ hội Đào tạo, việc làm và trải nghiệm môi trường làm việc chuyên nghiệp</h6>
                                            </Link>
                                            <p class="text-secondary mb-0">18 Tháng Năm, 2022</p>
                                            <p class="card-text">NẮM BẮT CƠ HỘI TRỞ THÀNH KỸ SƯ AI VINGROUP Nếu bạn đang băn khoăn...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card border-0 mb-4">
                                        <Link to="#"> <img src={require("../images/news4.jpg")} class="w-100" /></Link>
                                        <div class="card-body px-0">
                                            <Link to="#" class="text-dark text-decoration-none">
                                                <h6 class="card-title fw-bolder">HỘI NGHỊ SINH VIÊN NGHIÊN CỨU KHOA HỌC 2021-2022</h6>
                                            </Link>
                                            <p class="text-secondary mb-0">17 Tháng Năm, 2022</p>
                                            <p class="card-text">I. MỤC ĐÍCH Hội nghị Sinh viên nghiên cứu khoa học (SV NCKH) là sự kiện...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card border-0 mb-4">
                                        <Link to="#"> <img src={require("../images/news5.jpg")} class="w-100" /></Link>
                                        <div class="card-body px-0">
                                            <Link to="#" class="text-dark text-decoration-none">
                                                <h6 class="card-title fw-bolder">THÔNG BÁO VỀ VIỆC TỔ CHỨC TRẢ HỒ SƠ VÀ BẰNG TỐT NGHIỆP CHO SINH VIÊN TRƯỜNG CNTT&TT KỲ 2021.1B</h6>
                                            </Link>
                                            <p class="text-secondary mb-0">12 Tháng Năm, 2022</p>
                                            <p class="card-text">Ngày 15/05/2022, Trường CNTT&TT và các đơn vị phối hợp tổ chức trả bằng và...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card border-0 mb-4">
                                        <Link to="#"> <img src={require("../images/news6.jpg")} class="w-100" /></Link>
                                        <div class="card-body px-0">
                                            <Link to="#" class="text-dark text-decoration-none">
                                                <h6 class="card-title fw-bolder">THÔNG BÁO VỀ THỰC TẬP DOANH NGHIỆP KỲ 2021.3</h6>
                                            </Link>
                                            <p class="text-secondary mb-0">10 Tháng Năm, 2022</p>
                                            <p class="card-text">Trường CNTT&TT thông báo quy trình đăng ký Thực tập Doanh nghiệp (TTDN) kỳ hè...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card border-0 mb-4">
                                        <Link to="#"> <img src={require("../images/news7.jpg")} class="w-100" /></Link>
                                        <div class="card-body px-0">
                                            <Link to="#" class="text-dark text-decoration-none">
                                                <h6 class="card-title fw-bolder">HỘI THẢO KHOA HỌC VỀ CÁC XU THẾ HIỆN TẠI VÀ TƯƠNG LAI TRONG KHOA HỌC DỮ LIỆU VÀ TRÍ TUỆ NHÂN TẠO</h6>
                                            </Link>
                                            <p class="text-secondary mb-0">3 Tháng Năm, 2022</p>
                                            <p class="card-text">Thời gian: 14h-17h30, thứ 6 ngày 06/05/2022 Địa điểm: Hội trường dốc, tầng 3...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card border-0 mb-4">
                                        <Link to="#"> <img src={require("../images/news8.jpg")} class="w-100" /></Link>
                                        <div class="card-body px-0">
                                            <Link to="#" class="text-dark text-decoration-none">
                                                <h6 class="card-title fw-bolder">CHƯƠNG TRÌNH THỰC TẬP CHO HỌC VIÊN CAO HỌC, NGHIÊN CỨU SINH TẠI VIỆN TIN HỌC QUỐC GIA NHẬT BẢN NĂM 2022</h6>
                                            </Link>
                                            <p class="text-secondary mb-0">29 Tháng Tư, 2022</p>
                                            <p class="card-text">Trong khuôn khổ hợp tác giữa Trường Công nghệ Thông tin và Truyền thông (CNTT&TT)...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card border-0 mb-4">
                                        <Link to="#"> <img src={require("../images/news9.jpg")} class="w-100" /></Link>
                                        <div class="card-body px-0">
                                            <Link to="#" class="text-dark text-decoration-none">
                                                <h6 class="card-title fw-bolder">VINGROUP KHỞI ĐỘNG KHÓA 2 – ĐỢT 2 CHƯƠNG TRÌNH ĐÀO TẠO KỸ SƯ AI</h6>
                                            </Link>
                                            <p class="text-secondary mb-0">27 Tháng Tư, 2022</p>
                                            <p class="card-text"> hương trình Đào tạo Kỹ sư AI Vingroup được Viện Nghiên cứu Dữ liệu lớn (VinBigdata) triển khai...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card border-0 mb-4">
                                        <Link to="#"> <img src={require("../images/news10.jpg")} class="w-100" /></Link>
                                        <div class="card-body px-0">
                                            <Link to="#" class="text-dark text-decoration-none">
                                                <h6 class="card-title fw-bolder">CÁC LƯU Ý TUYỂN SINH THẠC SĨ DÀNH CHO SINH VIÊN HỌC TÍCH HỢP CỬ NHÂN THẠC SĨ VÀ CHUYỂN TIẾP HỌC THẠC SĨ</h6>
                                            </Link>
                                            <p class="text-secondary mb-0">27 Tháng Tư, 2022</p>
                                            <p class="card-text">1. CHUẨN TIẾNG ANH ĐẦU VÀO Để được công bố trúng tuyển và nhập học,...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item me-3"><Link class="page-link rounded-0 text-white fw-bold bg-primary" to="#">1</Link></li>
                                            <li class="page-item me-3"><Link class="page-link text-dark fw-bold" to="#">2</Link></li>
                                            <li class="page-item me-3"><Link class="page-link text-dark fw-bold" to="#">3</Link></li>
                                            <li class="page-item me-3"><Link class="page-link text-dark fw-bold" to="#">4</Link></li>
                                            <li class="page-item me-3"><Link class="page-link text-dark fw-bold" to="#">...</Link></li>
                                            <li class="page-item me-3"><Link class="page-link text-dark fw-bold" to="#">13</Link></li>
                                            <li class="page-item me-3">
                                                <Link class="page-link text-dark fw-bold rounded-0" to="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h5 class="mt-4 fw-bold">TIN NỔI BẬT</h5>
                            <hr class="w-25 border-danger" />
                            <ul class="list-unstyled">
                                <li class="mb-3"><Link to="#" class="text-dark text-decoration-none">THÔNG BÁO TUYỂN GIẢNG VIÊN NGÀNH CÔNG NGHỆ THÔNG TIN</Link></li>
                                <li class="mb-3"><Link to="#" class="text-dark text-decoration-none">INVITATION TO JOIN BK.AI RESEARCH GROUPS 2021</Link></li>
                                <li class="mb-3"><Link to="#" class="text-dark text-decoration-none">THÔNG BÁO VỀ ĐĂNG KÝ LỚP HỌC PHẦN THỰC TẬP DOANH NGHIỆP KỲ HÈ 2020.3</Link></li>
                                <li class="mb-3"><Link to="#" class="text-dark text-decoration-none">TĂNG CƯỜNG LỢI THẾ CẠNH TRANH DỰA TRÊN CÔNG NGHỆ SỐ, TẠO ĐỘT PHÁ TRONG MỌI MẶT HOẠT ĐỘNG</Link></li>
                                <li class="mb-3"><Link to="#" class="text-dark text-decoration-none">ĐẦU TƯ CHO NCKH VÀ ĐT TRÌNH ĐỘ CAO TRONG TRƯỜNG ĐẠI HỌC: ĐIỂM ĐỘT PHÁ TRONG QUÁ TRÌNH CHUYỂN ĐỔI SỐ TẠI VN</Link></li>
                                <li class="mb-3"><Link to="#" class="text-dark text-decoration-none">TUYỂN DỤNG 2020</Link></li>
                                <li class="mb-3"><Link to="#" class="text-dark text-decoration-none">SOICT YEAR-END REVIEW 2019</Link></li>
                                <li class="mb-3"><Link to="#" class="text-dark text-decoration-none">HỘI THẢO QUỐC TẾ THƯỜNG NIÊN SOICT - 10 NĂM MỘT CHẶNG ĐƯỜNG</Link></li>
                                <li class="mb-3"><Link to="#" class="text-dark text-decoration-none">HUST-SOICT'S TALK, SỐ 2: BẢN GIAO HƯỞNG MÙA THU VỀ KHỞI NGHIỆP!</Link></li>
                                <li class="mb-3"><Link to="#" class="text-dark text-decoration-none">DẤU ẤN CNTT BÁCH KHOA TRONG 15 MÙA NHÂN TÀI ĐẤT VIỆT</Link></li>
                            </ul>
                            <h5 class="mt-4 fw-bold">BÀI VIẾT NỔI BẬT</h5>
                            <hr class="w-25 border-danger" />
                            <ul class="list-unstyled">
                                <li class="my-2"><Link to="#" class="text-decoration-none text-dark">SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền</Link></li>
                                <hr class="bg-secondary my-0" />
                                <li class="my-2"><Link to="#" class="text-decoration-none text-dark">TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG - NHIỆM KỲ 2022-2024</Link></li>
                                <hr class="bg-secondary my-0" />
                                <li class="my-2"><Link to="#" class="text-decoration-none text-dark">Hội thảo: Giới thiệu Chương trình Đào tạo Kỹ sư AI Vingroup Cơ hội Đào tạo, việc làm và trải nghiệm môi trường làm việc chuyên nghiệp</Link></li>
                                <hr class="bg-secondary my-0" />
                                <li class="my-2"><Link to="#" class="text-decoration-none text-dark">HỘI NGHỊ SINH VIÊN NGHIÊN CỨU KHOA HỌC 2021-2022</Link></li>
                                <hr class="bg-secondary my-0" />
                                <li class="my-2"><Link to="#" class="text-decoration-none text-dark">THÔNG BÁO VỀ VIỆC TỔ CHỨC TRẢ HỒ SƠ VÀ BẰNG TỐT NGHIỆP CHO SINH VIÊN TRƯỜNG CNTT&TT KỲ 2021.1B</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default News