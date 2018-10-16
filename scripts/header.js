function writeHeader() {
    return `<!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
        <a class="navbar-brand" href="index.html">ICSME 2019</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
        
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Call for Papers</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="cfp_research_track.html">Research Track</a>
                </div>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Team</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="organizing_committee.html">Organizing Committee</a>
                </div>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Co-Located Events</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">SCAM</a>
                    <a class="dropdown-item" href="http://vissoft19.dcc.uchile.cl/" target="_BLANK">VISSOFT</a>
                </div>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Venue</a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Travel</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Coming Soon!</a>
                </div>
            </li>

            <!-- HIDE REGISTRATION
            <li class="nav-item">
                <a class="nav-link" href="#">Registration</a>
            </li>
            -->

            <!-- HIDE KEYNOTE
            <li class="nav-item">
                <a class="nav-link" href="#">Keynote</a>
            </li>
            -->

            <!-- HIDE PROGRAM
            <li class="nav-item">
                <a class="nav-link" href="#">Program</a>
            </li>
            -->
            
            <!-- HIDE SOCIAL EVENTS
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Social Events</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                </div>
            </li>
            -->

        </ul>
        </div>
    </div>
    </nav>

    <!-- Header Content -->
    <div><img src="assets/banners/icsme2019_banner.jpg" class="img-fluid" alt="Responsive image"></div>
    `;
}
