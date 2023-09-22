interface Props {
  score: number;
}

const Score = ({ score }: Props) => {
  let color = score > 60 ? "text-green-500" : "text-red-500";
  let borderColor = score > 60 ? "border-green-500" : "border-red-500";
  return (
    <div
      className={
        "border px-2 py-[1px] rounded boreder " + color + " " + borderColor
      }
    >
      {score}
    </div>
  );
};

export default Score;
