export default function Author({ name, image, position }) {
  return (
    <div className="mb-10 flex">
      <img
        src={image}
        alt=""
        className="mr-4 h-[64px] w-[64px] rounded-[20px]"
      />
      <div>
        <div className="mb-2 text-body-heading-m">{name}</div>
        <div className="text-body-s">{position}</div>
      </div>
    </div>
  );
}
