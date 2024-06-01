import ImageGallery         from "react-image-gallery";
import styled,{useTheme }   from "styled-components";


const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    thumbnailClass:"thumbnailClass"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    thumbnailClass:"thumbnailClass"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    thumbnailClass:"thumbnailClass"
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    thumbnailClass:"thumbnailClass"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    thumbnailClass:"thumbnailClass"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    thumbnailClass:"thumbnailClass"
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    thumbnailClass:"thumbnailClass"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    thumbnailClass:"thumbnailClass"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    thumbnailClass:"thumbnailClass"
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    thumbnailClass:"thumbnailClass"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    thumbnailClass:"thumbnailClass"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
    thumbnailClass:"thumbnailClass"
  },
  
];


const Container = styled.div`${({theme}) => `
    .thumbnailClass {
        width:auto;
        border-radius:12px;
        img {
            border-radius:8px;
        }
    }
    .image-gallery {
        border-radius: 12px;
        border: 1px solid var(--Grey-15, #262626);
        background: var(--Grey-10, #1A1A1A);
        padding: 50px;
    }
    .image-gallery-thumbnails {
        border-radius: 12px;
        border: 1px solid var(--Grey-15, #262626);
        background: var(--Grey-08, #141414);
        padding: 20px;
        margin-bottom:10px;
        overflow-x: auto;
        // scrollbar-color: red orange;
    }
`}`;


const Galary = () => {
    return <Container className="">
        <ImageGallery 
            items={images} 
            showPlayButton={false}
            showFullscreenButton={false}
            showIndex={false}
            startIndex={1}
            showThumbnails={true}
            thumbnailPosition="top"
        />
    </Container>
  
}

export default Galary
