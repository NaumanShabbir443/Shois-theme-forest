import { useState } from "react"
import "../Scss/_AddData.scss"
import axios from "axios";

interface StateType {
  title: string;
  detail: string;
  price: string;
  file: File | null;
}


const initState: StateType = { title: "", detail: "", price: "", file: null }
export default function AddData() {
  const [state, setState] = useState(initState)
  const handleChange = (event: any) => {
    const { name, value, type, files } = event.target
    if (type === "file") {
      setState((prevState) => ({ ...prevState, [name]: files[0] }))

    } else {
      setState((prevState) => ({ ...prevState, [name]: value }))
    }

  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(state.file?.name)
    await axios.post('http://localhost:7000/users', state)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error, "sasasa");
      })
  };
  return (
    <>
      <div className="container mt-5 Add-data">
        <div className="row justify-content-center">
          <h1 className="mt-5 text-center" >Add Custom Data</h1>
          <div className="card ">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Shoe Title</label>
                  <input type="text" name="title" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Shoe Details</label>
                  <textarea className="form-control" name="detail" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Prices</label>
                  <input type="number" name="price" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3 mt-4" >
                  <label className="form-label fw-bold">Please Select a Picture of shoe</label>
                  <input className="form-control" name="file" type="file" id="formFile" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

