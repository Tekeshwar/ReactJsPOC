import React, { Component } from 'react'; 
import '../Container/Signin.css';
class Signin extends Component {
    render() {
        const h2Style = {            
            textAlign: 'center'             
          };
        return (
            
<div className='container'>
	<h2 style={h2Style}>Login Form</h2>
	<div className="imgcontainer">
		<img src="https://ee.co.uk/content/eeb-site/en/small-business/connecting-your-business/mobileiron/_jcr_content/root/responsivegrid_88480_176914583/responsivegrid_1029552650/page_teaser.image.login_icon_16x9-320x240_trans.320.high.png" alt="Avatar" className="avatar" />
	</div>
	<div className="">
		<label >
			<b>Username</b>
		</label>
		<input type="text" placeholder="Enter Username" name="uname" required />
		<label >
			<b>Password</b>
		</label>
		<input type="password" placeholder="Enter Password" name="psw" required />
		<div>
			<div className='row'>
				<div className='col-md-6'>
					<button type="submit">Login</button>
				</div>
				<div className='col-md-6'>
					<button className='cancelbtn' type="submit">Cancel</button>
				</div>
			</div>
		</div>
		<label>
			<input type="checkbox" name="remember" /> Remember me
                    
		</label>
	</div>
	<div className="">
		<span className="psw">Forgot 
			<a href="#">password?</a>
		</span>
	</div>
</div>
        );
    }
}

export default Signin;