import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <body
      className="flex "
    >
      <div
        className="translate-y-1/2 translate-x-1/2"
      >
        <SignIn
          afterSignInUrl="/"
        />
      </div>
    </body>
  );
}
