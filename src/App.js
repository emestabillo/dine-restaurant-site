import React from "react";

function App() {
  return (
    <form>
      <label name="name">
        Name
        <input type="text" required />
      </label>
      <label name="email">
        Email
        <input type="email" required />
      </label>
      <label>
        Month:
        <select required>
          <option value="" disabled>
            MM
          </option>
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
        <select required>
          <option value="" disabled>
            DD
          </option>
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
        <select name="year" required>
          <option value="" disabled>
            YYYY
          </option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </label>
      Pick a time:
      <label>
        <select required>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09" selected>
            09
          </option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </label>
      <label>
        <select required>
          <option value="00">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
      </label>
      <label>
        <select required>
          <option value="am">am</option>
          <option value="pm">pm</option>
        </select>
      </label>
      <button>Make Reservation</button>
    </form>
  );
}

export default App;
