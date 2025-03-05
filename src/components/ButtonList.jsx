import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Cricket",
  "News",
  "Cooking",
  "hj",
  "mndm",
  "dmnmm",
  "nnbnbs",
  "yghbn",
  "bdnsbndsb",
  "nsbnbsbn",
  "smnmmn",
  "hgbnjhdjnbs"
];

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
