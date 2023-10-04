import moment from 'moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='py-10'>
            <div className='flex justify-center mb-3'>
                <img src={logo} alt="" />
            </div>
            <div className='text-center space-y-2'>
                <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
                <h5 className='text-xl'>{moment().format("dddd, MMMM Do YYYY")}</h5>
            </div>
        </div>
    );
};

export default Header;