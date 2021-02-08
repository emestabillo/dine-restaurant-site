import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    month: "",
    day: "",
    year: "",
    hour: "",
    minutes: "00",
    period: "am",
  });
  const [count, setCount] = useState(4);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [valid, setValid] = useState(false);
 

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setValid(true);
      console.log({...values,count})
    } // eslint-disable-next-line
  }, [errors, isSubmitting]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    // e.target.reset();
  };

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
    setCount(count);
  };

  function increment() {
    setCount((prevCount) => (prevCount === 25 ? 25 : prevCount + 1));
  }

  function decrement() {
    setCount((prevCount) => (prevCount === 1 ? 1 : prevCount - 1));
  }

  return {
    handleChange,
    handleSubmit,
    values,
    count,
    errors,
    increment,
    decrement,
    valid,
    isSubmitting
  };
};

export default useForm;
