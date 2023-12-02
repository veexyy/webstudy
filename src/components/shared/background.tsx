export default function Background() {
  const arr: number[] = [
    0, 1, 10, 100, 11, 111, 1000, 1001, 1111, 11111, 10000, 10001, 11111,
    111111, 100001,
  ];
  function shuffleArray(arr: number[]) {
    for (let i = 0; i < 5000; i++) {
      arr.push(arr[i % arr.length]);
    }
  }
  shuffleArray(arr);
  return (
    <div className="font-akony font-bold text-white select-none h-full w-[110%] fixed bg-black top-0 opacity-5 break-words">
      {arr.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  );
}
