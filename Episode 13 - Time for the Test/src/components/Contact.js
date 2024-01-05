
const Contact = ()=>{
    return (
        <div>
          <h1 className="font-bold text-3xl p-4 m-4">Contact</h1>
            <form className="flex flex-col items-center">
                <label >Name</label>
                <input type="text" className="border-black p-2 m-2" placeholder="Name" />
                <label>Message</label>
                <input type="text" className="border-black p-2 m-2" placeholder="message" />
                <button type="submit" className="border-black p-2 m-2 text-white bg-black rounded-lg">Submit</button>
                </form>  
        </div>
    )   
};

export default Contact;
