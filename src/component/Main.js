import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import {Image} from 'antd';
import { useQuery } from 'react-query';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutPage.css'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import { PoweroffOutlined } from '@ant-design/icons';
// import { Button, Space } from 'antd';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      // offset: 200, // offset (in px) from the top of the screen when animation starts
    });
  }, []);
  // button style -----------------------------------------
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  const { isLoading, error, data } = useQuery('houserent', () =>
  fetch('http://127.0.0.1:8000/house/').then((res) =>
    res.json()
  )
);

if (isLoading) return <div>Loading...</div>;

if (error) return <div>Error fetching data</div>;
  const content=()=>{
    alert("hi")
}
  return (
    <div >
      {data.map(item => (
        
            <Card sx={{ maxWidth: 345 }} key={item.id} id="hp" data-aos="fade-right">
            {/* <img src={`${item.image}`} alt="no image" /> */}
            <CardActionArea>
              <Image src={`${item.image}`} style={{width:'250px',height:'140px'}}/>
              <CardContent onClick={() => alert("WELCOME TO MAISON!!")}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   BHK:{item.bhk}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   SqareFeet:{item.sf}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   price:{item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   House-Type:{item.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Furniture_Status:{item.furn_status}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   age_of_property:{item.age_of_prop}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Type_of_Properties:{item.ty_of_prop}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

      ))}
                  {/* <button onClick={logout} className="logout">LogOut</button> */}
                  {/* <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => enterLoading(1)}>Click me!</Button> */}

    </div>
  );
}

export default App;
