export default function validate(values) {
  let errors = {};
  if (!values.name.trim()) {
    errors.name = "This field is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.month || !values.day || !values.year) {
    errors.date = "This field is incomplete";
  }
  if ((values.hour < 9 || values.hour === "12") && values.period === "am") {
    errors.time = "Invalid time";
  }
  if (!values.hour) {
    errors.time = "This field is incomplete";
  }
  return errors;
}
