import { Component } from "react";

class Loginform extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-lg-4 col-12">
                            <div className="mt-5 text-center">
                                <img src="../images/logo/logologin.png" style={{ maxWidth: "350px" }} className="rounded mx-auto d-block"></img>
                            </div>
                          <div className="mt-5 text-center shadow p-4  bg-white rounded">
                                <h5 className="mt-4">เข้าสู่ระบบ CHAT ON</h5>
                                <div className="row">
                                    <div className=" col-12 ">
                                        <input type="text" className="mt-4 form-control input-lg" placeholder="อีเมล" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-12">
                                        <input type="text" className="mt-2 form-control input-lg" placeholder="รหัสผ่าน" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                    <button type="submit" class="mt-4 btn btn-primary form-control">เข้าสู่ระบบ</button>
                                    </div>
                                </div>
                                <label className="mt-3"><a href="/register" className="text-success">สร้างบัญชีใหม่</a></label>
                               
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Loginform;