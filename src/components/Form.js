import React, { useState } from "react";
// import styles from "../../components/form/form.css";

export default function Form() {
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
    console.log(value);
    console.log(count);
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
    <form onSubmit={handleSubmit}>
      <label name="name" placeholder="Name">
        Name
        <input
          type="text"
          name="name"
          value={value.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          value={value.email}
          type="email"
          required
        />
      </label>
      <br />
      <label>
        Month:
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
      </label>
      <label>
        Day:
        <select name="day" onChange={handleChange} value={value.day} required>
          <option value="">DD</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
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
      </label>
      <label>
        Year:
        <select name="year" onChange={handleChange} value={value.year} required>
          <option value="">YYYY</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </label>
      <br />
      <label>
        Pick a time:
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
      </label>
      <label>
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
      </label>
      <label>
        <select
          name="period"
          onChange={handleChange}
          value={value.period}
          required
        >
          <option value="am">am</option>
          <option value="pm">pm</option>
        </select>
      </label>
      <br />
      <div>
        <h3>
          {count} {individuals(count)}
        </h3>
        <span onClick={increment}>Increment</span>
        <span onClick={decrement}>Decrement</span>
      </div>
      <button>Make Reservation</button>
    </form>
  );
}
