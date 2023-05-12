import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, chef, supplier, taste, category, details, photo }
        // send to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Coffee updated successfully!',
                    })
                }
            })

    }
    return (
        <div className='bg-[#F4F3F0] p-20'>
            <h2 className='text-2xl text-center font-bold'>Add a coffee</h2>
            <form onSubmit={handleSubmit}>
                <div className='flex gap-10 mb-5'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter coffee name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="chef" placeholder="Enter coffee chef" defaultValue={chef} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='flex gap-10 mb-5'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Suppliar</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" defaultValue={supplier} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Enter coffee taste" defaultValue={taste} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='flex gap-10 mb-5'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Enter coffee category" defaultValue={category} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Enter coffee details" defaultValue={details} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="w-full mb-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter photo URL" defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <label>
                    <input type="submit" value="Update Coffee" className="btn btn-block" />
                </label>
            </form>
        </div>
    );
};

export default UpdateCoffee;