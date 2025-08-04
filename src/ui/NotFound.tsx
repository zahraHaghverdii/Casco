import Link from "next/link";
import Container from "@/component/container";

function NotFound() {
  return (
    <Container>
      <div className="flex flex-col h-screen items-center justify-center text-center">
        <h1 className="mb-4 text-6xl font-semibold text-error-error">404</h1>
        <p className="mb-4 text-lg text-gray-600">
          Oops! Looks like you're lost.
        </p>
        <p className="mt-4 text-gray-600">
          Let's get you back{" "}
          <Link href="/" className="text-blue-500">
            home
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}

export default NotFound;
