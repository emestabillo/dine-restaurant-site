import React from "react";
import Container from "./Container";
import useForm from "./useForm";
import validate from "./FormValidation";

export default function Form() {
  const {
    values,
    errors,
    count,
    increment,
    decrement,
    handleChange,
    handleSubmit,
    valid,
    isSubmitting,
  } = useForm(validate);

  return (
    <section className="reservation">
      <Container>
        <form onSubmit={handleSubmit} id="form" noValidate>
          {isSubmitting && valid ? (
            <small className="success-message">
              Success! Your request has been submitted.
            </small>
          ) : null}
          <label name="name" placeholder="Name">
            <input
              type="text"
              name="name"
              value={values.name}
              placeholder="Name"
              onChange={handleChange}
              className={errors.name && "error-border"}
              required
            />
            {errors.name && (
              <small className="error-message">{errors.name}</small>
            )}
          </label>
          <label>
            <input
              name="email"
              onChange={handleChange}
              placeholder="Email"
              value={values.email}
              type="email"
              className={errors.email && "error-border"}
              required
            />
            {errors.email && (
              <small className="error-message">{errors.email}</small>
            )}
          </label>
          <fieldset className="date grid">
            <div className="field-info">
              <legend
                className={
                  errors.date
                    ? `heading ${errors.date && "error-color"}`
                    : "heading"
                }
              >
                Pick a date
              </legend>
              {errors.date && <p className="error-message">{errors.date}</p>}
            </div>
            <div className="date-picker">
              <label htmlFor="month" className="sr-only">
                month
              </label>
              <div className="select">
                <select
                  name="month"
                  onChange={handleChange}
                  value={values.month}
                  id="month"
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
              </div>
              <label htmlFor="day" className="sr-only">
                day
              </label>
              <select
                name="day"
                id="day"
                onChange={handleChange}
                value={values.day}
                required
              >
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
              <label htmlFor="year" className="sr-only">
                year
              </label>
              <select
                name="year"
                id="year"
                onChange={handleChange}
                value={values.year}
                required
              >
                <option value="">YYYY</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </fieldset>
          <fieldset className="time grid">
            <div className="field-info">
              <legend
                className={
                  errors.time
                    ? `heading ${errors.time && "error-color"}`
                    : "heading"
                }
              >
                Pick a time
              </legend>
              {errors.time && <p className="error-message">{errors.time}</p>}
            </div>
            <div className="time-picker">
              <label htmlFor="hour" className="sr-only">
                hour
              </label>
              <select
                name="hour"
                onChange={handleChange}
                value={values.hour}
                id="hour"
                required
              >
                <option value="">00</option>
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
              <label htmlFor="minutes" className="sr-only">
                minutes
              </label>
              <select
                name="minutes"
                onChange={handleChange}
                value={values.minutes}
                id="minutes"
                required
              >
                <option value="00">00</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
              </select>
              <label htmlFor="period" className="sr-only">
                am or pm
              </label>
              <select
                name="period"
                id="period"
                onChange={handleChange}
                value={values.period}
                required
              >
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </select>
            </div>
          </fieldset>
          <div className="people">
            <button type="button" className="math" onClick={decrement}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="3"
                aria-hidden="true"
              >
                <path fill="#9E7F66" d="M6.425 2.977V.601H.629v2.376z" />
              </svg>
              <span className="sr-only">
                Click to remove people from the reservation
              </span>
            </button>
            <strong name="people">
              {count} {count === 1 ? "person" : "people"}
            </strong>
            <button type="button" className="math" onClick={increment}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="11"
                aria-hidden="true"
              >
                <path
                  fill="#9E7F66"
                  d="M6.227 10.156V6.727h3.429V4.342H6.227V.913H3.842v3.429H.413v2.385h3.429v3.429z"
                />
              </svg>
              <span className="sr-only">
                Click to add more people to the reservation
              </span>
            </button>
          </div>
          <button type="submit" className="btn btn--dark">
            Make Reservation
          </button>
        </form>
      </Container>
    </section>
  );
}
