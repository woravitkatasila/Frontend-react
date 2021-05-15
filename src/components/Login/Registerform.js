import { Component } from "react";

class Registerform extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                        <div className="mt-lg-5 mb-lg-5 text-center">
                           <label className="invisibility"></label>
                            </div>
                            <div className="mt-lg-5 mb-lg-5 text-center">
                           <label className="invisibility"></label>
                            </div>
                        <div className="mt-lg-5">
                        <img src="../images/logo/logologin.png" style={{ maxWidth: "350px" }} className="rounded mx-auto d-block " ></img>
                        </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="mt-lg-5 mb-lg-5 text-center">
                           <label className="invisibility"></label>
                            </div>
                          <div className="mt-5 text-center shadow p-4  bg-white rounded">
                                <h5 className="mt-4">สร้างบัญชีผู้ใช้</h5>
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <input type="text" className="mt-4 form-control input-lg" placeholder="ชื่อ" />
                                    </div>
                                    <div className=" col-lg-6 col-12">
                                        <input type="text" className="mt-4 form-control input-lg" placeholder="นามสกุล" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="  col-12">
                                        <input type="text" className="mt-4 form-control input-lg" placeholder="อีเมล" />
                                    </div>
                                    </div>
                                <div className="row">
                                    <div className="  col-12">
                                        <input type="text" className="mt-4 form-control input-lg" placeholder="เบอร์โทรศัพท์" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="  col-12">
                                        <input type="text" className="mt-4 form-control input-lg" placeholder="รหัสผ่าน" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                    <button type="submit" class="mt-4 mb-2 btn btn-primary form-control">สมัครสมาชิก</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-12"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Registerform;