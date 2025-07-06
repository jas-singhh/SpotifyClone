import { useNavigate } from "react-router-dom";

const AlbumItem = ({ id, name, image, desc }) => {
  const navigate = useNavigate();

  return (
    <div className="min-w-[180px] py-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]" onClick={() => navigate(`/album/${id}`)}>
      <img src={image} className="rounded" alt="album image" />
      <p>{name}</p>
      <p>{desc}</p>
    </div>
  );
};

export default AlbumItem;
