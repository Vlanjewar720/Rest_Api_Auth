// import React from 'react'
// import {Link,useNavigate} from 'react-router-dom'

// export default function NavBar() {
//    const token  = localStorage.getItem("loggedIn")
//    const navigate = useNavigate()
//     return (
//         <nav className="navbar navbar-expand-lg" >
//         <div className="container-fluid"style={{backgroundColor: "red"}} >
//         <a className="navbar-brand brand-logo left" to="/">Rest-Api-Auth</a>
         
//           {/* <Link to="/" className="brand-logo left">Rest-Api-Auth</Link> */}
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//              <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul id="nav-mobile" className="navbar-nav me-auto mb-2 mb-lg-0">
//             {
//               token ?
//               <>
          
//                <li className="nav-item"><Link to="/userlist" className="nav-link">UserList</Link></li>
//                <li className="nav-item"><Link to="/userDetail" className="nav-link">UserDetail</Link></li>
               
              
//                <li className="nav-item"><button className="red btn" onClick={()=>{
//                  localStorage.removeItem("token")
//                  navigate('/login')
//                }}>Logout</button></li>

//               </>:
//               <>
//                 <li className="nav-item"><Link to="/userlist" className="nav-link">UsersList</Link></li>
//                 <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
//                 <li className="nav-item"><Link to="/signUp" className="nav-link">Signup</Link></li>
//                </>
//             }
               
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );

    //material-telwind-navbar/////
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const token  = localStorage.getItem("loggedIn")
import {Link} from 'react-router-dom'
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
       {
              token ?
              <>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/userlist" className="flex items-center hover:text-blue-500 transition-colors">
        UserList
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
       <Link to="/userDetail" className="flex items-center hover:text-blue-500 transition-colors">
         UserDetail
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
      <li className="nav-item"><button className="red btn" onClick={()=>{
                 localStorage.removeItem("token")
                 navigate('/login')
               }}>Logout</button></li>
          </Typography>    
      </>:
              <>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/login" className="flex items-center hover:text-blue-500 transition-colors">
        login
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/signUp" className="flex items-center hover:text-blue-500 transition-colors">
        signUp
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to="/userlist" className="flex items-center hover:text-blue-500 transition-colors">
        UserList
        </Link>
      </Typography>
      </>
  }
    </ul>
  );
}
 
export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          REST-API-AUTH
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}


// import React from 'react'
// import {Link,useNavigate} from 'react-router-dom'

// export default function NavBar() {
//    const token  = localStorage.getItem("loggedIn")
//    const navigate = useNavigate()
//     return (
//         <nav>
//         <div className="nav-wrapper #673ab7 deep-purple">
//           <Link to="/" className="brand-logo left">Rest-Api-Auth</Link>
//           <ul id="nav-mobile" className="right">
//             {
//               token ?
//               <>
          
//                <li><Link to="/profile">Profile</Link></li>
//                <li><Link to="/create">Create</Link></li>

//                <li><button className="red btn" onClick={()=>{
//                  localStorage.removeItem("token")
//                  navigate('/login')
//                }}>Logout</button></li>

//               </>:
//               <>
//                 <li><Link to="/getUser">UserList</Link></li>
//                 <li><Link to="/login">Login</Link></li>
//                 <li><Link to="/signUp">Signup</Link></li>
//                </>
//             }
            
           
//           </ul>
//         </div>
//       </nav>
//     )
//}
