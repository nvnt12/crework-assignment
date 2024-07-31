import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <div className=" bg-gradient-to-b from-white to-brand-primary/70 w-full h-full flex justify-center pt-[10rem]">
      <div className="bg-white border-2 h-fit rounded-lg w-2/4 p-[2.5rem] flex flex-col items-center gap-6 max-w-xl">
        <h1 className="text-4xl font-semibold text-brand-text mb-2">
          Welcome to <span className="text-brand-primary">Workflo</span>!
        </h1>
        <form
          className="w-full flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Name"
            name="name"
            type={"text"}
            placeholder="Joe Gardner"
            required={true}
            defaultValue=""
            options={undefined}
            register={register}
            errors={errors}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <Input
            label="Email"
            name="email"
            type={"email"}
            placeholder="jgardner@gmail.com"
            required={true}
            defaultValue=""
            options={undefined}
            register={register}
            errors={errors}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <Input
            label="Password"
            name="password"
            type={"password"}
            placeholder="Password"
            required={true}
            defaultValue=""
            register={register}
            errors={errors}
            onChange={(e) => {
              console.log(e.target.value);
            }}
            options={{
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            }}
          />
          <PrimaryButton label="Login" type="submit" isDisabled={false} />
        </form>
        <p className="text-gray-500 font-medium text-lg">
          Already have an account?&nbsp;
          <Link href="/login" className="text-sky-700">
            Log in
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
