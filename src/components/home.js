import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="container-fluid p-0 top-content-home">
      {/* Slider */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide border-bottom border-danger border-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={require("../images/slideshow1.png")}
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../images/slideshow2.png")}
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../images/slideshow3.png")}
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../images/slideshow4.png")}
              class="d-block w-100"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* Tin mới nhất */}
      <div class="row tinmoinhat">
        <div class="col-md-12">
          <h3 class="py-4">TIN MỚI NHẤT</h3>
        </div>
        <div class="col-md-3 text-start">
          <Link to="#" class="text-dark text-decoration-none">
            <div class="card border-0 mb-4">
              <div class="position-relative">
                <img
                  src={require("../images/news1.jpg")}
                  class="w-100 border-bottom border-danger border-5"
                />
                <div class="bg-danger text-white fw-bold w-25 text-center position-absolute bottom-0">
                  TIN BÀI
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền
                </h6>
                <p class="card-text">
                  {" "}
                  Nguyễn Văn Quyền là một sinh viên lớp KHMT04 K65 thuộc Trường
                  CNTT&TT, Đại học Bách khoa Hà Nội. Hoàn cảnh gia...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-3 text-start">
          <Link to="#" class="text-dark text-decoration-none">
            <div class="card border-0 mb-4">
              <div class="position-relative">
                <img
                  src={require("../images/news2.jpg")}
                  class="w-100 border-bottom border-danger border-5"
                />
                <div class="bg-danger text-white fw-bold w-25 text-center position-absolute bottom-0">
                  TIN BÀI
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ
                </h6>
                <p class="card-text">
                  Vào hồi 14h ngày 07/05/2022 tại Hội trường dốc tòa nhà B1,
                  được sự đồng ý của Đoàn thanh niên Trường Đại...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-3 text-start">
          <Link to="#" class="text-dark text-decoration-none">
            <div class="card border-0 mb-4">
              <div class="position-relative">
                <img
                  src={require("../images/news3.jpg")}
                  class="w-100 border-bottom border-danger border-5"
                />
                <div class="bg-danger text-white fw-bold text-center position-absolute bottom-0">
                  THÔNG BÁO
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  Hội thảo: Giới thiệu Chương trình Đào tạo Kỹ sư AI Vingroup Cơ
                  hội Đào tạo,
                </h6>
                <p class="card-text">
                  NẮM BẮT CƠ HỘI TRỞ THÀNH KỸ SƯ AI VINGROUP Nếu bạn đang băn
                  khoăn về việc ứng tuyển tham gia chương...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-3 text-start">
          <Link to="#" class="text-dark text-decoration-none">
            <div class="card border-0 mb-4">
              <div class="position-relative">
                <img
                  src={require("../images/news4.jpg")}
                  class="w-100 border-bottom border-danger border-5"
                />
                <div class="bg-danger text-white fw-bold text-center position-absolute bottom-0">
                  THÔNG BÁO
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  HỘI NGHỊ SINH VIÊN NGHIÊN CỨU KHOA HỌC 2021-2022
                </h6>
                <p class="card-text">
                  I. MỤC ĐÍCH Hội nghị Sinh viên nghiên cứu khoa học (SV NCKH)
                  là sự kiện thường niên được tổ chức tại Trường...
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div class="bg-danger py-1">
        <Link to="/news" class="text-decoration-none text-white fs-5">
          Xem thêm tin tức
        </Link>
      </div>
      {/* Sự kiện mới nhất */}
      <div class="sukienmoinhat">
        <div class="row mx-5">
          <div class="col-md-12">
            <h3 class="py-4 text-white">Sự kiện mới nhất</h3>
          </div>
          <div class="col-md-3 mb-3 text-start">
            <Link to="#" class="text-dark text-decoration-none">
              <div class="card border-0 mb-4 rounded-0">
                <img
                  src={require("../images/sukienmoinhat1.png")}
                  class="w-100"
                />
                <div class=" date bg-dark text-white fw-bold text-center p-2">
                  14 <br /> TH 05
                </div>
                <div class="card-body px-0">
                  <h5 class="card-title fw-bolder pt-4 pb-4">
                    INNOVATION DAY 2022
                  </h5>
                  <p class="card-text pt-1">
                    Thời gian: 8:00 AM - 14/05/2022 <br />
                    Địa điểm: Sảnh tầng 1-4 và Hội trường B1 -
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 text-start">
            <Link to="#" class="text-dark text-decoration-none">
              <div class="card border-0 mb-4 position-relative rounded-0">
                <img
                  src={require("../images/sukienmoinhat2.jpg")}
                  class="w-100"
                />
                <div class="date bg-dark text-white fw-bold text-center position-absolute p-2">
                  08 <br /> TH 05
                </div>

                <div class="card-body px-0">
                  <h5 class="card-title fw-bolder pt-4 pb-1">
                    CUỘC THI TÌM KIẾM Ý TƯỞNG SÁNG TẠO SINH VIÊN 2022
                  </h5>

                  <p class="card-text">
                    Thời gian: 8:00 AM - 08/05/2022 <br />
                    Địa điểm: Tòa nhà B1 - Đại học
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 text-start">
            <Link to="#" class="text-dark text-decoration-none">
              <div class="card border-0 mb-4 position-relative rounded-0">
                <img
                  src={require("../images/sukienmoinhat3.jpg")}
                  class="w-100"
                />
                <div class="date bg-dark text-white fw-bold text-center position-absolute p-2">
                  06 <br /> TH 05
                </div>
                <div class="card-body px-0">
                  <h5 class="card-title fw-bolder pt-4 pb-1">
                    HỘI THẢO KHOA HỌC VỀ CÁC XU THẾ HIỆN TẠI VÀ TƯƠNG
                  </h5>
                  <p class="card-text">
                    Thời gian: 2:00 PM - 06/05/2022 <br />
                    Địa điểm: Hội trường dốc, tầng 3 nhà B1, Đại
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 text-start">
            <Link to="#" class="text-dark text-decoration-none">
              <div class="card border-0 mb-4 position-relative rounded-0">
                <img
                  src={require("../images/sukienmoinhat4.jpg")}
                  class="w-100"
                />
                <div class="date bg-dark text-white fw-bold text-center position-absolute p-2">
                  25 <br /> TH 04
                </div>
                <div class="card-body px-0">
                  <h5 class="card-title fw-bolder pt-4 pb-1">
                    HÀNH TRANG SINH VIÊN TRƯỚC KHI RA TRƯỜNG 2022
                  </h5>
                  <p class="card-text">
                    Thời gian: 5:30 PM - 25/04/2022 <br />
                    Địa điểm: Hội trường dốc B1
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="bg-danger py-1">
          <Link to="/news" class="text-decoration-none text-white fs-5">
            Xem thêm sự kiện
          </Link>
        </div>
      </div>
      {/* Đào tạo - tuyển sinh */}
      <div class="container-fluid">
        <div class="row my-4">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-cente">
            <h3 class="mt-2 mb-4">ĐÀO TẠO - TUYỂN SINH</h3>
            <p>
              Năm 2020, Tổ chức Giáo dục Quacquarelli Symonds (viết tắt QS -
              Vương quốc Anh) đã đánh giá và xếp chất lượng đào tạo và nghiên
              cứu của ĐHBK Hà Nội trong các lĩnh vực mà Trường đang đảm nhận
              thuộc nhóm hạng từ 451 đến 500 trên toàn Thế giới, tiếp tục giữ vị
              trí số 1 tại Việt Nam.
            </p>
          </div>
          <div class="col-md-2"></div>
          <div class="container">
            <div class="row ms-5">
              <div class="col-md-5 shadow-sm my-5 ms-5">
                <div class="row">
                  <div class="col-md-6">
                    <Link to="#">
                      <img
                        src={require("../images/daotaotuyensinh1.jpg")}
                        class="w-100 p-1"
                      />
                    </Link>
                  </div>
                  <div class="col-md-6 text-start pt-3">
                    <h5>CHƯƠNG TRÌNH ĐÀO TẠO</h5>
                    <p>
                      Trường hiện đang cung cấp hơn 20 chương trình đào tạo chất
                      lượng cao thuộc 3 hệ đại học, ThS và TS; trong đó, có
                      chương trình được thị trường lao động quốc tế đón nhận với
                      hơn 60% sinh viên tốt nghiệp làm việc ở nước ngoài. Các
                      chương trình đào tạo thuộc vào 3 nhóm ngành chính: Khoa
                      học Máy tính, Kỹ thuật Máy tính, và Khoa học Dữ liệu và
                      Trí tuệ Nhân tạo…
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 shadow-sm bg-white m-5">
                <div class="row">
                  <div class="col-md-6 p-0">
                    <Link to="#">
                      <img
                        src={require("../images/daotaotuyensinh2.jpg")}
                        class="w-100 p-1"
                      />
                    </Link>
                  </div>
                  <div class="col-md-6 text-start pt-3">
                    <h5>KIẾN TẠO TƯƠNG LAI VỚI SoICT</h5>
                    <p>
                      Thương hiệu Kỹ sư CNTT Bách khoa đã vượt ra khỏi biên giới
                      nước nhà, và ngày càng chứng minh được chất lượng trên
                      trường Quốc tế. Trong làn sóng Chuyển đổi số, lựa chọn
                      phát triển tương lai với SoICT sẽ đem lại cho các bạn cơ
                      hội trở thành các chuyên gia công nghệ, có khả năng làm
                      chủ và dẫn dắt sự phát triển KHCN nước nhà…{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hợp tác đối ngoại */}
      <div class="container-fluid hoptac">
        <div class="row my-4">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-center text-white">
            <h3 class="my-4">HỢP TÁC ĐỐI NGOẠI</h3>
            <p>
              Trường CNTT&TT luôn coi trọng các hoạt động hợp tác quốc tế và hợp
              tác doanh nghiệp để nâng cao chất lượng các hoạt giảng dạy, nghiên
              cứu và chuyển giao công nghệ.
            </p>
          </div>
          <div class="col-md-2"></div>
          <div class="container">
            <div class="row ms-5">
              <div class="col-md-5 bg-white my-5 ms-5">
                <div class="row">
                  <div class="col-md-6">
                    <Link to="#">
                      <img
                        src={require("../images/hoptacdoingoai1.jpg")}
                        class="w-100 p-1"
                      />
                    </Link>
                  </div>
                  <div class="col-md-6 text-start pt-3">
                    <h5>CÁC TRƯỜNG ĐỐI TÁC</h5>
                    <p>
                      Trường CNTT&TT có quan hệ hợp tác với nhiều trường đại học
                      và viện nghiên cứu uy tín trên Thế giới. Thông qua hợp
                      tác, sinh viên của Trường có cơ hội học tập, nghiên cứu
                      tại các trường đối tác thông qua các học bổng trao đổi
                      sinh viên, cũng như các dự án hợp tác nghiên cứu. Trường
                      hợp tác với các đại học lớn ở Châu Âu, Nhật Bản… để cung
                      cấp cho sinh viên các chương trình đào tạo song bằng
                      (double degree), một hình thức “du học” kinh tế và hiệu
                      quả…{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 bg-white m-5">
                <div class="row">
                  <div class="col-md-6 p-0">
                    <Link to="#">
                      <img
                        src={require("../images/hoptacdoingoai2.jpg")}
                        class="w-100 p-1"
                      />
                    </Link>
                  </div>
                  <div class="col-md-6 text-start pt-3">
                    <h5>DOANH NGHIỆP ĐỐI TÁC</h5>
                    <p>
                      Đào tạo và nghiên cứu rất cần sự hợp tác thực chất với
                      cộng đồng doanh nghiệp. Trường hiện đang duy trì hợp tác
                      với mạng lưới gồm hơn 130 doanh nghiệp CNTT trong và ngoài
                      nước, trong đó có thể kể tới HEDSPI Supporting Partner
                      Network (HEDSPI-SPN), mạng lưới hỗ trợ sinh viên tăng
                      cường ngoại ngữ, phát triển kỹ năng mềm, cũng như làm quen
                      với văn hóa DN để gia tăng sức cạnh tranh trong thị trường
                      lao động quốc tế…{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cựu sinh viên */}
      <div class="row tinmoinhat">
        <div class="col-md-12">
          <h3 class="py-4">CỰU SINH VIÊN</h3>
        </div>
        <div class="col-md-3 text-start">
          <Link to="#" class="text-dark text-decoration-none">
            <div class="card border-0 mb-4">
              <div class="position-relative">
                <img
                  src={require("../images/cuusv1.jpg")}
                  class="w-100 border-bottom border-danger border-5"
                />
                <div class="bg-danger text-white fw-bold text-center position-absolute bottom-0 p-1">
                  CỰU SINH VIÊN
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  Hoàng Việt Anh - Chỉ có một tình yêu duy nhất
                </h6>
                <p class="card-text">
                  Gia nhập FPT năm 1993, từ khi còn là sinh viên năm 3 khoa CNTT
                  ĐH Bách...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-3 text-start">
          <Link to="#" class="text-dark text-decoration-none">
            <div class="card border-0 mb-4">
              <div class="position-relative">
                <img
                  src={require("../images/cuusv2.jpg")}
                  class="w-100 border-bottom border-danger border-5"
                />
                <div class="bg-danger text-white fw-bold text-center position-absolute bottom-0 p-1">
                  CỰU SINH VIÊN
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  Lữ Thành Long - Thủ lĩnh công nghệ
                </h6>
                <p class="card-text">
                  Nhắc đến ngôi trường đã gắn bó suốt 5 năm học đại học, doanh
                  nhân Lữ Thành...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-3 text-start">
          <Link to="#" class="text-dark text-decoration-none">
            <div class="card border-0 mb-4">
              <div class="position-relative">
                <img
                  src={require("../images/cuusv3.jpg")}
                  class="w-100 border-bottom border-danger border-5"
                />
                <div class="bg-danger text-white fw-bold text-center position-absolute bottom-0 p-1">
                  CỰU SINH VIÊN
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  Nguyễn Hà Đông - Cha đẻ Flappy Bird “náo loạn” Thế giới
                </h6>
                <p class="card-text">
                  Tạp chí công nghệ Cnet của Mỹ công bố danh sách 25 ứng dụng có
                  ảnh hưởng...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-3 text-start">
          <Link to="#" class="text-dark text-decoration-none">
            <div class="card border-0 mb-4">
              <div class="position-relative">
                <img
                  src={require("../images/cuusv4.jpg")}
                  class="w-100 border-bottom border-danger border-5"
                />
                <div class="bg-danger text-white fw-bold text-center position-absolute bottom-0 p-1">
                  CỰU SINH VIÊN
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  Hùng Trần - Tấm gương khởi nghiệp người Việt tại Silicon
                  Valley
                </h6>
                <p class="card-text">
                  “Gãi đúng chỗ ngứa” của người dùng Trần Việt Hùng là cựu
                  nghiên cứu sinh Quỹ Giáo...
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Nói về SoICT */}
      <div class="bg-dark soict text-white">
        <h3 class="p-4">NÓI VỀ SoICT</h3>
        <div class="d-flex w-50 m-auto">
          <img src={require("../images/KimInSoo.jpg")} class="rounded-pill" />
          <div class=" trichdan overflow-auto ms-4 ps-4 border-start border-3 border-white">
            <p class=" fst-italic text-start">
              Sinh viên Trường CNTT&TT không chỉ được biết đến với nền tảng kiến
              thức kỹ thuật sắc bén và sự thích ứng tuyệt vời với bất kỳ nhiệm
              vụ nào được giao, mà còn được đánh giá cao bởi tư duy phản biện và
              sáng tạo. Trong SVMC, sinh viên ĐHBK Hà Nội nói chung và sinh viên
              Trường CNTT&TT nói riêng luôn giữ các vị trí quan trọng, và trở
              thành thành viên chủ chốt trong nhiều dự án cốt lõi của Trung tâm.
              Trường và SVMC đã củng cố mối quan hệ bền chặt, được thể hiện
              thông qua văn bản hợp tác chính thức, mở đường cho các hoạt động
              tài trợ tăng cường năng lực, cũng như học bổng cho sinh viên. Hiện
              tại, hơn 25% nhân viên của SVMC đã tốt nghiệp từ ĐHBK Hà Nội,
              trong đó có Trường CNTT&TT, và chúng tôi luôn mong muốn gia tăng
              số lượng này. SVMC luôn đánh giá cao hiệu quả hợp tác với Trường
              CNTT&TT - một đối tác chiến lược toàn diện của SVMC tại Việt Nam.
            </p>
          </div>
        </div>
        <p class="kiminsoo text-start py-3">
            <b>Ông Kim In Soo</b><br/>
            Tổng Giám đốc Trung tâm Nghiên cứu và Phát triển Điện thoại Di động Samsung Việt Nam (SVMC)
        </p>
        <div class="chuyentrang ">
            <ul class="d-flex list-unstyled pb-4 m-0">
                <li><input type="button" class="rounded-circle bg-white" value=""/></li>
                <li><input type="button" class="rounded-circle" value=""/></li>
                <li><input type="button" class="rounded-circle" value=""/></li>
                <li><input type="button" class="rounded-circle" value=""/></li>
                <li><input type="button" class="rounded-circle" value=""/></li>
                
            </ul>
        </div>
     
       
      </div>
      {/* Về chúng tôi */}
      <div class="vechungtoi">
          <div class="row mx-5 pb-5">
              <div class="col-md-12">
                  <h3 class="my-5">VỀ CHÚNG TÔI</h3>
              </div>
              <div class="col-md-2">
                  <p class="fs-4">QS ranking 2022</p>
                  <p class="fs-2"><b>401 - 450</b></p>
                  <p>trên Thế giới trong nhóm ngành Khoa học Máy tính và Hệ thống Thông tin</p>
              </div>
              <div class="col-md-3">
              <p class="fs-4">Sinh viên thuộc TOP</p>
                  <p class="fs-2"><b>1%</b></p>
                  <p>điểm cao nhất Khối A Toàn quốc mùa Tuyển sinh 2019</p>
              </div>
              <div class="col-md-2">
              <p class="fs-4">SINH VIÊN</p>
                  <p class="fs-2"><b>4.000+</b></p>
              </div>
              <div class="col-md-3">
              <p class="fs-4">Chương trình đào tạo</p>
                  <p class="fs-2"><b>17+</b></p>
                  <p>thuộc các hệ đào tạo cử nhân, kỹ sư, thạc sỹ khoa học, tiến sỹ</p>
              </div>
              <div class="col-md-2">
              <p class="fs-4">Đối tác</p>
                  <p class="fs-2"><b>200+</b></p>
                  <p>các trường đại học, viện nghiên cứu, tập đoàn, công ty trong nước và quốc tế</p>
              </div>
          </div>
      </div>
      {/* Video */}
      <div class="row video">
        <div class="col-md-12">
          <h3 class="py-4">VIDEO</h3>
        </div>
        <div class="col-md-4">
          <Link to="#" class="text-white text-decoration-none">
            <div class="card border-0 mb-4 bg-secondary">
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder text-end pe-2 py-2">
                  TOÀN CẢNH INNOVATION DAY 2020
                </h6>
                <hr />
                <p class="card-text fs-1">
                <i class="bi bi-youtube"></i>
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-4">
          <Link to="#" class="text-white text-decoration-none">
            <div class="card border-0 mb-4 bg-secondary">
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder text-end pe-2 py-2">
                  TEAM BUILDING 2020 - HỘI AN
                </h6>
                <hr />
                <p class="card-text fs-1">
                <i class="bi bi-youtube"></i>
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-4">
          <Link to="#" class="text-white text-decoration-none">
            <div class="card border-0 mb-4 bg-secondary">
              <div class="card-body px-0">
                <h6 class="card-title fw-bold text-end pe-2">
                  CON ĐƯỜNG TRI THỨC: DU HỌC NGÀNH CÔNG NGHỆ THÔNG TIN!
                </h6>
                <hr />
                <p class="card-text fs-1">
                <i class="bi bi-youtube"></i>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div class="bg-danger py-1">
        <Link to="/news" class="text-decoration-none text-white fs-5">
          Xem thêm video
        </Link>
      </div>

    </div>
  );
}
export default Home;
