import React, { useState } from "react";
import Container from "./Container"; 

export default function Form(initialState) {
  const [value, setValue] = useState({
    name: "",
    email: "",
    month: "",
    day: "",
    year: "",
    hour: "09",
    minutes: "00",
    period: "am",
  });
  const [count, setCount] = useState(4);

  function increment() {
    setCount((prevCount) => (prevCount === 25 ? 25 : prevCount + 1));
  }

  function decrement() {
    setCount((prevCount) => (prevCount === 1 ? 1 : prevCount - 1));
  }

  // const handleChange = (event) => {
  //   const { name, value } = event.taget;
  //   console.log(value);
  //   setValue({ [name]: value });
  // };

  const handleChange = (e) =>
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    // setValue("");
    // setCount(4);
    // console.log(value);
    // console.log(count);
    const reserve = {...value, count}
    console.log(reserve);
  };

  const individuals = (count) => {
    if (count === 1) {
      return "person";
    } else {
      return "people";
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValue({ ...value, [name]: value });
  // };

  return (
    <section className="reservation">
      <Container>
        <form onSubmit={handleSubmit}>
          <label name="name" placeholder="Name">
            <input
              type="text"
              name="name"
              value={value.name}
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <input
              name="email"
              onChange={handleChange}
              placeholder="Email"
              value={value.email}
              type="email"
              required
            />
          </label>
          <fieldset className="date">
            <legend>Pick a date</legend>          
            <div className="date-picker">
              <label className="sr-only">month</label>
              <select
                  name="month"
                  onChange={handleChange}
                  value={value.month}
                  required
                >
                  <option value="">MM</option>
                  <option value="january">01</option>
                  <option value="february">02</option>
                  <option value="march">03</option>
                  <option value="april">04</option>
                  <option value="may">05</option>
                  <option value="june">06</option>
                  <option value="july">07</option>
                  <option value="august">08</option>
                  <option value="september">09</option>
                  <option value="october">10</option>
                  <option value="november">11</option>
                  <option value="december">12</option>
                </select>
            
              <label className="sr-only">day</label>
                <select name="day" onChange={handleChange} value={value.day} required>
                  <option value="">DD</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              <label className="sr-only">year</label>
                <select name="year" onChange={handleChange} value={value.year} required>
                  <option value="">YYYY</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>          
            </div>             
          </fieldset>
          <fieldset className="time">
            <legend>Pick a time</legend>
            <div className="time-picker">
              <label className="sr-only">hour</label>
                <select name="hour" onChange={handleChange} value={value.hour} required>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>              
              <label className="sr-only">minutes</label>
                <select
                  name="minutes"
                  onChange={handleChange}
                  value={value.minutes}
                  required
                >
                  <option value="00">00</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                </select>              
              <label className="sr-only">am or pm</label> 
                <select
                  name="period"
                  onChange={handleChange}
                  value={value.period}
                  required
                >
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>                        
            </div>
          </fieldset>
          <div className="people">            
            <button className="math" onClick={decrement}>
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="3" aria-hidden="true"><path fill="#9E7F66" d="M6.425 2.977V.601H.629v2.376z"/>
              </svg>
              <span className="sr-only">Click to remove people from the reservation</span>
            </button>
            <strong>{count} {individuals(count)}</strong>
            <button className="math" onClick={increment}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" aria-hidden="true"><path fill="#9E7F66" d="M6.227 10.156V6.727h3.429V4.342H6.227V.913H3.842v3.429H.413v2.385h3.429v3.429z"/>
              </svg>
              <span className="sr-only">Click to add more people to the reservation</span>
            </button>     
          </div>
          <button className="btn btn--dark">Make Reservation</button>
        </form>
      </Container>
    </section>
  );
}
