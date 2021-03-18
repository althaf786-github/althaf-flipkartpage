import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';

const Header = () => {
    return (
        <div>
           
           <div className="header">
           <div className="header-first">
               <img
               src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
               alt="flipkart logo"
               />
               <div className="header-first1">
                   <span style={{
                       fontSize:'11px',
                       color:'white',
                       fontStyle:'italic'
                   }}>Explore</span>
                   <span style={{
                       fontSize:'11px',
                       color:'yellow',
                       fontStyle:'italic'
                   }}>Plus</span>
                   <span><img
                   width="10"
                    src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                   alt=""
                   />
                   </span>
               </div>

           </div>
           <div className="header-seccond">
               <input placeholder=" search for products" type="text"/>
               <SearchIcon/>
           </div>
           <div className="header-third">
               <button>Login</button>
           </div>
           <div className="header-fourth">
               <span>more</span>
               <ExpandMoreIcon/>
           </div>
           <div className="header-fifth">
               <ShoppingCartIcon/>
               <p style={{
                   color:'white'
               }}>cart</p>
           </div>



        </div>
        </div>
    )
}

export default Header 
