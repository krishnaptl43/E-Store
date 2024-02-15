export default function BrandSection() {
    return (
        <>
            {/* Brand Start */}
            <div className="brand">
                <div className="container-fluid">
                    <marquee behavior="" direction="">
                        <div className="d-flex justify-content-evenly gap-5">
                            <div className="brand-item">
                                <img src="img/brand-1.png" alt="image" />
                            </div>
                            <div className="brand-item">
                                <img src="img/brand-2.png" alt="image" />
                            </div>
                            <div className="brand-item">
                                <img src="img/brand-3.png" alt="image" />
                            </div>
                            <div className="brand-item">
                                <img src="img/brand-4.png" alt="image" />
                            </div>
                            <div className="brand-item">
                                <img src="img/brand-5.png" alt="image" />
                            </div>
                            <div className="brand-item">
                                <img src="img/brand-6.png" alt="image" />
                            </div>
                        </div>
                    </marquee>
                </div>
            </div>
            {/* Brand End */}
        </>

    )
}