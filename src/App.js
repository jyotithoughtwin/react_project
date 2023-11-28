import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: ''
  });
  const [Inputs, setInputs] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs([...Inputs, formData])
    setFormData({
      name: '',
      age: '',
      mobile: ''
    })
  }
  const deleteByValue = value => {
    setInputs(oldValues => {
      return oldValues.filter(fruit => fruit !== value)
    })
  }
  const handleEdit = value => {
    console.log(value, "edit value")
    setFormData({
      name: value.name,
      age: value.age,
      mobile: value.mobile
    })
  }
  return (
    <div className='main'>
      <div className='left'>
        <form onSubmit={handleSubmit} method='POST'>
          <label>
            Name:
            <input type="text" placeholder='enter name' name="name" value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          </label><br />
          <label>
            Age:
            <input type="number" placeholder='enter age' name="age" value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })} required />
          </label><br />
          <label>
            Mobile:
            <input type="text" placeholder='enter mobile' name="mobile" value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required />
          </label><br />
          <input type="submit" value="submit" />

        </form>
      </div>
      <div className='right'>

        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
          {
            Inputs && Inputs.map((input) => {
              return (
                <tr>
                  <td>{input.name}</td>
                  <td>{input.age}</td>
                  <td>{input.mobile}</td>
                  <td> <button onClick={() => handleEdit(input)}>Edit</button> <button onClick={() => deleteByValue(input)}>Delete</button></td>
                </tr>
              )
            })
          }
        </table>

      </div>
    </div>
  )
}
export default App;
