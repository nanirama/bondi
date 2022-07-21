import Image from 'next/image'

const cloudflareImageLoader = (props) => {
  let { src, width, height, quality } = props
  if (!quality) { 
    quality = 75
  }
  if (!height) { 
    height = 100
  }
  return `https://images.trady.workers.dev/?width=${width}&height=${height}&quality=${quality}&image=${src}`
}

export default function ImgLoader(props) {
  if (process.env.NODE_ENV === 'development') {
    return <Image {...props} loader={cloudflareImageLoader} width={props.width} height={props.height} itemProp="image" alt={props.alt ? props.alt : 'Tott'} />
  } else {
    return <Image {...props} loader={cloudflareImageLoader} width={props.width} height={props.height} itemProp="image" alt={props.alt ? props.alt : 'Tott'} />
  }
}

// export default function ImgLoader(props) {
//   return <Image unoptimized={true} {...props} width={props.width} height={props.height} itemProp="image" alt={props.alt ? props.alt : 'Tott'} />
// }