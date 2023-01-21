import { useState } from "react";

const Friends = ({
  register,
  unregister,
  inputClasses,
  errors,
  invalidMsg,
}: any) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex justify-between">
        <label className="ml-2 text-sm font-medium text-pink-800">
          Friends:
        </label>
        <h1
          onClick={() => {
            setCount(count + 1);
          }}
          className="ml-2 text-sm font-medium text-pink-800 cursor-pointer"
        >
          +
        </h1>
      </div>
      {[...Array(count)].map((value, index) => {
        return (
          <div className="flex">
            <div>
              <input
                className={
                  inputClasses +
                  (errors?.friends?.length > index
                    ? errors?.friends[index]?.firstName && "border-red-500"
                    : "")
                }
                placeholder="First name"
                {...register("friends." + index + ".firstName", {
                  required: {
                    value: true,
                    message: invalidMsg,
                  },
                })}
              />
              <input
                className={
                  inputClasses +
                  (errors?.friends?.length > index
                    ? errors?.friends[index]?.lastName && "border-red-500"
                    : "")
                }
                placeholder="Last name"
                {...register("friends." + index + ".lastName", {
                  required: {
                    value: true,
                    message: invalidMsg,
                  },
                })}
              />
            </div>
            <h1
              onClick={() => {
                unregister("friends." + index);
                setCount(count - 1);
              }}
              className="ml-2 text-sm font-medium text-pink-800 cursor-pointer"
            >
              x
            </h1>
          </div>
        );
      })}
    </>
  );
};

export default Friends;
