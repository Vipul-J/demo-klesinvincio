import React from 'react';
import "../assets/css/style.css";
import { faAward, faFlagCheckered, faPeopleGroup, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function kpis() {
  return (
    <>
    <div class="text-center back-blue p-5">
        <div class="d-flex justify-content-center">
        </div>
        <div class="row">
            <div class="col-sm-3">
                <span class="text-white"><FontAwesomeIcon icon={faFlagCheckered} size="5x"/></span>
                <p class="h5 mt-2 text-white">5+ Events</p>
            </div>
            <div class="col-sm-3">
                <span class="text-white"><FontAwesomeIcon icon={faPeopleGroup} size="5x"/></span>
                <p class="h5 mt-2 text-white">150+ Participants</p>
            </div>
            <div class="col-sm-3">
                <span class="text-white"><FontAwesomeIcon icon={faAward} size="5x"/></span>
                <p class="h5 mt-2 text-white">30+ Winners</p>
            </div>
            <div class="col-sm-3">
                <span class="text-white"><FontAwesomeIcon icon={faTrophy} size="5x"/></span>
                <p class="h5 mt-2 text-white">1 General Champion</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default kpis;