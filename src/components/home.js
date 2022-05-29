import React from "react";

function Home() {
    return (

        <div id="carouselExampleIndicators" class="carousel slide border-bottom border-danger border-5" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={require("../images/slideshow1.png")} class="d-block w-100" />
                </div>
                <div class="carousel-item">
                    <img src={require("../images/slideshow2.png")} class="d-block w-100" />

                </div>
                <div class="carousel-item">
                    <img src={require("../images/slideshow3.png")} class="d-block w-100" />

                </div>
                <div class="carousel-item">
                    <img src={require("../images/slideshow4.png")} class="d-block w-100" />

                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    )
}
export default Home