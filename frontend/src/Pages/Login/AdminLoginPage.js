import '../../App.css'
import '../../components/Login/Login.css';
import AdminLogin from '../../components/Login/AdminLogin';

function LoginPage(){
    return(
        <>
        <div className='admin_login_body'>    
            <AdminLogin/>
        </div>
        </>
    )
}
export default LoginPage;