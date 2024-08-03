import Avatar from '@mui/material/Avatar';
import ReactStars from "react-rating-stars-component";
import { Box } from "@mui/material";

const CustomersFeedback = () => {
    const data = [
        {
            id: 1,
            imgurl: 'https://slco.org/globalassets/1-site-files/mayor/headshot/jenny-wilson-headshot.jpg?quality=90&center=0.3,0.51&width=336&mode=crop&heightratio=0.9411764705882353',
            name: 'Jenny Wilson',
            rating: 4,
            description: 'The food was excellent and so was the service.I had the mushroom risotto with scallops which was awesome.I had a burger over greens which was also very good.They were very conscentious about glutten allergies'
        },
        {
            id: 2,
            imgurl: 'https://englishstudio.education/wp-content/uploads/2022/03/20.jpg',
            name: 'Dianne Rusell',
            rating: 5,
            description: 'We enjoyed the Eggs benedict served on homemade focaccia bread and hot coffee.Perfect Service'
        },
        {
            id: 3,
            imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKjEbEDxXYsxpnU-MgMHDfRnGpt-OhIr7rQ&s',
            name: 'Devon Lane',
            rating: 4,
            description: 'The food was excellent and so was the service.I had the mushroom risotto with scallops which was awesome.I had a burger over greens which was also very good.They were very conscentious about glutten allergies'
        },
    ]
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <h1>Customer's Feedback</h1>
            {data.map((item) => (
                <Box margin={0} padding={1} fontSize={0}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3,paddingBottom:0 }}>
                        <Avatar src={item.imgurl} sx={{ width: 42, height: 42 }} />
                        <h2 style={{fontSize:'14px'}}>{item.name}</h2>
                    </Box>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        value={item.rating}
                        size={24}
                        activeColor="#ffd700"
                        color='white'
                    />
                    <p style={{fontSize:'14px'}}>
                        {item.description}
                    </p>
                    <hr/>
                </Box>
            ))}
        </>
    );
}

export default CustomersFeedback;