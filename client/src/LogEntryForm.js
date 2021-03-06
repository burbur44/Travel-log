import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createLogEntry } from "./api";

const LogEntryForm = ({ location }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
        setLoading(true);
        data.latitude = location.latitude;
        data.longitude = location.longitude
      const created =  await createLogEntry(data);
      console.log(created);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
    
      <label htmlFor="title">Title</label>
      <input name="title" required ref={register} />
      <label htmlFor="comments">Comments</label>
      <textarea name="comments" rows={3} ref={register}></textarea>
      <label htmlFor="description">Description</label>
      <textarea name="description" rows={3} ref={register}></textarea>
      <label htmlFor="image">Image</label>
      <input name="image" ref={register} />
      <label htmlFor="visitDate">Visit Date </label>
      <input name="visitDate" type="date" required ref={register} />
      <button> Create entry</button>
    </form>
  );
};

export default LogEntryForm;
