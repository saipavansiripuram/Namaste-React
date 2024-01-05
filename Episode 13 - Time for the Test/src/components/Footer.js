
const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer footer-center  w-full p-3 h-24 bg-pink-100  text-black-900 flex justify-center items-center">
      <aside  className="text-center ">
        Copyright &copy; {currYear}, Made with 🤍 by <strong>Sai</strong>
      </aside>
      
  
    </footer>
    
  );
};

export default Footer;