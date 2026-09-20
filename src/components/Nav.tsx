import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
      <div className="sticky top-0 z-50 bg-purple-100 shadow-sm border-b border-purple-200/50">
        <nav className="container m-auto flex justify-between items-center py-3">
          <img src={logo} alt="Logo image doesn't exist" />
          <ul className="flex justify-between items-center gap-4">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="flex items-center gap-2">
            <button>Sign In</button>
            <button className="btn btn-secondary rounded-full">Sign Up</button>
          </div>
        </nav>
      </div>
    );
};

export default Nav;