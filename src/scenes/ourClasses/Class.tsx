type Props = {
  name: string;
  description?: string;
  image: string;
};

const overlayStyles = `p-5 absolute z-30 flex  h-full w-full  flex-col items-center justify-center whitespace-normal bg-purple-darker text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

const Class = ({ name, description, image }: Props) => {
  return (
    <>
      <div className={overlayStyles}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <img className="object-cover" src={`${image}`} alt={image} />
    </>
  );
};

export default Class;
