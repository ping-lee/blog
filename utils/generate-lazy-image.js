import got from 'got'
import sharp from 'sharp'

sharp.cache(false);
async function generateLazyImage(src) {
  const { body } = await got(`http://localhost:81/${src}`, { responseType: 'buffer' });
  const sharpImage = sharp(body);
  const { width, height, format } = await sharpImage.metadata();
  
  const lqipBuf = await sharpImage
    .resize({ width: 30, height: 30, fit: 'inside' })
    .toBuffer();
  return {
    src,
    aspectRatio: width / height,
    lqip: `data:image/${format};base64,${lqipBuf.toString('base64')}`,
  };
}

export default generateLazyImage