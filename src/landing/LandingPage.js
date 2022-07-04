import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

const theNameOfTheBook = {
    title: "The cover of 'The Name of the Book'",
    img: "assets/theNameOfTheBook.jpg"
}

const calamitousFortunes = {
    title: "The cover of 'Calamitous Fortunes'",
    img: "assets/calamitousFortunes.jpg"
}

const saskiasNever = {
    title: "The cover of 'Saskia's Never'",
    img: "assets/saskiasNever.jpg",
    description: `
        William's second novel is a roller coaster ride of <b>sex and murder and rock
         'n roll</b>. <b>Saskia's Never<b> is Romance meets Dexter meets Quentin
          Tarantino. A delightfully engaging Love Story, that is not afraid to tackle
          deep philosophical issues while getting a little blood on its hands, perhaps
          allll the way up to the elbows. Did I mention it's funny? Meet Gando
        `
}

const images = [calamitousFortunes, saskiasNever, theNameOfTheBook];

export default function LandingPage() {
    return (
    <div className="gallery">
      <ImageList cols={3} gap={8}>
         {images.map(function(item, i) {
           return <ImageListItem key={i}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar position="below" title={item.description} />
          </ImageListItem>
        })}
      </ImageList>
        </div>
  );
}
