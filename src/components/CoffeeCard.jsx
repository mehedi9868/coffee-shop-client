/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, taste, photo } = coffee;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coffee => coffee._id !== id);
                            setCoffees(remaining);
                        }
                    })
            }
        })
    }
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
                        <Link to={`update-coffee/${_id}`} className="btn">
                            Edit
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-800 hover:bg-red-700">Delete</button>
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