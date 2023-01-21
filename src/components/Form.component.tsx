import { useForm } from "react-hook-form";
import Friends from "./Friends.component";
interface User {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  courses: string[];
  level: string;
}
const Form = () => {
  const defaults: User = {
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    courses: [],
    level: "",
  };
  const {
    setValue,
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: defaults,
  });
  const invalidMsg: string = "Field is invalid";
  const inputClasses =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 ";
  const randomize = () => {
    setValue("firstName", "nawres", { shouldValidate: true });
    setValue("lastName", "ncib", { shouldValidate: true });
    setValue("age", 22, { shouldValidate: true });
    setValue("gender", "F", { shouldValidate: true });
    setValue("courses", ["P", "S"], { shouldValidate: true });
    setValue("level", "1", { shouldValidate: true });
  };
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="flex flex-col gap-5"
    >
      {/* watch watches inout and returns its value */}
      <p>Hi {watch("firstName")}</p>
      <input
        className={inputClasses + (errors.firstName && "border-red-500")}
        placeholder="First name"
        {...register("firstName", {
          required: {
            value: true,
            message: invalidMsg,
          },
        })}
      />

      <input
        {...register("lastName", {
          pattern: {
            value: /[A-Za-z]{3}/,
            message: invalidMsg,
          },
        })}
        className={inputClasses + (errors.lastName && "border-red-500")}
        placeholder="Last name"
      />
      <input
        {...register("age", {
          valueAsNumber: true,
          validate: (value) => value > 12 || invalidMsg,
        })}
        type="number"
        className={inputClasses + (errors.age && "border-red-500")}
        placeholder="Age"
      />

      <select
        {...register("gender", {
          required: {
            value: true,
            message: invalidMsg,
          },
        })}
        className={inputClasses}
      >
        <option value="">Gender...</option>
        <option value="F">Female</option>
        <option value="m">Male</option>
      </select>

      <div>
        <div className="flex items-center">
          <input
            {...register("courses", { required: true })}
            id="painting"
            type="checkbox"
            value="P"
            className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500"
          />
          <label
            htmlFor="painting"
            className="ml-2 text-sm font-medium text-pink-800"
          >
            Painting
          </label>
        </div>
        <div className="flex items-center">
          <input
            {...register("courses")}
            id="singing"
            type="checkbox"
            value="S"
            className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500"
          />
          <label
            htmlFor="singing"
            className="ml-2 text-sm font-medium text-pink-800"
          >
            Singing
          </label>
        </div>
        <div className="flex items-center">
          <input
            {...register("courses")}
            id="dancing"
            type="checkbox"
            value="D"
            className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500"
          />
          <label
            htmlFor="dancing"
            className="ml-2 text-sm font-medium text-pink-800"
          >
            Dancing
          </label>
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <input
            {...register("level", {
              required: { value: true, message: invalidMsg },
            })}
            id="beginner"
            type="radio"
            value={1}
            className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500"
          />
          <label
            htmlFor="beginner"
            className="ml-2 text-sm font-medium text-pink-800"
          >
            Beginner
          </label>
        </div>
        <div className="flex items-center">
          <input
            {...register("level", {
              required: { value: true, message: invalidMsg },
            })}
            id="intermediate"
            type="radio"
            value={2}
            className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500"
          />
          <label
            htmlFor="intermediate"
            className="ml-2 text-sm font-medium text-pink-800"
          >
            Intermediate
          </label>
        </div>
        <div className="flex items-center">
          <input
            {...register("level", {
              required: { value: true, message: invalidMsg },
            })}
            id="expert"
            type="radio"
            value={3}
            className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500"
          />
          <label
            htmlFor="expert"
            className="ml-2 text-sm font-medium text-pink-800"
          >
            Expert
          </label>
        </div>
      </div>

      <button
        disabled={!isValid}
        className="disabled:bg-gray-400 disabled:text-gray-500 disabled:border-gray-500 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded"
        type="submit"
      >
        submit
      </button>
      <button
        className="disabled:bg-gray-400 disabled:text-gray-500 disabled:border-gray-500 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded"
        type="button"
        onClick={randomize}
      >
        Rndom
      </button>
    </form>
  );
};

export default Form;
