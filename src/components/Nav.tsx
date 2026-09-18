import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
      <div className="bg-purple-100">
        <nav className="container m-auto flex justify-between">
          <img src={logo} alt="" />
          <ul className="flex justify-between align-center gap-4">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="flex align-center gap-2">
            <button>Sign In</button>
            <button className="btn btn-secondary rounded-full">Sign Up</button>
          </div>
        </nav>
      </div>
    );
};

export default Nav;