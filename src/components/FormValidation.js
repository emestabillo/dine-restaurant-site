export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.name.trim()) {
    errors.name = "This field is required";
  }
  if (!values.month || !values.day || !values.year) {
    errors.date = "This field is incomplete";
  }
  if (!values.hour || !values.minutes || !values.period) {
    errors.time = "This field is incomplete";
  }
  return errors;
}
