import './App.css';

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
    <nav>
        <h1>eGain</h1>
        
        <ul className='nav-links'>
        
            <li>About</li>
        
            <li>Shop</li>
        
        </ul>
    </nav>
  );
}
  
export default Nav;