import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        //used to display the loader when the api is fetching data
        <div className='app'>
            <Loader
            type="TailSpin"
            color="rgb(155, 236, 34)"
            height={300}
            width={300}
            timeout={3000}
            />
       </div>
    );
}
export default LoaderComp
