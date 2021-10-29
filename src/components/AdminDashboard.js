
import React,{useEffect,useState} from "react";
import Table from 'react-bootstrap/Table'

const AdminDashboard=()=>{
    const [lists, setLists] = useState([]);

//   const Ngo_id = getId();
  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = "https://capstoneeee.herokuapp.com/api/order";
        const res = await fetch(requestUrl);
        const resJson = await res.json();
        setLists(resJson.data);
        console.log(res)
          console.table(lists)
          console.log(lists)
        //alert(JSON.stringify(res.data));
      } catch (err) {
        console.log(JSON.stringify(err));
        //alert(err);
      }
    }
    fetchData();
  }, []);
   
   //item.orderedBy.username
   //item.
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Ordered By</th>
              <th>Ordered Items</th>
              <th>Contact No</th>
              <th>Address</th>
              <th>Status</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((item, index) => (
               
              <tr>
                <td>{index + 1}</td>
                <td>{item.orderedBy.username}</td>
                <td>{item.orderItems.length}</td>
                <td>{item.orderedBy.mobile}</td>
                <td>{item.orderedBy.address} </td>
                <td>{item.status}</td>
                <td>{item.addedAt .substring(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
}

export default AdminDashboard;