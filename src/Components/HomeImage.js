import Carousel from 'react-bootstrap/Carousel';

function HomeImage() {
  return (
    <Carousel className="image--home">
      <Carousel.Item>
        <img src={require('./Images/closet1.jpeg')} alt="Image 1" height={400} width={500} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={require('./Images/closet2.jpeg')} alt="Image 2" height={400} width={500}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={require('./Images/closet3.jpeg')} alt="Image 3" height={400} width={500}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeImage;