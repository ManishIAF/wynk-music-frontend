import convertString from "../helper/convertString";

const songData = [
    {
        id:1,
        img:"https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65643538a857175c63d3ffd6/BANNER_501278966452056.png",
        uri:`playlist/${convertString("Best of 2023 Hindi")}/65b4fc6361bbc3315b784354`
    }
    ,
    {
        id:2,
        uri:`package/${convertString("Best of 2023 English")}/65d13325b341f395db5ba55b`,
        Banner : 'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/653bf38aaff7ad5f0338c27e/COLLECTION_110245160953084.png'
    },
    {
        id:3,
        img:"https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/656439adb62edd2e826f07e8/BANNER_6151702597242.png",
        uri:`artist/${convertString("Arijit Singh")}`
    },
    {
        id:4,
        img:"https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1701162881594-Romantic-Hits-Hindi-Feature-1_(1).png",
        uri:`playlist/${convertString("Romantic Hits 2023 Hindi")}/65b4fdcfa4175fa7fad6cd26`
    },
    {
        id:5,
        img:"https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1701337759947-Animal-1440x502.png",
        uri:`album/${convertString("album")}/65cf429e7ed22ef6571b49a8`,
    },
    {
        id:6,
        img:"https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1702291404937-SamBahadur-Full-Album-FeaturedBanner.jpg",
        uri:`album/${convertString("album")}/65cf429e7ed22ef6571b49aa`,
    },
    {
        id:7,
        img:"https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1702034516678-Archies-Full-FB.jpg",
        path:"albums/The Archies (Original Motion Picture Soundtrack)",
        uri:`album/${convertString("album")}/65cf429e7ed22ef6571b49ab`,
        language:"Hindi"
    },
    
]

export default songData;
