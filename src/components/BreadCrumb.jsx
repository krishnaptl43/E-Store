export default function BreadCrumb() {
    return (
        <>
            {/* Breadcrumb Start */}
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">{window.location.pathname}</a>
                        </li>
                        <li className="breadcrumb-item active">Product List</li>
                    </ul>
                </div>
            </div>
            {/* Breadcrumb End */}
        </>

    )
}
