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
      {/* Tin m???i nh???t */}
      <div class="row tinmoinhat">
        <div class="col-md-12">
          <h3 class="py-4">TIN M???I NH???T</h3>
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
                  TIN B??I
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  SOICT ?????ng h??nh v?? h??? tr??? sinh vi??n Nguy???n V??n Quy???n
                </h6>
                <p class="card-text">
                  {" "}
                  Nguy???n V??n Quy???n l?? m???t sinh vi??n l???p KHMT04 K65 thu???c Tr?????ng
                  CNTT&TT, ?????i h???c B??ch khoa H?? N???i. Ho??n c???nh gia...
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
                  TIN B??I
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  T???NG K???T ?????I H???I ?????I BI???U ??O??N THANH NI??N TR?????NG C??NG NGH???
                </h6>
                <p class="card-text">
                  V??o h???i 14h ng??y 07/05/2022 t???i H???i tr?????ng d???c t??a nh?? B1,
                  ???????c s??? ?????ng ?? c???a ??o??n thanh ni??n Tr?????ng ?????i...
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
                  TH??NG B??O
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  H???i th???o: Gi???i thi???u Ch????ng tr??nh ????o t???o K??? s?? AI Vingroup C??
                  h???i ????o t???o,
                </h6>
                <p class="card-text">
                  N???M B???T C?? H???I TR??? TH??NH K??? S?? AI VINGROUP N???u b???n ??ang b??n
                  kho??n v??? vi???c ???ng tuy???n tham gia ch????ng...
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
                  TH??NG B??O
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  H???I NGH??? SINH VI??N NGHI??N C???U KHOA H???C 2021-2022
                </h6>
                <p class="card-text">
                  I. M???C ????CH H???i ngh??? Sinh vi??n nghi??n c???u khoa h???c (SV NCKH)
                  l?? s??? ki???n th?????ng ni??n ???????c t??? ch???c t???i Tr?????ng...
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div class="bg-danger py-1">
        <Link to="/news" class="text-decoration-none text-white fs-5">
          Xem th??m tin t???c
        </Link>
      </div>
      {/* S??? ki???n m???i nh???t */}
      <div class="sukienmoinhat">
        <div class="row mx-5">
          <div class="col-md-12">
            <h3 class="py-4 text-white">S??? ki???n m???i nh???t</h3>
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
                    Th???i gian: 8:00 AM - 14/05/2022 <br />
                    ?????a ??i???m: S???nh t???ng 1-4 v?? H???i tr?????ng B1 -
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
                    CU???C THI T??M KI???M ?? T?????NG S??NG T???O SINH VI??N 2022
                  </h5>

                  <p class="card-text">
                    Th???i gian: 8:00 AM - 08/05/2022 <br />
                    ?????a ??i???m: T??a nh?? B1 - ?????i h???c
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
                    H???I TH???O KHOA H???C V??? C??C XU TH??? HI???N T???I V?? T????NG
                  </h5>
                  <p class="card-text">
                    Th???i gian: 2:00 PM - 06/05/2022 <br />
                    ?????a ??i???m: H???i tr?????ng d???c, t???ng 3 nh?? B1, ?????i
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
                    H??NH TRANG SINH VI??N TR?????C KHI RA TR?????NG 2022
                  </h5>
                  <p class="card-text">
                    Th???i gian: 5:30 PM - 25/04/2022 <br />
                    ?????a ??i???m: H???i tr?????ng d???c B1
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="bg-danger py-1">
          <Link to="/news" class="text-decoration-none text-white fs-5">
            Xem th??m s??? ki???n
          </Link>
        </div>
      </div>
      {/* ????o t???o - tuy???n sinh */}
      <div class="container-fluid">
        <div class="row my-4">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-cente">
            <h3 class="mt-2 mb-4">????O T???O - TUY???N SINH</h3>
            <p>
              N??m 2020, T??? ch???c Gi??o d???c Quacquarelli Symonds (vi???t t???t QS -
              V????ng qu???c Anh) ???? ????nh gi?? v?? x???p ch???t l?????ng ????o t???o v?? nghi??n
              c???u c???a ??HBK H?? N???i trong c??c l??nh v???c m?? Tr?????ng ??ang ?????m nh???n
              thu???c nh??m h???ng t??? 451 ?????n 500 tr??n to??n Th??? gi???i, ti???p t???c gi??? v???
              tr?? s??? 1 t???i Vi???t Nam.
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
                    <h5>CH????NG TR??NH ????O T???O</h5>
                    <p>
                      Tr?????ng hi???n ??ang cung c???p h??n 20 ch????ng tr??nh ????o t???o ch???t
                      l?????ng cao thu???c 3 h??? ?????i h???c, ThS v?? TS; trong ????, c??
                      ch????ng tr??nh ???????c th??? tr?????ng lao ?????ng qu???c t??? ????n nh???n v???i
                      h??n 60% sinh vi??n t???t nghi???p l??m vi???c ??? n?????c ngo??i. C??c
                      ch????ng tr??nh ????o t???o thu???c v??o 3 nh??m ng??nh ch??nh: Khoa
                      h???c M??y t??nh, K??? thu???t M??y t??nh, v?? Khoa h???c D??? li???u v??
                      Tr?? tu??? Nh??n t???o???
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
                    <h5>KI???N T???O T????NG LAI V???I SoICT</h5>
                    <p>
                      Th????ng hi???u K??? s?? CNTT B??ch khoa ???? v?????t ra kh???i bi??n gi???i
                      n?????c nh??, v?? ng??y c??ng ch???ng minh ???????c ch???t l?????ng tr??n
                      tr?????ng Qu???c t???. Trong l??n s??ng Chuy???n ?????i s???, l???a ch???n
                      ph??t tri???n t????ng lai v???i SoICT s??? ??em l???i cho c??c b???n c??
                      h???i tr??? th??nh c??c chuy??n gia c??ng ngh???, c?? kh??? n??ng l??m
                      ch??? v?? d???n d???t s??? ph??t tri???n KHCN n?????c nh?????{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* H???p t??c ?????i ngo???i */}
      <div class="container-fluid hoptac">
        <div class="row my-4">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-center text-white">
            <h3 class="my-4">H???P T??C ?????I NGO???I</h3>
            <p>
              Tr?????ng CNTT&TT lu??n coi tr???ng c??c ho???t ?????ng h???p t??c qu???c t??? v?? h???p
              t??c doanh nghi???p ????? n??ng cao ch???t l?????ng c??c ho???t gi???ng d???y, nghi??n
              c???u v?? chuy???n giao c??ng ngh???.
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
                    <h5>C??C TR?????NG ?????I T??C</h5>
                    <p>
                      Tr?????ng CNTT&TT c?? quan h??? h???p t??c v???i nhi???u tr?????ng ?????i h???c
                      v?? vi???n nghi??n c???u uy t??n tr??n Th??? gi???i. Th??ng qua h???p
                      t??c, sinh vi??n c???a Tr?????ng c?? c?? h???i h???c t???p, nghi??n c???u
                      t???i c??c tr?????ng ?????i t??c th??ng qua c??c h???c b???ng trao ?????i
                      sinh vi??n, c??ng nh?? c??c d??? ??n h???p t??c nghi??n c???u. Tr?????ng
                      h???p t??c v???i c??c ?????i h???c l???n ??? Ch??u ??u, Nh???t B???n??? ????? cung
                      c???p cho sinh vi??n c??c ch????ng tr??nh ????o t???o song b???ng
                      (double degree), m???t h??nh th???c ???du h???c??? kinh t??? v?? hi???u
                      qu??????{" "}
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
                    <h5>DOANH NGHI???P ?????I T??C</h5>
                    <p>
                      ????o t???o v?? nghi??n c???u r???t c???n s??? h???p t??c th???c ch???t v???i
                      c???ng ?????ng doanh nghi???p. Tr?????ng hi???n ??ang duy tr?? h???p t??c
                      v???i m???ng l?????i g???m h??n 130 doanh nghi???p CNTT trong v?? ngo??i
                      n?????c, trong ???? c?? th??? k??? t???i HEDSPI Supporting Partner
                      Network (HEDSPI-SPN), m???ng l?????i h??? tr??? sinh vi??n t??ng
                      c?????ng ngo???i ng???, ph??t tri???n k??? n??ng m???m, c??ng nh?? l??m quen
                      v???i v??n h??a DN ????? gia t??ng s???c c???nh tranh trong th??? tr?????ng
                      lao ?????ng qu???c t??????{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* C???u sinh vi??n */}
      <div class="row tinmoinhat">
        <div class="col-md-12">
          <h3 class="py-4">C???U SINH VI??N</h3>
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
                  C???U SINH VI??N
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  Ho??ng Vi???t Anh - Ch??? c?? m???t t??nh y??u duy nh???t
                </h6>
                <p class="card-text">
                  Gia nh???p FPT n??m 1993, t??? khi c??n l?? sinh vi??n n??m 3 khoa CNTT
                  ??H B??ch...
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
                  C???U SINH VI??N
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  L??? Th??nh Long - Th??? l??nh c??ng ngh???
                </h6>
                <p class="card-text">
                  Nh???c ?????n ng??i tr?????ng ???? g???n b?? su???t 5 n??m h???c ?????i h???c, doanh
                  nh??n L??? Th??nh...
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
                  C???U SINH VI??N
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  Nguy???n H?? ????ng - Cha ????? Flappy Bird ???n??o lo???n??? Th??? gi???i
                </h6>
                <p class="card-text">
                  T???p ch?? c??ng ngh??? Cnet c???a M??? c??ng b??? danh s??ch 25 ???ng d???ng c??
                  ???nh h?????ng...
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
                  C???U SINH VI??N
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder">
                  H??ng Tr???n - T???m g????ng kh???i nghi???p ng?????i Vi???t t???i Silicon
                  Valley
                </h6>
                <p class="card-text">
                  ???G??i ????ng ch??? ng???a??? c???a ng?????i d??ng Tr???n Vi???t H??ng l?? c???u
                  nghi??n c???u sinh Qu??? Gi??o...
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* N??i v??? SoICT */}
      <div class="bg-dark soict text-white">
        <h3 class="p-4">N??I V??? SoICT</h3>
        <div class="d-flex w-50 m-auto">
          <img src={require("../images/KimInSoo.jpg")} class="rounded-pill" />
          <div class=" trichdan overflow-auto ms-4 ps-4 border-start border-3 border-white">
            <p class=" fst-italic text-start">
              Sinh vi??n Tr?????ng CNTT&TT kh??ng ch??? ???????c bi???t ?????n v???i n???n t???ng ki???n
              th???c k??? thu???t s???c b??n v?? s??? th??ch ???ng tuy???t v???i v???i b???t k??? nhi???m
              v??? n??o ???????c giao, m?? c??n ???????c ????nh gi?? cao b???i t?? duy ph???n bi???n v??
              s??ng t???o. Trong SVMC, sinh vi??n ??HBK H?? N???i n??i chung v?? sinh vi??n
              Tr?????ng CNTT&TT n??i ri??ng lu??n gi??? c??c v??? tr?? quan tr???ng, v?? tr???
              th??nh th??nh vi??n ch??? ch???t trong nhi???u d??? ??n c???t l??i c???a Trung t??m.
              Tr?????ng v?? SVMC ???? c???ng c??? m???i quan h??? b???n ch???t, ???????c th??? hi???n
              th??ng qua v??n b???n h???p t??c ch??nh th???c, m??? ???????ng cho c??c ho???t ?????ng
              t??i tr??? t??ng c?????ng n??ng l???c, c??ng nh?? h???c b???ng cho sinh vi??n. Hi???n
              t???i, h??n 25% nh??n vi??n c???a SVMC ???? t???t nghi???p t??? ??HBK H?? N???i,
              trong ???? c?? Tr?????ng CNTT&TT, v?? ch??ng t??i lu??n mong mu???n gia t??ng
              s??? l?????ng n??y. SVMC lu??n ????nh gi?? cao hi???u qu??? h???p t??c v???i Tr?????ng
              CNTT&TT - m???t ?????i t??c chi???n l?????c to??n di???n c???a SVMC t???i Vi???t Nam.
            </p>
          </div>
        </div>
        <p class="kiminsoo text-start py-3">
            <b>??ng Kim In Soo</b><br/>
            T???ng Gi??m ?????c Trung t??m Nghi??n c???u v?? Ph??t tri???n ??i???n tho???i Di ?????ng Samsung Vi???t Nam (SVMC)
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
      {/* V??? ch??ng t??i */}
      <div class="vechungtoi">
          <div class="row mx-5 pb-5">
              <div class="col-md-12">
                  <h3 class="my-5">V??? CH??NG T??I</h3>
              </div>
              <div class="col-md-2">
                  <p class="fs-4">QS ranking 2022</p>
                  <p class="fs-2"><b>401 - 450</b></p>
                  <p>tr??n Th??? gi???i trong nh??m ng??nh Khoa h???c M??y t??nh v?? H??? th???ng Th??ng tin</p>
              </div>
              <div class="col-md-3">
              <p class="fs-4">Sinh vi??n thu???c TOP</p>
                  <p class="fs-2"><b>1%</b></p>
                  <p>??i???m cao nh???t Kh???i A To??n qu???c m??a Tuy???n sinh 2019</p>
              </div>
              <div class="col-md-2">
              <p class="fs-4">SINH VI??N</p>
                  <p class="fs-2"><b>4.000+</b></p>
              </div>
              <div class="col-md-3">
              <p class="fs-4">Ch????ng tr??nh ????o t???o</p>
                  <p class="fs-2"><b>17+</b></p>
                  <p>thu???c c??c h??? ????o t???o c??? nh??n, k??? s??, th???c s??? khoa h???c, ti???n s???</p>
              </div>
              <div class="col-md-2">
              <p class="fs-4">?????i t??c</p>
                  <p class="fs-2"><b>200+</b></p>
                  <p>c??c tr?????ng ?????i h???c, vi???n nghi??n c???u, t???p ??o??n, c??ng ty trong n?????c v?? qu???c t???</p>
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
                  TO??N C???NH INNOVATION DAY 2020
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
                  TEAM BUILDING 2020 - H???I AN
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
                  CON ???????NG TRI TH???C: DU H???C NG??NH C??NG NGH??? TH??NG TIN!
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
          Xem th??m video
        </Link>
      </div>

    </div>
  );
}
export default Home;
