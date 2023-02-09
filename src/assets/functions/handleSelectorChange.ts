import Data from '../interfaces/Data';

type Props = {
  e: React.MouseEvent<HTMLDivElement, MouseEvent>;
  setSelector: React.Dispatch<React.SetStateAction<string>>;
  data: Data[];
  SelectorsRef: React.RefObject<HTMLDivElement>;
};

export default ({ e, setSelector, data, SelectorsRef }: Props) => {
  const ele = e.target as HTMLElement;
  setSelector(ele.innerText);
  const findEle = data.find((el) => el.id === ele.id);
  console.log(findEle);
  SelectorsRef.current?.classList.add('hidden');
};
