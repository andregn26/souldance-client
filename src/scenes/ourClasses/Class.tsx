type Props = {
  name: string;
  description?: string;
  image: string;
};

const overlayStyles = `p-5 absolute z-30 flex  h-full w-screen xs:w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

const Class = ({ name, description, image }: Props) => {
  return (
    <li className="mx relative ml-5 inline-block h-full w-screen whitespace-normal first:ml-0 xs:w-[450px]">
      <div className={overlayStyles}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <img className="object-cover" src={`${image}`} alt={image} />
    </li>
  );
};

export default Class;
