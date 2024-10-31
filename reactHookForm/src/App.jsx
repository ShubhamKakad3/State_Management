import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label> FirstName: <input type="text" {...register("firstName", { required: true, maxLength: 20 })} /></label>
      <input type="text" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="email" {...register("email", { min: 18, max: 29 })} />
      <input type="password" {...register("password", { min: 10, max: 12 })} />
      <input type="submit" />
    </form>
  );
}