import React,{useEffect}from 'react';
import "./style/Auth.css";

const Auth = () => {
  
	return (
    <div>
    <div className="container">
	<div className="row d-flex justify-content-center mt-5">
		<div className="col-12 col-md-8 col-lg-6 col-xl-5">
			<div className="card py-3 px-2">
		
				<div style={{width:"95%"}} className="row mx-auto ">
					
					<div id="google_btn">
                    
						<button> <img src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" style={{marginRight:"10px",marginTop:"-5px",borderRadius:"50%",padding:"2px",backgroundColor:"white"}} height="30" width="30" /> <span>Login with google</span></button>
					</div>
				</div>
				<div className="division">
					<div className="row">
						<div className="col-3"><div className="line l"></div></div>
						<div className="col-6"><span>OR</span></div>
						<div className="col-3"><div className="line r"></div></div>
					</div>
				</div>
				<form className="myform">
					<div className="form-group">
    					<input type="email" className="form-control" placeholder="Username"/>
  					</div>
 					<div className="form-group">
    					<input type="password" className="form-control" placeholder="Password"/>
  					</div>
  					
  					<div className="form-group mt-3">
  						<button type="button" id="Sub" className="btn btn-block btn-lg"><small>Submit</small></button>
  					</div>
				</form>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default Auth
