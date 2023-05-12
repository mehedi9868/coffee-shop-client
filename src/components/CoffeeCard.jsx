import PropTypes from 'prop-types';

const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, photo } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl p-6">
            <div className='w-full flex justify-between items-center'>
                <figure><img src={photo} alt="Movie" /></figure>
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Chef: {chef}</p>
                    <p>Taste: {taste}</p>
                    <p>Taste: {supplier}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical">
                        <button className="btn">View</button>
                        <button className="btn">Edit</button>
                        <button className="btn bg-red-800 hover:bg-red-700">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// eslintrc error
CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
};

export default CoffeeCard;