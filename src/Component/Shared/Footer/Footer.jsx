import Description from "../../UI/Description";
import Heading from "../../UI/Heading";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-blue-600 border-t border-white/[.5] pt-10 pb-1 text-white">
      <div className="flex justify-center items-center gap-2">
        <img src="/logo.png" alt="" className="h-12" />
        <Heading>Foodies</Heading>
      </div>
      <Description>123 Main Street, Dhaka, Bangladesh</Description>
      <div className="flex justify-center items-center gap-2 text-3xl pb-10">
        <AiFillFacebook className="text-3xl cursor-pointer" />
        <AiFillInstagram className="text-3xl cursor-pointer" />
        <AiFillTwitterSquare className="text-3xl cursor-pointer" />
        <AiFillLinkedin className="text-3xl cursor-pointer" />
      </div>
      <hr />
      <Description>&copy; 2021 Foodies ltd. All rights reserved.</Description>
    </footer>
  );
};

export default Footer;
