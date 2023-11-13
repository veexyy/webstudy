type LoginInputType = {
  placeholder: string;
};
export function LoginInput({ placeholder }: LoginInputType) {
  return (
    <>
      <input
        className="bg-white rounded-xl p-3 ring-2 ring-blue-600 focus:outline-none"
        placeholder={placeholder}
        type="text"
      />
    </>
  );
}
