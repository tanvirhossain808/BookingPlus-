import { useForm } from "react-hook-form";
import "./Signup.css";
export const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   console.log(watch());
  //   console.log(handleSubmit);
  const onSubmit = (data) => {
    console.log(watch("password"));
    // console.log(data);
  };

  return (
    <>
      <div className="signUpFormContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputContainer">
            <span className="inputParent">
              <label>First Name</label>

              <input
                {...register("firstName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.firstName?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.firstName?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
              )}
              {errors?.firstName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
              )}
            </span>
            <span className="inputParent">
              <label>Last Name</label>
              <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
              {errors?.lastName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
              )}
            </span>
            <span className="inputParent">
              <label>Enter your Eamil</label>
              <input
                {...register("email", {
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors?.email?.type === "pattern" && (
                <p>Pplease type a valid email</p>
              )}
            </span>
            {/* <span className="inputParent">
              <label>Age</label>
              <input {...register("age", { min: 18, max: 99 })} />
              {errors?.age && (
                <p>You Must be older then 18 and younger then 99 years old</p>
              )}
            </span> */}
            <span>
              <label htmlFor="password">password</label>
              <input
                id="password"
                {...register("password", {
                  required: "required",
                  minLength: {
                    value: 5,
                    message: "min length is 5",
                  },
                })}
                type="password"
              />
              {errors.password && (
                <span role="alert">{errors.password.message}</span>
              )}
            </span>
            <span>
              <label htmlFor="password">Confirm password</label>
              <input
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "required",
                  message: "Password doesn't match",
                  validate: (value) => value === watch("password"),
                  minLength: {
                    vlaue: 5,
                    // value: () => 5,
                    // validate: (value) => value === watch("password"),

                    // validate: false,
                  },
                })}
                type="password"
              />
              {/* {errors.confirmPassword && <p>Passwords do not match.</p>} */}
              {errors.confirmPassword && (
                <span role="alert">Password does not mathc</span>
              )}
            </span>

            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};
