import PropTypes from 'prop-types';
import moment from 'moment';
const LeftBottomContent = ({img}) => {
    return (
        <div className='mt-8 space-y-3'>
            <img src={img} alt="" />
            <h4>Bayern Slams Authorities Over Flight Delay to Club World Cup</h4>
            <div className='flex items-center gap-6'>
                <span>Sports</span>
                <span className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24"      height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75" stroke="#9F9F9F" />
                </svg>
                <h4>{moment().format(" MMMM D YYYY")}</h4>
            </span>
            </div>
        </div>
    );
};

LeftBottomContent.propTypes = {
    img: PropTypes.node,
}

export default LeftBottomContent;