import MainSlideMenus from "../MainSlideMenus";

export default function MainSlider() {
    return (
        <>
            {/* Main Slider Start */}
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <MainSlideMenus/>
                        </div>
                        <div className="col-md-6">
                            <div className="header-slider normal-slider">
                                <div className="header-slider-item">
                                    <img src="img/slider-1.jpg" alt="Slider Image" />
                                    <div className="header-slider-caption">
                                        <p>Some text goes here that describes the image</p>
                                        <a className="btn" href="">
                                            <i className="fa fa-shopping-cart" />
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                                <div className="header-slider-item">
                                    <img src="img/slider-2.jpg" alt="Slider Image" />
                                    <div className="header-slider-caption">
                                        <p>Some text goes here that describes the image</p>
                                        <a className="btn" href="">
                                            <i className="fa fa-shopping-cart" />
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                                <div className="header-slider-item">
                                    <img src="img/slider-3.jpg" alt="Slider Image" />
                                    <div className="header-slider-caption">
                                        <p>Some text goes here that describes the image</p>
                                        <a className="btn" href="">
                                            <i className="fa fa-shopping-cart" />
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="header-img">
                                <div className="img-item">
                                    <img src="img/category-1.jpg" />
                                    <a className="img-text" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                                <div className="img-item">
                                    <img src="img/category-2.jpg" />
                                    <a className="img-text" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Slider End */}
        </>
    )
}