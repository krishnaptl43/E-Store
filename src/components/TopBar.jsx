export default function TopBar() {
    return (
        <>
            {/* Top bar Srtart */}
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-envelope" />
                            support@email.com
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-phone-alt" />
                            +012-345-6789
                        </div>
                    </div>
                </div>
            </div>
            {/* Top bar End */}
        </>
    )
}