type Tbutton = {
  text: string;
  color: string;
};

export default function Button({ text, color }: Tbutton) {
  return (
    <button
      className="w-full text-center rounded-xl "
      style={{ background: `var(${color})`, padding: "10px" }}
    >
      {text}
    </button>
  );
}
