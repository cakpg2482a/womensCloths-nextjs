import React from "react";
import Image from "next/image";
import date from "./uiw_date.png";
import "./calender.css"

export default function Calendar() {
  return (<>
    <div className="a">
                <div class="rectangle-92"  >
                    <p class="our-product" >Booking</p>
                </div>
            </div>
    <div className="calendar-container container">
      <div className="row">
        <div className="col-md-6 col-12">
          {" "}
          {/* Column for Business Hours */}
          <div className="business-time text-center">
            <div className="business-text mt-1">Business Hours</div>
            <div className="business-chart">
              <ul className="business-ul">
                <li>
                  <button className="date-btn">
                    <Image src={date} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Monday</p>
                  <p className="time">10:00 AM - 10:00 PM</p>
                </li>
                <li>
                  <button className="date-btn">
                    <Image src={date} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Tusday</p>
                  <p className="time">10:00 AM - 10:00 PM</p>
                </li>
                <li>
                  <button className="date-btn">
                    <Image src={date} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Wednsday</p>
                  <p className="time">10:00 AM - 10:00 PM</p>
                </li>
                <li>
                  <button className="date-btn">
                    <Image src={date} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Thrusday</p>
                  <p className="time">10:00 AM - 10:00 PM</p>
                </li>
                <li>
                  <button className="date-btn">
                    <Image src={date} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Friday</p>
                  <p className="time">10:00 AM - 10:00 PM</p>
                </li>
                <li>
                  <button className="date-btn">
                    <Image src={date} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Saturday</p>
                  <p className="time">Holyday</p>
                </li>
                <li>
                  <button className="date-btn">
                    <Image src={date} className="date-img"alt="" />
                  </button>
                  <p className="day_1">Sunday</p>
                  <p className="time">Holyday</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12">
          {" "}
          {/* Column for Calendar */}
          <div className="appointment mt-1">Make an Appointment</div>
          <div className="calendar-container align-items-center justify-content-center d-flex">
            <div class="month">
              <ul>
                <li class="prev">&#10094;</li>
                <li class="next">&#10095;</li>
                <li>
                  <span>April 2023</span>
                </li>
              </ul>
              <ul class="weekdays">
                <li>SUN</li>
                <li>MON</li>
                <li>THE</li>
                <li>WED</li>
                <li>THU</li>
                <li>FRI</li>
                <li>SAT</li>
              </ul>
              <ul class="days">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>
                  <span class="active">10</span>
                </li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
              </ul>
            </div>
          </div>
          <p className="hour-text">Hour</p>
          <div className="hour-center align-items-center justify-content-center d-flex mt-4">
            <button className="hour-btn">
              <p className="hour-time">10:00 AM - 10:15 AM</p>
            </button>
          </div>
          <div className="appointment-center align-items-center justify-content-center d-flex mt-4">
            <button className="appointment-btn"style={{backgroundColor:" #31343c",
            boxShadow:" var(--new-box-shadow, 5px 5px 7px 0px rgba(0, 0, 0, 0.20), 1px 1px 2px 0px rgba(0, 0, 0, 0.05), -2px -2px 2px 0px rgba (255, 255, 255, 0.05), -6px -7px 7px 0px rgba(255, 255, 255, 0.05))"}}>
              <p className="appointment-text"style={{color: "#9efff8"}}>Make An Appointment</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
