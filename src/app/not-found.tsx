import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-6xl md:text-3xl text-primary-base font-bold">
        Page Not Found
      </h1>
      <p className="lg:text-2xl text-xl font-medium mt-5 md:mt-2 text-tertiary-80">
        {" "}
        Oops, there is nothing here...
      </p>

      <Link
        href={"/"}
        className="py-3 px-4 bg-primary-base text-white text-2xl md:text-xl font-medium mt-10"
      >
        Go Back Home
      </Link>
    </div>
  );
}
