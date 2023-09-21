interface Props {
  score: number;
}

const Score = ({ score }: Props) => {
  let color = score > 60 ? "green" : "red";
  return (
    <div
      className={`text-${color}-500 border-${color}-500 border px-2 py-[1px] rounded`}
    >
      {score}
    </div>
  );
};

export default Score;
