import React from "react";
import { Link } from "react-router-dom";
import "../style/blog.css";

export default function Blog() {
  return (
    <div>
      <div>
        <h1>Here's whats hapenning!</h1>
      </div>
      <div className="container">
        <img
          alt="Margarita"
          src="https://image.shutterstock.com/image-photo/woman-traveler-backpack-holding-hat-600w-463417910.jpg"
          className="image5"
        />
        <div className="blog-box">
          Cillum nulla magna mollit minim consequat excepteur deserunt nulla
          duis sit Lorem laborum. Consectetur qui do est velit quis dolor id
          adipisicing Lorem irure magna fugiat est. Irure voluptate aliquip
          nulla exercitation minim. Fugiat amet Lorem cillum culpa amet veniam
          proident anim Lorem ad incididunt fugiat ad. Ad id aliqua officia ut
          cupidatat. Excepteur magna dolor ipsum est fugiat proident tempor.
          Cillum nulla magna mollit minim consequat excepteur deserunt nulla
          duis sit Lorem laborum. Consectetur qui do est velit quis dolor id
          adipisicing Lorem irure magna fugiat est. Irure voluptate aliquip
          nulla exercitation minim. Fugiat amet Lorem cillum culpa amet veniam
          proident anim Lorem ad incididunt fugiat ad. Ad id aliqua officia ut
          cupidatat. Excepteur magna dolor ipsum est fugiat proident tempor.
          Consectetur qui do est velit quis dolor id adipisicing Lorem irure
          magna fugiat est. Irure voluptate aliquip nulla exercitation minim.
          Fugiat amet Lorem cillum culpa amet veniam proident anim Lorem ad
          incididunt fugiat ad. Ad id aliqua officia ut cupidatat. Excepteur
          magna dolor ipsum est fugiat proident tempor.
        </div>
      </div>

      <div className="container" style={{ marginTop: "2%" }}>
        <div className="blog-box">
          Cillum nulla magna mollit minim consequat excepteur deserunt nulla
          duis sit Lorem laborum. Consectetur qui do est velit quis dolor id
          adipisicing Lorem irure magna fugiat est. Irure voluptate aliquip
          nulla exercitation minim. Fugiat amet Lorem cillum culpa amet veniam
          proident anim Lorem ad incididunt fugiat ad. Ad id aliqua officia ut
          cupidatat. Fugiat amet Lorem cillum culpa amet veniam proident anim
          Lorem ad incididunt fugiat ad. Ad id aliqua officia ut cupidatat.
          Excepteur magna dolor ipsum est fugiat proident tempor. Consectetur
          qui do est velit quis dolor id adipisicing Lorem irure magna fugiat
          est. Irure voluptate aliquip nulla exercitation minim. Fugiat amet
          Lorem cillum culpa amet veniam proident anim Lorem ad incididunt
          fugiat ad. Ad id aliqua officia ut cupidatat. Excepteur magna dolor
          ipsum est fugiat proident tempor.
        </div>
        <img
          alt="Margarita"
          src="https://image.shutterstock.com/image-photo/arial-view-auroville-experimental-township-600w-1967101996.jpg"
          className="image6"
        />
      </div>

      <div className="container" style={{ marginTop: "2%", marginBottom: "2%"}}>
        <img
          alt="Margarita"
          src="https://image.shutterstock.com/image-photo/huntington-creek-fishing-township-orangeville-600w-1744296632.jpg"
          className="image7"
        />
        <div className="blog-box">
          Cillum nulla magna mollit minim consequat excepteur deserunt nulla
          duis sit Lorem laborum. Consectetur qui do est velit quis dolor id
          adipisicing Lorem irure magna fugiat est. Irure voluptate aliquip
          nulla exercitation minim. Fugiat amet Lorem cillum culpa amet veniam
          proident anim Lorem ad incididunt fugiat ad. Ad id aliqua officia ut
          cupidatat. Excepteur magna dolor ipsum est fugiat proident tempor.
          Cillum nulla magna mollit minim consequat excepteur deserunt nulla
          duis sit Lorem laborum. Consectetur qui do est velit quis dolor id
          adipisicing Lorem irure magna fugiat est. Irure voluptate aliquip
          nulla exercitation minim. Fugiat amet Lorem cillum culpa amet veniam
          proident anim Lorem ad incididunt fugiat ad. Ad id aliqua officia ut
          cupidatat. Excepteur magna dolor ipsum est fugiat proident tempor.
          Consectetur qui do est velit quis dolor id adipisicing Lorem irure
          magna fugiat est.
        </div>
      </div>
      <div className="footerblock">
        <div>
          <i class="fa-solid fa-location-pin locationI"></i>8139 NW 10th St,
          Oklahoma City, OK 73127
        </div>
        <div>
          <i class="fa-solid fa-phone"></i> +1 555 555 5555
        </div>
        <div>
          <i class="fa-solid fa-envelope"></i> support@gmail.com
        </div>
      </div>
    </div>
  );
}
