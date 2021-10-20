const Navbar = () => {
  return (
    <nav class="nav navbar navbar-expand-lg navbar-dark bg-dark py-0">
      <div class=" nav container-fluid">
        <a class="nav-brand navbar-brand mx-2" href="#">DreadSpot</a>
        <button class="navbar-toggler py-0 px-1 my-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="nav-toggler navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto my-2 px-2">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">SCENARIOS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">GAMEMASTERS TIPS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">MAILING LIST</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">ABOUT</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;