import React from 'react';
import "../assets/css/style.css";

function navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light shadow-sm bg-body rounded bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#"> <img src="assets/images/logo.png" height="65" alt=""/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#adminq">Teaser</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#infra">Events</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#about">Help Desk</a>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-primary me-2">REGISTRATION</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar;