import Container from "@/component/container";

function ErrorServerPage({ error, reset }) {
  return (
    <Container>
      <div className="flex flex-col h-screen items-center justify-center text-center">
        <h1 className="mb-4 text-6xl font-semibold text-error-error">500</h1>
        <p className="mb-4 text-lg text-gray-700">Oops! Communication error</p>
        <span className="mb-4 text-lg text-error-error">({error})</span>

        <span
          onClick={() => reset()}
          className="text-primary-100 cursor-pointer underline "
        >
          Reset again
        </span>
      </div>
    </Container>
  );
}

export default ErrorServerPage;
