import '../styles/loader.css';

const Loader = () => {
  return (
    <div>
      <div style={{
            borderTop:'2px solid',
            borderBottom:'2px solid',
            borderColor:'red',
            width:'30px',
            height:'30px',
            borderRadius:'50%',
            animation: 'rotate 1s linear infinite'
        }}>

        </div>
    </div>
  );
}

export default Loader;