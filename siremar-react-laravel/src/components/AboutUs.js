import React from "react";

export default function AboutUs() {
  return (
    <div class="aboutMain">
      <div class="About">
        <h1>About Siremar</h1>
        <hr />
        <img
          alt="AboutImg1"
          src="https://orlandoinformer.com/wp-content/uploads/2019/12/margaritaville-resort-orlando-lobby-seat-1024x768.jpg"
          className="img1"
        />
        <p style={{ marginTop: "10rem" }}>
          Isla de Margarita was discovered by Columbus in 1498 and quickly
          became known for its pearls. Through the centuries, settlements on the
          island were besieged by Indians (in reprisal for slave raids on the
          mainland) and by British pirates and Dutch forces. This massive
          complex is the largest endeavor of the Margaritaville brand to date.
          It’s been open for just about a year, making it an appropriate time to
          explore the development. There’s lots to see, including Sunset Walk
          (Margaritaville’s free shopping and dining district), a whole
          neighborhood of vacation cottages, and Island H2O Live! (the resort’s
          water park).
        </p>
      </div>

      <div class="footerblock" style={{ width: "100%", marginTop: "3rem" }}>
        <ul class="aboutList">
          <li>
            <i class="fa-solid fa-location-pin locationI"></i>8139 NW 10th St,
            Oklahoma City, OK 73127
          </li>
          <li>
            <i class="fa-solid fa-phone"></i> +1 555 555 5555
          </li>
          <li>
            <i class="fa-solid fa-envelope"></i> support@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
}
